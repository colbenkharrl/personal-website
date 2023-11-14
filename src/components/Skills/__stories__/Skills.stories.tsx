import type { Meta, StoryObj } from '@storybook/react';

import { Skills } from '..';

const meta = {
  title: 'Components/Skills',
  component: Skills,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
