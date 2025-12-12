'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { SERVICES } from '@/config/brand';

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <Hero
        subtitle="Our Services"
        title="Solutions Designed for Your Success"
        description="Comprehensive digital services tailored to elevate your brand and drive meaningful results."
        variant="minimal"
      />

      {/* Detailed Services */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-20"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        [
                          '1552664730-d307ca884978',
                          '1561070791-2526d30994b5',
                          '1517694712202-14dd9538aa97',
                          '1552673673-cc2213be6bb1',
                          '1598899134739-24c46f58b8c0',
                          '1611162617213-7d7a39e9b1d7',
                        ][index]
                      }?w=600&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h2 className="text-heading-lg text-dark-900 mb-4">{service.title}</h2>
                  <p className="text-body-lg text-dark-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    <p className="text-dark-700 flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      Strategic planning and research
                    </p>
                    <p className="text-dark-700 flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      Creative design and development
                    </p>
                    <p className="text-dark-700 flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      Testing and optimization
                    </p>
                    <p className="text-dark-700 flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      Ongoing support and maintenance
                    </p>
                  </div>

                  <Link href="/contact" className="btn-primary">
                    Discuss Your Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-heading-xl text-dark-900 mb-4">Our Process</h2>
            <p className="text-body-lg text-dark-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure exceptional results at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your goals, audience, and market landscape',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing comprehensive strategies aligned with your vision',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Creating high-quality deliverables with attention to detail',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Measuring results and continuously improving performance',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-8 h-full">
                  <p className="text-5xl font-bold text-primary-700 mb-4">{item.step}</p>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">{item.title}</h3>
                  <p className="text-dark-600 text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-primary-600"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
