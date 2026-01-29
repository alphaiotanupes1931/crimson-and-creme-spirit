import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import brother1 from '@/assets/brother-1.jpg';
import brother2 from '@/assets/brother-2.jpg';
import brother3 from '@/assets/brother-3.jpg';
import graduate1 from '@/assets/graduate-1.jpg';
import graduate2 from '@/assets/graduate-2.jpg';

const activeBrothers = [
  { name: "Godley Pierre", position: "Polemarch", lineNumber: "Line 38", image: brother1 },
  { name: "Marcus McClean", position: "Vice Polemarch", lineNumber: "Line 39", image: brother2 },
  { name: "Christian Sampson", position: "Exchequer", lineNumber: "Line 40", image: brother3 },
  { name: "Marcus Thompson", position: "Keeper of Records", lineNumber: "Line 42", image: brother1 },
  { name: "Jamal Williams", position: "Strategus", lineNumber: "Line 41", image: brother2 },
  { name: "David Johnson", position: "Lieutenant Strategus", lineNumber: "Line 43", image: brother3 },
];

const graduates = [
  { name: "Michael Brown", degree: "B.S. Business Administration", year: "2024", image: graduate1 },
  { name: "Anthony Davis", degree: "B.S. Computer Science", year: "2024", image: graduate2 },
  { name: "Jerome Carter", degree: "B.A. Communications", year: "2024", image: graduate1 },
  { name: "Kevin Washington", degree: "B.S. Engineering", year: "2024", image: graduate2 },
];

export const BrothersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<'active' | 'graduates'>('active');

  return (
    <section id="brothers" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-crimson tracking-[0.2em] uppercase text-sm font-semibold">Our Brotherhood</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Meet the Brothers
          </h2>
          <p className="text-muted-foreground text-lg">
            The men of Alpha Iota Chapter embody the principles of achievement, leadership, and service.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeTab === 'active' ? 'crimson' : 'outline'}
            size="lg"
            onClick={() => setActiveTab('active')}
          >
            Active Brothers
          </Button>
          <Button
            variant={activeTab === 'graduates' ? 'crimson' : 'outline'}
            size="lg"
            onClick={() => setActiveTab('graduates')}
          >
            Recent Graduates
          </Button>
        </div>

        {/* Active Brothers Grid */}
        {activeTab === 'active' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {activeBrothers.map((brother, index) => (
              <motion.div
                key={brother.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="overflow-hidden group hover-lift">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={brother.image}
                        alt={`Brother ${brother.name}, ${brother.position}, ${brother.lineNumber} - Active member of Alpha Iota Chapter`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="font-semibold text-foreground text-sm">{brother.name}</p>
                      <p className="text-crimson text-xs font-medium">{brother.position}</p>
                      <p className="text-muted-foreground text-xs mt-1">{brother.lineNumber}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Graduates Grid */}
        {activeTab === 'graduates' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {graduates.map((graduate, index) => (
              <motion.div
                key={graduate.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="overflow-hidden group hover-lift">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={graduate.image}
                        alt={`Brother ${graduate.name}, ${graduate.degree}, Class of ${graduate.year} - Alpha Iota Chapter Graduate`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="font-semibold text-foreground text-sm">{graduate.name}</p>
                      <p className="text-muted-foreground text-xs">{graduate.degree}</p>
                      <p className="text-crimson text-xs font-medium mt-1">Class of {graduate.year}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
