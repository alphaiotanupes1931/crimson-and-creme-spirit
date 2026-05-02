import { motion } from 'framer-motion';
import rryAwardImg from '@/assets/rry-award.jpg';

const chapterRecognition = [
  { year: '2026', title: 'Ronald R. Young Website of the Year' },
  { year: '2009', title: 'International Chapter of the Year' },
  { title: '8x Eastern Province Chapter of the Year' },
  { title: '10x Junior Vice Polemarch' },
  { title: '10x Mr. Morgan State' },
];

const individualHonors = [
  { title: 'Byron K. Armstrong Awardee', count: '1x' },
  { title: 'William L. Crump Awardee', count: '1x' },
  { title: 'Guy L. Grant Awardee', count: '6x' },
];

const detailedAchievements = [
  {
    title: 'Eastern Junior Vice Polemarch',
    years: '2001–02, 2002–03, 2006–07, 2007–08, 2008–09, 2009–10, 2010–11, 2012–13, 2013–14, 2024–25',
  },
  { title: 'Guy L. Grant Awardee', years: '1997, 1998, 2001, 2003, 2011' },
  {
    title: 'Mr. Morgan State',
    years: '1989–90, 1992–93, 1994–95, 1996–97, 1999–2000, 2006–07, 2007–08, 2012–13, 2015–16, 2024–25',
  },
];

export const AwardsPage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cream/80 tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4"
          >
            Alpha Iota Chapter
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-none"
          >
            AWARDS &<br />
            <span className="text-gradient-cream">ACHIEVEMENTS</span>
          </motion.h1>
          <div className="mx-auto mt-8 h-px w-24 bg-cream/40" />
        </div>
      </section>

      {/* Most Recent */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto"
          >
            <div className="relative overflow-hidden mx-auto max-w-md w-full">
              <img
                src={rryAwardImg}
                alt="Alpha Iota Chapter receiving the 2026 Ronald R. Young Website of the Year Award"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="text-center lg:text-left">
              <span className="text-cream text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
                2026 Award Recipient
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mt-4 mb-6 leading-tight">
                RONALD R. YOUNG<br />
                <span className="text-gradient-cream">WEBSITE OF THE YEAR</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Recognized as the 2026 recipient of the Ronald R. Young Website of the Year Award — a testament to our commitment to digital excellence within Kappa Alpha Psi Fraternity, Inc.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter Recognition */}
      <section className="py-12 sm:py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-10 text-center">
            CHAPTER <span className="text-gradient-cream">RECOGNITION</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {chapterRecognition.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-border p-5 sm:p-6 bg-background"
              >
                {a.year && (
                  <p className="text-cream text-[10px] font-semibold tracking-[0.3em] uppercase mb-2">{a.year}</p>
                )}
                <p className="font-display text-lg sm:text-xl text-foreground leading-tight">{a.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Honors */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-10 text-center">
            INDIVIDUAL <span className="text-gradient-cream">HONORS</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {individualHonors.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center p-6 border border-border"
              >
                <p className="font-display text-3xl sm:text-4xl text-cream mb-2">{h.count}</p>
                <p className="text-foreground/90 text-sm sm:text-base">{h.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Years */}
      <section className="py-12 sm:py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-10 text-center">
            BY THE <span className="text-gradient-cream">YEARS</span>
          </h2>
          <div className="space-y-6">
            {detailedAchievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-l-2 border-cream pl-5 sm:pl-6"
              >
                <p className="font-display text-xl sm:text-2xl text-foreground mb-2">{a.title}</p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{a.years}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwardsPage;
