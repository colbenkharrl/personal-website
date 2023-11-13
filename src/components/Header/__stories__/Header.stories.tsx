import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '..';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Homepage: Story = {};

export const NonHomepage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/test',
      },
    },
  },
};
