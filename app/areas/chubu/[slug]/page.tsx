import Pref from '@/app/ui/layout/Pref';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import { notFound } from 'next/navigation';
import { regionName, regionSlug } from '../page';
import PrefList from '@/app/ui/components/PrefList';
import { siteName } from '@/app/constants/list';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const CHUBU_PREFECTURES: Record<string, string> = {
  nagano: '長野',
  niigata: '新潟',
  toyama: '富山',
  ishikawa: '石川',
  fukui: '福井',
  gifu: '岐阜',
  aichi: '愛知',
  shizuoka: '静岡',
  yamanashi: '山梨',
};

// Generate static params for all Tohoku prefectures at build time
export async function generateStaticParams() {
  return Object.keys(CHUBU_PREFECTURES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = CHUBU_PREFECTURES[slug];

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

export default async function TohokuPrefecturePage({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = CHUBU_PREFECTURES[slug];

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
          prefList={CHUBU_PREFECTURES}
          region={regionSlug}
          regionName={regionName}
          prefectureName={slug}
        />
      </section>
      <Pref prefectureName={slug} />
    </div>
  );
}
