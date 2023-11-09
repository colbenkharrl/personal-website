import { render, screen } from '@testing-library/react';
import { Role } from '../';
import logoSpec from '@/images/logos/spec.svg';

it('Role matches snapshot (regression test)', () => {
  const testRole: Role = {
    company: 'Spec',
    title: 'VP of Engineering',
    logo: logoSpec,
    start: '2020',
    end: '2023',
    url: 'https://specprotected.com/',
  };

  render(<Role role={testRole} />);
  expect(screen.getByTestId('Role')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
