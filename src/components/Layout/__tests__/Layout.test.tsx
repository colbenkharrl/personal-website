import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Layout.stories';
import { composeStories } from '@storybook/react';

const { Basic } = composeStories(stories);

jest.mock('../../Header', () => ({
  Header: () => <p>Header</p>,
}));
jest.mock('../../Footer', () => ({
  Footer: () => <p>Footer</p>,
}));

it('Layout matches snapshot (regression test)', async () => {
  const content = 'Test blog content';

  render(
    <div data-testid="Layout">
      <Basic />
    </div>,
  );

  await screen.findByText(content);

  expect(screen.getByTestId('Layout')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
