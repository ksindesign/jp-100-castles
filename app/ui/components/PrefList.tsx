import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetTaxonomyWithDestinations } from '@/app/lib/api';
import Link from 'next/link';

export interface PrefListProps {
  region?: string;
  prefList: Record<string, string>;
  regionName?: string;
  prefectureName?: string;
  regionPage?: boolean;
}

export default async function PrefList({
  prefList,
  region,
  regionName,
  prefectureName,
  regionPage,
}: PrefListProps) {
  // Convert the AREA_PREFECTURES object to an array of entries
  const prefectureEntries = Object.entries(prefList);

  // Fetch taxonomy data with description using the Japanese prefecture name
  const taxonomyData = await GetTaxonomyWithDestinations(prefectureName || regionName || '');
  const description = taxonomyData?.allGenreDestination.nodes[0]?.description;

  return (
    // for the nav 'border border-grey-100 p-10 px-20 rounded-lg shadow-md border-t-4  border-t-theme-300'
    <nav className='mb-8'>
      {description && (
        <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
          <p className='text-gray-700 leading-relaxed'>{description}</p>
        </div>
      )}
      {regionPage ? (
        <h2 className='text-xl font-semibold mb-4 mt-2 text-grey-500 '>
          <FontAwesomeIcon
            icon={faCircleInfo}
            color='#aaa'
            width={12}
            className='mr-2'
          />
          這些縣都是屬於{regionName}地區的喔
        </h2>
      ) : (
        <h2 className='text-xl font-semibold mb-4 mt-2 text-grey-500 '>
          <FontAwesomeIcon
            icon={faCircleInfo}
            color='#aaa'
            width={12}
            className='mr-2'
          />
          探索{regionName}地區的其他縣！
        </h2>
      )}
      <ul className='flex flex-wrap gap-3 max-w-[800] mt-4'>
        {prefectureEntries.map(([slug, name]) => (
          <li key={slug}>
            <Link
              href={`/areas/${region}/${slug}`}
              className='inline-block px-4 py-2 bg-theme-300 text-white rounded-md hover:bg-theme-400 transition-colors'
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
