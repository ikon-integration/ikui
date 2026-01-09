import { cn } from '@/lib/utils';

export const markdownContentClasses = cn(
  'ikui-max-w-none',

  // Lists
  '[&_ul]:ikui-list-disc',
  '[&_ul]:ikui-pl-6',
  '[&_ol]:ikui-list-decimal',
  '[&_ol]:ikui-pl-6',
  '[&_li]:ikui-my-1',

  // Headings
  '[&_h1]:ikui-text-2xl [&_h1]:ikui-font-semibold [&_h1]:ikui-mb-2',
  '[&_h2]:ikui-text-xl  [&_h2]:ikui-font-semibold [&_h2]:ikui-mb-2',
  '[&_h3]:ikui-text-lg  [&_h3]:ikui-font-medium   [&_h3]:ikui-mb-1',

  // Paragraph
  '[&_p]:ikui-my-1',

  // Links
  '[&_a]:ikui-text-primary [&_a]:hover:ikui-underline',
);
