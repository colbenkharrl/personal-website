import { render, screen } from '@testing-library/react';
import Page from './page';

it('should match page snapshot', () => {
  render(<Page />);

  expect(screen.getByTestId('Container')).toMatchSnapshot('page snapshot');
});
