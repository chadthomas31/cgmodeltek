'use client';

import styles from '@/styles/starry-background.module.css';

export default function StarryBackground() {
  return (
    <div className={styles.starryBackground}>
      {[...Array(20)].map((_, i) => (
        <div key={`star-${i}`} className={styles.star} />
      ))}
      {[...Array(5)].map((_, i) => (
        <div key={`shooting-star-${i}`} className={styles.shootingStar} />
      ))}
    </div>
  );
} 