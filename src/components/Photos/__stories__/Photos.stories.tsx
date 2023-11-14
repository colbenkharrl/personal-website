import type { Meta, StoryObj } from '@storybook/react';

import { Photos } from '..';

const meta = {
  title: 'Components/Photos',
  component: Photos,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Photos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
