import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import { IThemeColor } from '@/types/IThemeColor';

const twMerge = extendTailwindMerge({ prefix: 'ikui-' });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function themeColorsToCssVariables(colors: IThemeColor) {
  return Object.entries(colors).reduce(
    (acc, [key, value]) => {
      if (typeof value === 'string') {
        acc[`--ikui-${key}`] = value;
      }

      if (typeof value === 'object') {
        acc[`--ikui-${key}`] = value.DEFAULT;
        acc[`--ikui-${key}-foreground`] = value.foreground;
      }

      return acc;
    },
    {} as Record<string, string>,
  );
}
