import type { Meta, StoryObj } from '@storybook/react';

import { InlineBadge } from '..';

const meta = {
  title: 'Components/InlineBadge',
  component: InlineBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InlineBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Text.',
  },
};
