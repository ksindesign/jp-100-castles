import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function BackToTop({}) {
  return (
    <Link href='#'>
      <div className='bg-theme-300 text-white rounded-3xl mask-circle w-[50] h-[50] aspect-square inline-flex items-center justify-center'>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </Link>
  );
}
