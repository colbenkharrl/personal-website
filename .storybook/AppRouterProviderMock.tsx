import {
  AppRouterContext,
  AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';
import React from 'react';

export type AppRouterMockProps = {
  pathname: string;
  router: Partial<AppRouterInstance>;
  children: React.ReactNode;
};

export const AppRouterMock = ({
  pathname,
  router,
  children,
}: AppRouterMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: jest.fn(),
    forward: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
    ...router,
  };
  return (
    <PathnameContext.Provider value={pathname}>
      <AppRouterContext.Provider value={mockedRouter}>
        {children}
      </AppRouterContext.Provider>
    </PathnameContext.Provider>
  );
};
