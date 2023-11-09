'use client';

import { createContext } from 'react';

export type AppContextValue = { previousPathname?: string };

export const AppContext = createContext<AppContextValue>({});
