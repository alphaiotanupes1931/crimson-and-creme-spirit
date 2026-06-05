import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const DonatePage = () => {
  return (
    <section className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Give Back</span>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-4">SUPPORT THE LEGACY</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your generosity sustains the work of Alpha Iota — funding programming, scholarships, and service that has shaped Morgan State and our community for 90+ years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Undergraduates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border p-8 flex flex-col"
          >
            <span className="text-cream text-xs font-semibold tracking-[0.25em] uppercase">Active Chapter</span>
            <h2 className="font-display text-3xl text-foreground mt-3 mb-4">Donate to the Alpha Iota Undergraduates</h2>
            <p className="text-muted-foreground mb-6">
              Direct support for the brothers currently on the yard at Morgan State University. Your gift powers the day-to-day life of the chapter.
            </p>
            <ul className="space-y-2 text-foreground/80 text-sm mb-8 list-disc pl-5">
              <li>Chapter programming and signature events</li>
              <li>Community service initiatives and Guide Right youth mentoring</li>
              <li>Step show and probate production costs</li>
              <li>Fundraisers, cookouts, and brotherhood functions</li>
              <li>Travel to Province and Grand Chapter Meetings</li>
              <li>Chapter regalia, paraphernalia, and ritual supplies</li>
              <li>Marketing, web, and digital infrastructure</li>
            </ul>
            <div className="mt-auto">
              <Button variant="cream" className="w-full py-5" asChild>
                <a href="https://www.paypal.com/donate" target="_blank" rel="noopener noreferrer">Donate to Undergraduates</a>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Contact the Polemarch to coordinate larger gifts.
              </p>
            </div>
          </motion.div>

          {/* AI Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border p-8 flex flex-col"
          >
            <span className="text-cream text-xs font-semibold tracking-[0.25em] uppercase">501(c)(3)</span>
            <h2 className="font-display text-3xl text-foreground mt-3 mb-4">Donate to the AI Foundation</h2>
            <p className="text-muted-foreground mb-6">
              The Alpha Iota Foundation is a tax-deductible vehicle that invests in the long-term success of the chapter and the students it serves.
            </p>
            <ul className="space-y-2 text-foreground/80 text-sm mb-8 list-disc pl-5">
              <li>Scholarships for Morgan State students</li>
              <li>Academic achievement and leadership awards</li>
              <li>Endowment for the Alpha Iota legacy</li>
              <li>Educational programming and college readiness</li>
              <li>Capital projects and chapter sustainability</li>
              <li>Alumni engagement and Founders Day initiatives</li>
            </ul>
            <div className="mt-auto">
              <Button variant="cream" className="w-full py-5" asChild>
                <a href="https://www.paypal.com/donate" target="_blank" rel="noopener noreferrer">Donate to AI Foundation</a>
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                All gifts to the Foundation are tax-deductible.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            Questions about giving?{' '}
            <Link to="/contact" className="text-cream hover:underline">Contact the chapter</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};
