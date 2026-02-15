//　観光地一覧のページ

import { getDestinations, filterByHyakumeijo } from '@/app/lib/api';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import DestinationsClient from '../ui/components/DestinationsClient';

export default async function DestinationsPage() {
  // Fetch destinations on the server
  const allDestinations = await getDestinations(100);

  // Filter destinations that have "百名城" in their labels
  const destinations = await filterByHyakumeijo(allDestinations);

  return (
    <div className='mx-auto w-full flex flex-col'>
      <NextBreadcrumb
        homeElement
        separator={<span> / </span>}
        activeClasses='font-bold'
        listClasses='flex'
        containerClasses='w-full p-4'
        capitalizeLinks
      />
      <DestinationsClient
        destinations={destinations}
        allDestinationsCount={allDestinations.length}
      />
    </div>
  );
}
