'use client';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

export const links = [
  { name: 'Home', href: '/' },
  {
    name: '百名城一覽',
    href: '/destinations',
  },
  {
    name: '地圖',
    href: '/map',
  },
  {
    name: '關於我們',
    href: '/about',
  },
];

interface NavLinksProps {
  onLinkClick?: () => void;
}

export default function NavLinks({ onLinkClick }: NavLinksProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav className={'flex-wrap w-full flex justify-center'}>
      {links.map((link) => {
        // Check if current path matches the link
        // For /destinations, also match child routes like /destinations/[slug]
        const isActive =
          pathname === link.href || pathname.includes(link.href + '/');

        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onLinkClick}
            className={clsx(
              'h-[48px] items-center justify-center gap-2 p-3 text-lg md:text-md hover:scale-105 md:justify-start md:py-2 md:px-3 w-full md:w-fit',
              {
                'font-bold text-active': isActive,
                'inline-block': isHome,
              },
            )}
          >
            <p className='md:block'>{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
