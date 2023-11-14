import type { Meta, StoryObj } from '@storybook/react';

import { SnackBar } from '..';

const meta = {
  title: 'Components/SnackBar',
  component: SnackBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SnackBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'SnackBar Content',
  },
};

export const OnClose: Story = {
  args: {
    onClose: () => alert('Closed!'),
    children: 'SnackBar Content',
  },
};

export const CloseMilliseconds: Story = {
  args: {
    closeMs: 2000,
    children: 'SnackBar Content',
  },
};
