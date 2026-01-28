import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import PrefList from '@/app/ui/components/PrefList';
import { TOHOKU_PREFECTURES } from './[slug]/page';
import { Metadata } from 'next';
import Areas from '@/app/ui/layout/Areas';
import { siteName } from '@/app/constants/list';

export const regionName = '東北';
const regionSlug = 'tohoku';

export const metadata: Metadata = {
  title: `${regionName}地區 | ${siteName}`,
  description: `一個為你網羅${regionName}地區的旅遊資訊網站`,
};

export default function TohokuPage() {
  return (
    <div className=''>
      <NextBreadcrumb
        homeElement
        separator={<span> / </span>}
        activeClasses='font-bold'
        listClasses='flex'
        containerClasses='w-full p-4'
        capitalizeLinks
      />
      <h1 className='text-3xl'>{regionName}地區</h1>
      <PrefList
        region={regionSlug}
        prefList={TOHOKU_PREFECTURES}
        regionName={regionName}
      />
      <Areas areaName={regionSlug} />
    </div>
  );
}
