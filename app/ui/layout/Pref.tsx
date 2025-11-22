import Card from '@/app/ui/components/Card';
import {
  GetDestinationsByTaxonomy,
  filterByHyakumeijo,
} from '@/app/lib/api';

interface PrefProps {
  prefectureName: string;
}

export default async function Pref({ prefectureName }: PrefProps) {
  // Fetch destinations by prefecture taxonomy
  const allDestinations = await GetDestinationsByTaxonomy(prefectureName, 100);
  // Filter for 百名城 only
  const destinations = filterByHyakumeijo(allDestinations);

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-10'>
        {destinations.map((destination) => (
          <article key={destination.id}>
            <Card item={destination} />
          </article>
        ))}
      </div>

      {destinations.length === 0 && (
        <div className='py-12 text-center'>
          <p className='text-gray-600'>暫時還沒有景點資料</p>
        </div>
      )}
    </section>
  );
}
