import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '..';
import { formatDate } from '@/util/formatDate';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Card.Eyebrow as="time" dateTime="2023-11-12" decorate>
          {formatDate('2023-11-12')}
        </Card.Eyebrow>
        <Card.Title href="https://www.example.com">Card Title</Card.Title>
        <Card.Description>This is the card description.</Card.Description>
        <Card.CTA>Call to Action</Card.CTA>
      </>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const ListItem: Story = {
  args: {
    as: 'li',
  },
};
