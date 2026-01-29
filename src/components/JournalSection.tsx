import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import brother1 from '@/assets/brother-1.jpg';
import brother2 from '@/assets/brother-2.jpg';
import brother3 from '@/assets/brother-3.jpg';

const journalEntries = [
  {
    name: "Brother Marcus Thompson",
    title: "Dean's List Achievement",
    description: "Recognized for academic excellence with a 3.9 GPA in Computer Science.",
    image: brother1,
    date: "Fall 2024",
    lineNumber: "Line 42"
  },
  {
    name: "Brother Christian Sampson",
    title: "Exchequer Excellence",
    description: "Successfully managed chapter finances, increasing reserves by 40%.",
    image: brother2,
    date: "Fall 2024",
    lineNumber: "Line 40"
  },
  {
    name: "Brother Jamal Williams",
    title: "Community Service Leader",
    description: "Led over 200 hours of community service initiatives this semester.",
    image: brother3,
    date: "Fall 2024",
    lineNumber: "Line 41"
  }
];

const awards = [
  { icon: Trophy, title: "Chapter of the Year", year: "2023" },
  { icon: Award, title: "Province Scholarship Award", year: "2022" },
  { icon: Star, title: "Outstanding Community Service", year: "2023" },
  { icon: Medal, title: "Step Show Champions", year: "2024" }
];

export const JournalSection = () => {
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
          <span className="text-crimson tracking-[0.2em] uppercase text-sm font-semibold">Recognition</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Alpha Iota Journal
          </h2>
          <p className="text-muted-foreground text-lg">
            Celebrating the achievements of our brothers and highlighting their contributions to the chapter, campus, and community.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {journalEntries.map((entry, index) => (
            <motion.div
              key={entry.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card variant="elevated" className="h-full hover-lift overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={entry.image}
                    alt={`${entry.name}, ${entry.lineNumber}, ${entry.title} - Alpha Iota Chapter member achievement spotlight`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-crimson font-semibold tracking-wider uppercase">{entry.date}</span>
                    <span className="text-xs text-muted-foreground">{entry.lineNumber}</span>
                  </div>
                  <CardTitle className="text-lg">{entry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{entry.description}</p>
                  <p className="font-semibold text-foreground">{entry.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Chapter Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="font-display text-2xl text-center text-foreground mb-8">Chapter Awards & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 bg-background rounded-xl border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-crimson/10 flex items-center justify-center">
                  <award.icon className="w-6 h-6 text-crimson" />
                </div>
                <p className="font-semibold text-foreground text-sm mb-1">{award.title}</p>
                <p className="text-muted-foreground text-xs">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
