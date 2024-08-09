import Link from 'next/link';
import clsx from 'clsx';
import { ChevronRightIcon } from '@/components/Icons';

export type CardProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as' | 'className'
> & {
  /**
   * HTML element tag type used to render the container.
   */
  as?: T;
  /**
   * Additional classes to append to the container.
   */
  className?: string;
};

export function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: CardProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={clsx(
        'group relative flex items-start',
        className,
        className?.includes('flex-row') ? 'flex-row' : 'flex-col',
      )}
      data-testid="Card"
    >
      {children}
    </Component>
  );
}

export type CardLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

Card.Link = function CardLink({ children, ...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

export type CardTitleProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as' | 'href'
> & {
  /**
   * HTML element tag type used to render the title text.
   */
  as?: T;
  /**
   * Optional URL which will wrap the title with a link.
   */
  href?: string;
};

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  children,
}: CardTitleProps<T>) {
  const Component = as ?? 'h2';

  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

export type CardDescriptionProps = {
  /**
   * React node for children content.
   */
  children: React.ReactNode;
};

Card.Description = function CardDescription({
  children,
}: CardDescriptionProps) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  );
};

export type CardCTAProps = {
  /**
   * React node for children content.
   */
  children: React.ReactNode;
};

Card.CTA = function CardCTA({ children }: CardCTAProps) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-orange-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

export type CardEyebrowProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  'as' | 'decorate'
> & {
  /**
   * HTML element tag type used to render the eyebrow text.
   */
  as?: T;
  /**
   * Toggle for optional theme styles.
   */
  decorate?: boolean;
};

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps<T>) {
  const Component = as ?? 'p';

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
