import { motion } from 'framer-motion';
import brothersHeader from '@/assets/brothers-header.jpg';

// Recent graduates data from ainupes1931.com
const recentGraduates = [
  { 
    name: "Rashashim Gafney", 
    degree: "B.S. Information Systems",
    image: "https://i.ibb.co/8nFy558h/Snap-Insta-to-470158479-798341805755466-3265987469173316153-n.jpg"
  },
  { 
    name: "Terell Reed", 
    degree: "B.S Computer Science",
    achievements: ["Current Webmaster for the Alpha Iota Chapter"],
    image: "https://i.ibb.co/KjpW3NQK/879-E30-DD-687-C-45-E8-8-F4-E-5710-DAF67-EBC.jpg"
  },
  { 
    name: "Tyrus Pincham", 
    degree: "B.S Biology",
    image: "https://i.ibb.co/FqL4WwLL/Snap-Insta-to-499334337-18062968160111524-2270388911724285307-n.jpg"
  },
  { 
    name: "Seydina Salla", 
    degree: "B.S Accounting",
    image: "https://i.ibb.co/SXx4h1JD/Snap-Insta-to-499756567-18062967779111524-6490325641907736239-n.jpg"
  },
];

export const RecentGraduatesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={brothersHeader} 
          alt="Alpha Iota Chapter brothers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Congratulations</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground mt-4 mb-6">
              RECENT <span className="text-cream">GRADUATES</span>
            </h1>
            <p className="text-foreground/80 text-xl">
              Celebrating our brothers who have achieved academic excellence and graduated from Morgan State University.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Graduates Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">Class of 2025</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">
              OUR <span className="text-gradient-cream">GRADUATES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {recentGraduates.map((graduate, index) => (
              <motion.div
                key={graduate.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-4 bg-card">
                  <img
                    src={graduate.image}
                    alt={`${graduate.name} - ${graduate.degree}`}
                    className="w-full aspect-[3/4] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                <div className="text-center">
                  <p className="font-display text-xl text-foreground">{graduate.name}</p>
                  <p className="text-cream text-sm font-semibold mt-1">{graduate.degree}</p>
                  {graduate.achievements && (
                    <p className="text-muted-foreground text-xs mt-2">{graduate.achievements.join(" • ")}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};