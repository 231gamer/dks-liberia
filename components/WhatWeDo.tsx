import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface WhatWeDoProps {
  variant?: 'home' | 'about';
  image?: string;
}

const fullText =
  "At the DKS Incubation Center, we are committed to nurturing Liberia’s entrepreneurial ecosystem by promoting innovation and enterprise growth. We provide ideators, startups, and early-stage businesses—especially youth and women-led enterprises—with the skills, mentorship, and resources to grow, scale, and become investment-ready. Our programs integrate practical training, business incubation, research, and workforce development to create resilient businesses, foster inclusive economic growth, and strengthen local communities.";

// A concise version suitable for the homepage hero-sized section
const shortText =
  "We nurture Liberia’s entrepreneurial ecosystem by equipping ideators and early-stage businesses—especially youth and women-led—with skills, mentorship, and resources to grow, scale, and become investment‑ready. Our programs blend practical training, incubation, research, and workforce development to build resilient businesses and stronger communities.";

export default function WhatWeDo({ variant = 'home', image }: WhatWeDoProps) {
  const copy = variant === 'about' ? fullText : shortText;
  const imgSrc =
    image ||
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=60';

  return (
    <section className="section-padding bg-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold uppercase tracking-widest mb-3">WHAT WE DO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 font-heading leading-snug">
            We Empower Liberian Entrepreneurs to Grow and Succeed
          </h2>
          <p className="text-lg text-gray-600 mb-6">{copy}</p>

          {variant === 'home' && (
            <Link href="/about" className="btn-outline inline-block">
              Learn More
            </Link>
          )}
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image src={imgSrc} alt="Entrepreneurship in Liberia" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
