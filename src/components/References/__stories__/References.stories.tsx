import type { Meta, StoryObj } from '@storybook/react';

import { References } from '..';

const meta = {
  title: 'Components/References',
  component: References,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof References>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
