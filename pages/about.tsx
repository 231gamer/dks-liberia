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
import StatsCounter from '../components/StatsCounter';

interface AboutProps {
  team: typeof teamData;
}

export default function About({ team }: AboutProps) {
  const milestones = [
    {
      year: '2019–Present',
      events: [
        'Trained over 1,850 youth, equipping them with entrepreneurial skills, mentorship, and practical business knowledge.',
        'Launched the Integrated Professional Skills Development Program (IPS-DP) to strengthen workforce capabilities.',
      ],
    },
    {
      year: '2022–Present',
      events: [
        'Trained over 285 MSMEs, ideators, and entrepreneurs, supporting business growth and enterprise development.',
        'Launched the Enterprise Development Program (EDP) to support startups and early-stage businesses.',
      ],
    },
    {
      year: '2023',
      events: [
        'Partnered with Giving Joy Grants to train 55 female entrepreneurs, promoting women-led enterprises.',
      ],
    },
    {
      year: '2024',
      events: [
        'Strengthened partnership with the Universal Outreach Foundation to manage the Strive Business Development Program (SBDP).',
        'Actively managing the SBDP, providing mentorship, training, and business support to youth and early-stage entrepreneurs.',
      ],
    },
    {
      year: '2025',
      events: [
        'Launched the Green Innovation Program (GIP), promoting sustainable and environmentally responsible entrepreneurship.',
        'Strengthened partnership with Conservation International under the Adaptation Acceleration Program.',
        'Launched the SBDP Growth Accelerator Program (GAP), enhancing business scalability and investment readiness.',
      ],
    },
  ];

  const missionVision = {
    mission:
      'We empower entrepreneurs and professionals through training, mentorship, incubation, and research, turning local ideas into value-added products and sustainable enterprises that strengthen Liberia’s economy.',
    vision:
      'To be Liberia’s premier hub for enterprise growth: empowering ideators, entrepreneurs, and business owners to transform ideas into impactful ventures that drive inclusive and sustainable community development.',
  };

  const coreValues = [
    {
      title: 'Enterprise Growth & Value Creation',
      description:
        'We transform local ideas and resources into high-quality, value-added products and services that enhance productivity, increase competitiveness, and strengthen market positioning for emerging businesses.',
      icon: '🚀',
    },
    {
      title: 'Entrepreneur Empowerment',
      description:
        'We equip entrepreneurs and MSME owners with the knowledge, mentorship, and practical tools they need to grow, scale, and become investment-ready, enabling them to build sustainable and competitive businesses.',
      icon: '💼',
    },
    {
      title: 'Market Access & Partnerships',
      description:
        'We create strategic pathways to markets, networks, and financing, empowering businesses to expand their reach, strengthen collaborations, and achieve sustainable long-term growth.',
      icon: '🌍',
    },
    {
      title: 'Community Impact & Sustainability',
      description:
        'We drive job creation, enhance food security, and empower communities, promoting inclusive, resilient, and sustainable development across Liberia',
      icon: '🤝',
    },
  ];

  // Placeholder partner logos
  const partners = [
    {
      name: 'Partner One',
      logo:
        '/img-8.jpeg',
    },
    {
      name: 'Partner Two',
      logo:
        '/img-9.jpeg',
    },
    {
      name: 'Partner Three',
      logo:
        '/img-10.jpeg',
    },
    {
      name: 'Partner Four',
      logo:
        '/img-11.jpeg',
    },
  ];

  const impactStats = [
    { end: 380, suffix: '+', label: 'Enterprises Trained', icon: '🏢' },
    { end: 50, suffix: '+', label: 'Startup/Early-stage businesses received access to finance', icon: '💰' },
    { end: 27, suffix: '+', label: 'Ideas Launched', icon: '💡' },
    { end: 8, suffix: '+', label: 'Cohorts Ran', icon: '🎓' },
    { end: 100, suffix: '+', label: 'Business Showcased', icon: '📣' },
    { end: 199, suffix: '+', label: 'Businesses Mentored', icon: '🤝' },
    { end: 1850, suffix: '+', label: 'Junior Professionals Trained', icon: '👩‍💼' },
  ];

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
              <p className="text-primary font-semibold uppercase tracking-widest mb-3">About The Incubation Center</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text font-heading leading-tight">
                Our goal is to connect and support Liberian entrepreneurs.
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                The DKS Incubation Center is a social enterprise committed to supporting startups, empowering youth and women, and strengthening community-based entrepreneurship across Liberia. Since our establishment, we have implemented transformative programs including the Enterprise Development Program (EDP), Integrated Professional Skills Development Program (IPS-DP), Green Innovation Program (GIP), and the Strive Business Development Program (SBDP) training and mentoring more than one hundred MSME owners.
              </p>
              <p className="text-lg text-gray-600">
               Our incubation model is community-centered, integrating social impact, sustainability, and local innovation. We offer hands-on technical training, mentorship, coaching, and research support to help entrepreneurs develop practical skills, validate their ideas, and build resilient businesses that contribute meaningfully to Liberia’s development
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
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
              {impactStats.map((stat) => (
                <StatsCounter key={stat.label} {...stat} />
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
                  className="flex items-start mb-10"
                >
                  <div className="flex-shrink-0 w-28 text-right pr-6">
                    <div className="text-2xl font-bold text-primary font-heading whitespace-nowrap">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-4 h-4 rounded-full bg-primary mt-2 mx-auto"></div>
                    <div className="absolute left-2 top-6 h-full border-l-2 border-primary"></div>
                  </div>
                  <div className="flex-1 pl-8">
                    <ul className="space-y-4">
                      {milestone.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="text-gray-600">
                          {event}
                        </li>
                      ))}
                    </ul>
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
