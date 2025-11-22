import NextBreadcrumb from '@/app/ui/components/NextBreadcrumb';
import RegionCard from '../ui/components/RegionCard';

export default function DestinationsPage() {
  return (
    <div className='max-w-[1200] flex flex-col'>
      <NextBreadcrumb
        homeElement
        separator={<span> / </span>}
        activeClasses='font-bold'
        listClasses='flex'
        containerClasses='w-full p-4'
        capitalizeLinks
      />
      <section className='mb-12 mx-4'>
        <h2 className='mb-4 text-4xl font-bold my-10'>百名城一覽</h2>
        <p className='text-2xl'>來一起探索日本百名城的魅力吧！</p>
      </section>

      <section className='flex gap-6 flex-wrap justify-center'>
        <RegionCard />
      </section>
    </div>
  );
}
