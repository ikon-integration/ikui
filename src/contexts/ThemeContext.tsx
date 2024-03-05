import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { themeColorsToCssVariables } from '@/lib/utils';
import { IThemeColor } from '@/types/IThemeColor';

type Theme = 'dark' | 'light' | 'system';

interface IThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext({} as IThemeContextValue);

export interface IThemeColors {
  light?: IThemeColor;
  dark?: IThemeColor;
}

interface IThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  colors?: IThemeColors;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = '@ikui:theme',
  colors,
  ...props
}: IThemeProviderProps) {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  useEffect(() => {
    if (!colors) {
      return;
    }

    let currentTheme = selectedTheme;
    const root = document.documentElement;

    if (selectedTheme === 'system') {
      currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    const cssVariables = themeColorsToCssVariables(
      (currentTheme === 'dark' ? colors.dark : colors.light) ?? {},
    );

    Object.entries(cssVariables).forEach(([variable, value]) => {
      if (value !== undefined) {
        root.style.setProperty(variable, value);
      }
    });
  }, [colors, selectedTheme]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (selectedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(selectedTheme);
  }, [selectedTheme]);

  const setTheme = useCallback(
    (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setSelectedTheme(theme);
    },
    [setSelectedTheme, storageKey],
  );

  const value = useMemo<IThemeContextValue>(
    () => ({
      theme: selectedTheme,
      setTheme,
    }),
    [setTheme, selectedTheme],
  );

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
}
