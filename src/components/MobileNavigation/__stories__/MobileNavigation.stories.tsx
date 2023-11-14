import type { Meta, StoryObj } from '@storybook/react';

import { MobileNavigation } from '..';

const meta = {
  title: 'Components/MobileNavigation',
  component: MobileNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MobileNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
