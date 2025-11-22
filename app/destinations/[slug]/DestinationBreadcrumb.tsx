'use client';

import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';

interface DestinationBreadcrumbProps {
  slug: string;
  title: string;
}

export default function DestinationBreadcrumb({
  slug,
  title,
}: DestinationBreadcrumbProps) {
  // Create custom labels mapping the slug to the Japanese title
  const customLabels: Record<string, string> = {
    [slug]: title,
  };

  return (
    <NextBreadcrumb
      homeElement={'主頁'}
      separator={<span> / </span>}
      containerClasses={'flex py-5 flex-wrap'}
      listClasses={'hover:underline mx-2'}
      activeClasses={'underline underline-offset-4'}
      customLabels={customLabels}
    />
  );
}
