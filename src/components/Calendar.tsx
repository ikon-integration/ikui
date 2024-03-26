import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';

import { buttonVariants } from './Button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('ikui-p-3', className)}
      classNames={{
        months:
          'ikui-flex ikui-flex-col sm:ikui-flex-row ikui-space-y-4 sm:ikui-space-x-4 sm:ikui-space-y-0',
        month: 'ikui-space-y-4',
        caption:
          'ikui-flex ikui-justify-center ikui-pt-1 ikui-relative ikui-items-center',
        caption_label:
          'ikui-text-sm ikui-font-medium ikui-relative ikui-z-[10]',
        nav: 'ikui-space-x-1 ikui-flex ikui-items-center ikui-absolute ikui-inset-0 ikui-flex ikui-items-center ikui-justify-between',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'ikui-h-7 ikui-w-7 ikui-bg-transparent ikui-p-0 ikui-opacity-50 hover:ikui-opacity-100',
        ),
        table: 'ikui-w-full ikui-border-collapse ikui-space-y-1',
        head_row: 'ikui-flex',
        head_cell:
          'ikui-text-muted-foreground ikui-rounded-md ikui-w-9 ikui-font-normal ikui-text-[0.8rem]',
        row: 'ikui-flex ikui-w-full ikui-mt-2',
        cell: 'ikui-h-9 ikui-w-9 ikui-text-center ikui-text-sm ikui-p-0 ikui-relative [&:has([aria-selected].day-range-end)]:ikui-rounded-r-md [&:has([aria-selected].day-outside)]:ikui-bg-accent/50 [&:has([aria-selected])]:ikui-bg-accent first:[&:has([aria-selected])]:ikui-rounded-l-md last:[&:has([aria-selected])]:ikui-rounded-r-md focus-within:ikui-relative focus-within:ikui-z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'ikui-h-9 ikui-w-9 ikui-p-0 ikui-font-normal aria-selected:ikui-opacity-100',
        ),
        day_range_end: 'ikui-day-range-end',
        day_selected:
          'ikui-bg-primary ikui-text-primary-foreground hover:ikui-bg-primary hover:ikui-text-primary-foreground focus:ikui-bg-primary focus:ikui-text-primary-foreground',
        day_today: 'ikui-bg-accent ikui-text-accent-foreground',
        day_outside:
          'ikui-day-outside ikui-text-muted-foreground ikui-opacity-50 aria-selected:ikui-bg-accent/50 aria-selected:ikui-text-muted-foreground aria-selected:ikui-opacity-30',
        day_disabled: 'ikui-text-muted-foreground ikui-opacity-50',
        day_range_middle:
          'aria-selected:ikui-bg-accent aria-selected:ikui-text-accent-foreground',
        day_hidden: 'ikui-invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="ikui-h-4 ikui-w-4" />,
        IconRight: () => <ChevronRight className="ikui-h-4 ikui-w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
