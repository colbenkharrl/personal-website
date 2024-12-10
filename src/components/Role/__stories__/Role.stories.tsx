import type { Meta, StoryObj } from '@storybook/react';
import logoSpec from '@/images/logos/spec.svg';

import { Role } from '..';

const meta = {
  title: 'Components/Role',
  component: Role,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Role>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    role: {
      company: 'Spec',
      title: 'VP of Engineering',
      logo: logoSpec,
      start: '2020',
      end: '2023',
      url: 'https://specprotected.com/',
      duration: '3 years',
    },
  },
};
