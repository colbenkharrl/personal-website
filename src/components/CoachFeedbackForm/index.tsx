'use client';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { TextArea } from '@/components/TextArea';
import Image from 'next/image';
import { FC, useCallback, useState } from 'react';
import trainingPeaksLogo from '@/images/logos/trainingpeaks.png';

const formLabels: { [key: string]: string } = {
  ridingEnvironment: 'Riding Environment',
  perceivedTemperature: 'Temperature',
  notableWeatherConditions: 'Weather Impact',
  overallExertion: 'Overall Perceived Exertion (1-10)',
  intervalExertion: 'Interval Exertion (1-10)',
  heartRateFeedback: 'Heart Rate Feedback',
  powerOutputFeedback: 'Power Output Feedback',
  waterIntake: 'Water Consumed (L)',
  carbsConsumed: 'Carbs Consumed (g)',
  nutrition: 'Nutrition',
  fatigueStart: 'Pre-Ride Fatigue (1-10)',
  fatigueEnd: 'Post-Ride Fatigue (1-10)',
  sleepHours: 'Hours of Sleep',
  sleepQuality: 'Sleep Quality (1-10)',
  calories24h: 'Calories Consumed in 24 Hours Before Ride (0-10000)',
  carbs24h: 'Carbs Consumed in 24 Hours Before Ride (0-2000 grams)',
  nutritionQuality:
    'Nutritional Quality of Food in 24 Hours Before Ride (1-10)',
  stressLevel: 'Stress Level (1-10)',
  mentalState: 'Mental State Throughout the Ride',
  achievements: 'Notable Achievements on This Ride',
  areasOfImprovement: 'Areas of Improvement from This Ride',
  upcomingWorkoutsManageability: 'Manageability of Upcoming Workouts (1-10)',
  activityComments: 'Activity Comments',
};

export const CoachFeedbackForm: FC = () => {
  const [output, setOutput] = useState<string | null>(null);

  const handleForm = useCallback((formData: FormData) => {
    let feedbackText = '';

    Array.from(formData.entries()).forEach(([key, value]) => {
      if (value !== '') {
        feedbackText += `${formLabels[key] || 'Unknown Field'}: ${value}\n\n`;
      }
    });

    setOutput(feedbackText);
  }, []);

  const onCopy = useCallback(() => {
    if (!output) return;

    navigator.clipboard
      .writeText(output)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Text copied to clipboard.');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error copying to clipboard:', error);
      });
  }, [output]);

  return (
    <>
      <p className="mb-8">
        <b>Note:</b> All fields are optional and any empty fields will be
        excluded from the output.
      </p>
      <form
        // @ts-ignore - TS doesn't know about the FormData constructor
        action={handleForm}
        data-testid="ContactForm"
        className="border-t border-t-amber-500 dark:border-t-amber-400"
      >
        <div className="space-y-12">
          <div className="border-b border-amber-500 pb-12 dark:border-amber-400">
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 pt-2 sm:grid-cols-2">
              <TextArea
                name="activityComments"
                label={formLabels['activityComments']}
                id="activityComments"
                containerProps={{
                  style: { gridColumnStart: 1, gridColumnEnd: -1 },
                }}
              />

              <h3 className="col-span-full text-lg font-semibold">Fueling</h3>

              <Input
                name="waterIntake"
                label={formLabels['waterIntake']}
                type="number"
                id="waterIntake"
                min="0"
                max="100"
                step={0.05}
              />

              <Input
                name="carbsConsumed"
                label={formLabels['carbsConsumed']}
                type="number"
                id="carbsConsumed"
                min="0"
                max="2000"
              />

              <h3 className="col-span-full text-lg font-semibold">Fatigue</h3>

              <Input
                name="fatigueStart"
                label={formLabels['fatigueStart']}
                type="number"
                id="fatigueStart"
                min="1"
                max="10"
              />

              <Input
                name="fatigueEnd"
                label={formLabels['fatigueEnd']}
                type="number"
                id="fatigueEnd"
                min="1"
                max="10"
              />

              <h3 className="col-span-full text-lg font-semibold">Sleep</h3>

              <p className="col-span-full">
                <b>Note:</b> If possible, it is better to{' '}
                <a
                  className="text-amber-500 dark:text-amber-400"
                  href="https://help.trainingpeaks.com/hc/en-us/articles/204072364-TrainingPeaks-Metrics-How-to-enter-Weight-HRV-Sleep-etc"
                >
                  input sleep as a metric in TraningPeaks
                </a>{' '}
                so your coach can analyze it along with other metrics.
              </p>

              <Input
                name="sleepHours"
                label={formLabels['sleepHours']}
                type="number"
                id="sleepHours"
                min="0"
                max="24"
              />

              <Input
                name="sleepQuality"
                label={formLabels['sleepQuality']}
                type="number"
                id="sleepQuality"
                min="1"
                max="10"
              />

              <h3 className="col-span-full text-lg font-semibold">Stress</h3>

              <Input
                name="stressLevel"
                label={formLabels['stressLevel']}
                type="number"
                id="stressLevel"
                min="1"
                max="10"
              />

              <h3 className="col-span-full text-lg font-semibold">
                Environment
              </h3>

              <Select
                name="ridingEnvironment"
                label={formLabels['ridingEnvironment']}
                options={[
                  { name: 'Select', value: '' },
                  { value: 'Road' },
                  { value: 'Mixed Terrain' },
                  { value: 'Offroad' },
                  { value: 'Track' },
                  { value: 'Turbo/Trainer' },
                ]}
              />

              <Select
                name="notableWeatherConditions"
                label={formLabels['notableWeatherConditions']}
                options={[
                  { name: 'Select', value: '' },
                  { value: 'Impeded performance' },
                  { value: 'Improved performance' },
                ]}
              />

              <h3 className="col-span-full text-lg font-semibold">
                Reflection
              </h3>

              <TextArea
                name="achievements"
                label={formLabels['achievements']}
                id="achievements"
              />

              <TextArea
                name="areasOfImprovement"
                label={formLabels['areasOfImprovement']}
                id="areasOfImprovement"
              />
            </div>
            <Button type="submit" className="mt-4 w-full">
              Generate Feedback
            </Button>
          </div>
        </div>
      </form>

      {output ? (
        <div>
          <div className="flex items-stretch justify-stretch space-x-2 py-2">
            <Button
              type="submit"
              variant="secondary"
              className="w-1/2"
              onClick={onCopy}
            >
              Copy
            </Button>
            <Button
              type="submit"
              variant="link"
              className="w-1/2 bg-[#005593] text-white hover:bg-blue-950 dark:bg-[#005593]"
              onClick={onCopy}
              color="#005593"
              href="https://app.trainingpeaks.com/"
              target="_blank"
            >
              <Image
                src={trainingPeaksLogo}
                className="h-auto max-h-4 w-auto"
                alt="training peaks"
              />
            </Button>
          </div>
          <pre className="overflow-x-auto rounded-md bg-slate-600 p-2 text-white shadow-md">
            {output}
          </pre>
        </div>
      ) : null}
    </>
  );
};
