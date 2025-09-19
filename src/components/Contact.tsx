import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'general',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const contactInfo = [
    { icon: MapPin, title: "Our Location", details: ["9 Akowonjo Street", "Ikosi, Ilaro", "Ogun State, Nigeria"], color: "text-blue-600" },
    { icon: Phone, title: "Phone Number", details: ["+234 805 614 9269"], color: "text-green-600" },
    { icon: Mail, title: "Email Address", details: ["info@educatalyst.ng", "support@educatalyst.ng"], color: "text-orange-600" },
    { icon: Clock, title: "Office Hours", details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 2:00 PM"], color: "text-purple-600" }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'programs', label: 'Program Information' },
    { value: 'registration', label: 'Registration' },
    { value: 'hackathon', label: 'Teacher Hackathon' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'media', label: 'Media & Press' }
  ];

  // Real-time validation on field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };
      switch (name) {
        case 'name':
          newErrors.name = value.trim() ? '' : 'Name is required';
          break;
        case 'email':
          if (!value.trim()) newErrors.email = 'Email is required';
          else if (!/^\S+@\S+\.\S+$/.test(value)) newErrors.email = 'Invalid email address';
          else newErrors.email = '';
          break;
        case 'message':
          newErrors.message = value.trim() ? '' : 'Message cannot be empty';
          break;
        case 'phone':
          if (value && !/^\+?\d{7,15}$/.test(value)) newErrors.phone = 'Invalid phone number';
          else newErrors.phone = '';
          break;
        default:
          break;
      }
      return newErrors;
    });
  };

  // Final validation before submit
  const validate = () => {
    const newErrors = { name: '', email: '', phone: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) { newErrors.name = 'Name is required'; isValid = false; }
    if (!formData.email.trim()) { newErrors.email = 'Email is required'; isValid = false; }
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) { newErrors.email = 'Invalid email address'; isValid = false; }
    if (!formData.message.trim()) { newErrors.message = 'Message cannot be empty'; isValid = false; }
    if (formData.phone && !/^\+?\d{7,15}$/.test(formData.phone)) { newErrors.phone = 'Invalid phone number'; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setToast(null);

    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setToast({ type: 'success', message: 'Message sent successfully!' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          inquiryType: 'general',
          message: ''
        });
      } else {
        setToast({ type: 'error', message: 'Failed to send message. Try again later.' });
      }
    } catch (err) {
      console.error(err);
      setToast({ type: 'error', message: 'An error occurred. Try again later.' });
    }

    setLoading(false);

    // Hide toast after 4 seconds
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in <span className="text-blue-800">Touch</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your teaching career? Contact us today to learn more about our programs or schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${info.color} bg-gray-100 rounded-lg flex items-center justify-center`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                    {info.details.map((detail, idy) => <p key={idy} className="text-gray-600">{detail}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">School/Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Type of Inquiry *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {inquiryTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`w-full bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  <Send className="h-5 w-5" />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h4>
              <p className="text-gray-500">Find us at 9 Akowonjo Street, Ikosi, Ilaro, Ogun State</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
