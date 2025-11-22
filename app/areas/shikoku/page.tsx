import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import PrefList from '@/app/ui/components/PrefList';
import { SHIKOKU_PREFECTURES } from './[slug]/page';
import Areas from '@/app/ui/layout/Areas';

export const regionName = '四國';
const regionSlug = 'shikoku';

export const metadata: Metadata = {
  title: `${regionName}地區 | TABIPAL - 與你探索日本的魅力所在`,
  description: `一個為你網羅${regionName}旅遊相關資訊的網站`,
};

export default async function ShikokuPage() {
  return (
    <div className='w-full'>
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
        prefList={SHIKOKU_PREFECTURES}
        region={regionSlug}
        regionName={regionName}
      />
      <Areas areaName={regionSlug} />
    </div>
  );
}
