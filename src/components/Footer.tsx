'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <a href="#home" className="text-2xl font-bold text-white hover:text-primary-400 transition-colors inline-block mb-4">
                <span className="text-primary-400">&lt;</span>
                nexarfluX
                <span className="text-primary-400">/&gt;</span>
              </a>
              <p className="text-slate-400 leading-relaxed">
                Building exceptional digital experiences with passion and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-slate-400 hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-lg text-slate-400 hover:text-primary-400 hover:bg-slate-700 transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-lg text-slate-400 hover:text-primary-400 hover:bg-slate-700 transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="bg-slate-800 p-3 rounded-lg text-slate-400 hover:text-primary-400 hover:bg-slate-700 transition-all transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm flex items-center gap-2">
                © {currentYear} nexarfluX. Made with
                <Heart className="text-red-500" size={16} fill="currentColor" />
                and dedication.
              </p>
              <p className="text-slate-400 text-sm">
                Powered by Next.js & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
