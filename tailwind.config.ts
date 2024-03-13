/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from 'tailwindcss';
import twAnimate from 'tailwindcss-animate';

import { ikuiTwPlugin } from './src/lib/ikuiTwPlugin';

export default {
  prefix: 'ikui-',
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [ikuiTwPlugin, twAnimate],
} satisfies Config;
