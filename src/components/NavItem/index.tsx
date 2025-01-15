import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-yellow-500 dark:text-yellow-400'
            : 'hover:text-yellow-500 dark:hover:text-yellow-400',
        )}
        data-testid="NavItem"
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0" />
        )}
      </Link>
    </li>
  );
}
