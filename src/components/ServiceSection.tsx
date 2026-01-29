import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import serviceImg from '@/assets/service.jpg';
import stepShowImg from '@/assets/step-show.jpg';

const servicePrograms = [
  {
    title: "Guide Right Program",
    description: "Our signature mentorship program that provides guidance to young men in the community. Through tutoring, career counseling, and life skills workshops, we help guide youth toward success and achievement."
  },
  {
    title: "Kappa League",
    description: "A national program designed to guide, mentor, and prepare high school young men for college. Members receive ACT/SAT prep, college tours, leadership training, and community service opportunities."
  },
  {
    title: "Community Outreach",
    description: "Regular community service initiatives including food drives, clothing donations, voter registration, and partnerships with local organizations to address community needs."
  }
];

const serviceHighlights = [
  { stat: "500+", label: "Service Hours" },
  { stat: "25+", label: "Events Hosted" },
  { stat: "1000+", label: "Lives Impacted" },
  { stat: "15+", label: "Partner Organizations" }
];

export const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="service" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-crimson tracking-[0.2em] uppercase text-sm font-semibold">Service</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Serving Humanity
          </h2>
          <p className="text-muted-foreground text-lg">
            Service is at the heart of everything we do. Our commitment to the community reflects the core values of Kappa Alpha Psi Fraternity, Inc.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {serviceHighlights.map((item, index) => (
            <div key={item.label} className="text-center p-6 bg-background rounded-xl shadow-sm">
              <p className="font-display text-4xl text-crimson font-bold mb-2">{item.stat}</p>
              <p className="text-muted-foreground text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Service Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-xl overflow-hidden"
          >
            <img
              src={serviceImg}
              alt="Alpha Iota Chapter brothers volunteering at community food drive, packaging supplies to help local families in need"
              className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-xl overflow-hidden"
          >
            <img
              src={stepShowImg}
              alt="Alpha Iota Chapter brothers performing at annual step show competition, wearing crimson blazers and cream pants on stage"
              className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Programs */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicePrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Card variant="elevated" className="h-full hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-4">{program.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Membership Interest */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-crimson rounded-2xl p-12 text-cream"
        >
          <h3 className="font-display text-3xl font-semibold mb-4">Interested in Membership?</h3>
          <p className="text-cream/80 max-w-2xl mx-auto mb-8">
            Kappa Alpha Psi Fraternity, Inc. seeks men who demonstrate academic excellence, leadership potential, and a commitment to community service. Prospective members must be enrolled at an accredited college or university with a minimum GPA requirement.
          </p>
          <Button variant="cream" size="lg" asChild>
            <a href="#contact">Learn More About Requirements</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};