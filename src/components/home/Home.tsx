'use client';

import { motion } from 'framer-motion';
import {
  BeakerIcon,
  CubeIcon,
  ChartBarIcon,
  CogIcon,
  DocumentMagnifyingGlassIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    name: 'Wind Tunnel Models',
    description: 'High-precision models for aerodynamic testing and validation.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Rapid Prototyping',
    description: 'Quick turnaround for design iterations and concept validation.',
    icon: CubeIcon,
  },
  {
    name: 'Engineering Analysis',
    description: 'Comprehensive analysis and optimization of designs.',
    icon: ChartBarIcon,
  },
  {
    name: 'Materials Testing',
    description: 'Advanced material characterization and testing services.',
    icon: BeakerIcon,
  },
  {
    name: 'Quality Assurance',
    description: 'Rigorous quality control and documentation processes.',
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored engineering solutions for unique challenges.',
    icon: CogIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-gray-800">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-800">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 to-gray-800" />
          <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_50%_0%,theme(colors.primary.600/40)_0%,theme(colors.gray.800/80)_100%)]" />
        </div>

        <div className="mx-auto max-w-screen-xl w-full px-6 lg:px-8 py-24 lg:py-32">
          <div className="mx-auto max-w-screen-lg w-full">
            <motion.div
              className="flex flex-col gap-4 text-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Precision Engineering for Aerospace Excellence
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Here at CG Model Tek, we pride ourselves on our state-of-the-art equipment designed for the precise 
                manufacturing of parts and models. Our diverse array of machines is engineered to meet the highest 
                standards of quality and efficiency.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Whether it's for prototyping or full-scale production, our advanced machinery enables us to deliver 
                innovative solutions that cater to the unique needs of our clients.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Get started
                </Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="mt-16 relative aspect-[16/9] rounded-xl bg-gray-900/5 shadow-2xl ring-1 ring-gray-400/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Image
                src="/images/wind-tunnel-model.png"
                alt="Wind tunnel testing model"
                fill
                className="rounded-xl object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-screen-xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-400">Advanced Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Comprehensive Engineering Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            From concept to delivery, we provide end-to-end solutions for your engineering needs with state-of-the-art facilities and expert teams.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-primary-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link href="/services" className="text-sm font-semibold leading-6 text-primary-400">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 