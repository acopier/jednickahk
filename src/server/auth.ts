import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { Argon2id } from 'oslo/password';
import { sessionTable, userTable } from '@/server/db/schema';
import { Session, User, generateId } from 'lucia';
import { eq } from 'drizzle-orm';
import { cache } from 'react';
import { Lucia } from 'lucia';
import { DrizzleMySQLAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from '@/server/db';

const adapter = new DrizzleMySQLAdapter(db, sessionTable, userTable);
export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: true,
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      username: attributes.username,
    };
  },
});

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  username: string;
}

interface ActionResult {
  error: string;
}

export async function signup(formData: FormData): Promise<ActionResult> {
  'use server';
  const username = formData.get('username');
  // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
  // keep in mind some database (e.g. mysql) are case insensitive
  if (
    typeof username !== 'string' ||
    username.length < 3 ||
    username.length > 16 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return {
      error: 'Invalid username',
    };
  }
  const password = formData.get('password');
  if (
    typeof password !== 'string' ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: 'Invalid password',
    };
  }

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateId(15);

  // TODO: check if username is already used
  await db.insert(userTable).values({
    id: userId,
    username: username,
    passwordHash: hashedPassword,
  });

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect('/ucet');
}

export async function login(formData: FormData): Promise<ActionResult> {
  'use server';
  const username = formData.get('username');
  if (
    typeof username !== 'string' ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return {
      error: 'Invalid username',
    };
  }
  const password = formData.get('password');
  if (
    typeof password !== 'string' ||
    password.length < 6 ||
    password.length > 255
  ) {
    return {
      error: 'Invalid password',
    };
  }

  const existingUser = await db
    .select()
    .from(userTable)
    .where(eq(userTable.username, username.toLowerCase()));
  if (!existingUser) {
    // NOTE:
    // Returning immediately allows malicious actors to figure out valid usernames from response times,
    // allowing them to only focus on guessing passwords in brute-force attacks.
    // As a preventive measure, you may want to hash passwords even for invalid usernames.
    // However, valid usernames can be already be revealed with the signup page among other methods.
    // It will also be much more resource intensive.
    // Since protecting against this is non-trivial,
    // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
    // If usernames are public, you may outright tell the user that the username is invalid.
    return {
      error: 'Incorrect username or password',
    };
  }

  const validPassword = await new Argon2id().verify(
    existingUser[0].passwordHash,
    password
  );
  if (!validPassword) {
    return {
      error: 'Incorrect username or password',
    };
  }

  const session = await lucia.createSession(existingUser[0].id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect('/ucet');
}

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const result = await lucia.validateSession(sessionId);
    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
    } catch {}
    return result;
  }
);

export async function logout(): Promise<ActionResult> {
  'use server';
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect('/login');
}
