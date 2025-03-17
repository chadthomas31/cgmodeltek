import { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | CG Model Tek',
  description: 'Get in touch with CG Model Tek for your engineering needs. We provide comprehensive solutions for aerospace and engineering projects.',
};

export default function ContactPage() {
  return <ContactContent />;
} 