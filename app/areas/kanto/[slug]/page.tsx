import Pref from '@/app/ui/layout/Pref';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import { notFound } from 'next/navigation';
import PrefList from '@/app/ui/components/PrefList';

import { regionName, regionSlug } from '../page';
import { siteName } from '@/app/constants/list';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const KANTO_PREFECTURES: Record<string, string> = {
  tokyo: '東京',
  saitama: '埼玉',
  gunma: '群馬',
  tochigi: '栃木',
  chiba: '千葉',
  ibaragi: '茨城',
  kanagawa: '神奈川',
};

// Generate static params for all Tohoku prefectures at build time
export async function generateStaticParams() {
  return Object.keys(KANTO_PREFECTURES).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = KANTO_PREFECTURES[slug];

  if (!prefectureName) {
    return {
      title: '找不到這個縣',
    };
  }

  return {
    title: `${prefectureName} | ${regionName}地區 | ${siteName}`,
    description: `探索${prefectureName}的觀光資訊`,
  };
}

export default async function KantoPrefecturePage({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = KANTO_PREFECTURES[slug];

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
        <p className='text-xl text-gray-600'>探索{prefectureName}的魅力城堡</p>
        <PrefList
          region={regionSlug}
          prefList={KANTO_PREFECTURES}
          regionName={regionName}
          prefectureName={slug}
          regionPage={false}
        />
      </section>

      <Pref prefectureName={slug} />
    </div>
  );
}
