import { ReactEventHandler, useState, useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

        const response = await emailjs.send(
            'default_service',
            'template_a57yxl1',
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                phone: formData.phone,
                program: formData.program,
            },
            {
                publicKey: 'rQWpIDJUoLfBYCAH5',
            },
        );

        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: '',
          message: ''
        });

    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h3 className="text-3xl font-bold text-slate-800 mb-2 text-center">Start Your Application</h3>
          <p className="text-slate-600 text-center mb-8">Fill out the form below and our team will contact you within 24 hours</p>

          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number * 
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-slate-700 mb-2">
                  Program Interest *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all cursor-pointer"
                >
                  <option value="">Select a program</option>
                  <option value="Seniors">Seniors</option>
                  <option value="Veterans">Veterans</option>
                  <option value="Sober Living">Sober Living</option>
                  <option value="Re-entry Support">Re-entry Support</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Tell Us About Your Situation
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                rows={5}
                className="w-full px-4 py-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Share any additional information that would help us understand your needs..."
              ></textarea>
              <div className="text-right text-xs text-slate-500 mt-1">
                {formData.message.length}/500 characters
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                <strong>Success!</strong> Your application has been submitted. We'll contact you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                <strong>Error!</strong> Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-blue-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
              <i className="ri-phone-line text-2xl text-blue-600"></i>
            </div>
            <h4 className="font-bold text-slate-800">Call/Text Us</h4>
            <p className="text-slate-600">(430) 202-5623</p>
          </div>

          <div className="space-y-2">
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
              <i className="ri-mail-line text-2xl text-blue-600"></i>
            </div>
            <h4 className="font-bold text-slate-800">Email Us</h4>
            <p className="text-slate-600">connect@triumphlivin.com</p>
          </div>

        </div>
      </div>
    </section>
  );
}