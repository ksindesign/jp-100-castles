'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from '@/app/ui/components/Card';
import { Destination } from '@/app/lib/types';

interface DestinationsCarouselProps {
  destinations: Destination[];
}

export default function DestinationsCarousel({
  destinations,
}: DestinationsCarouselProps) {
  if (!destinations || destinations.length === 0) {
    return null;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      className='destinations-carousel'
    >
      {destinations.map((destination) => (
        <SwiperSlide key={destination.id}>
          <Card item={destination} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
