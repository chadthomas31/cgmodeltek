'use client';

export default function GoogleMap() {
  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDJPKU7BnC0vukNOxcLR5hQ1ZzM0KVMbGw&q=207+Big+Springs+Avenue,Tullahoma,TN+37388&zoom=16`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full rounded-xl"
    />
  );
} 