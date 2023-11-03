import { type MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents) {
  return {
    table: (props: any) => (
      <div className="overflow-auto">
        <table {...props} />
      </div>
    ),
    ...components,
  };
}
