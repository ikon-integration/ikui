/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from 'tailwindcss';
import twAnimate from 'tailwindcss-animate';

import { ikuiTwPlugin } from './src/lib/ikuiTwPlugin';

const contentByEnv = {
  production: ['./src/**/*.{ts,tsx}', '!./src/**/*.stories.{ts,tsx}'],
  development: ['./src/**/*.{ts,tsx}'],
};

const content =
  contentByEnv[process.env.NODE_ENV || 'development'] ??
  contentByEnv.development;

export default {
  prefix: 'ikui-',
  content,
  plugins: [ikuiTwPlugin, twAnimate],
} satisfies Config;
