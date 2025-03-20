'use client';

import Image from 'next/image';

interface ArchitecturalBackgroundProps {
  startIndex: number;
  count: number;
  opacity?: number;
}

export default function ArchitecturalBackground({ startIndex, count, opacity = 0.25 }: ArchitecturalBackgroundProps) {
  const getImagePath = (number: number) => {
    // Files that start with uppercase 'Plane'
    const upperCaseFiles = [1, 2, 6, 10];
    const prefix = upperCaseFiles.includes(number) ? 'Plane' : 'plane';
    return `/images/Plane_Architechural_drawings/${prefix}${number}.png`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-soft-light">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full p-8">
        {Array.from({ length: count }).map((_, index) => {
          const imageNumber = startIndex + index;
          const imagePath = getImagePath(imageNumber);
          
          return (
            <div
              key={imageNumber}
              className="relative w-full aspect-[16/9] transform hover:scale-105 transition-transform duration-500"
              style={{ 
                opacity,
                filter: 'brightness(1.2) contrast(1.1)',
                boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              <Image
                src={imagePath}
                alt={`Architectural Drawing ${imageNumber}`}
                fill
                className="object-cover"
                sizes="(max-inline-size: 768px) 50vw, 33vw"
                priority={index < 4}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
} 