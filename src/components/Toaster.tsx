import { useTheme } from 'next-themes';
import { Toaster as Sonner, toast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

function Toaster({ ...props }: ToasterProps) {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="ikui-toaster ikui-group"
      toastOptions={{
        classNames: {
          toast:
            'group ikui-toast group-[.ikui-toaster]:ikui-bg-background group-[.ikui-toaster]:ikui-text-foreground group-[.ikui-toaster]:ikui-border-border group-[.ikui-toaster]:ikui-shadow-lg',
          description: 'group-[.ikui-toast]:ikui-text-muted-foreground',
          actionButton:
            'group-[.ikui-toast]:ikui-bg-primary group-[.ikui-toast]:ikui-text-primary-foreground',
          cancelButton:
            'group-[.ikui-toast]:ikui-bg-muted group-[.ikui-toast]:ikui-text-muted-foreground',
        },
      }}
      {...props}
    />
  );
}

export { Toaster, toast };
