'use client';

import { motion } from 'framer-motion';
import type { Service } from '@/types';

interface ServiceCardProps extends Service {
  index?: number;
}

export function ServiceCard({ title, description, icon, index = 0 }: ServiceCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="group relative p-8 bg-white rounded-xl border border-dark-200 hover:border-primary-400 transition-all duration-300 hover:shadow-lg-brand"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg group-hover:bg-primary-600 transition-colors duration-300 mb-6">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-700 transition-colors">
        {title}
      </h3>
      <p className="text-dark-600 leading-relaxed mb-4">{description}</p>

      {/* CTA */}
      <button className="inline-flex items-center text-primary-700 font-semibold group-hover:text-primary-800 transition-colors">
        Learn more
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
    </motion.div>
  );
}
