import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactInfoCard from '../components/ContactInfoCard';
import ContactMap from '../components/ContactMap';

const accentLabel = 'text-primary text-sm font-semibold uppercase tracking-[0.28em]';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - DKS Liberia</title>
        <meta
          name="description"
          content="Get in touch with DKS Liberia. Contact us for program inquiries, partnerships, or general information."
        />
        <meta property="og:title" content="Contact Us - DKS Liberia" />
        <meta property="og:description" content="Get in touch with DKS Liberia." />
      </Head>

      <Navbar />

      <main className="bg-slate-50">
        {/* Contact Information */}
        <motion.section
          className="py-16 md:py-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="container-custom">
            <div className="text-center space-y-3 mb-10">
              <p className={accentLabel}>Contact Information</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch With Us</h1>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ContactInfoCard
                title="Location"
                lines={['DKS Liberia Incubation Hub', 'Monrovia, Liberia']}
                cta={{ label: 'Get Directions', href: 'https://maps.google.com?q=Monrovia' }}
                icon={
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 9.75c0 4.556 5.25 8.25 5.25 8.25s5.25-3.694 5.25-8.25a5.25 5.25 0 1 0-10.5 0Z"
                    />
                  </svg>
                }
              />
              <ContactInfoCard
                title="Phone"
                lines={['(+231) 77 000 000', '(+231) 88 000 000']}
                cta={{ label: 'Call Now', href: 'tel:+23177000000' }}
                icon={
                  <svg
                    className="h-9 w-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <rect x="7" y="3" width="10" height="18" rx="2" ry="2" />
                    <path d="M11 5h2M11 19h2" />
                  </svg>
                }
              />
              <ContactInfoCard
                title="Email"
                lines={['info@dksliberia.org', 'support@dksliberia.org']}
                cta={{ label: 'Email Now', href: 'mailto:info@dksliberia.org' }}
                icon={
                  <svg
                    className="h-9 w-9 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                }
              />
            </div>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          className="pb-16 md:pb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="container-custom">
            <div className="text-center space-y-3 mb-10">
              <p className={accentLabel}>Get In Touch With Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Send Us a Message</h2>
            </div>
            <div className="mx-auto max-w-4xl">
              <ContactForm />
            </div>
          </div>
        </motion.section>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <ContactMap />
        </motion.div>
      </main>

      <Footer />
    </>
  );
}

