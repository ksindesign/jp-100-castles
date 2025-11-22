import Areas from '@/app/ui/layout/Areas';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import { CHUBU_PREFECTURES } from './[slug]/page';
import PrefList from '@/app/ui/components/PrefList';

export const regionName = '中部';
export const regionSlug = 'chubu';

export const metadata: Metadata = {
  title: `${regionName}地區 | TABIPAL - 與你探索日本的魅力所在`,
  description: `一個為你網羅${regionName}旅遊相關資訊的網站`,
};

export default function ChubuPage() {
  return (
    <div className=''>
      <NextBreadcrumb
        homeElement
        separator={<span> / </span>}
        activeClasses='font-bold'
        listClasses='flex'
        containerClasses='w-full p-4 '
        capitalizeLinks
      />
      <h1 className='text-3xl'>{regionName}地區</h1>
      <PrefList
        region={regionSlug}
        prefList={CHUBU_PREFECTURES}
        regionName={regionName}
      />
      <Areas areaName={regionName} />
    </div>
  );
}
