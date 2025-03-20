'use client';

export default function GoogleMap() {
  return (
    <div className="relative w-full h-full rounded-xl" style={{ minHeight: '300px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.898442442968!2d-86.23675642499999!3d35.3621234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864c0c0c0c0c0c0%3A0x0!2zMzXCsDIxJzQ0LjAiTiA4NsKwMTQnMDQuMyJX!5e0!3m2!1sen!2sus!4v1645481234567!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '0.75rem' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
} 