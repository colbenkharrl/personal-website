import { render, screen } from '@testing-library/react';
import { Resume } from '../';
import { Role } from '@/components/Role';

jest.mock('../../Role', () => ({
  Role: ({ role }: { role: Role }) => <p>{role.title}</p>,
}));

it('Resume matches snapshot (regression test)', () => {
  render(<Resume />);
  expect(screen.getByTestId('Resume')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
