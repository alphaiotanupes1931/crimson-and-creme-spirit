import { motion } from 'framer-motion';
import morganCampus from '@/assets/morgan-campus.jpg';
import aboutHeader from '@/assets/about-header.jpg';
import KAPsiCrest from './assets/KAPsiCrest1.png';

const founders = [
  { name: "Elder Watson Diggs", image: "https://www.kappaalphapsi1911.com/wp-content/uploads/2023/09/diggs.jpg" },
  { name: "Byron Kenneth Armstrong", image: "https://www.kappaalphapsi1911.com/wp-content/uploads/2023/09/ByronKArmstrong5.jpg" },
  { name: "John Milton Lee", image: "https://www.kappaalphapsi1911.com/wp-content/uploads/2023/09/Lee-1.jpg" },
  { name: "Henry Tourner Asher", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBewWiB-4GaJnsM3jwYZOJ4jJ62gziPracOArjWeKjSGKjiQgswi6rGhrg_6tGjJ3DRpL6&s" },
  { name: "Marcus Peter Blakemore", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uHqx3IEfAIrtjoeu3cVxlk3QMf0BcBpthr3j7ABiSyiTjw5s6MjKvW7kcMEZope2kc4&s" },
  { name: "Paul Waymond Caine", image: "https://www.kappaalphapsi1911.com/wp-content/uploads/2023/09/Caine-1.jpg" },
  { name: "George Wesley Edmonds", image: "https://www.kappaalphapsi1911.com/wp-content/uploads/2023/09/Edmonds-1.jpg" },
  { name: "Ezra Dee Alexander", image: "https://www.kappaalphapsi1911.com/wp-content/uploads/2023/09/Alexander-1.jpg" },
  { name: "Guy Levis Grant", image: "https://kapsinep.org/wp-content/uploads/2024/05/guy_l_grant-2.png.webp" },
  { name: "Edward Giles Irvin", image: "https://kapsinep.org/wp-content/uploads/2024/05/edward_g_irving.png.webp" },
  
];

const objectives = [
  'To unite college men of culture, patriotism and honor in a bond of fraternity',
  'To encourage honorable achievement in every field of human endeavor.',
  'To promote the spiritual, social, intellectual, and moral welfare of its members.',
  'To aid the aims and purposes of colleges and universities.',
  'To inspire service in the public interest.',
];

const timeline = [
  { year: "1911", title: "Fraternity Founded", description: "Kappa Alpha Psi founded at Indiana University, Bloomington" },
  { year: "1931", title: "Alpha Iota Founded", description: "Chapter established at Morgan State College on May 29th" },
  { year: "1950", title: "Growth Era", description: "Expansion of chapter presence and campus influence" },
  { year: "1970", title: "Civil Rights Leadership", description: "Brothers active in social justice movements" },
  { year: "1990", title: "Community Impact", description: "Launch of major community service initiatives" },
  { year: "2024", title: "Continuing Legacy", description: "93+ years of achievement at Morgan State University" },
];

export const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={aboutHeader} 
          alt="Alpha Iota Chapter brothers with Kappa Alpha Psi Fraternity banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Our Story</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground mt-4 mb-6">
              ABOUT <span className="text-cream">US</span>
            </h1>
            <p className="text-foreground/80 text-xl">
              Learn about the rich history, mission, and legacy of Alpha Iota Chapter and Kappa Alpha Psi Fraternity, Inc.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Fraternity */}
      <section id="fraternity" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">National Organization</span>
              
              <h2 className="font-display text-5xl text-foreground mt-4 mb-6 cream-underline pb-4">
                KAPPA ALPHA PSI
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Kappa Alpha Psi Fraternity, Inc. (ΚΑΨ) is a collegiate Greek-letter fraternity founded on January 5, 1911, at Indiana University in Bloomington, Indiana.
                </p>
                <p>
                  The fraternity was founded by Elder Watson Diggs, Byron Kenneth Armstrong, Henry T. Asher, Marcus Peter Blakemore, Paul Waymond Caine, George Wesley Edmonds, Ezra D. Alexander, Guy Levis Grant, Edward G. Irvin, and Sergeant S. Gruder.
                </p>
                <p>
                  Today, the organization has over 160,000 members with 700+ undergraduate and alumni chapters in every state of the United States and international chapters across the globe.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
            <img
  src="https://i.ibb.co/XrTLqKfx/KAPsi-Crest1.png"
  alt="Kappa Alpha Psi Fraternity crest - Alpha Iota Chapter"
  className="w-full max-w-md mx-auto object-contain border-4 border-cream/20 bg-white p-4"
/>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Founders */}
      <section id="founders" className="py-24 bg-crimson">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">January 5, 1911</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
              THE FOUNDERS
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Ten visionary men at Indiana University established a fraternity that would become one of the largest and most influential organizations for men of color.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div className="aspect-square mb-4 overflow-hidden bg-background/20">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<div class="w-full h-full bg-background/30 flex items-center justify-center"><span class="font-display text-cream text-2xl">${founder.name.split(' ').map(n => n[0]).join('')}</span></div>`;
                    }}
                  />
                </div>
                <p className="font-semibold text-foreground text-sm">{founder.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives - Same as Homepage */}
      <section id="objectives" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">Our Guiding Principles</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">
              OUR <span className="text-cream">OBJECTIVES</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-muted-foreground text-center text-lg mb-10">
              Every member commits to the five objectives of Kappa Alpha Psi Fraternity, Inc. which are:
            </p>
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 bg-background p-6 border-l-4 border-cream hover-lift"
              >
                <span className="font-display text-4xl text-cream/50">{index + 1}</span>
                <p className="text-foreground/90 text-lg pt-2">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eastern Province */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">Regional Leadership</span>
              
              <h2 className="font-display text-5xl text-foreground mt-4 mb-6">
                EASTERN PROVINCE
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The Eastern Province of Kappa Alpha Psi Fraternity, Inc. encompasses chapters across the Mid-Atlantic region, including Maryland, Delaware, Virginia, and Washington D.C. The Province serves as the administrative body for undergraduate and alumni chapters in this territory, coordinating programs, events, and leadership development initiatives.
              </p>
              
              <a
                href="https://epkapsi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream hover:text-cream-dark transition-colors font-semibold"
              >
                Visit Eastern Province Website →
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};