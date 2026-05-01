import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Instagram, Crown } from 'lucide-react';
import eventsImg from '@/assets/events-new.jpg';
import serviceImg from '@/assets/service-new.jpg';
import heroVideo from '@/assets/hero-video.mp4';
import brandonVideo from '@/assets/brandon-wylie.mp4';
import brandonPoster from '@/assets/brandon-wylie-poster.jpg';
import rryAwardImg from '@/assets/rry-award.jpg';
import noakesVideo from '@/assets/anthony-noakes-research.mp4';
import noakesPoster from '@/assets/noakes-poster.jpg';
import enitanForbes from '@/assets/enitan-forbes.jpg';
import terellReedPhoto from '@/assets/terell-reed-webmaster.png';
import royalElizabeth from '@/assets/royal-elizabeth.png';

export const HomePage = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <video autoPlay muted loop playsInline className="w-full h-full object-cover scale-110">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent md:via-transparent" />
        </motion.div>

        <motion.div
          className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 md:pt-0"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-cream text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Kappa Alpha Psi Fraternity, Inc.
              </span>
              <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-foreground leading-none mt-3 sm:mt-4 mb-2">
                ALPHA<br />
                <span className="text-gradient-cream">IOTA</span>
              </h1>
              <p className="text-cream/80 text-base sm:text-lg tracking-wider mb-1 sm:mb-2">Chartered May 29, 1931</p>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-light mb-6 sm:mb-8">Morgan State University</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                  <Link to="/about">Discover Our Chapter</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild className="w-full sm:w-auto">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Royal Kourt Teaser */}
      <section className="py-20 sm:py-24 bg-background border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto"
          >
            <div className="relative aspect-[4/5] overflow-hidden mx-auto w-full max-w-sm group">
              <img
                src={royalElizabeth}
                alt="Alpha Iota Royal Kourt"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/40 via-transparent to-background/40" />
            </div>

            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 text-cream/80 text-xs font-semibold tracking-[0.3em] uppercase">
                <Crown className="w-3.5 h-3.5" /> New Royalty
              </span>
              <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl text-cream mt-4 mb-4 leading-tight">
                Alpha Iota Royal Kourt
              </h2>
              <p className="text-muted-foreground italic mb-8 max-w-md mx-auto md:mx-0">
                Meet the five women who reign as the heart of our chapter — grace, brilliance, and presence personified.
              </p>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/royal-kourt">
                  Meet The Kourt <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Polemarch Welcome */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-cream text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">From Our Polemarch</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mt-4 mb-6">
                A WELCOME FROM LEADERSHIP
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to the official home of the Alpha Iota Chapter of Kappa Alpha Psi Fraternity, Inc. at Morgan State University.
                </p>
                <p>
                  Since May 29, 1931, our brothers have lived the values of achievement, leadership, and service — and we are proud to continue that legacy today.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-display text-2xl text-cream">BROTHER MARCUS MCCLEAN</p>
                <p className="text-muted-foreground">Polemarch · Alpha Iota Chapter</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] max-w-xs mx-auto overflow-hidden">
                <img
                  src="https://tmcf.org/wp-content/uploads/news-story-image-marcus-mcclean-scaled.png"
                  alt="Brother Marcus McClean, Polemarch of Alpha Iota Chapter"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Webmaster */}
      <section className="py-20 sm:py-24 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative max-w-sm mx-auto">
                <div className="relative aspect-square overflow-hidden group">
                  <img
                    src={terellReedPhoto}
                    alt="Brother Terell Reed, Webmaster of Alpha Iota Chapter"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="font-display text-2xl text-cream leading-tight">Terell Reed</p>
                      <p className="text-xs font-semibold text-cream/70 tracking-[0.2em]">8AI24FA</p>
                    </div>
                    <p className="text-[10px] font-semibold text-cream/60 tracking-[0.2em] uppercase">Webmaster</p>
                  </div>
                </div>

                <p className="text-center text-[11px] font-semibold text-cream/60 tracking-[0.25em] uppercase mt-6">
                  Featured in Baltimore Times · MITRE · Medium
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-cream text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">Digital Excellence</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mt-4 mb-6">
                A NOTE FROM THE WEBMASTER
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to the digital home of Alpha Iota. This space showcases the rich history, ongoing achievements, and unwavering commitment to excellence that defines our brotherhood.
                </p>
                <p>
                  Every pixel reflects our dedication to achievement in every field of human endeavor.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-display text-2xl text-cream">BROTHER TERELL REED</p>
                <p className="text-muted-foreground">Webmaster · 8AI24FA</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Most Recent Chapter Achievement — Ronald R. Young */}
      <section className="py-20 sm:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-cream text-xs font-semibold tracking-[0.3em] uppercase">Most Recent Chapter Achievement</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative overflow-hidden mx-auto max-w-lg w-full">
              <img
                src={rryAwardImg}
                alt="Alpha Iota Chapter receiving the 2026 Ronald R. Young Website of the Year Award"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="text-center lg:text-left">
              <span className="text-cream text-xs font-semibold tracking-[0.2em] uppercase">2026 Award Recipient</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                RONALD R. YOUNG<br />
                <span className="text-gradient-cream">WEBSITE OF THE YEAR</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Alpha Iota is proud to be recognized as the 2026 recipient of the Ronald R. Young Website of the Year Award — a testament to our commitment to digital excellence within Kappa Alpha Psi Fraternity, Inc.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Brother Achievements */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="text-cream text-xs font-semibold tracking-[0.3em] uppercase">Brother Spotlights</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mt-3">
              RECENT <span className="text-gradient-cream">ACHIEVEMENTS</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Anthony Noakes */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-cream/40 transition-all duration-500"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={noakesPoster}
                  className="w-full h-full object-cover"
                >
                  <source src={noakesVideo} type="video/mp4" />
                </video>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-crimson tracking-[0.2em] uppercase">04 / 18 / 2026</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-xs font-semibold text-cream tracking-[0.2em] uppercase">Scholarship</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 leading-[1.05]">
                  A CURE TO <span className="text-gradient-cream">CANCER</span>
                </h3>
                <p className="text-foreground/90 font-semibold mb-3">Brother Anthony Noakes</p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Presented his undergraduate research at Ursinus College's 89th Annual Intercollegiate Student Chemists Convention — a study of <span className="text-foreground italic">Neocaryaflavonoside A</span>, an acylated flavonoid triglucoside from <span className="text-foreground italic">Neocarya macrophylla</span>, with antiproliferative activity against triple-negative breast cancer cells.
                </p>
              </div>
            </motion.article>

            {/* Enitan */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-cream/40 transition-all duration-500"
            >
              <div className="relative aspect-video bg-background overflow-hidden">
                <img
                  src={enitanForbes}
                  alt="Brother Oluwatomisin Enitan featured on Forbes 30 Under 30"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-crimson tracking-[0.2em] uppercase">2026 Honoree</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-xs font-semibold text-cream tracking-[0.2em] uppercase">Recognition</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 leading-[1.05]">
                  FORBES <span className="text-gradient-cream">30 UNDER 30</span>
                </h3>
                <p className="text-foreground/90 font-semibold mb-3">Brother Oluwatomisin Enitan</p>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Recognized for pioneering work in plant biotechnology, cyanobacterial bioenergy, and crop transformation — research advancing sustainable biofuels, halotolerant agriculture, and the future of green industrial science.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Brandon Wylie */}
      <section className="py-20 sm:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-[9/16] max-w-sm mx-auto bg-background overflow-hidden rounded-lg border border-border/40">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={brandonPoster}
                  className="w-full h-full object-cover"
                >
                  <source src={brandonVideo} type="video/mp4" />
                </video>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-cream text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">Fellow Achiever Spotlight</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mt-4 mb-4">
                BROTHER BRANDON WYLIE
              </h2>
              <p className="text-cream font-semibold tracking-wider text-sm mb-4">2AI00FA</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Brother Brandon Wylie is a distinguished entrepreneur and proud Alpha Iota man. He serves as <span className="text-foreground font-semibold">President of Wylie Funeral Homes, P.A.</span>, and is the co-owner of <span className="text-foreground font-semibold">Fleurs d'Ave Floral Boutique</span> and the <span className="text-foreground font-semibold">Above It All Mental Health Program</span>.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-display text-lg text-cream italic">
                  "Achievement in Every Field of Human Endeavor"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link to="/events">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden cursor-pointer"
              >
                <img
                  src={eventsImg}
                  alt="Alpha Iota Chapter brothers at campus event"
                  className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="font-display text-2xl sm:text-3xl text-foreground">EVENTS</p>
                </div>
              </motion.div>
            </Link>

            <Link to="/community-service">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative group overflow-hidden cursor-pointer"
              >
                <img
                  src={serviceImg}
                  alt="Alpha Iota Chapter brothers volunteering"
                  className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="font-display text-2xl sm:text-3xl text-foreground">SERVICE</p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-cream text-xs font-semibold tracking-[0.3em] uppercase">Follow Along</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mt-3">
              <span className="text-gradient-cream">@AINUPES1931</span>
            </h2>
          </motion.div>

          <div className="max-w-md sm:max-w-lg mx-auto">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <iframe
                src="https://www.instagram.com/ainupes1931/embed"
                className="w-full"
                style={{ height: '640px', border: 'none' }}
                scrolling="no"
                title="Alpha Iota Instagram Feed"
              />
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" asChild>
                <a href="https://www.instagram.com/ainupes1931/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                  Follow @ainupes1931
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-crimson relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-foreground/90 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Learn more about our chapter and the legacy we continue to build.
            </p>
            <Button variant="cream" size="xl" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
