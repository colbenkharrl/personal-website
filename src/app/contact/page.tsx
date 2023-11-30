import { type Metadata } from 'next';
import { SimpleLayout } from '@/components/SimpleLayout';
import { ContactForm } from '@/components/ContactForm';
import { useCallback } from 'react';
import nodemailer from 'nodemailer';

const MATT_EMAIL = 'matt@kharrl.com';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: MATT_EMAIL,
    pass: process.env.EMAIL_PW,
  },
});

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send me a message.',
};

export default function Contact() {
  const onSubmit = useCallback(async (formData: FormData) => {
    'use server';

    try {
      await transporter.sendMail({
        from: MATT_EMAIL,
        to: MATT_EMAIL,
        subject: `${formData.get('firstName')} ${formData.get(
          'lastName',
        )} filled out the website contact form.`,
        text: `Sender: ${formData.get('firstName')} ${formData.get(
          'lastName',
        )} (${formData.get('email')})\n\n${formData.get('message')}`,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <SimpleLayout
      title="Get in touch with me"
      intro="Use the form below to get in contact with me. I try to respond as soon as I am able, usually within one week."
    >
      <ContactForm onSubmit={onSubmit} />
    </SimpleLayout>
  );
}
