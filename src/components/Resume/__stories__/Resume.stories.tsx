import type { Meta, StoryObj } from '@storybook/react';

import { Resume } from '..';

const meta = {
  title: 'Components/Resume',
  component: Resume,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Resume>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
