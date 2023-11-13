import { setProjectAnnotations } from '@storybook/react';
import globalStorybookConfig from './preview.tsx';
import { AppRouterMock } from './AppRouterProviderMock.tsx';
import { Providers } from '@/app/providers.tsx';
import { StoryURL } from './StoryUrl.tsx';

globalStorybookConfig.decorators = [
  (Story, context) => (
    <AppRouterMock
      router={{}}
      pathname={context.parameters.nextjs?.navigation?.pathname || '/'}
    >
      <Providers>
        <Story />
        {context.viewMode !== 'docs' ? <StoryURL context={context} /> : null}
      </Providers>
    </AppRouterMock>
  ),
];

setProjectAnnotations(globalStorybookConfig);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
