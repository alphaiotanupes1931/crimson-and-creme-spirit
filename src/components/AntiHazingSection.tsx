import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

export const AntiHazingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-foreground text-cream">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold mb-4">Anti-Hazing Statement</h2>
              <p className="text-cream/80 leading-relaxed mb-6">
                Kappa Alpha Psi Fraternity, Inc. strictly prohibits hazing in any form. Hazing is not only illegal but goes against the fundamental principles upon which our organization was founded. We are committed to creating an environment where all members can grow, learn, and develop without fear of physical or psychological harm.
              </p>
              <p className="text-cream/80 leading-relaxed mb-6">
                Any individual who witnesses or experiences hazing is encouraged to report it immediately. All reports will be taken seriously and investigated thoroughly.
              </p>
            </div>
          </div>
          
          <div className="bg-cream/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <Phone className="w-6 h-6 text-cream" />
              <p className="text-cream font-semibold text-lg">Report Hazing</p>
            </div>
            <p className="text-cream/80 mb-2">
              International Headquarters Hotline:
            </p>
            <a 
              href="tel:215-228-7184" 
              className="text-2xl font-bold text-cream hover:text-cream/80 transition-colors"
            >
              (215) 228-7184
            </a>
            <p className="text-cream/60 text-sm mt-4">
              All reports are confidential. You can also report hazing to your university's administration or local law enforcement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
