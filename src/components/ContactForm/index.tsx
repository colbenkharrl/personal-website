import { FC } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { TextArea } from '../TextArea';

export const ContactForm: FC = () => {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <Input
              containerProps={{ className: 'sm:col-span-3' }}
              type="text"
              label="First name"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              required
              invalidText="Please enter a valid first name."
            />

            <Input
              containerProps={{ className: 'sm:col-span-3' }}
              type="text"
              label="Last name"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              required
              invalidText="Please enter a valid last name."
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
            />

            <TextArea
              containerProps={{ className: 'col-span-full' }}
              rows={3}
              label="Message"
              name="message"
              id="message"
              required
              invalidText="Please enter a message describing why you are contacting me."
            />
          </div>

          <div className="mt-6 flex items-center justify-start gap-x-6">
            <Button variant="primary" type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
