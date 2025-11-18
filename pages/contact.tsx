import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with newsletter service (e.g., Mailchimp, SendGrid)
    alert('Thank you for subscribing to our newsletter!');
    setNewsletterEmail('');
  };

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

      <main>
        <PageHeader title="Get in Touch" subtitle="We'd love to hear from you" />

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-text font-heading">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-text font-heading">Address</h3>
                    <p className="text-gray-600">Monrovia, Liberia</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-text font-heading">Email</h3>
                    <a
                      href="mailto:info@dksliberia.org"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      info@dksliberia.org
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-text font-heading">Phone</h3>
                    <a
                      href="tel:+231123456789"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      +231 123 456 789
                    </a>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-text font-heading">Location</h3>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">
                      {/* TODO: Replace with actual Google Maps embed */}
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9485!2d-10.7976!3d6.3004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDEuNCJOIDEwwrA0Nyc1MS40Ilc!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      />
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {/* TODO: Replace placeholder map with actual DKS Liberia location coordinates */}
                    Map placeholder - Replace with actual Google Maps embed
                  </p>
                </div>

                {/* Newsletter Subscription */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-text font-heading">
                    Subscribe to Our Newsletter
                  </h3>
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                    <button type="submit" className="btn-primary">
                      Subscribe
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-text font-heading">Send us a Message</h2>
                <ContactForm />
              </motion.div>
            </div>

            {/* Book a Meeting Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-primary text-white p-8 rounded-lg text-center"
            >
              <h2 className="text-2xl font-bold mb-4 font-heading">Want to Schedule a Meeting?</h2>
              <p className="text-lg mb-6 text-gray-200">
                Book a one-on-one session with our team to discuss how our programs can help you
                achieve your goals.
              </p>
              {/* TODO: Replace with actual booking page URL */}
              <a
                href="https://calendly.com/dksliberia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-primary hover:bg-gray-100 inline-block"
              >
                Book a Meeting
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

