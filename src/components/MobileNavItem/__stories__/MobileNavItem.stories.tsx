import type { Meta, StoryObj } from '@storybook/react';

import { MobileNavItem } from '..';
import { Popover } from '@headlessui/react';

const meta = {
  title: 'Components/MobileNavItem',
  component: MobileNavItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileNavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    href: 'https://www.example.com/',
    children: 'Example Link',
  },
  decorators: [
    (Story) => (
      <Popover>
        <Story />
      </Popover>
    ),
  ],
};
