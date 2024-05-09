import React, { Children, useId } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn, getNestedAttributeInFieldName } from '@/lib/utils';

import { Label } from '../Label';

interface IFormGroupProps {
  children: React.ReactNode;
  label?: React.ReactNode;
  description?: string;
  error?: string;
  className?: string;
}

export function FormGroup({
  children,
  label,
  description,
  error,
  className,
}: IFormGroupProps) {
  const {
    formState: { errors },
  } = useFormContext();
  const field = Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    return {
      name: child.props.name,
      id: child.props.id,
    };
  })?.filter(Boolean)[0];

  if (!field) {
    throw new Error('Cannot find any Form element inside the Form.Group');
  }

  const randomId = useId();
  const id = field.id ?? randomId;

  const fieldErrors = getNestedAttributeInFieldName(errors, field.name);

  let errorMessage = error ?? (fieldErrors?.message as string | undefined);

  if (
    !fieldErrors?.message &&
    typeof fieldErrors === 'object' &&
    Object.keys(fieldErrors).length > 0
  ) {
    errorMessage = Object.values(fieldErrors)
      .map(error => error.message)
      .join(', ');
  }

  const hasError = !!errorMessage;

  return (
    <div className={cn('ikui-space-y-2', className)}>
      {label && (
        <Label htmlFor={id} className={cn(hasError && 'ikui-text-destructive')}>
          {label}
        </Label>
      )}

      <div>
        {Children.map(children, child => {
          if (!React.isValidElement(child)) {
            return child;
          }

          return React.cloneElement<any>(child, { id });
        })}
      </div>

      {description && (
        <p className="ikui-text-sm ikui-text-muted-foreground">{description}</p>
      )}

      {errorMessage && (
        <p className="ikui-text-sm ikui-font-medium ikui-text-destructive">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
