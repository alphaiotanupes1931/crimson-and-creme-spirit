import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import groupPhoto from '@/assets/royal-kourt-group.jpg';
import elizabeth from '@/assets/royal-elizabeth.png';
import kaiya from '@/assets/royal-kaiya.png';
import sage from '@/assets/royal-sage.png';
import kalise from '@/assets/royal-kalise.png';
import anaya from '@/assets/royal-anaya.png';

const court = [
  { name: 'Kalise Graham', title: 'Miss Kappa Alpha Psi', image: kalise },
  { name: 'Anaya Swiggett', title: 'Miss Alpha Iota', image: anaya },
  { name: 'Elizabeth Stewart', title: 'Miss Krimson & Kream', image: elizabeth },
  { name: 'Kaiya Harris', title: 'Miss 1911', image: kaiya },
  { name: 'Sage Ufoh', title: 'Miss Kongeniality', image: sage },
];

export const RoyalKourtPage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-14">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cursive text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cream leading-[0.9]"
          >
            The Royal Kourt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display font-bold tracking-[0.3em] text-cream/90 mt-6 text-sm sm:text-base"
          >
            2026 — 2027
          </motion.p>
        </div>
      </section>

      {/* Group Photo */}
      <section className="pb-20 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto overflow-hidden"
          >
            <img
              src={groupPhoto}
              alt="The 2026–2027 Royal Kourt of the Alpha Iota Chapter"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/50 via-transparent to-background/50" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Court Members */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 max-w-6xl mx-auto">
            {court.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-background">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{
                      WebkitMaskImage:
                        'radial-gradient(ellipse 75% 85% at center, black 45%, transparent 100%)',
                      maskImage:
                        'radial-gradient(ellipse 75% 85% at center, black 45%, transparent 100%)',
                    }}
                  />
                </div>
                <div className="mt-6 px-2">
                  <p className="font-cursive text-3xl sm:text-4xl text-cream leading-tight">
                    {member.title}
                  </p>
                  <p className="font-display text-base sm:text-lg text-foreground tracking-wider mt-2">
                    {member.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section className="py-16 sm:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cream/70 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
              Follow The Kourt
            </span>
            <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-cream mt-3 mb-8">
              @ainupes.royalcourt
            </h2>
            <Button variant="outline" asChild>
              <a
                href="https://www.instagram.com/ainupes.royalcourt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4" />
                Follow @ainupes.royalcourt
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RoyalKourtPage;
