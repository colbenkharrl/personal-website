import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import clsx from 'clsx';

export type InlineBadgeProps = ComponentPropsWithoutRef<'span'> & {
  children: ReactNode;
};

export const InlineBadge: FC<InlineBadgeProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={clsx(
        className,
        'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-600 ring-1 ring-inset ring-yellow-500/10 hover:bg-yellow-100 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/30 dark:hover:bg-yellow-400/20',
      )}
      {...props}
    >
      {children}
    </span>
  );
};
