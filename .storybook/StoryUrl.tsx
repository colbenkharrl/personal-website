import { SnackBar } from '@/components/SnackBar';
import { StoryContext } from '@storybook/react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FC } from 'react';

export type StoryURLProps = {
  context: StoryContext;
};

export const StoryURL: FC<StoryURLProps> = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-20" />
      <SnackBar>
        <div className="fle-row items-center justify-center">
          <p className="mb-2">
            <strong className="font-semibold">URL:</strong> {pathname}
          </p>
          <div className="flex-grow" />
          <ThemeToggle />
        </div>
      </SnackBar>
    </>
  );
};
