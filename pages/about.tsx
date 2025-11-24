import Head from 'next/head';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import teamData from '../data/team.json';
import WhatWeDo from '../components/WhatWeDo';
import PartnersStrip from '../components/PartnersStrip';

interface AboutProps {
  team: typeof teamData;
}

export default function About({ team }: AboutProps) {
  const milestones = [
    { year: '2018', event: 'DKS Liberia founded with a mission to empower entrepreneurs.' },
    { year: '2019', event: 'Launched Enterprise Development Program (EDP).' },
    { year: '2020', event: 'Trained over 200 entrepreneurs nationwide.' },
    { year: '2021', event: 'Introduced the Professional Skills Development Program (IPS-DP).' },
    { year: '2022', event: 'Launched the Green Innovation Program (GIP).' },
    { year: '2023', event: '1,000+ entrepreneurs trained and 300+ businesses launched.' },
    { year: '2024', event: 'Expanded partnerships and reached over 1,500 young professionals.' },
  ];

  const missionVision = {
    mission:
      'We empower entrepreneurs and professionals through training, mentorship, incubation, and research — turning local ideas into value-added products and sustainable enterprises that strengthen Liberia’s economy.',
    vision:
      'To be Liberia’s premier hub for enterprise growth — empowering ideators, entrepreneurs, and business owners to transform ideas into impactful ventures that drive inclusive and sustainable community development.',
  };

  const coreValues = [
    {
      title: 'Enterprise Growth & Value Creation',
      description:
        'We turn local ideas and resources into high-quality, value-added products and services that boost productivity and competitiveness.',
      icon: '🚀',
    },
    {
      title: 'Entrepreneur Empowerment',
      description:
        'We equip entrepreneurs and MSME owners with training, mentorship, and tools to grow, scale, and become investment-ready.',
      icon: '💼',
    },
    {
      title: 'Market Access & Partnerships',
      description:
        'We create pathways to markets, networks, and financing, enabling businesses to expand their reach and sustain long-term growth.',
      icon: '🌍',
    },
    {
      title: 'Community Impact & Sustainability',
      description:
        'We focus on job creation, food security, and community empowerment — promoting inclusive and sustainable development across Liberia.',
      icon: '🤝',
    },
  ];

  // Placeholder partner logos (replace with real logos later)
  const partners = [
    {
      name: 'Partner One',
      logo:
        'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&auto=format&fit=crop&q=60',
    },
    {
      name: 'Partner Two',
      logo:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=200&auto=format&fit=crop&q=60',
    },
    {
      name: 'Partner Three',
      logo:
        'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?w=200&auto=format&fit=crop&q=60',
    },
    {
      name: 'Partner Four',
      logo:
        'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=200&auto=format&fit=crop&q=60',
    },
  ];

  const impactStats = [
    { label: 'Entrepreneurs Trained', value: '250+' },
    { label: 'Businesses Launched', value: '27' },
    { label: 'Cohorts Completed', value: '7' },
    { label: 'Businesses Showcased', value: '100+' },
    { label: 'Youth Reached', value: '1,500+' },
  ];

  const impactIcons: Record<string, string> = {
    'Entrepreneurs Trained': '🎓',
    'Businesses Launched': '🚀',
    'Cohorts Completed': '📅',
    'Businesses Showcased': '🏪',
    'Youth Reached': '👩‍🎓',
  };

  return (
    <>
      <Head>
        <title>About Us - DKS Liberia</title>
        <meta
          name="description"
          content="Learn about the DKS Incubation Center’s mission, vision, programs, and impact — empowering Liberian entrepreneurs to innovate, grow, and thrive."
        />
      </Head>

      <Navbar />

      <main>
        <PageHeader
          title="About DKS Incubation Center"
          subtitle="Where Enterprise Grows — Empowering Liberian Entrepreneurs to Innovate, Scale, and Succeed"
        />

        {/* Who We Are */}
        <section className="section-padding bg-white">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold uppercase tracking-widest mb-3">About Our Incubation Center</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text font-heading leading-tight">
                Our goal is to connect and support Liberian entrepreneurs
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                The DKS Incubation Center is a social enterprise dedicated to supporting startups,
                empowering youth and women, and strengthening community-based entrepreneurship across
                Liberia. Since our founding, we’ve implemented programs such as the Enterprise
                Development Program (EDP), Integrated Professional Skills Development Programme
                (IPS-DP), Green Innovation Programme (GIP), and Strive Business Development Programme
                (SBDP) — training and mentoring over a hundred MSME owners.
              </p>
              <p className="text-lg text-gray-600">
                Our incubation model is community-oriented, integrating social impact, sustainability,
                and local innovation. We provide hands-on technical training, mentorship, coaching, and
                research support to help entrepreneurs develop practical skills and build resilient
                businesses.
              </p>
            </motion.div>

            {/* Image side with curved edge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative w-full h-72 md:h-[340px] overflow-hidden rounded-l-[999px]">
                <Image
                  src="/about-dks-1.jpeg"
                  alt="Entrepreneurs collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Do */}
        <WhatWeDo
          variant="about"
          image="/about-dks-2.jpeg"
        />

        {/* Mission & Vision */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary font-heading">Our Mission</h3>
                <p className="text-gray-600">{missionVision.mission}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary font-heading">Our Vision</h3>
                <p className="text-gray-600">{missionVision.vision}</p>
              </motion.div>
            </div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-center mb-8 text-text font-heading">
                Our Core Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="text-xl font-bold mb-2 text-text font-heading">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-8 text-text font-heading"
            >
              Our Impact
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {impactStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg shadow text-center"
                >
                  <div className="text-4xl mb-2 text-primary">{impactIcons[stat.label] ?? '⭐'}</div>
                  <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <PartnersStrip partners={partners} />
        <section className="section-padding bg-gray-50 hidden">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text font-heading">
              Our Partners
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-10">
              The DKS Incubation Center thrives on strong partnerships with development institutions,
              non-profits, and private sector actors — expanding our capacity to deliver impactful
              entrepreneurship programs and strengthen Liberia’s small business ecosystem.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
              {partners.map((partner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="relative w-24 h-24 mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-text">{partner.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Leadership Team
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {team.leadership.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-text font-heading">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text font-heading">
                Board of Directors
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.board.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-text font-heading">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
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
                Our Journey
              </h2>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start mb-8"
                >
                  <div className="flex-shrink-0 w-20 text-right pr-6">
                    <div className="text-2xl font-bold text-primary font-heading">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2 -ml-2"></div>
                  <div className="flex-1 pl-6 pb-8 border-l-2 border-primary">
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
      team: teamData,
    },
    revalidate: 3600,
  };
};
