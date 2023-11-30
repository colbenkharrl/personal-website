import { render, screen } from '@testing-library/react';
import Page from './page';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn(),
}));
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: () => ({
    pending: false,
  }),
}));

it('should match page snapshot', () => {
  render(<Page />);

  expect(screen.getByTestId('Container')).toMatchSnapshot('page snapshot');
});
