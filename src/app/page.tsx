import { Metadata } from 'next';
import Home from '@/components/home/Home';

export const metadata: Metadata = {
  title: 'CG Model Tek - Precision Engineering for Aerospace Excellence',
  description: 'High-quality wind tunnel models, rapid prototyping, and engineering solutions for aerospace, defense, and industrial applications.',
};

export default function HomePage() {
  return <Home />;
} 