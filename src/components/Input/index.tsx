import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC } from 'react';

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  name: string;
  label?: string;
  valid?: boolean;
  invalidText?: string;
  helperText?: string;
  containerProps?: ComponentPropsWithoutRef<'div'>;
};

export const Input: FC<InputProps> = ({
  name,
  label,
  valid = true,
  invalidText,
  helperText,
  containerProps,
  required,
  className,
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
        <input
          {...props}
          name={name}
          className={clsx(
            className,
            'block w-full rounded-md border-0 bg-transparent py-1.5 text-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500  dark:text-zinc-200 dark:focus:ring-yellow-400 sm:text-sm sm:leading-6',
            !valid &&
              'text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500',
          )}
          aria-invalid={!valid}
        />
        {!valid ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        ) : null}
      </div>
      {helperText ? (
        <p
          className="mt-2 text-sm text-zinc-800 dark:text-zinc-200"
          id={`${name}-helper-text`}
        >
          {helperText}
        </p>
      ) : null}
      {!valid ? (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {invalidText || 'Invalid input.'}
        </p>
      ) : null}
    </div>
  );
};
