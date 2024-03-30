import { getImageProps } from 'next/image';

export default function ThemeImage(props: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const common = { alt: props.alt, width: props.width, height: props.height };
  const {
    props: { srcSet: dark },
  } = getImageProps({ ...common, src: `${props.src}-light.png` });
  const {
    props: { srcSet: light, ...rest },
  } = getImageProps({ ...common, src: `${props.src}-dark.png` });

  return (
    <picture>
      <source media='(prefers-color-scheme: dark)' srcSet={dark} />
      <source media='(prefers-color-scheme: light)' srcSet={light} />
      <img {...rest} />
    </picture>
  );
}
