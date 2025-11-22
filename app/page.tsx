import React from 'react';
import Link from 'next/link';
import { getDestinations, filterByHyakumeijo } from './lib/api';
import RegionCard from './ui/components/RegionCard';
import NavLinks from './ui/components/NavLinks';
import DestinationsCarousel from './ui/components/DestinationsCarousel';

export default async function Home() {
  // Fetch destinations and filter for 百名城 only
  const allDestinations = await getDestinations(100);
  const destinations = filterByHyakumeijo(allDestinations);

  return (
    <React.Fragment>
      <div id='home-nav' className='hidden justify-center'>
        <NavLinks />
      </div>

      <main className='flex flex-col mb-[100] max-w-7xl mx-auto'>
        {/* About */}
        <section className='w-full'>
          <h2 className='text-3xl font-bold self-start w-full mx-auto lg:max-w-5xl md:max-w-lg mb-2'>
            什麼是日本100名城？
          </h2>
          <p className='w-[80%] mx-auto'>
            「日本100名城」是由公益財團法人日本城郭協會於2006年選定，旨在作為探索全國各地名城的參考，選出了日本的100座著名城堡。這項評選是協會迎接2007年成立40週年紀念事業的一部分，於2005年對全日本被譽為名城的城郭進行公開徵選，並在2006年4月6日「城之日」正式認定（發表於同年2月13日）。這100座名城是根據作為觀光地的知名度、作為文化財和歷史的重要性、復原的精確性等標準，由城堡愛好者與專家們進行審查選出。目前還有「續日本100名城」被選定。
          </p>
        </section>
        {/* Regions Section */}
        <section className='my-[60] w-full'>
          <h2 className='text-3xl font-bold self-start w-full mx-auto lg:max-w-5xl md:max-w-lg'>
            按地區探索
          </h2>
          <div className='my-4 md:max-w-5xl w-full mx-auto flex flex-wrap justify-center gap-2'>
            <RegionCard />
          </div>
        </section>
        {/* Destinations Section */}
        <section className='my-[60]'>
          <div className='flex items-end justify-between'>
            <h2 className='text-3xl font-bold'>日本名城</h2>
            <Link
              href='/destinations'
              className='border-theme-300 border text-theme-300 hover:bg-theme-300 hover:text-white rounded-4xl text-sm font-medium px-4 py-1 hover:underline hover:underline-offset-4'
            >
              看更多 →
            </Link>
          </div>
          <div className='mx-auto max-w-7xl px-4 carousel_home-destination'>
            <DestinationsCarousel destinations={destinations} />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
