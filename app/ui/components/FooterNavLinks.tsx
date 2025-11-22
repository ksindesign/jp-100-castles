'use client';

import Link from 'next/link';
import { links } from './NavLinks';

export default function FooterNavLinks() {
  return (
    <nav>
      <ul className='flex flex-wrap md:flex-row flex-col list-none md:justify-center'>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className='flex grow items-center md:justify-center gap-2 md:flex-none md:p-2 md:px-3 hover:scale-105 transition-transform duration-150'
            >
              <li className='md:block mr-[10] '>{link.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
