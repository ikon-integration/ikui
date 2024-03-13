/* eslint-disable import/no-extraneous-dependencies */
import plugin from 'tailwindcss/plugin';

export const ikuiTwPlugin = plugin(
  () => {
    //
  },
  {
    darkMode: ['class'],
    theme: {
      extend: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
        },
        colors: {
          border: 'hsl(var(--ikui-border))',
          input: 'hsl(var(--ikui-input))',
          ring: 'hsl(var(--ikui-ring))',
          background: 'hsl(var(--ikui-background))',
          foreground: 'hsl(var(--ikui-foreground))',
          primary: {
            DEFAULT: 'hsl(var(--ikui-primary))',
            foreground: 'hsl(var(--ikui-primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--ikui-secondary))',
            foreground: 'hsl(var(--ikui-secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--ikui-destructive))',
            foreground: 'hsl(var(--ikui-destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--ikui-muted))',
            foreground: 'hsl(var(--ikui-muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--ikui-accent))',
            foreground: 'hsl(var(--ikui-accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--ikui-popover))',
            foreground: 'hsl(var(--ikui-popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--ikui-card))',
            foreground: 'hsl(var(--ikui-card-foreground))',
          },
        },
        borderRadius: {
          lg: 'var(--ikui-radius)',
          md: 'calc(var(--ikui-radius) - 2px)',
          sm: 'calc(var(--ikui-radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
  },
);
