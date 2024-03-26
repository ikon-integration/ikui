import { cn } from '@/lib/utils';

import { buttonVariants } from './Button';
import { Tooltip } from './Tooltip';

export interface ISidebarProps {
  isCollapsed?: boolean;
  links: {
    title: string;
    label?: string;
    icon: React.ComponentType<{ className?: string }>;
    variant: 'default' | 'ghost';
  }[];
}

export function Sidebar({ links, isCollapsed = false }: ISidebarProps) {
  return (
    <Tooltip.Provider delayDuration={0}>
      <div
        data-collapsed={isCollapsed}
        className="ikui-group ikui-flex ikui-flex-col ikui-gap-4 ikui-py-2 data-[collapsed=true]:ikui-py-2"
      >
        <nav className="ikui-grid ikui-gap-1 ikui-px-2 group-[[data-collapsed=true]]:ikui-justify-center group-[[data-collapsed=true]]:ikui-px-2">
          {links.map(link =>
            isCollapsed ? (
              <Tooltip.Root key={link.title} delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <a
                    href="/"
                    className={cn(
                      buttonVariants({ variant: link.variant, size: 'icon' }),
                      'ikui-h-9 ikui-w-9',
                      link.variant === 'default' &&
                        'dark:ikui-bg-muted dark:ikui-text-muted-foreground dark:hover:ikui-bg-muted dark:hover:ikui-text-white',
                    )}
                  >
                    <link.icon className="ikui-h-4 ikui-w-4" />
                    <span className="ikui-sr-only">{link.title}</span>
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="right"
                  className="ikui-flex ikui-items-center ikui-gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ikui-ml-auto ikui-text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </Tooltip.Content>
              </Tooltip.Root>
            ) : (
              <a
                key={link.title}
                href="/"
                className={cn(
                  buttonVariants({ variant: link.variant, size: 'sm' }),
                  link.variant === 'default' &&
                    'dark:ikui-bg-muted dark:ikui-text-white dark:hover:ikui-bg-muted dark:hover:ikui-text-white',
                  'ikui-justify-start',
                )}
              >
                <link.icon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      'ikui-ml-auto',
                      link.variant === 'default' &&
                        'ikui-text-background dark:ikui-text-white',
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </a>
            ),
          )}
        </nav>
      </div>
    </Tooltip.Provider>
  );
}
