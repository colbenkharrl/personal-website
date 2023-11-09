import { render, screen } from '@testing-library/react';
import { Card } from '../';

it('Card matches snapshot (regression test)', () => {
  render(
    <Card>
      <Card.Link href="https://www.example.com">Card Link</Card.Link>
      <Card.Description>This is the card description.</Card.Description>
    </Card>,
  );
  expect(screen.getByTestId('Card')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it('should render a div if no "as" prop', () => {
  render(<Card />);

  expect(screen.getByTestId('Card').tagName).toBe('DIV');
});

it('should render same tag as "as" prop', () => {
  render(<Card as="li" />);

  expect(screen.getByTestId('Card').tagName).toBe('LI');
});
