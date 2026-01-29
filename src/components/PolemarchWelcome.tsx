import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import polemarchImg from '@/assets/polemarch.jpg';

export const PolemarchWelcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-crimson tracking-[0.2em] uppercase text-sm font-semibold">Message From Leadership</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-8">
              Polemarch's Welcome
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Greetings and welcome to the official website of the Alpha Iota Chapter of Kappa Alpha Psi Fraternity, Inc. at Morgan State University.
              </p>
              <p>
                Since our founding on May 29, 1931, we have been committed to upholding the values of achievement, training for leadership, and service to all humanity. Our brothers continue to exemplify excellence in scholarship, community service, and brotherhood.
              </p>
              <p>
                As we move forward, we remain dedicated to nurturing every Kappa Alpha Psi into a leader who will make significant contributions to society. I invite you to explore our website and learn more about our rich history, our accomplished brothers, and our ongoing commitment to excellence.
              </p>
              <p className="font-semibold text-foreground italic">
                "Achievement in Every Field of Human Endeavor"
              </p>
            </div>
            
            <div className="mt-8">
              <p className="font-display text-xl text-crimson font-semibold">Brother Godley Pierre</p>
              <p className="text-muted-foreground">Polemarch, Alpha Iota Chapter</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Card variant="elevated" className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={polemarchImg}
                  alt="Brother Godley Pierre, Polemarch of Alpha Iota Chapter, wearing crimson blazer in professional leadership portrait"
                  className="w-full aspect-[3/4] object-cover"
                />
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 -left-6 bg-crimson text-cream p-6 rounded-lg shadow-lg">
              <p className="font-display text-3xl font-bold">93+</p>
              <p className="text-cream/80 text-sm">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
