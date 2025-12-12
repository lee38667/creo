'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { PortfolioItem } from '@/types';

interface PortfolioCardProps extends PortfolioItem {
  index?: number;
}

export function PortfolioCard({ title, category, image, description, index = 0 }: PortfolioCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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
      className="group relative rounded-xl overflow-hidden bg-white shadow-lg hover-lift hover-glow"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-dark-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-primary-700 text-sm font-semibold uppercase tracking-wide mb-2">{category}</p>
        <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-700 transition-colors">
          {title}
        </h3>
        <p className="text-dark-600 text-sm leading-relaxed mb-4">{description}</p>

        {/* View Button */}
        <button className="inline-flex items-center text-primary-700 font-semibold group-hover:text-primary-800 transition-colors">
          View Case Study
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
