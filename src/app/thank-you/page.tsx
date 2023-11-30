import { type Metadata } from 'next';

import { SimpleLayout } from '@/components/SimpleLayout';
import { Button } from '@/components/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Submitted',
  description: 'Thanks for getting in contact with me.',
};

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for reaching out!"
      intro="I will get back to you soon."
    >
      <Link href="/contact">
        <Button variant="primary">Return to Form</Button>
      </Link>
    </SimpleLayout>
  );
}
