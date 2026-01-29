import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import portalHeader from '@/assets/portal-header.png';

const CHAPTER_PASSWORD = 'alphaiotanupes';

export const ChapterPortalPage = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CHAPTER_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        {/* Hero */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src={portalHeader} 
            alt="Alpha Iota 90th Anniversary"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-crimson-dark/80" />
          <div className="container mx-auto px-6 relative h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Lock className="w-16 h-16 text-cream mx-auto mb-6" />
              <h1 className="font-display text-5xl md:text-7xl text-cream mb-4">
                CHAPTER PORTAL
              </h1>
              <p className="text-cream/70 text-lg">
                Members Only Access
              </p>
            </motion.div>
          </div>
        </section>

        {/* Password Form */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl text-foreground mb-2">Enter Password</h2>
                  <p className="text-muted-foreground">
                    This area is restricted to active chapter members only.
                  </p>
                </div>

                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Chapter password"
                    className="pr-12 py-6 text-lg bg-card border-border"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <Button type="submit" variant="cream" className="w-full py-6 text-lg">
                  Access Portal
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <img 
          src={portalHeader} 
          alt="Alpha Iota 90th Anniversary"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Members Only</span>
            <h1 className="font-display text-5xl md:text-7xl text-cream mt-4 mb-4">
              CHAPTER PORTAL
            </h1>
            <p className="text-cream/70 text-lg">
              Welcome, Brother. Access chapter resources and information below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portal Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Chapter Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border p-8 hover:border-cream/30 transition-colors"
            >
              <h3 className="font-display text-2xl text-cream mb-4">DOCUMENTS</h3>
              <p className="text-muted-foreground mb-6">
                Access chapter documents, meeting minutes, and important files.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>• Chapter Constitution</li>
                <li>• Meeting Minutes</li>
                <li>• Financial Reports</li>
                <li>• Event Planning Docs</li>
              </ul>
            </motion.div>

            {/* Announcements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-8 hover:border-cream/30 transition-colors"
            >
              <h3 className="font-display text-2xl text-cream mb-4">ANNOUNCEMENTS</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest chapter news and announcements.
              </p>
              <div className="space-y-4">
                <div className="border-l-2 border-cream pl-4">
                  <p className="text-sm text-cream/60">Jan 2025</p>
                  <p className="text-foreground/80">Spring semester meeting schedule posted</p>
                </div>
                <div className="border-l-2 border-cream/50 pl-4">
                  <p className="text-sm text-cream/60">Dec 2024</p>
                  <p className="text-foreground/80">Dues deadline reminder</p>
                </div>
              </div>
            </motion.div>

            {/* Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8 hover:border-cream/30 transition-colors"
            >
              <h3 className="font-display text-2xl text-cream mb-4">CALENDAR</h3>
              <p className="text-muted-foreground mb-6">
                View upcoming chapter meetings, events, and deadlines.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>• Weekly Chapter Meetings</li>
                <li>• Service Events</li>
                <li>• Province Events</li>
                <li>• Social Events</li>
              </ul>
            </motion.div>

            {/* Contact Directory */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border p-8 hover:border-cream/30 transition-colors"
            >
              <h3 className="font-display text-2xl text-cream mb-4">DIRECTORY</h3>
              <p className="text-muted-foreground mb-6">
                Contact information for chapter leadership and members.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>• Executive Board</li>
                <li>• Committee Chairs</li>
                <li>• Graduate Advisors</li>
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-border p-8 hover:border-cream/30 transition-colors"
            >
              <h3 className="font-display text-2xl text-cream mb-4">RESOURCES</h3>
              <p className="text-muted-foreground mb-6">
                Helpful resources for brothers.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li>• Scholarship Applications</li>
                <li>• Leadership Training</li>
                <li>• Alumni Network</li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card border border-border p-8 hover:border-cream/30 transition-colors"
            >
              <h3 className="font-display text-2xl text-cream mb-4">QUICK LINKS</h3>
              <p className="text-muted-foreground mb-6">
                External resources and portals.
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://kappaalphapsi1911.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:underline">
                    IHQ Portal →
                  </a>
                </li>
                <li>
                  <a href="https://epkapsi.org" target="_blank" rel="noopener noreferrer" className="text-cream hover:underline">
                    Eastern Province →
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
