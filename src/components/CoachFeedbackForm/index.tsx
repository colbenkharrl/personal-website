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
  perceivedTemperature: 'Perceived Temperature',
  notableWeatherConditions: 'Notable Weather Conditions',
  overallExertion: 'Overall Perceived Exertion (1-10)',
  intervalExertion: 'Interval Exertion (1-10)',
  heartRateFeedback: 'Heart Rate Feedback',
  powerOutputFeedback: 'Power Output Feedback',
  waterIntake: 'Water Intake (0-10000 mL)',
  nutrition: 'Nutrition',
  caloriesConsumed: 'Calories Consumed (0-10000)',
  carbsConsumed: 'Carbs Consumed (0-2000 grams)',
  fatigueStart: 'Perceived Fatigue at the Beginning (1-10)',
  fatigueEnd: 'Perceived Fatigue at the End (1-10)',
  sleepHours: 'Hours of Sleep (0-24)',
  sleepQuality: 'Sleep Quality (1-10)',
  calories24h: 'Calories Consumed in 24 Hours Before Ride (0-10000)',
  carbs24h: 'Carbs Consumed in 24 Hours Before Ride (0-2000 grams)',
  nutritionQuality:
    'Nutritional Quality of Food in 24 Hours Before Ride (1-10)',
  stressLevel: 'Perceived Stress Level at Start (1-10)',
  mentalState: 'Mental State Throughout the Ride',
  achievements: 'Notable Achievements on This Ride',
  areasOfImprovement: 'Areas of Improvement from This Ride',
  upcomingWorkoutsManageability: 'Manageability of Upcoming Workouts (1-10)',
  additionalComments: 'Additional Comments',
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
        action={handleForm}
        data-testid="ContactForm"
        className="border-t border-t-orange-500 dark:border-t-orange-400"
      >
        <div className="space-y-12">
          <div className="border-b border-orange-500 pb-12 dark:border-orange-400">
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 pt-2 sm:grid-cols-2 lg:grid-cols-3">
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
                name="perceivedTemperature"
                label={formLabels['perceivedTemperature']}
                options={[
                  { name: 'Select', value: '' },
                  { value: 'Cold' },
                  { value: 'Cool' },
                  { value: 'Neutral' },
                  { value: 'Warm' },
                  { value: 'Hot' },
                ]}
              />

              <Input
                name="notableWeatherConditions"
                label={formLabels['notableWeatherConditions']}
                type="text"
                id="notableWeatherConditions"
              />

              <h3 className="col-span-full text-lg font-semibold">
                Performance
              </h3>

              <Input
                name="overallExertion"
                label={formLabels['overallExertion']}
                type="number"
                id="overallExertion"
                min="1"
                max="10"
              />

              <Input
                name="intervalExertion"
                label={formLabels['intervalExertion']}
                type="number"
                id="intervalExertion"
                min="1"
                max="10"
              />

              <TextArea
                name="heartRateFeedback"
                label={formLabels['heartRateFeedback']}
                id="heartRateFeedback"
              ></TextArea>

              <TextArea
                name="powerOutputFeedback"
                label={formLabels['powerOutputFeedback']}
                id="powerOutputFeedback"
              ></TextArea>

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

              <Input
                name="upcomingWorkoutsManageability"
                label={formLabels['upcomingWorkoutsManageability']}
                type="number"
                id="upcomingWorkoutsManageability"
                min="1"
                max="10"
              />

              <h3 className="col-span-full text-lg font-semibold">Fueling</h3>

              <Input
                name="waterIntake"
                label={formLabels['waterIntake']}
                type="number"
                id="waterIntake"
                min="0"
                max="10000"
              />

              <TextArea
                name="nutrition"
                label={formLabels['nutrition']}
                id="nutrition"
              ></TextArea>

              <Input
                name="caloriesConsumed"
                label={formLabels['caloriesConsumed']}
                type="number"
                id="caloriesConsumed"
                min="0"
                max="10000"
              />

              <Input
                name="carbsConsumed"
                label={formLabels['carbsConsumed']}
                type="number"
                id="carbsConsumed"
                min="0"
                max="2000"
              />

              <Input
                name="calories24h"
                label={formLabels['calories24h']}
                type="number"
                id="calories24h"
                min="0"
                max="10000"
              />

              <Input
                name="carbs24h"
                label={formLabels['carbs24h']}
                type="number"
                id="carbs24h"
                min="0"
                max="2000"
              />

              <Input
                name="nutritionQuality"
                label={formLabels['nutritionQuality']}
                type="number"
                id="nutritionQuality"
                min="1"
                max="10"
              />

              <h3 className="col-span-full text-lg font-semibold">Sleep</h3>

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

              <h3 className="col-span-full text-lg font-semibold">Mentality</h3>

              <Input
                name="stressLevel"
                label={formLabels['stressLevel']}
                type="number"
                id="stressLevel"
                min="1"
                max="10"
              />

              <TextArea
                name="mentalState"
                label={formLabels['mentalState']}
                id="mentalState"
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

              <TextArea
                name="additionalComments"
                label={formLabels['additionalComments']}
                id="additionalComments"
                containerProps={{
                  style: { gridColumnStart: 1, gridColumnEnd: -1 },
                }}
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
