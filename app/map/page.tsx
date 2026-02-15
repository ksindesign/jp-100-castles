import { getDestinations, filterByHyakumeijo } from '@/app/lib/api';
import { Metadata } from 'next';
import { siteName } from '@/app/constants/list';
import CastleMapWrapper from '@/app/ui/components/CastleMapWrapper';

// Metadata for the map page
export const metadata: Metadata = {
  title: `${siteName}地圖 | 日本名城探索`,
  description:
    '透過國土地理院地圖探索日本著名的100座城堡，查看分佈位置並深入了解每座名城的歷史。',
};

export default async function MapPage() {
  // Fetch destinations and filter for 百名城 only
  const allDestinations = await getDestinations(100);
  const destinations = await filterByHyakumeijo(allDestinations);

  return (
    <main className='max-w-7xl mx-auto px-4 py-12'>
      <div className='mb-10 text-center'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          日本百名城地圖
        </h1>
        <div className='h-1 w-20 bg-theme-300 mx-auto mb-6'></div>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          透過國土地理院提供的詳細地圖，探索分佈在全日本的 100 座著名城堡。
          點擊地圖上的標記，即可預覽城堡資訊並前往詳細介紹頁面。
        </p>
      </div>

      <section className='relative group'>
        <CastleMapWrapper destinations={destinations} />
      </section>
    </main>
  );
}
