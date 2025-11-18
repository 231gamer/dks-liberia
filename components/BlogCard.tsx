import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const BlogCard = ({ slug, title, excerpt, image, date, category }: BlogCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/stories/${slug}`}>
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="text-sm text-gray-500 mb-2">{formattedDate}</div>
          <h3 className="text-xl font-bold mb-3 text-text font-heading line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center">
            Read More
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
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;

