import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC } from 'react';

export type SelectProps = ComponentPropsWithoutRef<'select'> & {
  name: string;
  label?: string;
  helperText?: string;
  containerProps?: ComponentPropsWithoutRef<'div'>;
  options: { name?: string; value: string }[];
};

export const Select: FC<SelectProps> = ({
  name,
  label,
  helperText,
  containerProps,
  required,
  className,
  options,
  ...props
}) => {
  return (
    <div {...containerProps}>
      {label ? (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-200"
        >
          {label}
          {required ? <span className="text-red-500">{' *'}</span> : null}
        </label>
      ) : null}
      <div className="relative mt-2 rounded-md shadow-sm">
        <select
          {...props}
          name={name}
          className={clsx(
            className,
            'block w-full rounded-md border-0 bg-transparent py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500  dark:text-zinc-200 dark:focus:ring-yellow-400 sm:text-sm sm:leading-6',
          )}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name || option.value}
            </option>
          ))}
        </select>
      </div>
      {helperText ? (
        <p
          className="mt-2 text-sm text-zinc-800 dark:text-zinc-200"
          id={`${name}-helper-text`}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
};
