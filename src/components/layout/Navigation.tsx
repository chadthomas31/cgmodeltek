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
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-32">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center group"
            >
              <Image
                src="/images/Logo/cg_logo.png"
                alt="CG Model Tek Logo"
                width={240}
                height={240}
                className="w-auto h-32 object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-125"
                style={{ filter: 'brightness(1.2)' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-3 py-2 font-michroma text-base tracking-wide
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
              className="inline-flex items-center justify-center p-3 rounded-md text-white hover:text-[#4da8ff] hover:bg-white/5 focus:outline-none transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
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
          md:hidden bg-gray-900/95 backdrop-blur-lg transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}
        `}
      >
        <div className="px-6 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                block px-3 py-2 rounded-md font-michroma text-base
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
      </div>
    </nav>
  );
} 