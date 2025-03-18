'use client';

import { useEffect, useRef } from 'react';

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      const position = { lat: 35.3621234, lng: -86.2345678 }; // Tullahoma coordinates

      const map = new google.maps.Map(mapRef.current, {
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

      new google.maps.Marker({
        position,
        map,
        title: 'CG Model Tek LLC',
      });
    };

    // Load the Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD9c_FXbXM9VPkZia2caxSgBTyVF8P1DMg`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-xl"
      style={{ minHeight: '300px' }}
    />
  );
} 