import React from 'react';
import Card from '@/app/ui/components/Card';
import {
  GetDestinationsByTaxonomy,
  filterByHyakumeijo,
} from '@/app/lib/api';

type Areas = {
  areaName: string;
};

export default async function Areas({ areaName }: Areas) {
  // Fetch only destinations in the specific area by filtering the genreDestination taxonomy
  const allDestinations = await GetDestinationsByTaxonomy(areaName, 100);
  // Filter for 百名城 only
  const destinations = filterByHyakumeijo(allDestinations);

  return (
    <section className='flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center'>
        {destinations.map((destination) => (
          <article key={destination.id}>
            <Card key={destination.id} item={destination} />
          </article>
        ))}
      </div>

      {destinations.length === 0 && (
        <div className='py-12 text-center'>
          <p className='text-gray-600'>暫沒有景點</p>
        </div>
      )}
    </section>
  );
}
