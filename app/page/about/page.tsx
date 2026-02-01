import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className='max-w-5xl mx-auto min-h-screen bg-white py-8'>
      <h1 className='text-theme-400 text-5xl mb-8 font-bold'>關於這個網站</h1>

      <section className='mb-12 w-full px-4'>
        <div>
          <p>此網證為個人開發網站，不涉及商業用途。</p>
          <p>網站內容持續更新中。</p>
          <p>部分圖片來源於網路，如有侵權請聯繫刪除。</p>
        </div>

        <div className='mt-6'>
          <h3>如果大家想了解更多日本百名城的資訊，可以到日本官方網站查看</h3>
          <Link
            href='https://jokaku.jp/business/great-castles/'
            target='_blank'
            className='text-theme-400'
          >
            日本城郭協会
          </Link>
        </div>
      </section>
    </div>
  );
}
