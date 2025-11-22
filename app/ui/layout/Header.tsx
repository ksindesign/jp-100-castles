'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import SideNav from '../components/SideNav';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className='siteHeader w-full flex flex-wrap justify-between  items-center py-5 md:h-[160] px-10 border-b-2 bg-white '>
        <div className='flex gap-10 items-center'>
          <Link href='/' className='no-underline'>
            <h1 className='uppercase text-5xl text-display mb-2 md:mb-0'>
              日本百名城
            </h1>
          </Link>
        </div>
        <div>
          <button
            onClick={toggleMobileMenu}
            className='md:hidden p-2 focus:outline-none'
            aria-label='Toggle mobile menu'
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              width={24}
              color='#118d93'
            />
          </button>
        </div>
      </header>

      {/* Backdrop - only shown when menu is open */}
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-40 md:hidden transition-opacity duration-300'
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu - Always rendered but translated off-screen when closed */}
      <div
        className={`w-20vw fixed top-0 right-0 h-full bg-white shadow-lg md:hidden transform transition-transform duration-300 ease-in-out z-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-100'
        }`}
      >
        <div className='flex justify-end p-4'>
          <button
            onClick={closeMobileMenu}
            className='p-2 focus:outline-none'
            aria-label='Close menu'
          >
            <FontAwesomeIcon icon={faTimes} width={24} color='#118d93' />
          </button>
        </div>
        <SideNav onLinkClick={closeMobileMenu} />
      </div>
    </>
  );
}
