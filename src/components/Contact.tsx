'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-primary-400">Touch</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500/10 p-3 rounded-lg">
                    <Mail className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-slate-400 hover:text-primary-400 transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500/10 p-3 rounded-lg">
                    <MapPin className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-slate-400">Available for remote work</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-500/10 to-purple-500/10 p-6 rounded-xl border border-primary-500/20">
                <p className="text-slate-300 text-sm leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50"
              >
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="mx-auto text-green-400 mb-4" size={64} />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-400">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/50 flex items-center justify-center gap-2"
                      >
                        <Send size={20} />
                        Send Message
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
