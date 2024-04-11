import Link from 'next/link';
import clsx from 'clsx';

const variantStyles = {
  primary:
    'bg-orange-500 font-semibold text-zinc-100 hover:bg-orange-600 active:bg-orange-500 active:text-zinc-100/70 dark:bg-orange-400 dark:hover:bg-orange-500 dark:active:bg-orange-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
  link: 'font-medium text-zinc-900 active:text-zinc-900/60 dark:text-zinc-300 dark:hover:text-zinc-50 dark:active:text-zinc-50/70',
};

export type ButtonProps = {
  /**
   * Style variant for button presentation.
   */
  variant?: keyof typeof variantStyles;
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
);

/**
 * Standard UI button with two themed style variants.
 */
export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'disabled:opacity-30 inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  );

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
