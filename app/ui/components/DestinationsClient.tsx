'use client';

import { useState, useEffect } from 'react';
import Card from './Card';
import DestinationFilter from './DestinationFilter';
import { Destination } from '@/app/lib/types';
import RegionPins from './FooterPins';

interface DestinationsClientProps {
  destinations: Destination[];
  allDestinationsCount: number;
}

const ITEMS_PER_PAGE = 10;

export default function DestinationsClient({
  destinations,
  allDestinationsCount,
}: DestinationsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter destinations based on search term
  const filteredDestinations = destinations.filter((destination) => {
    if (!searchTerm) return true;

    const searchLower = searchTerm.toLowerCase();
    return destination.title.toLowerCase().includes(searchLower);
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentDestinations = filteredDestinations.slice(startIndex, endIndex);

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className='mb-12 px-4 w-full'>
        <h2 className='mb-4 text-4xl font-bold my-10'>日本百名城</h2>
        <p className='text-2xl mb-4'>探索日本百名城的魅力！</p>
        <DestinationFilter
          placeholder='輸入名城的名字'
          onChange={handleFilter}
        />
        <RegionPins className='text-center my-2 gap-4 justify-center' />
      </section>

      <section className='w-full px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-10'>
          {currentDestinations.map((destination) => (
            <Card key={destination.id} item={destination} />
          ))}
        </div>

        {filteredDestinations.length === 0 && searchTerm && (
          <div className='py-12 text-center w-full md:min-w-5xl'>
            <p className='text-gray-600 text-xl'>找不到「{searchTerm}的名城</p>
            <p className='text-gray-500 mt-2'>請嘗試其他關鍵字</p>
          </div>
        )}

        {destinations.length === 0 && !searchTerm && (
          <div className='py-12 text-center'>
            <p className='text-gray-600 text-xl'>
              暫沒有標記為「百名城」的景點
            </p>
            <p className='text-gray-500 mt-2'>
              已搜尋 {allDestinationsCount} 個景點
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredDestinations.length > ITEMS_PER_PAGE && (
          <div className='flex justify-center items-center gap-2 mt-8 mb-4'>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className='px-4 py-2 rounded-md bg-theme-300 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-theme-400 transition-colors'
            >
              上一頁
            </button>

            <div className='flex gap-1'>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      currentPage === page
                        ? 'bg-theme-400 text-white font-bold'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className='px-4 py-2 rounded-md bg-theme-300 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-theme-400 transition-colors'
            >
              下一頁
            </button>
          </div>
        )}

        {/* Page info */}
        {filteredDestinations.length > 0 && (
          <div className='text-center text-gray-600 my-4'>
            顯示 {startIndex + 1} -{' '}
            {Math.min(endIndex, filteredDestinations.length)} / 共{' '}
            {filteredDestinations.length} 個名城
          </div>
        )}
      </section>
    </>
  );
}
