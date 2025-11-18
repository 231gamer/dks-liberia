import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BlogCard from '../../components/BlogCard';
import postsData from '../../data/posts.json';

interface StoryProps {
  post: (typeof postsData)[0];
  relatedPosts: typeof postsData;
}

export default function Story({ post, relatedPosts }: StoryProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl =
    typeof window !== 'undefined'
      ? window.location.href
      : `https://dksliberia.org/stories/${post.slug}`;
  const shareText = encodeURIComponent(post.title);
  const shareUrlEncoded = encodeURIComponent(shareUrl);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrlEncoded}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrlEncoded}`,
    whatsapp: `https://wa.me/?text=${shareText}%20${shareUrlEncoded}`,
  };

  return (
    <>
      <Head>
        <title>{post.title} - DKS Liberia</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <article className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="mb-4">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text font-heading">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{formattedDate}</span>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none mb-12"
            >
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-gray-700 leading-relaxed [&>p]:mb-4 [&>p]:text-lg"
              />
            </motion.div>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-gray-200 pt-8 mb-12"
            >
              <h3 className="text-xl font-bold mb-4 text-text font-heading">Share this story</h3>
              <div className="flex space-x-4">
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <span className="text-lg">f</span>
                </a>
                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <span className="text-lg">in</span>
                </a>
                <a
                  href={shareLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <span className="text-lg">w</span>
                </a>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Related Stories */}
        {relatedPosts.length > 0 && (
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
                  Related Stories
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.slug}
                    slug={relatedPost.slug}
                    title={relatedPost.title}
                    excerpt={relatedPost.excerpt}
                    image={relatedPost.image}
                    date={relatedPost.date}
                    category={relatedPost.category}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Stories */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <Link href="/stories" className="btn-outline">
              ← Back to All Stories
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postsData.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = postsData.find((p) => p.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = postsData
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 3600,
  };
};

