import { type MDXComponents } from 'mdx/types';
import clsx from 'clsx';

export function useMDXComponents(components: MDXComponents) {
  return {
    table: (props: any) => (
      <div className="overflow-auto">
        <table {...props} />
      </div>
    ),
    li: ({ className, ...props }: any) => (
      <li className={clsx('my-1', className)} {...props} />
    ),
    ...components,
  };
}
