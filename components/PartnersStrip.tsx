import { motion } from 'framer-motion';
import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
}

interface PartnersStripProps {
  partners: Partner[];
}

const PartnersStrip = ({ partners }: PartnersStripProps) => {
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="bg-gray-50 py-12 overflow-hidden">
      <div className="container-custom">
        <h3 className="text-2xl font-bold text-center mb-8 text-text font-heading">
          Our Partners
        </h3>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-48 h-24 relative transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnersStrip;

