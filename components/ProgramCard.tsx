import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';


interface ProgramCardProps {
  id?: string;
  title: string;
  summary: string;
  image: string;
  link: string;
}

const ProgramCard = ({ title, summary, image, link }: ProgramCardProps) => {
  return (
    <Link href={link} className="block group">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 font-heading">{title}</h3>
          <p className="text-gray-600 line-clamp-3 mb-4">
            {summary}
          </p>
        </div>
        <span className="text-secondary font-semibold inline-flex items-center transition-colors duration-300 group-hover:underline">
          Learn More
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </motion.div>
    </Link>
  );
};

export default ProgramCard;
