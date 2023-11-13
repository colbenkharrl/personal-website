import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '..';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    large: { control: 'boolean', defaultValue: false },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Large: Story = {
  args: {
    large: true,
  },
};
