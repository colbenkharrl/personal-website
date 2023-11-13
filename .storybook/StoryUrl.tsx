import { SnackBar } from '@/components/SnackBar';
import { StoryContext } from '@storybook/react';
import { usePathname } from 'next/navigation';
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
        <strong className="font-semibold">URL:</strong> {pathname}
      </SnackBar>
    </>
  );
};
