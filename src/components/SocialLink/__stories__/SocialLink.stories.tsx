import type { Meta, StoryObj } from '@storybook/react';

import { SocialLink } from '..';
import { StravaIcon } from '@/components/Icons';

const meta = {
  title: 'Components/SocialLink',
  component: SocialLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: StravaIcon,
    href: 'https://strava.com/',
  },
};
