import type { Meta, StoryObj } from '@storybook/react';

import { IconLink } from '..';
import { InstagramIcon } from '@/components/Icons';

const meta = {
  title: 'Components/IconLink',
  component: IconLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    href: 'https://www.example.com/',
    text: 'Example Link',
    Icon: InstagramIcon,
  },
};
