'use client';

import FooterNavLinks from '../components/FooterNavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faThreads,
} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const locations = [
    {
      name: '北海道',
      url: '/areas/hokkaido',
    },
    {
      name: '關東',
      url: '/areas/kanto',
    },
    {
      name: '中部',
      url: '/areas/chubu',
    },
    {
      name: '東北',
      url: '/areas/tohoku',
    },
    {
      name: '近畿',
      url: '/areas/kinki',
    },
    {
      name: '四國',
      url: '/areas/shikoku',
    },
    {
      name: '中國',
      url: '/areas/chugoku',
    },
    {
      name: '九州',
      url: '/areas/kyushu',
    },
  ];
  const appSlug = 'jp-100-castles';

  return (
    <>
      <footer id='footer' className='pt-10 pb-30 px-10 bg-grey-100'>
        <h2 className='text-2xl md:text-3xl md:text-center pt-3 pb-10'>
          探索下一個城堡 | 日本百名城
        </h2>
        <div className='footer-content md:mx-auto w-8/12 grid md:grid-cols-3 md:text-center'>
          <div className='footer-detail flex flex-col md:items-center'>
            <h3 className='font-bold mb-4'>探索日本百名城</h3>
            <ul className='flex flex-wrap list-none gap-3 max-w-[300]'>
              {locations.map((location) => (
                <Link key={location.url} href={location.url}>
                  <li className='inline-flex flex-nowrap md:items-center gap-1'>
                    <FontAwesomeIcon
                      width={10}
                      icon={faLocationDot}
                      color='#ff2553'
                    />{' '}
                    {location.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className='footer-detail flex md:justify-center py-4'>
            <FooterNavLinks />
          </div>
          <div className='footer-detail flex flex-col gap-5 md:items-center'>
            <div className='footer-sns'>
              <h3 className='pb-2 font-bold '>追蹤我們</h3>
              <div className='sns-container flex gap-2 flex-wrap'>
                <FontAwesomeIcon
                  width={24}
                  height={24}
                  icon={faFacebook}
                  href='https//facebook.com'
                />

                <FontAwesomeIcon
                  width={24}
                  height={24}
                  icon={faInstagram}
                  href='https//instagram.com'
                />
                <FontAwesomeIcon
                  width={24}
                  height={24}
                  icon={faThreads}
                  href='https//threads.com'
                />
              </div>
            </div>
            <div className='footer-download'>
              <h3 className='pb-2 font-bold'>下載手機APP</h3>
              <ul className='md:flex flex-wrap justify-center gap-2'>
                <li>
                  <a
                    className='footer-download-ios'
                    href={`https://itunes.apple.com/app/${appSlug}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src='/appstore-en.svg'
                      width={140}
                      height={60}
                      alt='到App Store下載'
                    />
                  </a>
                </li>
                <li>
                  <a
                    className='footer-download-android'
                    href='https://play.google.com/store/apps/details?id=com.funliday.app'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src='/google-play-en.png'
                      width={150}
                      height={50}
                      alt='到Google Play Store下載'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className='mt-5 text-center'>&copy; 日本百名城, Inc. 2025</p>
      </footer>
    </>
  );
}
