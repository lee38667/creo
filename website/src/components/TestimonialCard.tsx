'use client';

import { motion } from 'framer-motion';

export function TestimonialCard({
  name,
  role,
  quote,
  image,
  index = 0,
}: {
  name: string;
  role: string;
  quote: string;
  image: string;
  index?: number;
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
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
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Quote */}
      <div className="mb-6">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p className="text-dark-700 text-lg leading-relaxed italic">"{quote}"</p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-dark-200">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-bold text-dark-900">{name}</p>
          <p className="text-sm text-dark-600">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
