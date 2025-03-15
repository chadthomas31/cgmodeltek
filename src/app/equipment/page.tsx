import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Equipment - CG Model Tek',
  description: 'State-of-the-art equipment and facilities for aerospace engineering and wind tunnel model manufacturing.',
};

const equipment = [
  {
    name: 'CNC Milling Machines',
    description: '5-axis precision machining for complex aerospace components.',
    imageSrc: '/images/equipment/CNC Milling Machines/5-Axis/Mazak_i-700_24_x_43_x_23.png',
  },
  {
    name: 'CNC Lathe Machines',
    description: 'High-precision turning and milling capabilities.',
    imageSrc: '/images/equipment/CNC Lathe Machines/3-Axis (live tooling)/Mazak_QTN_350M_16_Dia._x_48.jpeg',
  },
  {
    name: 'Wire EDM Machines',
    description: 'Precision wire cutting for complex geometries.',
    imageSrc: '/images/equipment/CNC Wire EDM Machines/4 Axis/Mitsubishi_FA20S_13_x_19_x_11.5.jpeg',
  },
  {
    name: 'Die Sink EDM',
    description: 'Electrical discharge machining for intricate features.',
    imageSrc: '/images/equipment/CNC Die Sink EDM Machines/4 Axis/Mitsubishi_EA-22_19_x_15_x_14.png',
  },
  {
    name: '5-Axis CNC',
    description: 'Advanced 5-axis machining for complex parts.',
    imageSrc: '/images/equipment/CNC Milling Machines/5-Axis/Mazak_730-5X_33_x_29_x_22.png',
  },
  {
    name: '3-Axis CNC',
    description: '3-axis precision machining capabilities.',
    imageSrc: '/images/equipment/CNC Milling Machines/3-Axis/Cincinnati _Sabre_2000_40_x_20_x_21.png',
  },
];

export default function EquipmentPage() {
  return (
    <div className="bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Equipment</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            State-of-the-art facilities and equipment for precision aerospace engineering and manufacturing.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {equipment.map((item) => (
            <div
              key={item.name}
              className="flex flex-col overflow-hidden rounded-lg bg-gray-900 shadow-lg"
            >
              <div className="relative h-48 sm:h-64">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-white">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 