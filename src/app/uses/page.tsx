import { SimpleLayout } from '@/components/SimpleLayout';
import { Tool } from '@/components/Tool';
import { ToolsSection } from '@/components/ToolsSection';

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
};

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="To be completed."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
            To be completed.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            To be completed.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            To be completed.
          </Tool>
          <Tool title="Apple Magic Trackpad">To be completed.</Tool>
          <Tool title="Herman Miller Aeron Chair">To be completed.</Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Sublime Text 4">To be completed.</Tool>
          <Tool title="iTerm2">To be completed.</Tool>
          <Tool title="TablePlus">To be completed.</Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">To be completed.</Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">To be completed.</Tool>
          <Tool title="Reflect">To be completed.</Tool>
          <Tool title="SavvyCal">To be completed.</Tool>
          <Tool title="Focus">To be completed.</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
