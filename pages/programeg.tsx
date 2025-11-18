import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import programsData from '../data/programs.json';

interface ProgramsProps {
  programs: typeof programsData;
}

export default function Programs({ programs }: ProgramsProps) {
  const testimonials = [
    {
      quote: "The Enterprise Development Program transformed my business idea into a reality. The mentorship and resources provided were invaluable.",
      author: "Sarah Johnson",
      role: "EDP Graduate",
    },
    {
      quote: "The Professional Skills Development Program helped me advance my career. I'm now in a leadership position I never thought possible.",
      author: "Michael Brown",
      role: "IPS-DP Graduate",
    },
    {
      quote: "The Green Innovation Program showed me how to build a profitable and sustainable business. I'm proud of the impact we're making.",
      author: "Emily Davis",
      role: "GIP Graduate",
    },
    {
      quote: "STRIVE helped us scale our business effectively. Our revenue increased by 200% in just one year.",
      author: "Thomas Wilson",
      role: "SBDP Graduate",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Programs - DKS Liberia</title>
        <meta
          name="description"
          content="Explore DKS Liberia's comprehensive training programs including Enterprise Development, Professional Skills Development, Green Innovation, and STRIVE Business Development."
        />
        <meta property="og:title" content="Our Programs - DKS Liberia" />
        <meta property="og:description" content="We provide the skills, mentorship, and resources to help Liberian businesses grow, scale, and become investment-ready." />
      </Head>

      <Navbar />

      <main>
        <PageHeader
          title="Our Programs"
          subtitle="Comprehensive training programs designed to equip you with the skills and knowledge needed for success"
        />

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text font-heading">
                Empowering Success Through Comprehensive Training
              </h2>
              <p className="text-lg text-gray-600">
                At DKS Liberia, we offer a range of programs designed to meet the diverse needs of
                entrepreneurs and professionals. Our programs combine practical training with
                hands-on mentorship, providing participants with the tools and support needed to
                succeed in today's competitive market.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            {programs.map((program, index) => (
              <div key={program.id} id={program.id} className="mb-20 scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <h3 className="text-3xl font-bold mb-4 text-text font-heading">
                      {program.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">{program.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                        <p className="font-semibold text-text">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Format</p>
                        <p className="font-semibold text-text">{program.format}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-1">Impact</p>
                      <p className="font-semibold text-secondary">{program.impact}</p>
                    </div>
                    <Link href="/contact" className="btn-primary">
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text font-heading">
                What Our Participants Say
              </h2>
            </motion.div>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              loop={true}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-3xl mx-auto text-center px-8">
                    <div className="text-6xl text-primary mb-4">&quot;</div>
                    <p className="text-xl text-gray-700 mb-6 italic">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold text-text">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

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
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Join one of our programs and take the first step towards building a successful
                business or advancing your career.
              </p>
              <Link href="/contact" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Contact Us Today
              </Link>
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
      programs: programsData,
    },
    revalidate: 3600,
  };
};




import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import programsData from '../data/programs.json';

interface ProgramsProps {
  programs: typeof programsData.programs;
}

export default function Programs({ programs }: ProgramsProps) {
  const testimonials = [
    {
      quote: "The Enterprise Development Program transformed my business idea into a reality. The mentorship and resources provided were invaluable.",
      author: "Sarah Johnson",
      role: "EDP Graduate",
    },
    {
      quote: "The Professional Skills Development Program helped me advance my career. I'm now in a leadership position I never thought possible.",
      author: "Michael Brown",
      role: "IPS-DP Graduate",
    },
    {
      quote: "The Green Innovation Program showed me how to build a profitable and sustainable business. I'm proud of the impact we're making.",
      author: "Emily Davis",
      role: "GIP Graduate",
    },
    {
      quote: "STRIVE helped us scale our business effectively. Our revenue increased by 200% in just one year.",
      author: "Thomas Wilson",
      role: "SBDP Graduate",
    },
  ];

  // Impact statistics from PDF
  const impactStats = [
    { number: "250+", label: "Enterprises Trained" },
    { number: "27+", label: "Businesses Launched" },
    { number: "236", label: "Jobs Created" },
    { number: "1500+", label: "Youth Trained" },
    { number: "44%", label: "Profit Increase" },
    { number: "50", label: "Businesses Accessed Loans" }
  ];

  return (
    <>
      <Head>
        <title>Our Programs - DKS Liberia</title>
        <meta
          name="description"
          content="Explore DKS Liberia's comprehensive programs including Enterprise Development, Incubation & Mentorship, Professional Skills Development, and Green Innovation."
        />
        <meta property="og:title" content="Our Programs - DKS Liberia" />
        <meta property="og:description" content="We provide the skills, mentorship, and resources to help Liberian businesses grow, scale, and become investment-ready." />
      </Head>

      <Navbar />

      <main>
        <PageHeader
          title="WHAT WE DO?"
          subtitle="At the DKS Incubation Center, we are committed to nurturing Liberia entrepreneurial ecosystem by promoting innovation, and enterprise growth across Liberia. We provide ideators, startups, and early-stage businesses, especially youth and women-led enterprises with the skills, mentorship, and resources to grow, scale, and become investment-ready. Our programs integrate practical training, business incubation, research, and workforce development to create resilient businesses, foster inclusive economic growth, and strengthen local communities."
        />

        {/* Impact Statistics Section */}
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
                Our Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transforming ideas into successful enterprises and empowering Liberian entrepreneurs
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            {programs.map((program, index) => (
              <div key={program.id} id={program.id} className="mb-20 scroll-mt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <h3 className="text-3xl font-bold mb-4 text-text font-heading">
                      {program.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">{program.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                        <p className="font-semibold text-text">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Format</p>
                        <p className="font-semibold text-text">{program.format}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-1">Impact</p>
                      <p className="font-semibold text-secondary">{program.impact}</p>
                    </div>
                    <Link href="/contact" className="btn-primary">
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Partnerships Section */}
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
                Our Partnerships
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The DKS Incubation Center, through its parent organization GoLocal, thrives on strong partnerships with development institutions, non-profits, and private sector actors.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-3 text-text">Universal Outreach Foundation (UOF)</h4>
                <p className="text-gray-600">A strategic partner and key funder of the Strive Business Development Program, supporting entrepreneurship education, startup growth, and access to finance for small businesses.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-bold text-lg mb-3 text-text">Adaptation Accelerator Program (AAP)</h4>
                <p className="text-gray-600">Collaborating with GoLocal to integrate climate adaptation and resilience training into entrepreneurship programs, strengthening business development support for Liberian SMEs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text font-heading">
                What Our Participants Say
              </h2>
            </motion.div>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              loop={true}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="max-w-3xl mx-auto text-center px-8">
                    <div className="text-6xl text-primary mb-4">&quot;</div>
                    <p className="text-xl text-gray-700 mb-6 italic">{testimonial.quote}</p>
                    <div>
                      <p className="font-bold text-text">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

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
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                Join one of our programs and take the first step towards building a successful
                business or advancing your career.
              </p>
              <Link href="/contact" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Contact Us Today
              </Link>
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
      programs: programsData, 
    },
    revalidate: 3600,
  };
};
