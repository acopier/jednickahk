import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <>
        <h1 className='font-skaut flex justify-center text-5xl text-center'>
          {children}
        </h1>
        <div className='divider divider-secondary' />
      </>
    ),
    h2: ({ children }) => (
      <>
        <div className='divider' />
        <h2 className='font-skaut flex justify-center text-4xl'>{children}</h2>
        <div className='divider' />
      </>
    ),
    h3: ({ children }) => (
      <>
        <div className='divider' />
        <h3 className='text-center font-skaut text-3xl'>{children}</h3>
        <div className='divider' />
      </>
    ),
    table: ({ children }) => <table className='table'>{children}</table>,
    wrapper({ children }) {
      return (
        <main className='overflow-x-auto rounded-box font-themix text-2xl leading-10 bg-base-300 p-4'>
          {children}
        </main>
      );
    },
    Image: (props) => <Image {...props} />,
    hr: () => <div className='divider' />,
    ul: ({ children }) => <ul className='list-disc list-inside'>{children}</ul>,
  };
}
