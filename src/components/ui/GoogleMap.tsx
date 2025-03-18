'use client';

export default function GoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.898442442937!2d-86.2345678!3d35.3621234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8863a0c0c0c0c0c0%3A0xc0c0c0c0c0c0c0c0!2sCG%20Model%20Tek%20LLC!5e0!3m2!1sen!2sus!4v1647047047047!5m2!1sen!2sus"
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