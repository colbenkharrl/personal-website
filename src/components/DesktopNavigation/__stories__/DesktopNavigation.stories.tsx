import type { Meta, StoryObj } from '@storybook/react';

import { DesktopNavigation } from '..';

const meta = {
  title: 'Components/DesktopNavigation',
  component: DesktopNavigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DesktopNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
