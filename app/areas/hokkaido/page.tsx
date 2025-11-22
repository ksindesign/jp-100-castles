import Areas from '@/app/ui/layout/Areas';
import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';

export const regionName = '北海道';

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
      <h1 className='text-3xl'>北海道地區</h1>
      <Areas areaName={regionName} />
    </div>
  );
}
