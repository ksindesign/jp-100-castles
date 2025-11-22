export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='mt-10 md:flex gap-20 mx-auto justify-center max-w-5xl'>
      <div className=' overflow-hidden'>{children}</div>
    </main>
  );
}
