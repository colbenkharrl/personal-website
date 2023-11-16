import { FC, ReactNode } from 'react';
import { IconComponent } from '../Icons';

export type PortfolioSectionProps = {
  Icon: IconComponent;
  title: string;
  children: ReactNode;
};

export const PortfolioSection: FC<PortfolioSectionProps> = ({
  Icon,
  title,
  children,
}) => {
  return (
    <div
      className="my-8 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      data-testid="PortfolioSection"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Icon className="h-6 w-6 flex-none" />
        <span className="ml-3">{title}</span>
      </h2>
      {children}
    </div>
  );
};
