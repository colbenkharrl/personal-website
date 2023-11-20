import { ComponentPropsWithoutRef, FC } from 'react';
import { IconComponent } from '../Icons';
import Link from 'next/link';
import clsx from 'clsx';

export type IconLinkProps = ComponentPropsWithoutRef<'a'> & {
  text: string;
  Icon: IconComponent;
  href: string;
};

export const IconLink: FC<IconLinkProps> = ({
  text,
  Icon,
  href,
  className,
  ...props
}) => {
  return (
    <Link
      {...props}
      href={href}
      className={clsx('flex items-center', className)}
    >
      <Icon className="mr-2 h-6 w-6" />
      {text}
    </Link>
  );
};
