import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '..';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: <p>This is some content.</p>,
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
