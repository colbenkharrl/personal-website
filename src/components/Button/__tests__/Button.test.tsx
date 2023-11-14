import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as stories from '../__stories__/Button.stories';
import { composeStories } from '@storybook/react';

const { Primary, Secondary, Link } = composeStories(stories);

it('Button matches snapshot (regression test)', () => {
  render(
    <div data-testid="Button">
      <Primary />
      <Secondary />
    </div>,
  );
  expect(screen.getByTestId('Button')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should render a <button> element if no href', () => {
  const { container } = render(<Primary />);

  expect(container.querySelector('button')).not.toBeNull();
  expect(container.querySelector('a')).toBeNull();
});

it('should render a <a> element if href present', () => {
  const { container } = render(<Link />);

  expect(container.querySelector('button')).toBeNull();
  expect(container.querySelector('a')).not.toBeNull();
});

it('should execute onClick prop when clicked', async () => {
  const spy = jest.fn();

  render(<Primary data-testid="Button" onClick={spy} />);

  fireEvent.click(screen.getByTestId('Button'));

  await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
});
