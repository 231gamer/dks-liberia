import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Slide {
  image: string;
  headline: string;
  subtext: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider = ({ slides }: HeroSliderProps) => {
  return (
    <div className="relative h-[600px] md:h-[700px]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center">
                <div className="container-custom">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white max-w-3xl"
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
                      {slide.headline}
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200">
                      {slide.subtext}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href={slide.primaryButtonLink} className="btn-primary inline-block text-center">
                        {slide.primaryButtonText}
                      </Link>
                      <Link href={slide.secondaryButtonLink} className="btn-outline inline-block text-center bg-transparent border-white text-white hover:bg-white hover:text-primary">
                        {slide.secondaryButtonText}
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;

