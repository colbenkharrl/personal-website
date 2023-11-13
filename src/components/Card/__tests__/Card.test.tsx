import { render, screen } from '@testing-library/react';
import { Card } from '../';
import { Basic, ListItem } from '../__stories__/Card.stories';

it('Card matches snapshot (regression test)', () => {
  render(<Card {...Basic.args} />);
  expect(screen.getByTestId('Card')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should render a div if no "as" prop', () => {
  render(<Card {...Basic.args} />);

  expect(screen.getByTestId('Card').tagName).toBe('DIV');
});

it('should render same tag as "as" prop', () => {
  render(<Card {...ListItem.args} />);

  expect(screen.getByTestId('Card').tagName).toBe('LI');
});
