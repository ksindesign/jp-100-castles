'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faMap,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

const styles = {
  mobileNav:
    'gap-10 bottom-0 left-0 flex items-center justify-center flex-nowrap w-full bg-white border-t-1 border-grey-100 px-1 py-2',
  mobileNavItem:
    'inline-flex items-center flex-col justify-center w-[60] h-[60] text-gray-600 text-sm cursor-pointer py-2',
  mobileNavItemIcon: 'text-2xl',
};

export default function MobileNav() {
  const [hide, setHide] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Hide the mobile nav when the user is scroll down
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 50) {
        // scroll down to hide
        setHide(true);
      } else {
        // scroll up to show
        setHide(false);
      }

      setLastScroll(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <div className=' lg:hidden'>
      <ul
        className={`${
          styles.mobileNav
        } fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-1000
        transition-transform duration-300
        ${hide ? 'translate-y-full' : 'translate-y-0'}`}
      >
        <Link href='/'>
          <li className={styles.mobileNavItem}>
            <FontAwesomeIcon
              icon={faHouse}
              width={16}
              className={styles.mobileNavItemIcon}
            />
            Home
          </li>
        </Link>
        <Link href={'/destinations'}>
          <li className={styles.mobileNavItem}>
            <FontAwesomeIcon
              icon={faMap}
              className={styles.mobileNavItemIcon}
              width={16}
            />
            觀光地
          </li>
        </Link>
        <Link href={'/about'}>
          <li className={styles.mobileNavItem}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              width={16}
              className={styles.mobileNavItemIcon}
            />
            關於我們
          </li>
        </Link>
      </ul>
    </div>
  );
}
