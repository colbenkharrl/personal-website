import { CoachFeedbackForm } from '@/components/CoachFeedbackForm';
import { SimpleLayout } from '@/components/SimpleLayout';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Coach Feedback Form',
  description:
    'Generate and copy feedback for your cycling coach on how your activity went.',
};

const RideFeedbackToolPage: FC = () => {
  return (
    <SimpleLayout
      title="Coach Feedback Form"
      intro="Use the form below to generate and copy feedback for your cycling coach on how your activity went."
    >
      <CoachFeedbackForm />
    </SimpleLayout>
  );
};

export default RideFeedbackToolPage;
