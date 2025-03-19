import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TwinklingStars from '@/components/ui/TwinklingStars';
import ArchitecturalBackground from '@/components/ui/ArchitecturalBackground';
import FlyingPlane from '@/components/ui/FlyingPlane';

export const metadata: Metadata = {
  title: 'CG Model Tek - Precision Engineering for Aerospace Excellence',
  description: 'High-quality wind tunnel models, rapid prototyping, and engineering solutions for aerospace, defense, and industrial applications.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#001b44] via-[#002c6a] to-[#003892] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4da8ff]/10 via-transparent to-transparent" />
        <TwinklingStars />
        <FlyingPlane />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="space-y-8 mb-12">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/Logo/cg_logo.png"
                alt="CG Model Tek Logo"
                width={2000}
                height={2000}
                className="w-auto h-[320px] object-contain transition-all duration-300 hover:scale-105 hover:brightness-125"
                style={{ filter: 'brightness(1.2)' }}
              />
            </div>
            <h2 className="font-michroma text-2xl md:text-3xl text-[#4da8ff] tracking-[0.2em] uppercase animate-fade-in">
              <span className="opacity-75">CG</span> <span className="text-[#4da8ff]">MODEL TEK</span>
            </h2>
            <h1 className="font-michroma text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-tight animate-fade-in-up">
              Revolutionizing<br />
              <span className="bg-gradient-to-r from-[#4da8ff] to-white bg-clip-text text-transparent">Aerospace</span><br />
              Innovation
            </h1>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            Precision-crafted models for cutting-edge aviation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-300">
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-[#007BFF] to-[#4da8ff] text-white rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#4da8ff]/20 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#4da8ff] to-[#007BFF] transition-transform duration-500 transform translate-x-full group-hover:translate-x-0" />
              <span className="relative flex items-center gap-2">
                Request a Consultation
                <svg className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/services"
              className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold text-lg border-2 border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/30 shadow-lg shadow-black/5"
            >
              <span className="flex items-center gap-2">
                Explore Capabilities
                <svg className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why CG Model Tek Section - Lighter */}
      <section className="w-full py-20 bg-gray-800 relative">
        <ArchitecturalBackground startIndex={1} count={6} opacity={0.3} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why CG Model Tek?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Unmatched Precision</h3>
              <p className="text-gray-200">Aerospace-grade precision for every prototype, ensuring accuracy in every detail.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Proven Expertise</h3>
              <p className="text-gray-200">Specialized in wind tunnel models, UAVs, and flight simulation with years of experience.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Rapid Innovation</h3>
              <p className="text-gray-200">Fast iteration cycles to accelerate your aerospace development process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section - Even Lighter */}
      <section className="w-full py-20 bg-gray-700 relative">
        <ArchitecturalBackground startIndex={7} count={6} opacity={0.3} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Prototyping & Scale Models</h3>
              <p className="text-gray-200">Custom scale models for testing and validation.</p>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Aerodynamic Testing</h3>
              <p className="text-gray-200">Wind tunnel models for aerodynamic analysis.</p>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Advanced Manufacturing</h3>
              <p className="text-gray-200">CNC & additive manufacturing solutions.</p>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg hover:bg-gray-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Material Science</h3>
              <p className="text-gray-200">Expertise in composites and advanced materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section - Back to medium */}
      <section className="w-full py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamless Collaboration</h2>
          <p className="text-xl text-gray-200">
            From initial design to final validation, we work closely with engineers, manufacturers, and R&D teams to ensure aerospace-grade precision.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Project →
          </Link>
        </div>
      </section>
    </main>
  );
} 