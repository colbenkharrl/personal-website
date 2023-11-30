import { render, screen } from '@testing-library/react';
import * as stories from '../__stories__/ContactForm.stories';
import { composeStories } from '@storybook/react';

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormStatus: () => ({
    pending: false,
  }),
}));

const { Empty } = composeStories(stories);

it('ContactForm matches snapshot (regression test)', () => {
  render(<Empty />);
  expect(screen.getByTestId('ContactForm')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
