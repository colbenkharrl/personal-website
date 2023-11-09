import { render, screen } from '@testing-library/react';
import { Avatar } from '../';

it('Avatar matches snapshot (regression test)', () => {
  render(<Avatar />);
  expect(screen.getByLabelText('Home')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
