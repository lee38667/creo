'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/components/Hero';
import { TestimonialCard } from '@/components/TestimonialCard';
import { TESTIMONIALS } from '@/config/brand';

export default function AboutPage() {
  return (
    <>
      <Hero
        subtitle="About Us"
        title="Crafting Digital Excellence Since 2016"
        description="We're a team of passionate creatives and strategists dedicated to transforming brands through innovative digital solutions."
        variant="minimal"
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-brand grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-heading-lg text-dark-900">Our Story</h2>
            <p className="text-body-lg text-dark-600">
              Founded in 2016, Creo Media emerged from a simple belief: brands deserve more than just
              good design. They deserve exceptional experiences that resonate with audiences and drive
              real business results.
            </p>
            <p className="text-body-lg text-dark-600">
              What started as a small team of three passionate designers has grown into a full-service
              creative agency with over 50 talented professionals. Yet our core values remain unchanged
              – creativity without compromise, strategy grounded in data, and partnerships built on trust.
            </p>
            <p className="text-body-lg text-dark-600">
              Today, we're proud to have worked with over 150 brands across diverse industries, from
              startups to Fortune 500 companies, helping them achieve their most ambitious goals.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-50">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-heading-xl text-dark-900 mb-4">Our Core Values</h2>
            <p className="text-body-lg text-dark-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Creativity',
                description: 'We push boundaries and challenge conventions to create truly original work.',
                icon: '🎨',
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we deliver.',
                icon: '⭐',
              },
              {
                title: 'Strategy',
                description: 'We combine art with data-driven insights for measurable results.',
                icon: '🎯',
              },
              {
                title: 'Partnership',
                description: 'We treat your success as our own and build lasting relationships.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center"
              >
                <p className="text-4xl mb-4">{value.icon}</p>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{value.title}</h3>
                <p className="text-dark-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-heading-xl text-dark-900 mb-4">Meet Our Team</h2>
            <p className="text-body-lg text-dark-600 max-w-2xl mx-auto">
              A diverse group of experts united by a passion for creative excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Anderson', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
              { name: 'James Chen', role: 'Strategy Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
              { name: 'Emma Davis', role: 'Design Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
              { name: 'Michael Johnson', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 rounded-lg object-cover mb-4"
                />
                <h3 className="font-bold text-dark-900">{member.name}</h3>
                <p className="text-dark-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-50">
        <div className="container-brand">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-heading-xl text-dark-900 mb-4">What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
