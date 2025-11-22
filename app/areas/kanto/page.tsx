import Areas from '@/app/ui/layout/Areas';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import PrefList from '@/app/ui/components/PrefList';
import { KANTO_PREFECTURES } from './[slug]/page';

export const regionSlug = 'kanto';
export const regionName = '關東';

export const metadata: Metadata = {
  title: `${regionName}地區 | TABIPAL - 與你探索日本的魅力所在`,
  description: `一個為你網羅${regionName}旅遊相關資訊的網站`,
};

export default function KantoPage() {
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
        prefList={KANTO_PREFECTURES}
        region={regionSlug}
        regionName={regionName}
      />
      <Areas areaName={regionSlug} />
    </div>
  );
}
