import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, GraduationCap, Heart } from 'lucide-react';
import morganCampus from '@/assets/morgan-campus.jpg';

const objectives = [
  {
    icon: Target,
    title: "Achievement",
    description: "To unite college men of culture, patriotism, and honor in a bond of Fraternity."
  },
  {
    icon: Users,
    title: "Brotherhood",
    description: "To encourage honorable achievement in every field of human endeavor."
  },
  {
    icon: GraduationCap,
    title: "Leadership",
    description: "To promote the spiritual, social, intellectual, and moral welfare of members."
  },
  {
    icon: Heart,
    title: "Service",
    description: "To inspire service in the public interest through community engagement."
  }
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-crimson tracking-[0.2em] uppercase text-sm font-semibold">About Us</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Our Foundation & Purpose
          </h2>
          <p className="text-muted-foreground text-lg">
            Kappa Alpha Psi Fraternity, Inc. was founded on January 5, 1911, at Indiana University in Bloomington, Indiana. Today, we are one of the largest and oldest predominantly African American Greek-letter organizations.
          </p>
        </motion.div>

        {/* Objectives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {objectives.map((objective, index) => (
            <motion.div
              key={objective.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="spotlight" className="h-full hover-lift">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-crimson/10 flex items-center justify-center">
                    <objective.icon className="w-8 h-8 text-crimson" />
                  </div>
                  <CardTitle className="text-xl">{objective.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">{objective.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Chapter Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={morganCampus}
              alt="Morgan State University campus, historic brick building with clock tower, home to the Alpha Iota Chapter"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crimson/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-cream">
              <p className="font-display text-2xl font-semibold">Morgan State University</p>
              <p className="text-cream/80">Baltimore, Maryland</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl text-foreground mb-3">The Fraternity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kappa Alpha Psi was founded by Elder Watson Diggs, Byron Kenneth Armstrong, Henry T. Asher, Marcus Peter Blakemore, Paul Waymond Caine, George Wesley Edmonds, Ezra D. Alexander, Guy Levis Grant, Edward G. Irvin, and Sergeant S. Gruder. These ten founders created an organization focused on achievement and service that has grown to over 160,000 members worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-foreground mb-3">Eastern Province</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Eastern Province of Kappa Alpha Psi Fraternity, Inc. encompasses chapters across the Mid-Atlantic region, including Maryland, Delaware, Virginia, and Washington D.C. The Province serves as the administrative body for undergraduate and alumni chapters in this territory.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-foreground mb-3">Alpha Iota Chapter</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded on May 29, 1931, at Morgan State University, the Alpha Iota Chapter has maintained a proud legacy of academic excellence, community service, and leadership development for over nine decades. Our chapter continues to produce men of achievement who make significant contributions to society.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
