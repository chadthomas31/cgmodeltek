'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center group"
            >
              <Image
                src="/images/Logo/cg_logo.png"
                alt="CG Model Tek Logo"
                width={90}
                height={90}
                className="w-auto h-8 sm:h-12 object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-125"
                style={{ filter: 'brightness(1.2)' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-2 py-1 font-michroma text-sm tracking-wide
                  transition-all duration-300 group
                  ${pathname === item.href 
                    ? 'text-[#4da8ff] font-semibold' 
                    : 'text-white hover:text-[#4da8ff]'}
                `}
              >
                {item.label}
                <span className={`
                  absolute bottom-0 left-0 h-0.5 bg-[#4da8ff]
                  transition-all duration-300 ease-in-out
                  ${pathname === item.href ? 'w-full' : 'w-0'}
                  group-hover:w-full
                `} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-white hover:text-[#4da8ff] hover:bg-white/5 focus:outline-none transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`
          md:hidden fixed inset-0 bg-gray-900/98 backdrop-blur-xl transform transition-all duration-500 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-3 border-b border-white/10">
            <Link 
              href="/" 
              className="flex items-center group"
            >
              <Image
                src="/images/Logo/cg_logo.png"
                alt="CG Model Tek Logo"
                width={90}
                height={90}
                className="w-auto h-8 object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-125"
                style={{ filter: 'brightness(1.2)' }}
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center p-1.5 rounded-full text-white hover:text-[#4da8ff] hover:bg-white/5 focus:outline-none transition-all duration-300"
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-4 w-4" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center space-y-4 px-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-lg font-michroma text-center w-full py-2
                  transition-all duration-300 relative group
                  ${pathname === item.href 
                    ? 'text-[#4da8ff] font-semibold' 
                    : 'text-white hover:text-[#4da8ff]'}
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className={`
                  absolute bottom-0 left-0 h-0.5 bg-[#4da8ff]
                  transition-all duration-300 ease-in-out
                  ${pathname === item.href ? 'w-full' : 'w-0'}
                  group-hover:w-full
                `} />
              </Link>
            ))}
          </div>
          <div className="p-3 border-t border-white/10">
            <div className="flex justify-center space-x-4">
              <a href="tel:+1234567890" className="text-white hover:text-[#4da8ff] transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="mailto:contact@cgmodeltek.com" className="text-white hover:text-[#4da8ff] transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 