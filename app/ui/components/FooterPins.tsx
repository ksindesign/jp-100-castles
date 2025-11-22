import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RegionPins({ className }: { className: string }) {
  const locations = [
    {
      name: '北海道',
      url: '/areas/hokkaido',
    },
    {
      name: '關東',
      url: '/areas/kanto',
    },
    {
      name: '中部',
      url: '/areas/chubu',
    },
    {
      name: '東北',
      url: '/areas/tohoku',
    },
    {
      name: '近畿',
      url: '/areas/kinki',
    },
    {
      name: '四國',
      url: '/areas/shikoku',
    },
    {
      name: '中國',
      url: '/areas/chugoku',
    },
    {
      name: '九州',
      url: '/areas/kyushu',
    },
  ];

  return (
    <ul className={`${className} flex flex-wrap list-none`}>
      {locations.map((location) => (
        <Link key={location.url} href={location.url}>
          <li className='inline-flex flex-nowrap md:items-center gap-0.5'>
            <FontAwesomeIcon width={10} icon={faLocationDot} color='#ff2553' />{' '}
            {location.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}
