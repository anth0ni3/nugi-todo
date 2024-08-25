import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';

import {cn} from '~/utils/cn';

import {Loader, LoaderSizeTypes} from './loader';

const buttonVariants = cva(
  'button',

  {
    variants: {
      variant: {
        primary: 'button-primary',
        destructive: 'button-danger',
        outline: 'button-outline',
        secondary: 'button-outline',
        inactive: 'button-inactive',
        ghost: 'button-ghost',
        link: 'button-link',
      },
      size: {
        md: 'button-md',
        sm: 'button-sm',
        xs: 'button-xs',
        lg: 'button-lg',
        icon: 'size-8',
        xl: 'px-5 h-12 leading-10',
      },
      icon: {
        true: 'aspect-square w-auto p-0',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
      icon: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      asChild = false,
      isLoading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({variant, size, icon, className}))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <>
            {/* trick to have exact button width when button is loading */}
            <span className="invisible opacity-0">{children}</span>
            <span
              className={cn(
                'absolute inset-0 flex h-full w-full items-center justify-center'
              )}
            >
              <Loader size={size as LoaderSizeTypes} className="scale-75" />
            </span>
          </>
        ) : (
          <>{children}</>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export {Button, buttonVariants};
