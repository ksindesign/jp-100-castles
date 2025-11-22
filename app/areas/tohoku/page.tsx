import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import PrefList from '@/app/ui/components/PrefList';
import { TOHOKU_PREFECTURES } from './[slug]/page';
import { Metadata } from 'next';
import Areas from '@/app/ui/layout/Areas';

export const regionName = '東北';
const regionSlug = 'tohoku';

export const metadata: Metadata = {
  title: '東北地區 | TABIPAL - 與你探索日本的魅力所在',
  description: '一個為你網羅東北旅遊相關資訊的網站',
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
