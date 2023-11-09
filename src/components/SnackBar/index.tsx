'use client';

import React, { useCallback, useEffect, useState } from 'react';

export type SnackBarProps = React.ComponentPropsWithoutRef<'div'> & {
  onClose?: () => void;
};

export function SnackBar({ onClose, children }: SnackBarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCloseAnimation, setIsCloseAnimation] = useState(false);

  const handleClose = useCallback(() => {
    if (!isCloseAnimation) {
      setIsCloseAnimation(true);

      setTimeout(() => {
        setIsOpen(false);
        setIsCloseAnimation(false);
        onClose?.();
      }, 500);
    }
  }, [isCloseAnimation, onClose]);

  useEffect(() => {
    const timeout = setTimeout(() => handleClose(), 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [handleClose]);

  return isOpen ? (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8"
      data-testid="SnackBar"
    >
      <div
        className={`${
          isCloseAnimation ? 'opacity-0' : 'opacity-100'
        } pointer-events-auto flex items-center justify-between gap-x-6 bg-white bg-opacity-90 px-6 py-2.5 outline outline-2 outline-orange-500 transition-opacity duration-500 ease-out dark:bg-zinc-900 dark:bg-opacity-90 dark:outline-orange-400 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5`}
      >
        <p className="z-50 text-sm leading-6 text-zinc-800 dark:text-zinc-100">
          {children}
        </p>
        <button
          type="button"
          className="z-50 -m-1.5 flex-none  p-1.5"
          onClick={handleClose}
          data-testid="SnackBar-close-icon"
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="h-5 w-5 text-zinc-800 dark:text-zinc-100"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  ) : null;
}
