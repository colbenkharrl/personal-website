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
        'inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-600 ring-1 ring-inset ring-orange-500/10 hover:bg-orange-100 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/30 dark:hover:bg-orange-400/20',
      )}
      {...props}
    >
      {children}
    </span>
  );
};
