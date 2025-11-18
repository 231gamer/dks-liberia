import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatsCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  icon?: string;
}

const StatsCounter = ({
  end,
  suffix = '',
  prefix = '',
  duration = 2.5,
  label,
  icon,
}: StatsCounterProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [label]);

  return (
    <motion.div
      id={`counter-${label}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {(() => {
        const replacementChar = '\uFFFD';
        let displayIcon = icon;
        if (!displayIcon || displayIcon.includes(replacementChar)) {
          switch (label) {
            case 'Entrepreneurs Trained':
              displayIcon = '🎓';
              break;
            case 'Businesses Launched':
              displayIcon = '🚀';
              break;
            case 'Jobs Created':
              displayIcon = '💼';
              break;
            case 'Communities Served':
              displayIcon = '🏘️';
              break;
            default:
              displayIcon = undefined;
          }
        }
        return displayIcon ? (
          <div className="text-4xl mb-4 text-primary">{displayIcon}</div>
        ) : null;
      })()}
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-heading">
        {isVisible && (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            separator=","
            prefix={prefix}
            suffix={suffix}
          />
        )}
      </div>
      <p className="text-lg text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

export default StatsCounter;

