import type { Meta, StoryObj } from '@storybook/react';
import opengraphImage from '@/app/opengraph-image.png';

import { Blog } from '..';

const meta = {
  title: 'Components/Blog',
  component: Blog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    blog: { control: 'object' },
  },
  args: {
    blog: {
      slug: 'test-blog',
      title: 'Test Blog',
      description: 'Test blog description.',
      author: 'Matt Kharrl',
      date: '2023-11-09',
      opengraphImage,
    },
  },
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
