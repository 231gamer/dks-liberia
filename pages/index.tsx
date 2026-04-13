import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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

type ProgramType = typeof programsData[number] & { date?: string };

export default function Home({ posts, programs, partners }: HomeProps) {
  const statsData = [
    { end: 380, suffix: '+', label: 'Enterprises Trained', icon: '🏢' },
    { end: 50, suffix: '+', label: 'Startup/Early-stage businesses received access to finance', icon: '💰' },
    { end: 27, suffix: '+', label: 'Ideas Launched', icon: '💡' },
    { end: 8, suffix: '+', label: 'Cohorts Ran', icon: '🎓' },
    { end: 100, suffix: '+', label: 'Business Showcased', icon: '📣' },
    { end: 199, suffix: '+', label: 'Businesses Mentored', icon: '🤝' },
    { end: 1850, suffix: '+', label: 'Junior Professionals Trained', icon: '👩‍💼' },
  ];

  const getUpcomingTraining = (programList: ProgramType[]) => {
    const now = new Date();
    const datedPrograms = programList
      .map((program) => ({
        ...program,
        dateValue: program.date ? new Date(program.date) : null,
      }))
      .filter((program) => program.dateValue instanceof Date && !Number.isNaN(program.dateValue.getTime()))
      .sort((a, b) => (a.dateValue!.getTime() - b.dateValue!.getTime()));

    if (datedPrograms.length) {
      const nextEvent = datedPrograms.find((program) => program.dateValue! >= now);
      return nextEvent ?? datedPrograms[0];
    }

    return programList.length > 0 ? programList[0] : null;
  };

  const upcomingTraining = getUpcomingTraining(programs as ProgramType[]);
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
        {/* Hero Section */}
        <section className="relative min-h-[620px] bg-[url('/slider-1.jpeg')] bg-cover bg-center text-white">
          <div className="absolute inset-0 bg-black/65" />
          <div className="container-custom relative z-10 flex items-center min-h-[620px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="max-w-2xl">
                <p className="text-primary uppercase tracking-[0.3em] font-semibold mb-4">
                  Upcoming Training
                </p>
                {upcomingTraining ? (
                  <>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 font-heading leading-tight">
                      {upcomingTraining.title}
                    </h1>
                    {upcomingTraining.summary ? (
                      <p className="text-lg md:text-xl text-gray-200 mb-5">
                        {upcomingTraining.summary}
                      </p>
                    ) : upcomingTraining.description ? (
                      <p className="text-lg md:text-xl text-gray-200 mb-5">
                        {upcomingTraining.description}
                      </p>
                    ) : null}
                    {upcomingTraining.date ? (
                      <p className="text-sm md:text-base text-gray-300 mb-6">
                        Date: {new Date(upcomingTraining.date).toLocaleDateString(undefined, {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    ) : null}
                    <Link
                      href={upcomingTraining.id ? `/programs#${upcomingTraining.id}` : '/programs'}
                      className="btn-primary inline-block"
                    >
                      View Training Details
                    </Link>
                  </>
                ) : (
                  <>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 font-heading leading-tight">
                      No upcoming training scheduled
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-6">
                      Check back soon for the next training opportunity.
                    </p>
                    <Link href="/programs" className="btn-primary inline-block">
                      Explore Programs
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about-1.jpeg"
                  alt="DKS Liberia entrepreneurship training"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating Image Card */}
              <div className="absolute -bottom-10 -right-10 w-2/3 md:w-1/2 h-[220px] rounded-xl overflow-hidden shadow-lg border-4 border-white bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/about-2.jpeg"
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
                About DKS Incubation Center
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
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
              {statsData.map((stat) => (
                <StatsCounter key={stat.label} {...stat} />
              ))}
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

