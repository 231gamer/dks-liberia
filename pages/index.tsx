import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import ProgramCard from '../components/ProgramCard';
import StatsCounter from '../components/StatsCounter';
import BlogCard from '../components/BlogCard';
import PartnersStrip from '../components/PartnersStrip';
import WhatWeDo from '../components/WhatWeDo';
import postsData from '../data/posts.json';
import programsData from '../data/programs.json';
import impactData from '../data/impact.json';
import partnersData from '../data/partners.json';

interface HomeProps {
  posts: typeof postsData;
  programs: typeof programsData;
  impact: typeof impactData;
  partners: typeof partnersData;
}

export default function Home({ posts, programs, impact, partners }: HomeProps) {
  const heroSlides = [
    {
      image: '/slider-1.jpeg',
      headline: 'Empowering Entrepreneurs, Building Communities',
      subtext: 'Transforming lives through comprehensive entrepreneurship training and support programs across Liberia.',
      primaryButtonText: 'Explore Programs',
      primaryButtonLink: '/programs',
      secondaryButtonText: 'Read Stories',
      secondaryButtonLink: '/stories',
    },
    {
      image: '/slider-2.jpeg',
      headline: 'Skills for Success, Innovation for Impact',
      subtext: 'Join our professional development programs and unlock your potential for career growth and business success.',
      primaryButtonText: 'Explore Programs',
      primaryButtonLink: '/programs',
      secondaryButtonText: 'Read Stories',
      secondaryButtonLink: '/stories',
    },
    {
      image: '/slider-3.jpeg',
      headline: 'Green Innovation for Sustainable Growth',
      subtext: 'Building sustainable businesses that create value while protecting our environment for future generations.',
      primaryButtonText: 'Explore Programs',
      primaryButtonLink: '/programs',
      secondaryButtonText: 'Read Stories',
      secondaryButtonLink: '/stories',
    },
  ];

  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      <Head>
        <title>DKS Liberia - Empowering Entrepreneurs, Building Communities</title>
        <meta
          name="description"
          content="DKS Liberia provides comprehensive entrepreneurship training and support programs to empower individuals and build stronger communities across Liberia."
        />
        <meta property="og:title" content="DKS Liberia - Empowering Entrepreneurs, Building Communities" />
        <meta
          property="og:description"
          content="Transforming lives through comprehensive entrepreneurship training and support programs."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Slider */}
        <HeroSlider slides={heroSlides} />

        {/* About Section */}
        <section className="section-padding bg-white">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                  alt="DKS Liberia entrepreneurship training"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating Image Card */}
              <div className="absolute -bottom-10 -right-10 w-2/3 md:w-1/2 h-[220px] rounded-xl overflow-hidden shadow-lg border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
                  alt="Collaborative entrepreneurship session"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Right Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:pl-10"
            >
              <p className="text-primary font-semibold uppercase tracking-widest mb-3">
                About DKS Liberia
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 font-heading leading-snug">
                Empowering Entrepreneurs <br /> & Building Sustainable Communities
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                DKS Liberia is a forward-thinking initiative that bridges skills,
                innovation, and impact. We equip aspiring entrepreneurs, professionals,
                and changemakers with practical tools to start, scale, and sustain
                successful ventures across Liberia.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through entrepreneurship training, business showcasing, and
                career-readiness programs, we nurture creativity and resilience—turning
                local ideas into enterprises that uplift communities and build a
                stronger economy.
              </p>
              <Link
                href="/about"
                className="btn-primary inline-block mt-4 hover:scale-105 transition-transform duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What We Do (new section) */}
        <WhatWeDo variant="home" />
        {/* Stats Counter Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              <StatsCounter
                end={impact.overall.enterprisesTrained}
                suffix="+"
                label="Enterprises Trained"
                icon="🏢"
              />
              <StatsCounter
                end={impact.overall.ideasLaunched}
                suffix="+"
                label="Ideas Launched"
                icon="💡"
              />
              <StatsCounter
                end={impact.overall.cohortsRan}
                suffix="+"
                label="Cohorts Ran"
                icon="🎓"
              />
              <StatsCounter
                end={impact.overall.businessShowcasing}
                suffix="+"
                label="Business Showcasing"
                icon="📈"
              />
              <StatsCounter
                end={impact.overall.careerReadiness}
                suffix="+"
                label="Career Readiness"
                icon="🧭"
              />
            </div>
          </div>
        </section>


        {/* Programs Section */}{/* Programs Section */}{/* Programs Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-heading">
                Our Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide the skills, mentorship, and resources to help Liberian businesses grow, scale, and become investment-ready.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program) => (
                <ProgramCard
                  key={program.id}
                  id={program.id}
                  title={program.title}
                  summary={program.summary}
                  image={program.image}
                  link={`/programs#${program.id}`}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/programs" className="btn-outline">
                View All Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Stories Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text font-heading">
                Featured Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how our programs are transforming lives and creating positive change in
                communities across Liberia.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  category={post.category}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/stories" className="btn-outline">
                Read All Stories
              </Link>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <PartnersStrip partners={partners} />

        {/* CTA Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Join our programs and take the first step towards building a successful business or
                advancing your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                  Contact Us
                </Link>
                <Link href="/programs" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  Explore Programs
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      posts: postsData,
      programs: programsData,
      impact: impactData,
      partners: partnersData,
    },
    revalidate: 3600, // Revalidate every hour
  };
};

