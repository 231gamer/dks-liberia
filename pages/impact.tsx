import Head from 'next/head';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import StatsCounter from '../components/StatsCounter';
import impactData from '../data/impact.json';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface ImpactProps {
  impact: typeof impactData;
}

export default function Impact({ impact }: ImpactProps) {
  const years = Object.keys(impact.yearlyData);
  const entrepreneursData = years.map((year) => impact.yearlyData[year as keyof typeof impact.yearlyData].entrepreneursTrained);
  const businessesData = years.map((year) => impact.yearlyData[year as keyof typeof impact.yearlyData].businessesLaunched);
  const jobsData = years.map((year) => impact.yearlyData[year as keyof typeof impact.yearlyData].jobsCreated);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Entrepreneurs Trained',
        data: entrepreneursData,
        backgroundColor: 'rgba(0, 74, 173, 0.8)',
        borderColor: 'rgba(0, 74, 173, 1)',
        borderWidth: 2,
      },
      {
        label: 'Businesses Launched',
        data: businessesData,
        backgroundColor: 'rgba(0, 191, 166, 0.8)',
        borderColor: 'rgba(0, 191, 166, 1)',
        borderWidth: 2,
      },
      {
        label: 'Jobs Created',
        data: jobsData,
        backgroundColor: 'rgba(255, 215, 0, 0.8)',
        borderColor: 'rgba(255, 215, 0, 1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Growth Over Time',
        font: {
          size: 18,
          weight: 'bold' as const,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const lineChartData = {
    labels: years,
    datasets: [
      {
        label: 'Total Impact',
        data: years.map((year) => {
          const data = impact.yearlyData[year as keyof typeof impact.yearlyData];
          return data.entrepreneursTrained + data.businessesLaunched + data.jobsCreated;
        }),
        borderColor: 'rgba(0, 74, 173, 1)',
        backgroundColor: 'rgba(0, 74, 173, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Our Impact - DKS Liberia</title>
        <meta
          name="description"
          content="See the measurable impact of DKS Liberia's programs: entrepreneurs trained, businesses launched, jobs created, and communities transformed."
        />
        <meta property="og:title" content="Our Impact - DKS Liberia" />
        <meta property="og:description" content="Creating measurable, positive change in communities throughout Liberia." />
      </Head>

      <Navbar />

      <main>
        <PageHeader
          title="Our Impact"
          subtitle="Creating measurable, positive change in communities throughout Liberia"
        />

        {/* Stats Counter Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatsCounter
                end={impact.overall.entrepreneursTrained}
                suffix="+"
                label="Entrepreneurs Trained"
                icon="👥"
              />
              <StatsCounter
                end={impact.overall.businessesLaunched}
                suffix="+"
                label="Businesses Launched"
                icon="🚀"
              />
              <StatsCounter
                end={impact.overall.jobsCreated}
                suffix="+"
                label="Jobs Created"
                icon="💼"
              />
              <StatsCounter
                end={impact.overall.communitiesServed}
                suffix="+"
                label="Communities Served"
                icon="🏘️"
              />
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-text font-heading">
                Growth Over Time
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-96">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-96">
                  <Line data={lineChartData} options={chartOptions} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Success Snapshots Section */}
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
                Success Snapshots
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real stories of transformation and success from our program participants.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impact.successSnapshots.map((snapshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={snapshot.image}
                      alt={snapshot.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-text font-heading">
                      {snapshot.title}
                    </h3>
                    <p className="text-gray-600">{snapshot.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Story Section */}
        <section className="section-padding bg-primary text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Measuring Success Beyond Numbers
              </h2>
              <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
                While our metrics tell a powerful story, the true impact of DKS Liberia is seen in
                the transformed lives of individuals, the thriving businesses they create, and the
                stronger communities they build. Every entrepreneur who succeeds, every job created,
                and every community improved represents our commitment to creating lasting positive
                change.
              </p>
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
      impact: impactData,
    },
    revalidate: 3600,
  };
};

