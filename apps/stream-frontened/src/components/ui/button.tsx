import React from 'react';

export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'outline' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, className = '', variant = 'default', size = 'default', ...props }, ref) => {
    // Base styles
    let buttonClasses = 'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-streamblue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    // Variant styles
    switch (variant) {
      case 'primary':
        buttonClasses += ' bg-streamblue text-white hover:bg-streamblue-700';
        break;
      case 'outline':
        buttonClasses += ' border border-input bg-transparent hover:bg-accent text-foreground hover:text-accent-foreground';
        break;
      case 'ghost':
        buttonClasses += ' bg-transparent hover:bg-accent text-foreground hover:text-accent-foreground';
        break;
      case 'destructive':
        buttonClasses += ' bg-destructive text-white hover:bg-destructive/90';
        break;
      default: // default variant
        buttonClasses += ' bg-secondary text-foreground hover:bg-secondary/80';
        break;
    }
    
    // Size styles
    switch (size) {
      case 'sm':
        buttonClasses += ' h-9 px-3 py-1';
        break;
      case 'lg':
        buttonClasses += ' h-11 px-8 py-3';
        break;
      case 'icon':
        buttonClasses += ' h-10 w-10 p-2';
        break;
      default: // default size
        buttonClasses += ' h-10 px-4 py-2';
        break;
    }
    
    // Combine with any additional classes
    buttonClasses += ` ${className}`;
    
    return (
      <button
        className={buttonClasses}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { CustomButton };