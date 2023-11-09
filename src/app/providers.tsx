'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { usePrevious } from '@/hooks/usePrevious';
import { AppContext } from '@/contexts/AppContext';
import { useThemeWatcher } from '@/hooks/useThemeWatcher';

export const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const previousPathname = usePrevious(pathname);
  useThemeWatcher();

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};
