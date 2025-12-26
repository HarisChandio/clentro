"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#FF5F00";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    budgetRange: "",
    projectType: "",
    projectDescription: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We\'ll respond within 24 hours.',
        });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          company: "",
          budgetRange: "",
          projectType: "",
          projectDescription: ""
        });
      } else {
        const error = await response.json();
        setSubmitStatus({
          type: 'error',
          message: error.error || 'Failed to submit. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span 
            className="text-xs font-bold tracking-wider px-4 py-2 rounded-full inline-block mb-6"
            style={{ backgroundColor: BRAND_COLOR, color: 'white' }}
          >
            GET IN TOUCH
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Start Your Project
          </h2>
          <p className="text-lg text-gray-600">
            Tell us about your idea. We'll respond within 24 hours with a project proposal.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 md:p-12 space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name <span style={{ color: BRAND_COLOR }}>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 bg-white"
                style={{ focusRingColor: BRAND_COLOR }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email <span style={{ color: BRAND_COLOR }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 bg-white"
              />
            </div>
          </div>

          {/* Company and Budget Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 bg-white"
              />
            </div>
            <div>
              <label htmlFor="budgetRange" className="block text-sm font-semibold text-gray-900 mb-2">
                Budget Range
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 bg-white text-gray-600"
              >
                <option value="">Select budget</option>
                <option value="10k-25k">$10k - $25k</option>
                <option value="25k-50k">$25k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k+">$100k+</option>
              </select>
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Project Type <span style={{ color: BRAND_COLOR }}>*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['SaaS', 'Web App', 'Mobile', 'AI/ML'].map((type) => (
                <label
                  key={type}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="projectType"
                    value={type}
                    checked={formData.projectType === type}
                    onChange={handleChange}
                    className="w-4 h-4 accent-orange-500"
                    style={{ accentColor: BRAND_COLOR }}
                  />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="projectDescription" className="block text-sm font-semibold text-gray-900 mb-2">
              Project Description <span style={{ color: BRAND_COLOR }}>*</span>
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              required
              rows={6}
              placeholder="Tell us about your project, goals, and timeline..."
              value={formData.projectDescription}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 bg-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="space-y-3">
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg text-sm text-center ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full rounded-full font-bold text-white text-sm tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              {isSubmitting ? 'SENDING...' : 'SEND PROJECT BRIEF'}
            </Button>
            <p className="text-xs text-gray-500 text-center">
              We'll respond within 24 hours with next steps
            </p>
          </div>
        </form>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <a 
              href="mailto:contact@clentro.io" 
              className="text-sm hover:underline"
              style={{ color: BRAND_COLOR }}
            >
              contact@clentro.io
            </a>
          </div>

          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Schedule Call</h3>
            <a 
              href="#" 
              className="text-sm hover:underline"
              style={{ color: BRAND_COLOR }}
            >
              Book a free consultation
            </a>
          </div>

          <div className="text-center">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Slack</h3>
            <a 
              href="#" 
              className="text-sm hover:underline"
              style={{ color: BRAND_COLOR }}
            >
              Join our community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
