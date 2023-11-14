import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Card.stories';
import { composeStories } from '@storybook/react';

const { Basic, ListItem } = composeStories(stories);

it('Card matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('Card')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should render a div if no "as" prop', () => {
  render(<Basic />);

  expect(screen.getByTestId('Card').tagName).toBe('DIV');
});

it('should render same tag as "as" prop', () => {
  render(<ListItem />);

  expect(screen.getByTestId('Card').tagName).toBe('LI');
});
