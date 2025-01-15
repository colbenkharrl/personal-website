import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

export interface Role {
  company: string;
  title: string;
  logo: ImageProps['src'];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
  url: string;
  duration: string;
}

export function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === 'string' ? role.start : role.start.label;
  const startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  return (
    <li
      className="group relative flex items-start gap-2 sm:gap-4"
      data-testid="Role"
    >
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className="relative z-10 h-7 w-7"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="relative z-10 flex w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
          <div className="flex-grow" />
          <div className="flex flex-col items-end">
            <p className="relative z-10 text-xs text-zinc-400 dark:text-zinc-500">
              <time className="relative z-10" dateTime={startDate}>
                {startLabel}
              </time>{' '}
              <span className="relative z-10" aria-hidden="true">
                —
              </span>{' '}
              <time className="relative z-10" dateTime={endDate}>
                {endLabel}
              </time>{' '}
              ({role.duration})
            </p>
          </div>
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          <div className="absolute -inset-x-2 -inset-y-2 z-0 scale-95 rounded-lg bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50" />
          <Link href={role.url}>
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
            <span className="relative z-10  group-hover:text-amber-500">
              {role.title}
            </span>
            <br />
          </Link>
        </dd>
      </dl>
    </li>
  );
}
