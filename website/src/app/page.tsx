'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { PortfolioCard } from '@/components/PortfolioCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { SERVICES, PORTFOLIO_ITEMS, TESTIMONIALS, BRAND } from '@/config/brand';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Welcome to Creo Media"
        title="Elevate Your Brand with Creative Excellence"
        description="We craft extraordinary digital experiences that elevate brands and engage audiences. From concept to delivery, we combine creative excellence with strategic thinking."
        cta={{ text: 'Start Your Project', href: '/contact' }}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary-700 font-semibold uppercase tracking-wide mb-4">Our Expertise</p>
            <h2 className="text-heading-xl text-dark-900 mb-4">Creative Services We Offer</h2>
            <p className="text-body-lg text-dark-600 max-w-2xl mx-auto">
              We provide comprehensive digital solutions tailored to your unique business needs and
              objectives.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-brand">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary-700 font-semibold uppercase tracking-wide mb-4">
              Proven Results
            </p>
            <h2 className="text-heading-xl text-dark-900 mb-4">Recent Projects & Case Studies</h2>
            <p className="text-body-lg text-dark-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries and sectors.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <PortfolioCard key={item.id} {...item} index={index} />
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/portfolio" className="btn-primary inline-block">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary-700 font-semibold uppercase tracking-wide mb-4">
              Client Love
            </p>
            <h2 className="text-heading-xl text-dark-900 mb-4">What Our Clients Say</h2>
            <p className="text-body-lg text-dark-600 max-w-2xl mx-auto">
              Real testimonials from satisfied clients who've experienced our creative excellence.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg bg-gradient-to-br from-dark-900 via-primary-900 to-dark-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full opacity-10 -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600 rounded-full opacity-10 -z-10 blur-3xl"></div>

        <div className="container-brand text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-heading-xl mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Let's create something extraordinary together. Discuss your project with our creative team
              and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <a href={`mailto:${BRAND.contact.email}`} className="btn-outline text-white border-white hover:bg-white hover:text-dark-900">
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Team Members' },
              { number: '8+', label: 'Years in Business' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl font-bold text-primary-700 mb-2">{stat.number}</p>
                <p className="text-dark-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
