import Pref from '@/app/ui/layout/Pref';
import PrefList from '@/app/ui/components/PrefList';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import { notFound } from 'next/navigation';
import { regionName, regionSlug } from '../page';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Prefecture mapping: slug -> Japanese name
export const CHUGOKU_PREFECTURES: Record<string, string> = {
  totori: '鳥取',
  shimane: '島根',
  okayama: '岡山',
  hiroshima: '廣島',
  yamaguchi: '山口',
};

// Generate static params for all Tohoku prefectures at build time
export async function generateStaticParams() {
  return Object.keys(CHUGOKU_PREFECTURES).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = CHUGOKU_PREFECTURES[slug];

  if (!prefectureName) {
    return {
      title: '找不到這個縣',
    };
  }

  return {
    title: `${prefectureName} | ${regionName}地區 | Tabipal`,
    description: `探索${prefectureName}的觀光景點、美食、住宿等資訊`,
  };
}

export default async function TohokuPrefecturePage({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = CHUGOKU_PREFECTURES[slug];

  // If the slug doesn't match any prefecture, return 404
  if (!prefectureName) {
    notFound();
  }

  return (
    <div className=' flex flex-col w-full'>
      <NextBreadcrumb
        homeElement
        separator={<span> / </span>}
        activeClasses='font-bold'
        listClasses='flex'
        containerClasses='w-full p-4'
        capitalizeLinks
      />

      <section className='mb-12 mx-4'>
        <h1 className='mb-4 text-4xl font-bold my-10'>
          {prefectureName}
          <span className='text-2xl text-gray-500 ml-3'>中國地區</span>
        </h1>
        <p className='text-xl text-gray-600'>探索{prefectureName}的魅力景點</p>
        <PrefList
          region={regionSlug}
          prefList={CHUGOKU_PREFECTURES}
          regionName={regionName}
        />
      </section>

      <Pref prefectureName={slug} />
    </div>
  );
}
