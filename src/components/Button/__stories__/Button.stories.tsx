import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '..';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { options: ['primary', 'secondary'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    onClick: () => {},
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    onClick: () => {},
  },
};

export const Link: Story = {
  args: {
    variant: 'primary',
    children: 'Link Button',
    href: 'https://www.example.com/',
  },
};
