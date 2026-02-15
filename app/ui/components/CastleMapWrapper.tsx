'use client';

import dynamic from 'next/dynamic';
import { Destination } from '@/app/lib/types';

// Dynamically import the actual map component with SSR disabled
// This must be done in a Client Component
const CastleMap = dynamic(() => import('./CastleMap'), {
  ssr: false,
  loading: () => (
    <div className='h-[75vh] w-full bg-gray-50 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-theme-300 mb-4'></div>
      <p className='text-gray-500 font-medium'>載入地圖數據中...</p>
    </div>
  ),
});

interface CastleMapWrapperProps {
  destinations: Destination[];
}

export default function CastleMapWrapper({
  destinations,
}: CastleMapWrapperProps) {
  return <CastleMap destinations={destinations} />;
}
