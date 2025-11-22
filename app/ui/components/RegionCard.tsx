import Link from 'next/link';
import { PREFLIST } from '@/app/api/data';

export default function RegionCard() {
  return (
    <>
      {Object.entries(PREFLIST).map(([key, value]) => {
        return (
          <Link key={key} href={`/areas/${key}`}>
            <div
              style={{
                backgroundImage: `url("/images/regions/${key}.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className='md:w-[300] md:h-[150] w-[96vw] h-[80] cursor-pointer border overflow-hidden inline-block rounded-xl aspect-video mx-auto'
            >
              <div className='bg-black/50 w-full h-full relative inline-flex items-center justify-center'>
                <p className='z-2 text-white absolute inset font-bold text-2xl text-shadow-2xs'>
                  {value}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
