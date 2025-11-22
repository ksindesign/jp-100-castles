'use client'; // クライアントコンポーネントであることを明示

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className='w-full text-center text-grey-600 group-hover:opacity-50 hover:cursor-pointer'>
      <FontAwesomeIcon icon={faArrowLeft} color={'#4a5565'} size='sm' />
      <button onClick={handleGoBack} className='my-4 text-gray-600'>
        返回上一頁
      </button>
    </div>
  );
}
