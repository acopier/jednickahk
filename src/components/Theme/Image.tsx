import Image, { getImageProps } from 'next/image';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function ThemeImage({ src, alt, width, height }: Props) {
  const common = { alt: alt, width: width, height: height };
  const {
    props: { srcSet: dark },
  } = getImageProps({ ...common, src: `${src}-light.png` });
  const {
    props: { srcSet: light, ...rest },
  } = getImageProps({ ...common, src: `${src}-dark.png` });

  return (
    <picture>
      <source media='(prefers-color-scheme: dark)' srcSet={dark} />
      <source media='(prefers-color-scheme: light)' srcSet={light} />
      <Image {...rest} alt={alt} />
    </picture>
  );
}

export default ThemeImage;
