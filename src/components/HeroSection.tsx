import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Alpha Iota Chapter brothers of Kappa Alpha Psi Fraternity at formal event in crimson and cream attire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/70 via-crimson/50 to-crimson/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cream/80 tracking-[0.3em] uppercase text-sm mb-6"
          >
            Morgan State University
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-bold mb-6"
          >
            Alpha Iota Chapter
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-display text-2xl md:text-3xl text-cream/90 italic mb-4"
          >
            Kappa Alpha Psi Fraternity, Inc.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-cream/70 text-lg mb-10 max-w-2xl mx-auto"
          >
            Founded May 29, 1931 — Dedicated to Achievement in Every Field of Human Endeavor
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#about">Learn More</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-cream/60 hover:text-cream transition-colors"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};
