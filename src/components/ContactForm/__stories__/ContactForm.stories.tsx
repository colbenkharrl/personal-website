import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm } from '..';

const meta = {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    onSubmit: async () => {},
  },
};
