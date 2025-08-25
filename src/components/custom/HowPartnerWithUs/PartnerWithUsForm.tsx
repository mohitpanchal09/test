"use client"
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organisation: string;
  industry: string;
  proposal: string;
}

function PartnerWithUsForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organisation: '',
    industry: '',
    proposal: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organisation: '',
        industry: '',
        proposal: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4 py-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-md w-full text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
            <p className="text-gray-600">Your partnership proposal has been submitted successfully. We&apos;ll get back to you within 2-3 business days.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-8 relative">
      <div
          className="absolute  -z-10"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "63px",
            opacity: 0.2,
            background: "linear-gradient(273deg, #B3FF00 4.89%, #02803E 90.8%)",
            filter: "blur(200px)",
            flexShrink: "0"
          }}
        />
      <div className="bg-white rounded-3xl  p-8 md:p-12 max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Partner with us</h1>
          <p className="text-gray-600">Let&apos;s explore opportunities together</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter Your First Name"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter Your Last Name"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your E-mail Address"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter Your Mobile Number"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Organisation and Industry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="organisation" className="block text-sm font-medium text-gray-900 mb-2">
                Organisation Name
              </label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                value={formData.organisation}
                onChange={handleInputChange}
                placeholder="Enter Your Organisation Name"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-900 mb-2">
                Industry Name
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                placeholder="Enter Your Industry Name"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Business Proposal */}
          <div>
            <label htmlFor="proposal" className="block text-sm font-medium text-gray-900 mb-2">
              Business proposal that you have in mind
            </label>
            <input
              id="proposal"
              name="proposal"
              value={formData.proposal}
              onChange={handleInputChange}
              placeholder="Mention your detailed Proposal"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#066833] cursor-pointer hover:bg-green-700 disabled:bg-green-400 text-white font-semibold px-12 h-12 rounded-full transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                'Partner with us'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PartnerWithUsForm;