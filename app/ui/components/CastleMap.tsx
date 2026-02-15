'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Destination } from '@/app/lib/types';
import Link from 'next/link';
import Image from 'next/image';

// map pin icon
const castleIcon = L.divIcon({
  html: `<div style="color: #e33f34ff; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));">
    <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="width: 24px; height: 32px;">
      <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
    </svg>
  </div>`,
  className: 'custom-castle-marker',
  iconSize: [24, 32],
  iconAnchor: [12, 32],
  popupAnchor: [0, -32],
});

interface CastleMapProps {
  destinations: Destination[];
}

export default function CastleMap({ destinations }: CastleMapProps) {
  return (
    <div className='h-[75vh] w-full rounded-2xl overflow-hidden relative z-0'>
      <MapContainer
        center={[36.2048, 138.2529]}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>'
          url='https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
        />
        {destinations.map((castle) => {
          const lat = castle.destinations?.fullAddress?.lat;
          const lng = castle.destinations?.fullAddress?.lng;

          if (!lat || !lng) return null;

          return (
            <Marker key={castle.id} position={[lat, lng]} icon={castleIcon}>
              <Popup maxWidth={260} className='castle-popup'>
                <div className='p-1'>
                  <h3 className='font-bold text-lg min-w-[200px] mb-2 text-gray-800 border-b pb-1'>
                    {castle.title}
                  </h3>
                  {castle.featuredImage?.node.sourceUrl && (
                    <div className='relative h-32 w-full mb-3 rounded-md overflow-hidden'>
                      <Image
                        src={castle.featuredImage.node.sourceUrl}
                        alt={castle.title}
                        fill
                        className='object-cover'
                      />
                    </div>
                  )}
                  {castle.excerpt && (
                    <div
                      className='text-sm text-gray-600 mb-3 line-clamp-2'
                      dangerouslySetInnerHTML={{ __html: castle.excerpt }}
                    />
                  )}
                  <Link
                    href={`/destinations/${castle.slug}`}
                    className='block w-full !text-white text-center bg-theme-300 py-2 rounded-lg font-medium hover:bg-theme-400 transition-colors duration-200 no-underline'
                  >
                    前往{castle.title} →
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
