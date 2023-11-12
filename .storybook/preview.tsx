import React from 'react';
import type { Preview } from '@storybook/react';
import { Providers } from '@/app/providers';
import '@/styles/tailwind.css';
import '@/styles/prism.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
};

export default preview;
