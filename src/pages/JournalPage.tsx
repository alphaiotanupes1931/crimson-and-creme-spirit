import { motion } from 'framer-motion';
import aboutHeader from '@/assets/about-header.jpg';

const journalEntries = [
  {
    title: "Brother Frazier's Tapers & Tequila Grand Opening",
    date: "July 18, 2025",
    image: "https://public.youware.com/users-website-assets/prod/0861b784-744d-4750-9d07-8158c858510e/74c8803a78a54cf295abb38d99b2b687.jpeg",
    excerpt: "Alpha Iota Chapter celebrates Brother Frazier's innovative new venture, Tapers & Tequila, which has opened at 16821 Crab Shack Lane. This unique concept combines a barbershop, bar, and lounge experience.",
    category: "Business"
  },
  {
    title: "BET Networks Selects Brother Kemoy Martin for Prestigious Role",
    date: "January 15, 2025",
    image: "https://cdnph.upi.com/pv/upi/eb47a7ca3f4df55c1852b23e7f64f73a/BET-AWARDS-2025.jpg",
    excerpt: "Alpha Iota Chapter proudly announces that Brother Kemoy Martin (0AI08FA) has been selected for a prestigious position at BET Networks.",
    category: "Entertainment"
  },
  {
    title: "Brother Shawn Goins Wins Boxing Match",
    date: "July 2024",
    image: "https://i.ibb.co/ZzZFgTWz/505500519-18513080824031082-7276961347854335616-n.jpg",
    excerpt: "Alpha Iota Chapter proudly celebrates Brother Shawn Goins' impressive victory in bout 5 of the Champions League Boxing tournament.",
    category: "Sports"
  },
  {
    title: "Netflix Executive Joins Spike Lee's Production Company",
    date: "January 24, 2022",
    image: "https://deadline.com/wp-content/uploads/2022/01/steven-jackson.jpg",
    excerpt: "Alpha Iota Chapter celebrates Brother Steven Jackson's appointment as Head of Production and Development at Spike Lee's 40 Acres and a Mule Filmworks.",
    category: "Entertainment"
  },
  {
    title: "Brother Alvin Hill Recognized as iPower Under 30 Honoree",
    date: "April 2018",
    image: "https://ipowerrichmond.com/wp-content/uploads/sites/72/2018/04/1523207072002.jpg?strip=all&quality=80",
    excerpt: "Alpha Iota Chapter proudly recognizes Brother Alvin L. Hill (Fall 2011) for his selection as an iPower Under 30 honoree for his outstanding community leadership.",
    category: "Leadership"
  },
  {
    title: "Brother Terell Reed Wins Major Hackathon, Lands MITRE Cybersecurity Role",
    date: "October 2024",
    image: "https://www.mitre.org/sites/default/files/styles/small/public/hero/2024-10/Terell-presentation.jpg.jpeg?itok=gvZF9z2u",
    excerpt: "Alpha Iota Chapter celebrates Brother Terell Reed (8AI24FA) for his outstanding achievements in cybersecurity and technology innovation.",
    category: "Technology"
  },
  {
    title: "Brother Xavier Johnson Crowned 37th Mister Morgan State University",
    date: "April 2024",
    image: "https://www.morgan.edu/Images/ADMINISTRATION/OFFICES/StudentLife/Screenshot%202025-03-27%20140322.png",
    excerpt: "The Alpha Iota Chapter proudly announces that Brother Xavier C. Johnson has been crowned the 37th Mister Morgan State University.",
    category: "Campus"
  },
  {
    title: "Brother Brandon Wylie Named to 40 Under 40",
    date: "2019",
    image: "https://media.bizj.us/view/img/11519511/brandon-wylie*866xx5568-3138-0-148.jpg",
    excerpt: "Alpha Iota Chapter celebrates Brother Brandon Wylie's recognition as one of Baltimore Business Journal's 40 Under 40 honorees as CEO of Wylie Funeral Home.",
    category: "Business"
  },
  {
  title: "Brother Marcus McClean Featured as TMCF Scholar Success Story",
  date: "October 5, 2025",
  image: "https://tmcf.org/wp-content/uploads/news-story-image-marcus-mcclean-scaled.png",
  excerpt: "Alpha Iota Chapter celebrates Brother Marcus McClean, a first-generation college student whose journey from GED to Morgan State's honors college and engineering career showcases resilience and perseverance.",
  category: "Leadership"
  },
  {
    title: "Brother Cornelius Hairston Named to RealLIST Engineers 2023",
    date: "October 6, 2023",
    image: "https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/cornelius-hairston-58206d25",
    excerpt: "Brother Cornelius Hairston has been named to Technical.ly's prestigious RealLIST Engineers 2023 for his contributions to technology.",
    category: "Technology"
  }
];

