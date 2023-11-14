import type { Meta, StoryObj } from '@storybook/react';
import { Section } from '..';

const meta = {
  title: 'Components/Section',
  component: Section,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Test title.',
    children: 'Text.',
  },
};
