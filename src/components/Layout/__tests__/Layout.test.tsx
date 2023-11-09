import { render, screen } from '@testing-library/react';
import { Layout } from '../';

jest.mock('../../Header', () => ({
  Header: () => <p>Header</p>,
}));
jest.mock('../../Footer', () => ({
  Footer: () => <p>Footer</p>,
}));

it('Layout matches snapshot (regression test)', async () => {
  const content = 'Test blog content';

  render(
    <div data-testid="Layout">
      <Layout>
        <p>{content}</p>
      </Layout>
    </div>,
  );

  await screen.findByText(content);

  expect(screen.getByTestId('Layout')).toMatchSnapshot(
    'Full component snapshot.',
  );
});
