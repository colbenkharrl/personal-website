import React from 'react';
import type { Preview } from '@storybook/react';
import { Providers } from '@/app/providers';
import '@/styles/tailwind.css';
import '@/styles/prism.css';
import { StoryURL } from './StoryUrl';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  decorators: [
    (Story, context) => (
      <Providers>
        <div className="bg-zinc-50 p-5 dark:bg-black">
          <Story />
        </div>
        {context.viewMode !== 'docs' ? <StoryURL context={context} /> : null}
      </Providers>
    ),
  ],
};

export default preview;
