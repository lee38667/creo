'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { BRAND, SERVICES } from '@/config/brand';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call - replace with actual backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Hero
        subtitle="Get In Touch"
        title="Let's Create Something Amazing"
        description="Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help transform your brand."
        variant="minimal"
      />

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-brand grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-heading-lg text-dark-900 mb-6">Contact Information</h2>
              <p className="text-dark-600 mb-8">
                Whether you have questions or are ready to start your next project, we're here to help.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-dark-900 mb-2 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-lg">
                    ✉️
                  </span>
                  Email
                </h3>
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="text-primary-700 hover:text-primary-800 font-medium"
                >
                  {BRAND.contact.email}
                </a>
              </div>

              <div>
                <h3 className="font-bold text-dark-900 mb-2 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-lg">
                    📞
                  </span>
                  Phone
                </h3>
                <a
                  href={`tel:${BRAND.contact.phone}`}
                  className="text-primary-700 hover:text-primary-800 font-medium"
                >
                  {BRAND.contact.phone}
                </a>
              </div>

              <div>
                <h3 className="font-bold text-dark-900 mb-2 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-lg">
                    📍
                  </span>
                  Location
                </h3>
                <p className="text-dark-600">{BRAND.contact.address}</p>
              </div>

              <div>
                <h3 className="font-bold text-dark-900 mb-2 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-lg">
                    🕐
                  </span>
                  Business Hours
                </h3>
                <p className="text-dark-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="text-dark-600">Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-dark-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-700 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a
                  href={BRAND.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-700 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={BRAND.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-700 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 2 3 4c2 2 4 3 6 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-dark-50 rounded-xl p-8 md:p-12"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800"
              >
                ✓ Thank you! We've received your message and will get back to you soon.
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block font-semibold text-dark-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-dark-300 rounded-lg focus:outline-none focus:border-primary-700 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold text-dark-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-dark-300 rounded-lg focus:outline-none focus:border-primary-700 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold text-dark-900 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-dark-300 rounded-lg focus:outline-none focus:border-primary-700 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block font-semibold text-dark-900 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-dark-300 rounded-lg focus:outline-none focus:border-primary-700 transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="service" className="block font-semibold text-dark-900 mb-2">
                  Service of Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-dark-300 rounded-lg focus:outline-none focus:border-primary-700 transition-colors"
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block font-semibold text-dark-900 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white border border-dark-300 rounded-lg focus:outline-none focus:border-primary-700 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className={`w-full btn-primary ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>

            <p className="text-sm text-dark-600 mt-4">
              * Required fields. We'll get back to you within 24 hours.
            </p>
          </motion.form>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-dark-200 relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <p className="text-dark-600 text-lg">📍 Office Location Map</p>
            <p className="text-dark-500">Interactive map coming soon</p>
          </div>
        </div>
      </section>
    </>
  );
}
