//観光地の詳細ページ

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  getDestinations,
  getDestinationBySlug,
  filterByHyakumeijo,
} from '@/app/lib/api';
import styles from '@/app/ui/styles/destinations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCircleInfo,
  faHome,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import DestinationBreadcrumb from './DestinationBreadcrumb';
import parse from 'html-react-parser';
import BackButton from '@/app/ui/components/BackButton';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all destinations at build time
export async function generateStaticParams() {
  const allDestinations = await getDestinations(100);

  // Filter for 百名城 only
  const destinations = filterByHyakumeijo(allDestinations);

  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: 'Destination Not Found',
    };
  }

  return {
    title: `${destination.title} | Tabipal`,
    description: destination.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  // Get ACF fields
  const fields = destination.destinations;
  const areas = destination.genreDestination?.nodes || [];
  const imageUrl =
    destination.featuredImage?.node.sourceUrl || '/placeholder.jpg';
  const imageAlt = destination.featuredImage?.node.altText || destination.title;
  const imageWidth = destination.featuredImage?.node.mediaDetails?.width;
  const address = fields?.fullAddress;

  // Fetch all destinations
  const allDestinations = await getDestinations(20); // Fetch more destinations for better matching

  return (
    <>
      {/* Breadcrumb */}
      <DestinationBreadcrumb slug={slug} title={destination.title} />

      <article className={`${styles.main} mx-auto`}>
        {/* Back Button */}
        <div className='mb-6'>
          <Link href='/destinations' className='inline-flex items-center'>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={`${styles.icon}`}
              width={16}
            />
            返回日本名城一覽
          </Link>
        </div>

        <header className='mb-3'>
          <h2 className='text-4xl font-bold my-5 text-color-black font-sans'>
            {destination.title}
          </h2>

          {/* Genre tags */}
          {/* Areas */}
          {areas.length > 0 && (
            <div className={`flex flex-wrap my-3 mr-2 text-sm gap-1`}>
              {areas.map((area, index) => (
                <span
                  key={index}
                  className={`bg-theme-400 text-white px-2 mr-1 rounded-sm`}
                >
                  {' '}
                  <FontAwesomeIcon icon={faLocationDot} width={10} />
                  {area.name}
                </span>
              ))}
            </div>
          )}

          {/* Feature Image */}
          <div className='relative text-center'>
            <Image
              src={imageUrl || '/placeholder.jpg'}
              alt={imageAlt}
              width={imageWidth || 600}
              height={400}
              className={`object-cover object-center rounded-xl overflow-hidden h-[400]`}
            />
          </div>
        </header>

        <div className='space-y-8'>
          {/* PR / Introduction */}
          {fields?.pr && (
            <span className='text-sm text-gray-400 w-fit flex gap-2'>
              <FontAwesomeIcon icon={faCircleInfo} width={12} />
              這景點包含廣告內容
            </span>
          )}
          {fields?.pr && (
            <section className='border-gray-400 bg-gray-100 p-6'>
              <h2 className='mb-3 font-semibold'>推介點</h2>
              <p className='whitespace-pre-wrap'>{fields?.prContent}</p>
            </section>
          )}

          {/* Excerpt */}
          {!destination.spotsDetails && destination.excerpt && (
            <section>
              <div>
                {typeof destination.excerpt === 'string'
                  ? parse(destination.excerpt)
                  : destination.excerpt}
              </div>
            </section>
          )}

          {/* Details */}
          {destination.spotsDetails && (
            <section>
              <p>{destination.spotsDetails.spotDetails}</p>
            </section>
          )}

          {/* Basic Information */}
          <section>
            <h2 className='mb-4 text-2xl font-semibold'>基本情報</h2>
            <dl>
              {/* Address */}
              {address && (
                <div>
                  <dt className='mb-2'>地址</dt>
                  <dd className='flex md:flex-row flex-col'>
                    {address?.portal && <span>〒{address?.portal}　</span>}
                    {address?.details && <span>{address?.details}</span>}
                  </dd>
                </div>
              )}

              {/* Phone */}
              {fields?.tel && (
                <div>
                  <dt className='mb-2'>電話號碼</dt>
                  <dd className='block md:w-fit w-full'>
                    <a href={`tel:${fields?.tel}`}>{fields?.tel}</a>
                  </dd>
                </div>
              )}

              {/* Business Hours */}
              {fields?.businessHours && (
                <div>
                  <dt className='mb-2'>営業時間</dt>
                  <dd>
                    {typeof fields?.businessHours === 'string'
                      ? parse(fields?.businessHours)
                      : fields?.businessHours}
                  </dd>
                </div>
              )}

              {/* Holidays */}
              {fields?.holiday && (
                <div>
                  <dt className='mb-2'>定休日</dt>
                  <dd>
                    {typeof fields?.holiday === 'string'
                      ? parse(fields?.holiday)
                      : fields?.holiday}
                  </dd>
                </div>
              )}

              {/* Access */}
              {fields?.access && (
                <div>
                  <dt className='mb-2'>交通</dt>
                  <dd>
                    {typeof fields?.access === 'string'
                      ? parse(fields?.access)
                      : fields?.access}
                  </dd>
                </div>
              )}
            </dl>

            {/* Links */}
            <div>
              {fields?.website && (
                <div>
                  <dt className='mb-2'>網站</dt>
                  <dd>
                    <span>
                      <Link
                        href={fields?.website}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon icon={faHome} width={16} />
                      </Link>
                    </span>
                  </dd>
                </div>
              )}

              {/* SNS */}
              {fields?.sns && (
                <span>
                  <Link
                    href={fields?.sns}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faInstagram} width={16} />
                  </Link>
                </span>
              )}
            </div>
          </section>

          {/* Map */}
          {address?.lat && address?.lng && (
            <section className='md:p-6'>
              <h2 className='text-2xl font-semibold '>Google Map</h2>
              <div className='aspect-video w-full overflow-hidden h-[400]'>
                <iframe
                  src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(
                    destination.title
                  )}&ll=${address.lat},${address.lng}&t=m&hl=ja&z=10`}
                  width='100%'
                  height='100%'
                  className='my-5'
                  allowFullScreen
                  loading='lazy'
                ></iframe>
              </div>
            </section>
          )}

          {/* No content message */}
          {!destination.excerpt && !fields?.pr && (
            <section className='text-center'>
              <p className='text-gray-400'>這個景點內容有待更新</p>
            </section>
          )}
        </div>

        <BackButton />
      </article>
    </>
  );
}
