import PageHeader from '../common/PageHeader';
import ContactForm from '../common/ContactForm';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const contactInfo = [
  {
    name: 'Visit us',
    description: '1234 Industry Drive, Suite 100, City, State 12345',
    icon: MapPinIcon,
  },
  {
    name: 'Call us',
    description: '(123) 456-7890',
    icon: PhoneIcon,
    href: 'tel:+1234567890',
  },
  {
    name: 'Email us',
    description: 'info@cgmodeltek.com',
    icon: EnvelopeIcon,
    href: 'mailto:info@cgmodeltek.com',
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team of experts to discuss your next project."
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-16">
            {contactInfo.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm ring-1 ring-gray-200"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                  <item.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">{item.name}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 text-base leading-7 text-gray-600 hover:text-primary-600"
                  >
                    {item.description}
                  </a>
                ) : (
                  <p className="mt-2 text-base leading-7 text-gray-600">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactForm />
    </>
  );
} 