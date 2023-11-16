import type { Meta, StoryObj } from '@storybook/react';

import { Reference, references } from '..';

const meta = {
  title: 'Components/Reference',
  component: Reference,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Reference>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    reference: references[0],
  },
};

export const ShortText: Story = {
  args: {
    reference: {
      ...references[0],
      content: 'Short content',
    },
  },
};
