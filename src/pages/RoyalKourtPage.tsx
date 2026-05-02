import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import elizabeth from '@/assets/royal-elizabeth.png';
import kaiya from '@/assets/royal-kaiya.png';
import sage from '@/assets/royal-sage.png';
import kalise from '@/assets/royal-kalise.png';
import anaya from '@/assets/royal-anaya.png';

const court = [
  { name: 'Kalise Graham', title: 'Miss Kappa Alpha Psi', handle: 'kaliseeeee_', image: kalise },
  { name: 'Anaya Swiggett', title: 'Miss Alpha Iota', handle: 'ana.yaimani', image: anaya },
  { name: 'Elizabeth Stewart', title: 'Miss Krimson & Kream', handle: 'elizabethh.hope__', image: elizabeth },
  { name: 'Kaiya Harris', title: 'Miss 1911', handle: '_.kaiyya', image: kaiya },
  { name: 'Sage Ufoh', title: 'Miss Kongeniality', handle: '_sa9e._', image: sage },
];

export const RoyalKourtPage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cream/80 tracking-[0.3em] uppercase text-xs sm:text-sm mb-4"
          >
            Alpha Iota Chapter Presents
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cursive text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cream leading-tight"
          >
            Current Royal Kourt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto mt-6 italic text-base sm:text-lg"
          >
            Five extraordinary women whose grace, brilliance, and presence reign as the heart of our chapter.
          </motion.p>
          <div className="mx-auto mt-8 h-px w-24 bg-cream/40" />
        </div>
      </section>

      {/* Court Members */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
            {court.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group text-center"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Faded edges blending into background */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/50 via-transparent to-background/50" />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-transparent" />
                </div>
                <div className="mt-6 px-2">
                  <p className="font-cursive text-3xl sm:text-4xl text-cream leading-tight">
                    {member.title}
                  </p>
                  <p className="font-display text-base sm:text-lg text-foreground tracking-wider mt-2">
                    {member.name}
                  </p>
                  <a
                    href={`https://www.instagram.com/${member.handle}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs text-muted-foreground hover:text-cream transition-colors"
                  >
                    <Instagram className="w-3 h-3" />@{member.handle}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Embed */}
      <section className="py-16 sm:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-cream/80 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
              Follow The Kourt
            </span>
            <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-cream mt-3">
              @ainupes.royalcourt
            </h2>
          </motion.div>

          <div className="max-w-md sm:max-w-lg mx-auto">
            <div className="bg-background border border-border rounded-lg overflow-hidden">
              <iframe
                src="https://www.instagram.com/ainupes.royalcourt/embed"
                className="w-full"
                style={{ height: '640px', border: 'none' }}
                scrolling="no"
                title="Royal Kourt Instagram Feed"
              />
            </div>
            <div className="text-center mt-6">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoyalKourtPage;
