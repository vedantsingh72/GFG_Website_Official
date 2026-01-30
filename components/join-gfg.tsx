'use client';

import React from "react"

import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

export default function JoinGFG() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    department: string;
    year: string;
    interests: string[];
  }>({
    name: '',
    email: '',
    phone: '',
    department: '',
    year: '',
    interests: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const interests = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'AI/ML',
    'Cloud Computing',
    'DevOps',
    'Open Source',
    'UI/UX Design',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.department || !formData.year) {
      setError('Please fill in all required fields');
      return;
    }

    if (formData.interests.length === 0) {
      setError('Please select at least one interest');
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        year: '',
        interests: [],
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join <span className="text-green-500">GFG Today</span>
          </h2>
          <p className="text-xl text-slate-400">
            Start your journey with the largest tech community at RGIT. Fill the form below to join us!
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-lg border border-slate-800 p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Welcome to GFG!</h3>
              <p className="text-slate-400 text-center max-w-md">
                Your registration has been submitted successfully. We'll send you a confirmation email shortly. Get ready to grow with us!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex gap-3 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-400">{error}</p>
                </div>
              )}

              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500/30 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500/30 transition-colors"
                  />
                </div>
              </div>

              {/* Phone and Department */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9XXXXXXXXX"
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500/30 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500/30 transition-colors"
                  >
                    <option value="">Select Department</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Civil">Civil</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Year */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  Year of Study <span className="text-red-500">*</span>
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500/30 transition-colors"
                >
                  <option value="">Select Year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-white">
                  Areas of Interest <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                        formData.interests.includes(interest)
                          ? 'bg-green-500 border-green-500 text-slate-950'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-green-500/50'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-500 text-slate-950 font-semibold rounded-lg hover:bg-green-400 transition-colors duration-200 mt-8"
              >
                Join GFG Community
              </button>

              <p className="text-center text-sm text-slate-400">
                By joining, you agree to our community guidelines and will receive updates about events and opportunities.
              </p>
            </form>
          )}
        </div>

        {/* Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Access to Events', description: 'Attend exclusive workshops, seminars, and networking events' },
            { title: 'Learning Resources', description: 'Get curated tutorials, guides, and study materials' },
            { title: 'Mentorship', description: 'Connect with experienced professionals and seniors' },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 bg-gradient-to-br from-slate-950 to-slate-900 rounded-lg border border-slate-800 hover:border-green-500/50 transition-colors"
            >
              <Check className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
