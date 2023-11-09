import type { Metadata } from 'next';
import '@/styles/tailwind.css';
import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: {
    template: '%s - Matt Kharrl',
    default: 'Matt Kharrl',
  },
  description: 'Personal website and professional portfolio for Matt Kharrl.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