const spotlightBrothers = [
  {
    name: "Terell Reed",
    image: "https://terellreed-tech.github.io/DSC03292.jpg",
    position: "Current Webmaster",
    achievements: ["3x Hackathon Winner", "Featured in Baltimore Times", "Featured in MITRE Insights"]
  },
  {
    name: "Godley Pierre",
    image: "https://i.ibb.co/gbMVPdbC/IMG-7817.jpg",
    position: "Active Brother",
    achievements: ["Charter Member of Phi Rho Chapter of Alpha Kappa Psi Business Fraternity Inc."]
  },
  {
    name: "Xavier Johnson",
    image: "https://i.ibb.co/XfKPKByg/xavier.jpg",
    position: "Past Junior Province Vice Polemarch (E)",
    achievements: ["Past 37th Mister Morgan State University"]
  },
  {
    name: "Michael Ragland Jr.",
    image: "https://i.ibb.co/bjdj6gQ4/1705440934190.jpg",
    position: "Assistant Director of Admissions at Morgan State",
    achievements: ["Past Polemarch (2017-2018)", "Past Vice Polemarch (2016-2017)"]
  },
  {
    name: "Tyrel Fuentes",
    image: "https://i.ibb.co/vxyBcj4B/1748446698667.jpg",
    position: "Event Coordinator at Morgan State",
    achievements: ["Eastern Province Undergrad Medium Chapter Of The Year (2013)"]
  },
    {
    name: "Donte S Peters",
    image: "https://i.ibb.co/pvCh8PZb/IMG-4655.jpg",
    position: "Real Estate Agent",
    achievements: ["Regional Property Manager Entrepreneur"]
  },
  {
    name: "Dr. Marvin Carr",
    image: "https://cof.org/sites/default/files/styles/person_node/public/2023-11/marvin-carr.jpg?h=6c83441f&itok=0eaMpg62",
    position: "Distinguished Brother",
    achievements: ["68th Guy L. Grant Awardee"]
  },
  {
    name: "Kemoy Martin",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_dkg2OnyyALxtHuUzuUcPK64Em_IKyWkvyUjzLveCACnvl7luZX-H7iB_7-QJMfrbFjvnIXpffW59s_V55r17HTtgp7AlxDce3pUXgQ",
    position: "Entrepreneur & Creator",
    achievements: ["Founded 'The Road Less Traveled'", "Creator Blueprint Coaching Program", "Featured in Forbes, Business Insider"]
  },
  {
    name: "Walter Jones",
    image: "https://public.youware.com/users-website-assets/prod/c5b09902-3a02-4df9-9186-823781f450dc/1768f954331648a7af6bc5f2847cb2cd.jpg",
    position: "Producer/Actor & Boxing Coach",
    achievements: ["Region 1 Board of Directors (1998)", "Polemarch (1998)", "Eastern Province Chapter of the Year (1998)"]
  },
  {
    name: "Ronald L. Goodman",
    image: "https://i.ibb.co/4gwzpsLL/rs-w-1200-h-1600-cg-true.jpg",
    position: "Founder of The Lead Players & SimplySax",
    achievements: ["National Performer at Cultural & Legal Events", "Creator of RLGoodman.com & PurposelyCreated.me"]
  },
  {
    name: "Brandon Wylie",
    image: "https://wyliefh.com/wp-content/uploads/2023/09/Brandon.jpg",
    position: "CEO of Wylie Funeral Homes",
    achievements: ["Living Legacy Foundation Award", "Baltimore Business Journal 40 Under 40"]
  },
  {
    name: "Charles Sims Esq.",
    image: "https://i.ibb.co/Cpw7VT1j/1508-C549-F5-EA-4340-A269-FB0851-FB45-A9.png",
    position: "Attorney",
    achievements: ["Guy Levis Awardee", "Byron Kenneth Armstrong Awardee", "William L Crump Awardee"]
  },
  {
    name: "Enyinna Anthony",
    image: "https://i.ibb.co/K8tDLrQ/1667310331726.jpg",
    position: "Distinguished Brother",
    achievements: ["44th Guy L. Grant Awardee"]
  },
  {
    name: "D. Jason DeSousa",
    image: "https://i.ibb.co/HTqj23wq/1654639334996.jpg",
    position: "Distinguished Brother",
    achievements: ["18th Guy L. Grant Awardee"]
  },
  {
    name: "Aaron Burt",
    image: "https://i.ibb.co/d0Zv3sJr/1735787107884.jpg",
    position: "Distinguished Brother",
    achievements: ["40th Guy L. Grant Awardee"]
  },
  {
    name: "Arnold Sampson",
    image: "https://b2488207.smushcdn.com/2488207/wp-content/uploads/2022/11/Screen-Shot-2022-11-14-at-10.16.54-AM.jpg?lossy=1&strip=1&webp=1",
    position: "Vietnam War Veteran & Author",
    achievements: ["Distinguished Flying Cross", "Broken Wing Award", "Two Purple Hearts", "Author of 'More Than Met The Eye'"]
  },
  {
    name: "Howard Tutman, Jr.",
    image: "https://www.kappaalphapsi1911.com/wp-content/uploads/2023/11/29th-htutman.jpg",
    position: "Past 29th Grand International Polemarch",
    achievements: ["29th Grand Polemarch of Kappa Alpha Psi"]
  }
];

export const JournalPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={aboutHeader} 
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
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Brothers Making Headlines</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground mt-4 mb-6">
              ALPHA IOTA <span className="text-cream">JOURNAL</span>
            </h1>
            <p className="text-foreground/80 text-xl">
              Achievement & Excellence in Every Field of Human Endeavor
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journal Entries */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">Recent News</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">
              BROTHER <span className="text-cream">ACHIEVEMENTS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalEntries.map((entry, index) => (
              <motion.article
                key={entry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border overflow-hidden group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-crimson text-foreground text-xs font-semibold px-3 py-1">
                      {entry.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-cream text-sm mb-2">{entry.date}</p>
                  <h3 className="font-display text-xl text-foreground mb-3 line-clamp-2">
                    {entry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {entry.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Brother Spotlight */}
      <section className="py-24 bg-crimson">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">Featured</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
              BROTHER SPOTLIGHT
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Highlighting brothers who continue to make significant contributions in their fields.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {spotlightBrothers.map((brother, index) => (
              <motion.div
                key={brother.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/10 backdrop-blur-sm border border-foreground/10 overflow-hidden"
              >
                <img
                  src={brother.image}
                  alt={brother.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <p className="font-display text-lg text-foreground">{brother.name}</p>
                  <p className="text-cream text-xs font-semibold mb-2">{brother.position}</p>
                  <ul className="space-y-1">
                    {brother.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className="text-foreground/70 text-xs">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};