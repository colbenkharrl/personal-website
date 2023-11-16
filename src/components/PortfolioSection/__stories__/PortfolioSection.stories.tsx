import type { Meta, StoryObj } from '@storybook/react';

import { PortfolioSection } from '..';
import { BriefcaseIcon } from '@/components/Icons';

const meta = {
  title: 'Components/PortfolioSection',
  component: PortfolioSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PortfolioSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Portfolio Section',
    Icon: BriefcaseIcon,
    children: <h1 className="m-2">Here is some content.</h1>,
  },
};
