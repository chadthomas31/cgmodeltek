import { Metadata } from 'next';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact Us - CG Model Tek',
  description: 'Get in touch with us for your aerospace engineering needs.',
};

export default function ContactPage() {
  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD9c_FXbXM9VPkZia2caxSgBTyVF8P1DMg&libraries=places`}
        strategy="lazyOnload"
      />
      <div className="bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Get in touch with our team to discuss your project requirements.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2">
            {/* Contact Info Box */}
            <div className="bg-gray-900 p-8 rounded-2xl">
              <div className="flex justify-center mb-8">
                <div className="relative h-48 w-48">
                  <Image
                    src="/images/Logo/cg_model_tek_new_logo.png"
                    alt="CG Model Tek LLC Logo"
                    fill
                    className="object-contain"
                    sizes="192px"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600/10">
                    <MapPinIcon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Visit Us</h3>
                    <address className="mt-2 text-gray-300 not-italic">
                      CG Model Tek LLC<br />
                      207 Big Springs Avenue<br />
                      Tullahoma, TN 37388
                    </address>
                  </div>
                </div>

                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600/10">
                    <PhoneIcon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Call Us</h3>
                    <p className="mt-2">
                      <a href="tel:+1234567890" className="text-gray-300 hover:text-primary-400">
                        (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600/10">
                    <EnvelopeIcon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email Us</h3>
                    <p className="mt-2">
                      <a href="mailto:info@cgmodeltek.com" className="text-gray-300 hover:text-primary-400">
                        info@cgmodeltek.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden h-[400px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD9c_FXbXM9VPkZia2caxSgBTyVF8P1DMg&q=207+Big+Springs+Avenue,Tullahoma,TN+37388&zoom=16`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form Section */}
            <div className="lg:col-span-2 bg-gray-900 p-8 rounded-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="mt-2 block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="mt-2 block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-2 block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-0 bg-gray-800 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 