import { readFile } from 'fs/promises';

async function readSvg(src: string) {
  try {
    const file = await readFile(process.cwd() + `/public/${src}.svg`, 'utf-8');
    return file.slice(0, -1);
  } catch {
    return;
  }
}

async function Svg(props: { asset: string }) {
  const svg = (await readSvg(props.asset)) as TrustedHTML;

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default Svg;
