import type { Meta, StoryObj } from '@storybook/react';

import { Prose } from '..';

const meta = {
  title: 'Components/Prose',
  component: Prose,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Prose>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Text.',
  },
};
