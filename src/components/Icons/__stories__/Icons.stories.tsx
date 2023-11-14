import type { Meta, StoryObj } from '@storybook/react';

import * as icons from '../';
import { FC } from 'react';

const Icons: FC = () => (
  <div data-testid="Icons" className="inline-flex">
    {Object.values(icons).map((IconComponent) => (
      <IconComponent key={IconComponent.name} className="h-6 w-6" />
    ))}
  </div>
);

const meta = {
  title: 'Components/Icons',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
