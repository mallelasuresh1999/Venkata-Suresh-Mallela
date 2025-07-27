import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Coffee } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);

      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email send error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 flex items-center justify-center px-4"
    >
      <Toaster position="top-right" />

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-stretch">
        {/* Left Contact Info Section */}
        <div className="text-white flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-300" />
            <span>+91 9550814819</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-300" />
            <span>mallelasuresh1999@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-300" />
            <span>Hyderabad, India</span>
          </div>

          
        </div>

        {/* Right Form Section with Glass Effect */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm mb-1">
                  Name <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="First"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm mb-1 invisible">
                  Last
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Last"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email <span className="text-red-300">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-1">
                Type your message here <span className="text-red-300">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 rounded-md font-semibold text-white transition ${
                isSubmitting
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'SUBMIT'}
            </button>
          </form>
        </div>
      </div>

      {/* Floating Coffee Icon in Bottom-Right */}
      <div className="absolute bottom-9 right-4 z-100">
        <div className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:scale-105 transition duration-900">
          <Coffee className="w-6 h-6 text-red" />
        </div>
      </div>
      <div className="absolute top-4 left-4 z-50">
        <div className="p-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg hover:scale-105 transition duration-300">
          <Coffee className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
