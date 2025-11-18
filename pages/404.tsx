import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | DKS Liberia</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>

      <Navbar />

      <main className="min-h-screen flex items-center justify-center section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4 font-heading">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 font-heading">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              The page you are looking for might have been removed, had its name changed, or is
              temporarily unavailable.
            </p>
            <Link href="/" className="btn-primary">
              Go Back Home
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

