export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='py-0 px-6 my-10 lg:flex mx-auto justify-center h-full min-h-[600] md:gap-20 max-w-[1200]'>
      {children}
    </main>
  );
}
