import { DropdownMenuPrimitive } from './DropdownMenuPrimitive';

export type Item = {
  key?: string;
  label?: React.ReactNode;
  type?: 'item' | 'divider';
  disabled?: boolean;
  iconLeft?: React.ComponentType<any>;
  iconRight?: React.ComponentType<any>;
  submenu?: Omit<Item, 'submenu'>[];
  onSelect?: (event: Event) => any;
  className?: string;
  hidden?: boolean;
};

export interface IDropdownProps {
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  items: Item[];
  className?: string;
  onOpenChange?(open: boolean): void;
  onChangeItem?: (value: string | number | undefined) => void;
  disabled?: boolean;
}

export function Dropdown({
  children,
  position = 'bottom',
  items,
  className,
  onOpenChange,
  onChangeItem,
  disabled,
}: IDropdownProps) {
  return (
    <DropdownMenuPrimitive.Root onOpenChange={onOpenChange}>
      <DropdownMenuPrimitive.Trigger asChild disabled={disabled}>
        {children}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={5}
          side={position}
          className={className}
          data-dropdown
        >
          {items.map(item => {
            if (item.hidden) {
              return null;
            }

            if (item.type === 'divider') {
              return <DropdownMenuPrimitive.Separator key={Math.random()} />;
            }

            if (item.submenu) {
              return (
                <DropdownMenuPrimitive.Sub>
                  <DropdownMenuPrimitive.SubTrigger className={item.className}>
                    <div className="gap-2 ikui-flex ikui-items-center">
                      {item.iconLeft && (
                        <item.iconLeft className="ikui-h-4 ikui-w-4" />
                      )}
                      {item.label}
                    </div>
                  </DropdownMenuPrimitive.SubTrigger>

                  <DropdownMenuPrimitive.Portal>
                    <DropdownMenuPrimitive.SubContent
                    // sideOffset={-4}
                    // alignOffset={-5}
                    >
                      {(item.submenu ?? []).map(subItem => {
                        if (subItem.hidden) {
                          return null;
                        }

                        if (subItem.type === 'divider') {
                          return (
                            <DropdownMenuPrimitive.Separator
                              key={Math.random()}
                            />
                          );
                        }

                        return (
                          <DropdownMenuPrimitive.Item
                            disabled={subItem.disabled}
                            className={subItem.className}
                            onSelect={event => {
                              subItem.onSelect?.(event);
                              onChangeItem?.(subItem.key);
                            }}
                          >
                            <div className="ikui-flex ikui-items-center ikui-gap-2">
                              {subItem.iconLeft && (
                                <subItem.iconLeft className="ikui-h-4 ikui-w-4" />
                              )}
                              {subItem.label}
                            </div>

                            {subItem.iconRight && (
                              <subItem.iconRight className="ikui-h-4 ikui-w-4" />
                            )}
                          </DropdownMenuPrimitive.Item>
                        );
                      })}
                    </DropdownMenuPrimitive.SubContent>
                  </DropdownMenuPrimitive.Portal>
                </DropdownMenuPrimitive.Sub>
              );
            }

            return (
              <DropdownMenuPrimitive.Item
                disabled={item.disabled}
                className={item.className}
                onSelect={event => {
                  item.onSelect?.(event);
                  onChangeItem?.(item.key);
                }}
              >
                <div className="ikui-flex ikui-items-center ikui-gap-2">
                  {item.iconLeft && (
                    <item.iconLeft className="ikui-h-4 ikui-w-4" />
                  )}
                  {item.label}
                </div>

                {item.iconRight && (
                  <item.iconRight className="ikui-ml-auto ikui-h-4 ikui-w-4" />
                )}
              </DropdownMenuPrimitive.Item>
            );
          })}

          <DropdownMenuPrimitive.Arrow className="ikui-fill-background" />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}
