'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-dark py-20">
      <div className="container-custom max-w-2xl">
        <h1 className="text-5xl font-bold mb-8 text-center">Get In Touch</h1>
        <p className="text-center text-slate-400 mb-12">
          Have a question or ready to start a project? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-lg border border-slate-800">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-dark border border-slate-700 rounded-lg focus:border-primary focus:outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-dark border border-slate-700 rounded-lg focus:border-primary focus:outline-none transition"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 bg-dark border border-slate-700 rounded-lg focus:border-primary focus:outline-none transition resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button type="submit" className="w-full btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
