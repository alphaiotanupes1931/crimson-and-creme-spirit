import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import brothersHeader from '@/assets/brothers-header.jpg';
import defaultBrother from '@/assets/default-brother.png';

// Active brothers data from ainupes1931.com
const activeBrothersData = [
  { name: "Kamron Hampton", lineNumber: "0AI24FA", image: "https://i.ibb.co/DgjQfgdN/DF42-D945-E6-DD-4-A6-D-8-BA0-9-DE46-F249430.jpg" },
  { name: "Jaden Koranteng", lineNumber: "1AI24FA", position: "Keeper of Records", image: "https://i.ibb.co/P89VQr5/807-AD7-D0-9-CD0-461-D-A0-B0-76852-F3-EA607.jpg" },
  { name: "Lesley Ofosu", lineNumber: "2AI24FA", image: "https://i.ibb.co/p8Qs3Ky/IMG-4778.jpg" },
  { name: "Mohamed Cole", lineNumber: "3AI24FA", image: "https://i.ibb.co/Q0hPzWQ/Been-on-one-since-03-businessprofessional.jpg" },
  { name: "Christian Sampson", lineNumber: "4AI24FA", position: "Exchequer", image: "https://i.ibb.co/1fpd3CBL/IMG-2464.jpg" },
  { name: "Anthony Noakes", lineNumber: "5AI24FA", position: "Vice Polemarch", image: "https://i.ibb.co/BHcVJ9BF/IMG-4444.jpg" },
  { name: "David Osadiaye", lineNumber: "6AI24FA", image: "https://i.ibb.co/mrNqmQ5Q/1663556202919.jpg" },
  { name: "Marcus McClean", lineNumber: "9AI24FA", position: "Polemarch", image: "https://i.ibb.co/XZ3FPWcK/unnamed-1.jpg" },
  { name: "Corey Green", lineNumber: "0AI23FA", image: "https://i.ibb.co/svmP5p6x/4H7A9980.png" },
  { name: "Godley Pierre", lineNumber: "1AI23FA", image: "https://i.ibb.co/gbMVPdbC/IMG-7817.jpg" },
  { name: "Nicholas Porter", lineNumber: "3AI23FA", image: "https://i.ibb.co/ymqZ0r6X/4H7A9992.png" },
  { name: "Miles Hooper", lineNumber: "2AI23SP", image: "https://i.ibb.co/Z6TNp0n4/4H7A9985.png" },
  { name: "Xavier Johnson", lineNumber: "0AI23SP", position: "Strategus", image: "https://i.ibb.co/XfKPKByg/xavier.jpg" },
];

// Sort by deference order: oldest to youngest (year asc, SP before FA, then line number)
const sortByDeference = (a: typeof activeBrothersData[0], b: typeof activeBrothersData[0]) => {
  // Parse line number format: {num}AI{year}{semester}
  const parseLineNumber = (ln: string) => {
    const match = ln.match(/^(\d+)AI(\d+)(SP|FA)$/i);
    if (!match) return { num: 0, year: 0, semester: 'FA' };
    return {
      num: parseInt(match[1]),
      year: parseInt(match[2]),
      semester: match[3].toUpperCase()
    };
  };
  
  const parsedA = parseLineNumber(a.lineNumber);
  const parsedB = parseLineNumber(b.lineNumber);
  
  // First sort by year (ascending - older years first)
  if (parsedA.year !== parsedB.year) return parsedA.year - parsedB.year;
  
  // Then by semester (SP comes before FA within same year)
  if (parsedA.semester !== parsedB.semester) {
    return parsedA.semester === 'SP' ? -1 : 1;
  }
  
  // Finally by line number
  return parsedA.num - parsedB.num;
};

const activeBrothers = [...activeBrothersData].sort(sortByDeference);

// Executive board (filtered and sorted by deference)
const executiveBoard = activeBrothersData.filter(b => b.position).sort(sortByDeference);

