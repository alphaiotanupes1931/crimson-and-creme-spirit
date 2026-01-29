import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const links = [
  { name: "Kappa Alpha Psi IHQ", url: "https://kappaalphapsi1911.com" },
  { name: "Eastern Province", url: "https://epkapsi.org" },
  { name: "Baltimore Alumni Chapter", url: "https://benchmarkkappas.org/" },
  { name: "AI Foundation", url: "https://givetomorgan.org/give/" },
  { name: "NPHC", url: "https://nphchq.com" },
  { name: "Morgan State University", url: "https://morgan.edu" },
  { name: "Robert's Rules of Order", url: "https://robertsrules.com" },
  { name: "UNCF Scholarships", url: "https://uncf.org" },
  { name: "Kappa Foundation", url: "https://thekappafoundation.org/" },
];

export const Footer = () => {
  return (
    <footer className="bg-crimson text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                <span className="font-display text-crimson text-xl font-bold">ΑΙ</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold">Alpha Iota Chapter</p>
                <p className="text-cream/70 text-xs">Kappa Alpha Psi Fraternity, Inc.</p>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Founded May 29, 1931 at Morgan State University. Dedicated to achievement in every field of human endeavor.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-3">
              <a href="#home" className="text-cream/70 hover:text-cream text-sm transition-colors">Home</a>
              <a href="#about" className="text-cream/70 hover:text-cream text-sm transition-colors">About</a>
              <a href="#history" className="text-cream/70 hover:text-cream text-sm transition-colors">History</a>
              <a href="#brothers" className="text-cream/70 hover:text-cream text-sm transition-colors">Brothers</a>
              <a href="#service" className="text-cream/70 hover:text-cream text-sm transition-colors">Service</a>
              <a href="#gallery" className="text-cream/70 hover:text-cream text-sm transition-colors">Gallery</a>
              <a href="#contact" className="text-cream/70 hover:text-cream text-sm transition-colors">Contact</a>
            </nav>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Resources</h3>
            <nav className="space-y-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/70 hover:text-cream text-sm transition-colors"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Alpha Iota Chapter of Kappa Alpha Psi Fraternity, Inc. All rights reserved.
            </p>
            <p className="text-cream/60 text-xs italic">
              "Achievement in Every Field of Human Endeavor"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};