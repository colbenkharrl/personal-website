import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Button } from '../';
import { Primary, Secondary, Link } from '../__stories__/Button.stories';

it('Button matches snapshot (regression test)', () => {
  render(
    <div data-testid="Button">
      <Button {...Primary.args} />
      <Button {...Secondary.args} />
    </div>,
  );
  expect(screen.getByTestId('Button')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should render a <button> element if no href', () => {
  const { container } = render(<Button {...Primary.args} />);

  expect(container.querySelector('button')).not.toBeNull();
  expect(container.querySelector('a')).toBeNull();
});

it('should render a <a> element if href present', () => {
  const { container } = render(<Button {...Link.args} />);

  expect(container.querySelector('button')).toBeNull();
  expect(container.querySelector('a')).not.toBeNull();
});

it('should execute onClick prop when clicked', async () => {
  const spy = jest.fn();

  render(<Button {...Primary.args} data-testid="Button" onClick={spy} />);

  fireEvent.click(screen.getByTestId('Button'));

  await waitFor(() => expect(spy).toHaveBeenCalledTimes(1));
});
