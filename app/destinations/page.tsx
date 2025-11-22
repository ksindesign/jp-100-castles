//　観光地一覧のページ

import { getDestinations, filterByHyakumeijo } from '@/app/lib/api';
import Card from '../ui/components/Card';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';

export default async function DestinationsPage() {
  // Fetch destinations on the server
  const allDestinations = await getDestinations(100);

  // Filter destinations that have "百名城" in their labels
  const destinations = filterByHyakumeijo(allDestinations);

  console.log('Total destinations:', allDestinations.length);
  console.log('Filtered destinations with 百名城:', destinations.length);

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
      <section className='mb-12 mx-4 w-full'>
        <h2 className='mb-4 text-4xl font-bold my-10'>日本百名城</h2>
        <p className='text-2xl'>探索日本百名城的魅力！</p>
      </section>

      <section className='mx-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-10'>
          {destinations.map((destination) => (
            <Card key={destination.id} item={destination} />
          ))}
        </div>

        {destinations.length === 0 && (
          <div className='py-12 text-center'>
            <p className='text-gray-600 text-xl'>暫沒有標記為「百名城」的景點</p>
            <p className='text-gray-500 mt-2'>
              已搜尋 {allDestinations.length} 個景點
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
