import type { Meta, StoryObj } from '@storybook/react';

import { AvatarContainer } from '..';
import { Avatar } from '@/components/Avatar';

const meta = {
  title: 'Components/AvatarContainer',
  component: AvatarContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <Avatar />,
  },
};
