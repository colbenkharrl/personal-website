import type { Meta, StoryObj } from '@storybook/react';

import { NavItem } from '..';

const meta = {
  title: 'Components/NavItem',
  component: NavItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    href: 'https://www.example.com/',
    children: 'Example Link',
  },
};
