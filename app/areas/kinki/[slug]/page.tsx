import Pref from '@/app/ui/layout/Pref';
import PrefList from '@/app/ui/components/PrefList';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import { notFound } from 'next/navigation';
import { regionName, regionSlug } from '../page';
import { siteName } from '@/app/constants/list';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Prefecture mapping: slug -> Japanese name
export const KINKI_PREFECTURES: Record<string, string> = {
  kyoto: '京都',
  osaka: '大阪',
  nara: '奈良',
  wakayama: '和歌山',
  shiga: '滋賀',
  hyogo: '兵庫',
  mie: '三重',
};

// Generate static params for all Tohoku prefectures at build time
export async function generateStaticParams() {
  return Object.keys(KINKI_PREFECTURES).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const prefectureName = KINKI_PREFECTURES[slug];

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
  const prefectureName = KINKI_PREFECTURES[slug];

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
          prefList={KINKI_PREFECTURES}
          region={regionSlug}
          regionName={regionName}
          prefectureName={slug}
        />
      </section>
      <Pref prefectureName={slug} />
    </div>
  );
}
