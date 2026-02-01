import Image from 'next/image';
import Link from 'next/link';
import { Destination } from '@/app/lib/types';
import styles from '@/app/ui/styles/destinations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  item: Destination;
}

export default function Card({ item }: CardProps) {
  const href = `/destinations/${item.slug}`;
  const imageUrl = item.featuredImage?.node.sourceUrl || '/placeholder.jpg';
  const imageAlt = item.featuredImage?.node.altText || item.title;

  // Type guard to check if item is Destination
  const isDestination = (item: Destination): item is Destination => {
    return 'destinations' in item;
  };

  // Strip HTML from excerpt if it exists (works for both Destination and RelatedSpot)
  const excerpt = item.excerpt
    ? item.excerpt.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
    : '';

  // List of broad regional areas to exclude (keep only prefecture-level areas)
  const REGIONAL_AREAS = [
    '關東',
    '中部',
    '近畿',
    '北海道',
    '東北',
    '中國',
    '四國',
    '九州',
  ];

  const areas = isDestination(item)
    ? item.genreDestination?.nodes
        ?.map((node) => node.name)
        .filter(
          (name): name is string =>
            name !== undefined && !REGIONAL_AREAS.includes(name),
        ) || []
    : [];

  const hasArea = areas.length > 0;

  return (
    <Link
      href={href}
      className={`${styles.card} max-w-[400] min-w-[250] inline-block w-full overflow-hidden mx-auto  py-5`}
    >
      <div className='cardInner'>
        <div className='imgContainer relative rounded-md text-center overflow-hidden max-h-[200]'>
          <Image
            src={imageUrl}
            alt={imageAlt}
            height={800}
            width={600}
            className='object-cover rounded-md object-center min-h-[200] hover:scale-105 transition-all ease-in-out duration-75'
          />

          {/* 地域ラベル */}
          {hasArea ? (
            <div className='mb-2 flex flex-wrap gap-1  justify-center h-[20]'>
              {areas.map((area: string, index: number) => (
                <span
                  key={index}
                  className={`${styles.metaAreas} ${styles.meta} px-4 rounded-sm text-sm  bg-theme-300 text-white`}
                >
                  <FontAwesomeIcon icon={faLocationDot} width={10} />
                  {area}
                </span>
              ))}
            </div>
          ) : (
            <div className='mb-2 flex flex-wrap gap-1  justify-center h-[20]'>
              <span
                className={`${styles.metaAreas} ${styles.meta} px-4 rounded-sm text-sm  bg-theme-300 text-white`}
              >
                <FontAwesomeIcon icon={faLocationDot} width={10} />
                北海道
              </span>
            </div>
          )}
        </div>
      </div>

      <div className={`${styles.cardContent} my-4`}>
        <h3 className='text-xl font-semibold  line-clamp-2 my-2'>
          {item.title}
        </h3>
        {excerpt && (
          <p
            className={`${styles.excerpt} w-full text-sm text-gray-500 line-clamp-3`}
          >
            {excerpt.slice(0, 30) + '...'}
          </p>
        )}
      </div>
    </Link>
  );
}