// Mr. Morgan lineage from website - using default image for those without photos
const mrMorganLineage = [
  { name: "Xavier Johnson", year: "2024-25", image: "https://i.ibb.co/XfKPKByg/xavier.jpg" },
  { name: "Wayne Mitchell, Jr.", year: "2015-16", image: "https://i.ibb.co/YBf3PnvL/1694708145682.jpg" },
  { name: "Kaddeem M. Myrie", year: "2012-13", image: "https://i.ibb.co/5hvPKLMS/1643826041362.jpg" },
  { name: "Akeem Croft", year: "2007-08", image: "https://i.ibb.co/vxH9hFqN/Croft-800x533.jpg" },
  { name: "Robert Green", year: "2006-07", image: "https://i.ibb.co/rKTPwHVG/1745866584635.jpg" },
  { name: "Gonzales Cannon II", year: "1999-00", image: null },
  { name: "Antoine Glasgow", year: "1996-97", image: null },
  { name: "Sherwood Lennon", year: "1994-95", image: null },
  { name: "Sean Hendricks", year: "1992-93", image: null },
  { name: "David Brooks", year: "1989-90", image: null },
];

export const BrothersPage = () => {
  const [activeTab, setActiveTab] = useState<'executive' | 'active'>('executive');

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={brothersHeader} 
          alt="Alpha Iota Chapter brothers standing in formation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Our Brotherhood</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground mt-4 mb-6">
              THE <span className="text-cream">BROTHERS</span>
            </h1>
            <p className="text-foreground/80 text-xl">
              Meet the men of Alpha Iota Chapter who embody excellence, leadership, and service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Directory */}
      <section id="active" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              variant={activeTab === 'executive' ? 'cream' : 'outline'}
              size="lg"
              onClick={() => setActiveTab('executive')}
            >
              Executive Board
            </Button>
            <Button
              variant={activeTab === 'active' ? 'cream' : 'outline'}
              size="lg"
              onClick={() => setActiveTab('active')}
            >
              Active Brothers
            </Button>
          </div>

          {/* Executive Board */}
          {activeTab === 'executive' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {executiveBoard.map((brother, index) => (
                <motion.div
                  key={brother.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={brother.image}
                      alt={`Brother ${brother.name}, ${brother.position} - Alpha Iota Chapter`}
                    className="w-full aspect-square object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="font-display text-lg text-foreground">{brother.name}</p>
                  <p className="text-cream text-sm font-semibold">{brother.position}</p>
                  <p className="text-muted-foreground text-xs">{brother.lineNumber}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Active Brothers */}
          {activeTab === 'active' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {activeBrothers.map((brother, index) => (
                <motion.div
                  key={brother.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={brother.image}
                      alt={`Brother ${brother.name} - Active member of Alpha Iota Chapter`}
                      className="w-full aspect-square object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="font-display text-lg text-foreground">{brother.name}</p>
                  {brother.position && <p className="text-cream text-sm font-semibold">{brother.position}</p>}
                  <p className="text-muted-foreground text-xs">{brother.lineNumber}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Mr. Morgan */}
      <section id="mr-morgan" className="py-24 bg-crimson">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">Campus Royalty</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
              MISTER MORGAN LINEAGE
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              The prestigious Mister Morgan competition showcases the finest gentlemen at Morgan State University. Our brothers have proudly represented the chapter and university.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {mrMorganLineage.map((winner, index) => (
              <motion.div
                key={winner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-background/10 backdrop-blur-sm border border-foreground/10 overflow-hidden"
              >
                <img
                  src={winner.image || defaultBrother}
                  alt={`${winner.name}, Mister Morgan ${winner.year}`}
                  className={`w-full aspect-square ${winner.image ? 'object-cover object-center' : 'object-contain p-4 bg-card/50'}`}
                />
                <div className="p-4">
                  <p className="font-semibold text-foreground text-sm">{winner.name}</p>
                  <p className="text-cream text-xs mt-1">{winner.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};