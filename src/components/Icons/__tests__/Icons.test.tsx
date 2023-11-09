import { render, screen } from '@testing-library/react';
import * as icons from '../';

it('Icons matches snapshot (regression test)', () => {
  render(
    <div data-testid="Icons">
      {Object.values(icons).map((IconComponent) => (
        <IconComponent />
      ))}
    </div>,
  );

  expect(screen.getByTestId('Icons')).toMatchSnapshot(
    "'Full component snapshot.'",
  );
});
