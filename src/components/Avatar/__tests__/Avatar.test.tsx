import { render, screen } from '@testing-library/react';
import { Avatar } from '../';
import { Large } from '../__stories__/Avatar.stories';

it('Avatar matches snapshot (regression test)', () => {
  render(
    <div data-testid="Avatar">
      <Avatar />
      <Avatar {...Large.args} />
    </div>,
  );
  expect(screen.getByTestId('Avatar')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
