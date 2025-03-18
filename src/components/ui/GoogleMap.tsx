'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  const onLoad = () => {
    if (!mapRef.current) return;

    const position = { lat: 35.3621234, lng: -86.2345678 }; // Tullahoma coordinates

    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 15,
      center: position,
      mapId: 'DEMO_MAP_ID',
      styles: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ffffff' }],
        },
      ],
    });

    new window.google.maps.Marker({
      position,
      map,
      title: 'CG Model Tek LLC',
    });
  };

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD9c_FXbXM9VPkZia2caxSgBTyVF8P1DMg`}
        onLoad={onLoad}
        strategy="lazyOnload"
      />
      <div
        ref={mapRef}
        className="w-full h-full rounded-xl"
        style={{ minHeight: '300px' }}
      />
    </>
  );
} 