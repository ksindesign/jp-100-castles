import NavLinks from '@/app/ui/components/NavLinks';

interface SideNavProps {
  onLinkClick?: () => void;
}

export default function SideNav({ onLinkClick }: SideNavProps) {
  return (
    <div className='sideNav overflow-hidden flex-col md:shadow-md border-s-white px-2 md:max-h-[600] md:flex space-x-2 md:space-x-0 md:space-y-2 md:items-end md:mb-10 rounded-lg md:border-t-6 md:min-w-[300]'>
      <NavLinks onLinkClick={onLinkClick} />
    </div>
  );
}
