import { motion } from 'framer-motion';
import serviceImg from '@/assets/service-new.jpg';
import eventsImg from '@/assets/events-new.jpg';
import serviceHeader from '@/assets/service-header.jpg';

const programs = [
  {
    title: "Guide Right",
    description: "Our signature mentorship program provides guidance to young men in the community. Through tutoring, career counseling, and life skills workshops, we help guide youth toward success and achievement.",
    highlights: ["Career Mentorship", "Academic Tutoring", "Life Skills Workshops", "College Preparation"],
    videoUrl: "https://www.youtube.com/embed/DYbpvz-u7VI"
  },
  {
    title: "Kappa League",
    description: "A national program designed to guide, mentor, and prepare high school young men for college. Members receive ACT/SAT prep, college tours, leadership training, and community service opportunities.",
    highlights: ["SAT/ACT Preparation", "College Tours", "Leadership Training", "Scholarship Guidance"],
    videoUrl: "https://www.youtube.com/embed/3DwqUv81UKo"
  },
  {
    title: "Community Outreach",
    description: "Regular community service initiatives including food drives, clothing donations, voter registration, and partnerships with local organizations to address community needs.",
    highlights: ["Food & Clothing Drives", "Voter Registration", "Health Awareness", "Youth Programs"],
    image: serviceImg
  }
];

export const ServicePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={serviceHeader} 
          alt="Alpha Iota Chapter brothers at Civil Rights Breakfast event"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Our Impact</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground mt-4 mb-6">
              SERVICE <span className="text-cream">&amp; IMPACT</span>
            </h1>
            <p className="text-foreground/80 text-xl">
              Dedicated to serving our community and making a lasting impact through meaningful programs and initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">National Programs</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">
              OUR <span className="text-gradient-cream">PROGRAMS</span>
            </h2>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="font-display text-3xl text-foreground mb-4">{program.title}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {program.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cream rotate-45" />
                        <span className="text-foreground text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-card overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {program.videoUrl ? (
                    <div className="aspect-video">
                      <iframe
                        src={program.videoUrl}
                        title={program.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full aspect-video object-cover"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <img
                src={serviceImg}
                alt="Alpha Iota Chapter brothers volunteering at community food drive, packaging supplies to help local families"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display text-2xl text-foreground">Community Service</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <img
                src={eventsImg}
                alt="Alpha Iota Chapter brothers at cultural event"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display text-2xl text-foreground">Cultural Events</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};