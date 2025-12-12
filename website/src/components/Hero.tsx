'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
  };
  image?: string;
  variant?: 'default' | 'minimal';
}

export function Hero({ title, subtitle, description, cta, image, variant = 'default' }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-50 via-white to-primary-50 -z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full opacity-20 -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full opacity-20 -z-10 blur-3xl"></div>

      <div className="container-brand grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.p
            variants={itemVariants}
            className="text-primary-700 font-semibold text-lg tracking-wide uppercase"
          >
            {subtitle}
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-hero text-dark-900">
            {title}
          </motion.h1>

          {description && (
            <motion.p variants={itemVariants} className="text-body-lg text-dark-700 max-w-xl">
              {description}
            </motion.p>
          )}

          {cta && (
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href={cta.href} className="btn-primary">
                {cta.text}
              </Link>
              <button className="btn-outline">Learn More</button>
            </motion.div>
          )}

          {/* Stats or Features */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-8 border-t border-dark-200">
            <div>
              <p className="text-2xl font-bold text-primary-700">150+</p>
              <p className="text-sm text-dark-600">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-700">98%</p>
              <p className="text-sm text-dark-600">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-700">50+</p>
              <p className="text-sm text-dark-600">Team Members</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        {image && variant === 'default' && (
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent"></div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
