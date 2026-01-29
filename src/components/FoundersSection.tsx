import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const founders = [
  { name: "Elder Watson Diggs", role: "Grand Polemarch" },
  { name: "Byron Kenneth Armstrong", role: "Co-Founder" },
  { name: "Henry T. Asher", role: "Co-Founder" },
  { name: "Marcus Peter Blakemore", role: "Co-Founder" },
  { name: "Paul Waymond Caine", role: "Co-Founder" },
  { name: "George Wesley Edmonds", role: "Co-Founder" },
  { name: "Ezra D. Alexander", role: "Co-Founder" },
  { name: "Guy Levis Grant", role: "Co-Founder" },
  { name: "Edward G. Irvin", role: "Co-Founder" },
  { name: "Sergeant S. Gruder", role: "Co-Founder" },
];

export const FoundersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-crimson tracking-[0.2em] uppercase text-sm font-semibold">January 5, 1911</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            The Founders
          </h2>
          <p className="text-muted-foreground text-lg">
            Ten visionary men at Indiana University established a fraternity that would become one of the largest and most influential organizations for men of color.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-crimson/10 flex items-center justify-center">
                <span className="font-display text-crimson text-xl font-bold">
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <p className="font-semibold text-foreground text-sm">{founder.name}</p>
              <p className="text-muted-foreground text-xs mt-1">{founder.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="font-display text-2xl text-crimson italic">
            "A Bond of Fraternity"
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Founded at Indiana University, Bloomington, Indiana. Over 160,000+ initiated members worldwide. 700+ undergraduate and alumni chapters.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
