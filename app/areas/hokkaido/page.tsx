import Areas from '@/app/ui/layout/Areas';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import { Metadata } from 'next';
import { siteName } from '@/app/constants/list';

export const regionName = '北海道';
export const regionSlug = 'hokkaido';

export const metadata: Metadata = {
  title: `${regionName}地區 | ${siteName}`,
  description: `一個為你網羅${regionName}地區的旅遊資訊網站`,
};

export default function HokkaidoPage() {
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
      <Areas areaName={regionSlug} />
    </div>
  );
}
