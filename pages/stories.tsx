import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import postsData from '../data/posts.json';

interface StoriesProps {
  posts: typeof postsData;
}

export default function Stories({ posts }: StoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))];

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const recentPosts = posts.slice(0, 5);

  return (
    <>
      <Head>
        <title>Stories of Change - DKS Liberia</title>
        <meta
          name="description"
          content="Read inspiring stories of transformation and success from DKS Liberia program participants and communities."
        />
        <meta property="og:title" content="Stories of Change - DKS Liberia" />
        <meta property="og:description" content="Inspiring stories of transformation and success." />
      </Head>

      <Navbar />

      <main>
        <PageHeader
          title="Stories of Change"
          subtitle="Inspiring stories of transformation and success from our program participants"
        />

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Categories */}
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-4 text-text font-heading">Categories</h3>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => {
                              setSelectedCategory(category);
                              setCurrentPage(1);
                            }}
                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                              selectedCategory === category
                                ? 'bg-primary text-white'
                                : 'text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Stories */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-text font-heading">
                      Recent Stories
                    </h3>
                    <ul className="space-y-4">
                      {recentPosts.map((post) => (
                        <li key={post.slug}>
                          <Link
                            href={`/stories/${post.slug}`}
                            className="block hover:text-primary transition-colors"
                          >
                            <p className="font-semibold text-sm line-clamp-2">{post.title}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {paginatedPosts.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {paginatedPosts.map((post) => (
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

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center space-x-2">
                        <button
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                        >
                          Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-lg border transition-colors ${
                              currentPage === page
                                ? 'bg-primary text-white border-primary'
                                : 'border-gray-300 hover:bg-gray-100'
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                        <button
                          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-600">No stories found in this category.</p>
                  </div>
                )}
              </div>
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
      posts: postsData,
    },
    revalidate: 3600,
  };
};

