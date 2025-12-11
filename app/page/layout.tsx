'use client';
import NextBreadcrumb from '../ui/components/NextBreadcrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='md:flex mx-auto gap-30 mt-10 md:w-10/12 md:justify-center max-w-[800]'>
      <div className='md:overflow-hidden mx-4 min-h-[80vh] md:w-7xl md:min-w-[800] w-full'>
        <NextBreadcrumb
          homeElement='Home'
          separator={<span> / </span>}
          activeClasses='underline underline-offset-4'
          containerClasses=''
          capitalizeLinks
          customLabels={null}
        />
        <div className='p-6 md:overflow-y-auto md:p-12'>{children}</div>
      </div>
    </div>
  );
}
