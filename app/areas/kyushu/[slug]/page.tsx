import Pref from '@/app/ui/layout/Pref';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import { notFound } from 'next/navigation';
import { regionName } from '../page';
import PrefList from '@/app/ui/components/PrefList';
import { siteName } from '@/app/constants/list';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const KYUSHU_PREFECTURES: Record<string, string> = {
  fukuoka: '福岡',
  kumamoto: '熊本',
  nagasaki: '長崎',
  oita: '大分',
  miyazaki: '宮崎',
  saga: '佐賀',
  kagoshima: '鹿児島',
  okinawa: '沖縄',
};

// Generate static params for all Tohoku prefectures at build time
export async function generateStaticParams() {
  return Object.keys(KYUSHU_PREFECTURES).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = KYUSHU_PREFECTURES[slug];

  if (!prefectureName) {
    return {
      title: '找不到這個縣',
    };
  }

  return {
    title: `${prefectureName} | ${regionName}地區 | ${siteName}`,
    description: `探索${prefectureName}的資訊`,
  };
}

export default async function TohokuPrefecturePage({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = KYUSHU_PREFECTURES[slug];

  // If the slug doesn't match any prefecture, return 404
  if (!prefectureName) {
    notFound();
  }

  return (
    <div className='w-full flex flex-col'>
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
          region='kyushu'
          regionName={regionName}
          prefList={KYUSHU_PREFECTURES}
          prefectureName={slug}
        />
      </section>
      <Pref prefectureName={slug} />
    </div>
  );
}
