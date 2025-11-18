import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <div
      className="relative bg-secondary text-background py-24 md:py-32"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(19, 25, 208, 0.8), rgba(19, 25, 208, 0.8)), url(${backgroundImage})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;

