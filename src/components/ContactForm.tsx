import { useState } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [modal, setModal] = useState({ open: false, success: false, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'j.octaviomontilla@gmail.com',
        subject: 'Demo Request from Contact Form',
        react: `
          <h2>New Demo Request</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        `,
      });
      if (error) {
        setModal({ open: true, success: false, message: 'Failed to send email. Please try again.' });
      } else {
        setModal({ open: true, success: true, message: 'Email sent successfully! Our team will contact you within 24 hours.' });
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      }
    } catch (err) {
      setModal({ open: true, success: false, message: 'An error occurred. Please try again.' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Request a Free Demo
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
                  Discover how VeraciousVision can transform your hiring process
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 sm:p-12 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your hiring needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <span>Request a Free Demo</span>
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  By submitting this form, you agree to our <a className="hover:text-primary-400" href="#">terms of service</a> and <a className="hover:text-primary-400" href="#">privacy policy</a>
                </p>
              </form>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12 text-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-primary-300 mb-2">100%</div>
              <div className="text-sm">Secure and Private</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-primary-300 mb-2">24h</div>
              <div className="text-sm">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-primary-300 mb-2">30 days</div>
              <div className="text-sm">Free Trial Period</div>
            </div>
          </div>
        </div>
      </div>

      {modal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {modal.success ? 'Success' : 'Error'}
              </h3>
              <button
                onClick={() => setModal({ open: false, success: false, message: '' })}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex items-center mb-4">
              <CheckCircle className={`w-8 h-8 ${modal.success ? 'text-green-500' : 'text-red-500'} mr-3`} />
              <p className="text-gray-700 dark:text-gray-300">{modal.message}</p>
            </div>
            <button
              onClick={() => setModal({ open: false, success: false, message: '' })}
              className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
  