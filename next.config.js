import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    swcMinify: true,
    serverComponentsExternalPackages: ['oslo'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

const withMdx = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkMdx, remarkGfm],
  },
});

export default withMdx(config);
