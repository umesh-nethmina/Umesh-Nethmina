"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setStatusMessage({ type: 'error', text: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatusMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400 uppercase">Get In Touch</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Let's Start a Conversation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md">
              Feel free to reach out using the contact form, or connect with me directly through these channels. I'm always open to discussing new projects, creative ideas or opportunities.
            </p>

            <div className="space-y-6 mt-4">
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href='mailto:contact@example.com'}>
                <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-full text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">contact@umeshnethmina.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('https://wa.me/94771234567')}>
                <div className="p-4 bg-teal-50 dark:bg-slate-800 rounded-full text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">WhatsApp</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">+94 77 123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-indigo-50 dark:bg-slate-800 rounded-full text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-900 dark:text-white resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {statusMessage.text && (
                <div className={`p-4 rounded-xl text-sm font-medium ${
                  statusMessage.type === 'success' 
                    ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {statusMessage.text}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-medium transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
