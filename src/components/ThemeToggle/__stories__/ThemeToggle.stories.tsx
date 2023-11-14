import type { Meta, StoryObj } from '@storybook/react';

import { ThemeToggle } from '..';
import { ThemeProvider } from 'next-themes';

const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
