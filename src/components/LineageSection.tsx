import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const lineageData = [
  { year: "1931", title: "Chapter Founded", description: "Alpha Iota Chapter established at Morgan State College" },
  { year: "1935", title: "First Province Awards", description: "Recognition for outstanding scholarship and service" },
  { year: "1950", title: "Growth Era", description: "Chapter expansion and increased campus presence" },
  { year: "1970", title: "Civil Rights Leadership", description: "Brothers active in social justice movements" },
  { year: "1990", title: "Community Impact", description: "Launch of major community service initiatives" },
  { year: "2010", title: "Modern Excellence", description: "Multiple national and province awards" },
  { year: "2024", title: "Continuing Legacy", description: "93+ years of achievement at Morgan State University" },
];

const mrMorganLineage = [
  { name: "Brother James Mitchell", year: "2023-2024" },
  { name: "Brother Darius Thomas", year: "2022-2023" },
  { name: "Brother Kevin Williams", year: "2021-2022" },
  { name: "Brother Marcus Brown", year: "2020-2021" },
  { name: "Brother Anthony Carter", year: "2019-2020" },
];

export const LineageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="history" className="py-24 bg-crimson text-cream">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cream/70 tracking-[0.2em] uppercase text-sm font-semibold">Our Legacy</span>
          <h2 className="font-display text-4xl md:text-5xl text-cream mt-4 mb-6">
            Chapter Lineage
          </h2>
          <p className="text-cream/80 text-lg">
            A proud history spanning over nine decades of achievement, brotherhood, and service at Morgan State University.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-cream/30" />
            
            {lineageData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <p className="text-cream/60 text-sm mb-1">{item.year}</p>
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-cream/70 text-sm">{item.description}</p>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cream border-4 border-crimson" />
                
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mr. Morgan Lineage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="font-display text-3xl text-center text-cream mb-8">Mister Morgan Lineage</h3>
          <p className="text-cream/70 text-center max-w-2xl mx-auto mb-8">
            The prestigious Mister Morgan competition showcases the finest gentlemen at Morgan State University. Our brothers have proudly represented the chapter and university.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {mrMorganLineage.map((winner, index) => (
              <motion.div
                key={winner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center p-4 bg-cream/10 rounded-lg backdrop-blur-sm"
              >
                <p className="font-semibold text-cream text-sm">{winner.name}</p>
                <p className="text-cream/60 text-xs">{winner.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
