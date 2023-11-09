'use client';

import Link from 'next/link';

import { ContainerInner, ContainerOuter } from '@/components/Container';
import React, { useCallback, useState } from 'react';
import { SnackBar } from './SnackBar';

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-orange-500 dark:hover:text-orange-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const [isSnackBarShowing, setSnackBarShowing] = useState(true);

  const handleCloseSnackBar = useCallback(() => {
    setSnackBarShowing(false);
  }, []);

  return (
    <footer className={`mt-32 flex-none ${isSnackBarShowing ? 'pb-20' : ''}`}>
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <NavLink href="/blog">Blog</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Matt Kharrl. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
      <SnackBar onClose={handleCloseSnackBar}>
        <Link href="https://github.com/colbenkharrl/website">
          <strong className="font-semibold">
            This site is designed and developed by me.
          </strong>{' '}
          View the the source on my GitHub.{' '}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </SnackBar>
    </footer>
  );
}
