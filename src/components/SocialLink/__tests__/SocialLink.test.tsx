import { render, screen } from '@testing-library/react';
import { SocialLink } from '../';
import { LinkedInIcon } from '@/components/Icons';

it('SocialLink matches snapshot (regression test)', () => {
  render(
    <SocialLink
      icon={LinkedInIcon}
      href="https://www.example.com"
      data-testid="SocialLink"
    >
      LinkedIn Link
    </SocialLink>,
  );

  expect(screen.getByTestId('SocialLink')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
