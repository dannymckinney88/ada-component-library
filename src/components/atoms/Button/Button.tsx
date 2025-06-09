import React from 'react';
import * as RadixIcons from '@radix-ui/react-icons';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style of the button
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * The size of the button
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the button is in a loading state
   */
  isLoading?: boolean;
  /**
   * Icon to display before the button text
   */
  icon?: keyof typeof RadixIcons;
  /**
   * Accessible label for screen readers
   */
  ariaLabel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      isLoading = false,
      icon,
      ariaLabel,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonClasses = [
      styles.button,
      styles[variant],
      styles[size],
      isLoading && styles.loading,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const IconComponent = icon ? RadixIcons[icon] : null;

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        aria-label={ariaLabel}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <span className={styles.loader} role="status" aria-hidden="true">
            <RadixIcons.UpdateIcon className={styles.spinner} />
          </span>
        )}
        {IconComponent && (
          <span className={styles.icon} aria-hidden="true">
            <IconComponent />
          </span>
        )}
        <span className={styles.content}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button'; 