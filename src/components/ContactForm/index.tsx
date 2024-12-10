'use client';

import { FC, useCallback } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { TextArea } from '../TextArea';
import { useRouter } from 'next/navigation';
// import { useFormStatus } from 'react-dom';

export type ContactFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
};

const ContactFormSubmitButton: FC = () => {
  // const { pending } = useFormStatus();

  return (
    <Button
      variant="primary"
      type="submit"
      className="w-full"
      // disabled={pending}
    >
      Submit
    </Button>
  );
};

export const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const router = useRouter();

  const handleForm = useCallback(
    (formData: FormData) => {
      onSubmit(formData).then(() => router.push('/thank-you'));
    },
    [onSubmit, router],
  );

  return (
    // @ts-ignore - TS doesn't know about the FormData constructor
    <form action={handleForm} data-testid="ContactForm">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <Input
              containerProps={{ className: 'sm:col-span-3' }}
              type="text"
              label="First name"
              name="firstName"
              id="firstName"
              autoComplete="givenName"
              required
              invalidText="Please enter a valid first name."
              placeholder="Jane"
            />

            <Input
              containerProps={{ className: 'sm:col-span-3' }}
              type="text"
              label="Last name"
              name="lastName"
              id="lastName"
              autoComplete="familyName"
              required
              invalidText="Please enter a valid last name."
              placeholder="Doe"
            />

            <Input
              containerProps={{ className: 'col-span-full' }}
              type="email"
              label="Email address"
              name="email"
              id="email"
              autoComplete="email"
              required
              invalidText="Please enter a valid email address."
              placeholder="jdoe@email.com"
            />

            <TextArea
              containerProps={{ className: 'col-span-full' }}
              rows={3}
              label="Message"
              name="message"
              id="message"
              required
              invalidText="Please enter a message describing why you are contacting me."
              placeholder="I would like to chat about..."
            />
          </div>

          <div className="mt-6 flex items-center justify-start gap-x-6">
            <ContactFormSubmitButton />
          </div>
        </div>
      </div>
    </form>
  );
};
