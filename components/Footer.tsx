import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/programs', label: 'Programs' },
      { href: '/impact', label: 'Impact' },
      { href: '/stories', label: 'Stories' },
      { href: '/contact', label: 'Contact' },
    ],
    programs: [
      { href: '/programs#edp', label: 'Enterprise Development Program' },
      { href: '/programs#ipsdp', label: 'Professional Skills Development' },
      { href: '/programs#gip', label: 'Green Innovation Program' },
      { href: '/programs#sbdp', label: 'STRIVE Business Development' },
    ],
  };

  const socialLinks = [
    { href: 'https://facebook.com', icon: 'Facebook', label: 'Facebook' },
    { href: 'https://twitter.com', icon: 'Twitter', label: 'Twitter' },
    { href: 'https://linkedin.com', icon: 'LinkedIn', label: 'LinkedIn' },
    { href: 'https://instagram.com', icon: 'Instagram', label: 'Instagram' },
  ];

  const SocialIcon = ({ name }: { name: string }) => {
    const common = 'w-5 h-5';
    switch (name) {
      case 'Facebook':
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
            <path d="M22 12.073C22 6.49 17.523 2 12 2S2 6.49 2 12.073c0 5.026 3.657 9.195 8.438 9.951v-7.033H7.898v-2.918h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.47h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.918h-2.33v7.033C18.343 21.268 22 17.099 22 12.073z"/>
          </svg>
        );
      case 'Twitter':
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 0 0 1.88-2.34 8.5 8.5 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.23 3.87A12.03 12.03 0 0 1 3.16 4.9a4.24 4.24 0 0 0 1.31 5.66 4.2 4.2 0 0 1-1.92-.53v.05a4.24 4.24 0 0 0 3.4 4.16 4.26 4.26 0 0 1-1.91.07 4.24 4.24 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.54a12 12 0 0 0 6.5 1.9c7.8 0 12.08-6.46 12.08-12.06 0-.18 0-.36-.01-.54A8.56 8.56 0 0 0 22.46 6z"/>
          </svg>
        );
      case 'LinkedIn':
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8 8h3.8v2.05h.05C12.6 8.78 14.3 8 16.5 8 21 8 23 10.87 23 15.28V23h-4v-6.32c0-1.51-.03-3.45-2.1-3.45-2.1 0-2.42 1.64-2.42 3.34V23h-4V8z"/>
          </svg>
        );
      case 'Instagram':
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true" className={common} fill="currentColor">
            <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.346 1.26.4 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.346-2.43.4-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.346-1.26-.4-2.43C2.212 15.784 2.2 15.4 2.2 12.2s.012-3.584.07-4.85c.054-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77 4.9 4.9 0 0 1 1.77-1.15c.46-.16 1.26-.346 2.43-.4C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.16 0-3.532.012-4.776.07-.99.045-1.527.21-1.883.35-.474.184-.81.404-1.164.758-.354.353-.574.689-.758 1.163-.14.356-.305.893-.35 1.883-.058 1.244-.07 1.616-.07 4.776s.012 3.532.07 4.776c.045.99.21 1.527.35 1.883.184.474.404.81.758 1.164.353.354.689.574 1.163.758.356.14.893.305 1.883.35 1.244.058 1.616.07 4.776.07s3.532-.012 4.776-.07c.99-.045 1.527-.21 1.883-.35.474-.184.81-.404 1.164-.758.354-.353.574-.689.758-1.163.14-.356.305-.893.35-1.883.058-1.244.07-1.616.07-4.776s-.012-3.532-.07-4.776c-.045-.99-.21-1.527-.35-1.883a3.1 3.1 0 0 0-.758-1.164 3.1 3.1 0 0 0-1.163-.758c-.356-.14-.893-.305-1.883-.35-1.244-.058-1.616-.07-4.776-.07zm0 3.6a6.4 6.4 0 1 1 0 12.8 6.4 6.4 0 0 1 0-12.8zm0 1.8a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm5.2-2.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
          </svg>
        );
      default:
        return <span className="text-sm">{name.charAt(0)}</span>;
    }
  };

  return (
    <footer className="bg-secondary text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">DKS Liberia</h3>
            <p className="text-gray-300 mb-4">
              Empowering entrepreneurs and building stronger communities through
              comprehensive training programs and support services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-background/60"
                  aria-label={social.label}
                >
                  <SocialIcon name={social.label} />
                </motion.a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monrovia, Liberia</li>
              <li>
                <a href="mailto:info@dksliberia.org" className="hover:text-accent">
                  info@dksliberia.org
                </a>
              </li>
              <li>
                <a href="tel:+231123456789" className="hover:text-accent">
                  +231 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} DKS Liberia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

