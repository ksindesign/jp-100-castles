import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import { notFound } from 'next/navigation';
import Pref from '@/app/ui/layout/Pref';
import PrefList from '@/app/ui/components/PrefList';
import { regionName } from '../page';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Prefecture mapping: slug -> Japanese name
export const TOHOKU_PREFECTURES: Record<string, string> = {
  iwate: '岩手',
  miyagi: '宮城',
  fukushima: '福島',
  akita: '秋田',
  aomori: '青森',
};

// Generate static params for all Tohoku prefectures at build time
export async function generateStaticParams() {
  return Object.keys(TOHOKU_PREFECTURES).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = TOHOKU_PREFECTURES[slug];

  if (!prefectureName) {
    return {
      title: 'Prefecture Not Found',
    };
  }

  return {
    title: `${prefectureName} | 東北地區 | Tabipal`,
    description: `探索${prefectureName}的觀光景點、美食、住宿等資訊`,
  };
}

export default async function TohokuPrefecturePage({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = TOHOKU_PREFECTURES[slug];

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
          <span className='text-2xl text-gray-500 ml-3'>東北地區</span>
        </h1>
        <p className='text-xl text-gray-600'>探索{prefectureName}的魅力景點</p>
        <PrefList
          region='tohoku'
          prefList={TOHOKU_PREFECTURES}
          regionName={regionName}
        />
      </section>

      <Pref prefectureName={slug} />
    </div>
  );
}
