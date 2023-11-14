import type { Meta, StoryObj } from '@storybook/react';
import { SimpleLayout } from '..';

const meta = {
  title: 'Components/SimpleLayout',
  component: SimpleLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Test title.',
    intro: 'This is the intro text.',
    children: 'Text.',
  },
};
