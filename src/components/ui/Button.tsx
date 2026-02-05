import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'white' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const variants = {
      primary: 'bg-gradient-to-r from-primary to-primary-light text-white hover:brightness-110 shadow-[0_4px_14px_rgba(0,96,255,0.3)] hover:shadow-[0_6px_20px_rgba(0,96,255,0.5)] hover:-translate-y-0.5',
      secondary: 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400',
      white: 'bg-white text-primary hover:bg-gray-50',
      outline: 'border-2 border-primary text-primary hover:bg-primary/5',
      ghost: 'text-gray-600 hover:text-primary hover:bg-primary/5',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-3 text-[0.9375rem]',
      lg: 'px-8 py-4 text-base',
    };

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-md font-bold transition-all duration-200 active:scale-[0.98] cursor-pointer',
          variants[variant],
          sizes[size],
          (isLoading || disabled) && 'opacity-70 cursor-not-allowed hover:transform-none hover:shadow-none',
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
