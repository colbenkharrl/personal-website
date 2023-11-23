import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send me a message.',
};

export default function Contact() {
  return (
    <SimpleLayout
      title="Get in touch with me"
      intro="Use the form below to get in contact with me. I try to respond as soon as I am able, usually within one week."
    >
      <ContactForm />
    </SimpleLayout>
  );
}
