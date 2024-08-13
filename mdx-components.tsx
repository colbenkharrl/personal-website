import { type MDXComponents } from 'mdx/types';
import clsx from 'clsx';
import { slugify } from '@/util/slugify';

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

    // Apply slug ids to headings for anchor links
    h1: (props: any) => (
      <h1
        {...props}
        id={
          typeof props.children === 'string'
            ? slugify(props.children)
            : props.id
        }
      />
    ),
    h2: (props: any) => (
      <h2
        {...props}
        id={
          typeof props.children === 'string'
            ? slugify(props.children)
            : props.id
        }
      />
    ),
    h3: (props: any) => (
      <h3
        {...props}
        id={
          typeof props.children === 'string'
            ? slugify(props.children)
            : props.id
        }
      />
    ),
    h4: (props: any) => (
      <h4
        {...props}
        id={
          typeof props.children === 'string'
            ? slugify(props.children)
            : props.id
        }
      />
    ),

    ...components,
  };
}
