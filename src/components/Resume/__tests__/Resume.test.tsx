import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/Resume.stories';
import { composeStories } from '@storybook/react';
import { Role } from '@/components/Role';

const { Basic } = composeStories(stories);

jest.mock('../../Role', () => ({
  Role: ({ role }: { role: Role }) => <p>{role.title}</p>,
}));

it('Resume matches snapshot (regression test)', () => {
  render(<Basic />);
  expect(screen.getByTestId('PortfolioSection')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
