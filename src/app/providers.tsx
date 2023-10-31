'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { usePrevious } from '@/hooks/usePrevious';
import { AppContext } from '@/contexts/AppContext';
import { ThemeWatcher } from '@/components/ThemeWatcher';

export const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const previousPathname = usePrevious(pathname);

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ThemeWatcher />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};
