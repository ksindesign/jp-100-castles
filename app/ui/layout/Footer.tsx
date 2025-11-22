'use client';

import FooterNavLinks from '../components/FooterNavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faThreads,
} from '@fortawesome/free-brands-svg-icons';
import RegionPins from '../components/FooterPins';

export default function Footer() {
  return (
    <>
      <footer id='footer' className='pt-10 pb-30 px-10 bg-grey-100'>
        <h2 className='text-2xl md:text-3xl md:text-center pt-3 pb-10'>
          探索日本百名城
        </h2>
        <div className='footer-content md:mx-auto w-8/12 grid md:grid-cols-3 md:text-center'>
          <div className='footer-detail flex flex-col md:items-center'>
            <h3 className='font-bold mb-4'>探索日本百名城</h3>
            <RegionPins className='max-w-[300] gap-3' />
          </div>
          <div className='footer-detail flex md:justify-center py-4'>
            <FooterNavLinks />
          </div>
          <div className='footer-detail flex flex-col gap-5 md:items-center'>
            <div className='footer-sns'>
              <h3 className='pb-2 font-bold '>追蹤我們</h3>
              <div className='sns-container flex gap-2 flex-wrap'>
                <span className='text-gray-500'>coming soon...</span>
              </div>
            </div>
          </div>
        </div>
        <p className='mt-5 text-center'>&copy; 日本百名城 2025</p>
      </footer>
    </>
  );
}
