import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import { KYUSHU_PREFECTURES } from './[slug]/page';
import PrefList from '@/app/ui/components/PrefList';
import Areas from '@/app/ui/layout/Areas';

export const regionName = '九州';
const regionSlug = 'kyushu';

export const metadata: Metadata = {
  title: `${regionName}地區 | 日本百名城 - 與你探索日本的魅力所在`,
  description: `一個為你網羅${regionName}旅遊相關資訊的網站`,
};

export default function KyushuPage() {
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
        region={regionSlug}
        prefList={KYUSHU_PREFECTURES}
        regionName={regionName}
      />
      <Areas areaName={regionSlug} />
    </div>
  );
}
