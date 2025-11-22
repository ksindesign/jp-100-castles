import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import { notFound } from 'next/navigation';
import Pref from '@/app/ui/layout/Pref';
import { regionName } from '../page';
import PrefList from '@/app/ui/components/PrefList';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Prefecture mapping: slug -> Japanese name
export const SHIKOKU_PREFECTURES: Record<string, string> = {
  ehime: '愛媛',
  tokushima: '徳島',
  kagawa: '香川',
  kouchi: '高知',
};

// Generate static params for all Shikoku prefectures at build time
export async function generateStaticParams() {
  return Object.keys(SHIKOKU_PREFECTURES).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const prefectureName = SHIKOKU_PREFECTURES[slug];

  if (!prefectureName) {
    return {
      title: '找不到這個縣',
    };
  }

  return {
    title: `${prefectureName} | 四國地區 | Tabipal`,
    description: `探索${prefectureName}的觀光景點、美食、住宿等資訊`,
  };
}

export default async function ShikokuPrefecturePage({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = SHIKOKU_PREFECTURES[slug];

  // If the slug doesn't match any prefecture, return 404
  if (!prefectureName) {
    notFound();
  }

  return (
    <div className='flex flex-col w-full'>
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
          <span className='text-2xl text-gray-500 ml-3'>{regionName}地區</span>
        </h1>
        <p className='text-xl text-gray-600'>探索{prefectureName}的魅力景點</p>
        <PrefList
          region='shikoku'
          regionName={regionName}
          prefList={SHIKOKU_PREFECTURES}
        />
      </section>
      <Pref prefectureName={slug} />
    </div>
  );
}
