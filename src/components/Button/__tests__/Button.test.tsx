import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Button } from '../';

it('Button matches snapshot (regression test)', () => {
  render(<Button data-testid="Button">I am a button.</Button>);
  expect(screen.getByTestId('Button')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should render a <button> element if no href', () => {
  const { container } = render(
    <Button data-testid="Button">I am a button.</Button>,
  );

  expect(container.querySelector('button')).not.toBeNull();
  expect(container.querySelector('a')).toBeNull();
});

it('should render a <a> element if href present', () => {
  const { container } = render(
    <Button data-testid="Button" href="https://www.example.com">
      I am a link.
    </Button>,
  );

  expect(container.querySelector('button')).toBeNull();
  expect(container.querySelector('a')).not.toBeNull();
});

it('should execute onClick prop when clicked', async () => {
  const spy = jest.fn();

  render(<Button data-testid="Button" onClick={spy} />);

  fireEvent.click(screen.getByTestId('Button'));

  await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
});
