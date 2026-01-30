'use client';

import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-950 font-bold text-sm">GFG</span>
              </div>
              <span className="text-white font-bold">GFG RGIT</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering RGIT students through tech education, community building, and career growth opportunities.
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-green-400 transition-all duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'upcomingEvents', label: 'Upcoming Events' },
                { id: 'resources', label: 'Resources' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-green-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-green-400 text-sm transition-colors duration-200">
                  Learning Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-green-400 text-sm transition-colors duration-200">
                  Code Repository
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-green-400 text-sm transition-colors duration-200">
                  Interview Prep
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-green-400 text-sm transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:gfgrgit@rgit.edu"
                className="flex items-start gap-2 text-slate-400 hover:text-green-400 text-sm transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                gfgrgit@rgit.edu
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-start gap-2 text-slate-400 hover:text-green-400 text-sm transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                +91 98765 43210
              </a>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                RGIT Campus, Bengaluru
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Geek for Geeks RGIT Student Chapter. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-green-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-green-400 text-sm transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="#" className="text-slate-500 hover:text-green-400 text-sm transition-colors duration-200">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-slate-900 rounded-lg border border-green-500/30 text-center">
          <p className="text-slate-300 mb-3">Ready to start your tech journey?</p>
          <button
            onClick={() => scrollToSection('joinGFG')}
            className="inline-block px-6 py-2 bg-green-500 text-slate-950 font-semibold rounded-lg hover:bg-green-400 transition-colors duration-200"
          >
            Join Our Community
          </button>
        </div>
      </div>
    </footer>
  );
}
