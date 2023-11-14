import type { Meta, StoryObj } from '@storybook/react';

import { Projects } from '..';

const meta = {
  title: 'Components/Projects',
  component: Projects,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
