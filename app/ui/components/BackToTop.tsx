'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={scrollToTop} className='cursor-pointer'>
      <div className='bg-theme-300 text-white rounded-3xl mask-circle w-[50] h-[50] aspect-square inline-flex items-center justify-center hover:bg-theme-400 transition-colors'>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </button>
  );
}
