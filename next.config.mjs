import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';

/** @type {import('next').NextConfig} */
const config = {
  webpack: (config) => {
    config.externals.push('@node-rs/argon2', '@node-rs/bcrypt');
    return config;
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMdx = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkMdx, remarkGfm],
  },
});

export default withMdx(config);
