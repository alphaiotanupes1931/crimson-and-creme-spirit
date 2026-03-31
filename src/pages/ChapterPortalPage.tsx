import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, Phone, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import portalHeader from '@/assets/portal-header.png';
import { portalDirectory } from '@/data/portalBrothers';

const CHAPTER_PASSWORD = '5291931Nupes!';

const formatPhoneLink = (phone: string) => {
  return phone.replace(/[^0-9]/g, '');
};

export const ChapterPortalPage = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CHAPTER_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const filteredDirectory = portalDirectory.map(semester => ({
    ...semester,
    brothers: semester.brothers.filter(b =>
      `${b.firstName} ${b.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(semester => semester.brothers.length > 0);

  if (!isAuthenticated) {
    return (
      <>
        <section className="relative h-[60vh] overflow-hidden">
          <img src={portalHeader} alt="Alpha Iota 90th Anniversary" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-crimson-dark/80" />
          <div className="container mx-auto px-6 relative h-full flex items-center justify-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <Lock className="w-16 h-16 text-cream mx-auto mb-6" />
              <h1 className="font-display text-5xl md:text-7xl text-cream mb-4">CHAPTER PORTAL</h1>
              <p className="text-cream/70 text-lg">Members Only Access</p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl text-foreground mb-2">Enter Password</h2>
                  <p className="text-muted-foreground">This area is restricted to active chapter members only.</p>
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Chapter password"
                    className="pr-12 py-6 text-lg bg-card border-border"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <Button type="submit" variant="cream" className="w-full py-6 text-lg">Access Portal</Button>
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
        <img src={portalHeader} alt="Alpha Iota 90th Anniversary" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Members Only</span>
            <h1 className="font-display text-5xl md:text-7xl text-cream mt-4 mb-4">CHAPTER PORTAL</h1>
            <p className="text-cream/70 text-lg">Welcome, Brother. Access the chapter directory below.</p>
          </motion.div>
        </div>
      </section>

      {/* Polemarch Section */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Chapter Leadership</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-2">Polemarch</h2>
            <div className="w-16 h-0.5 bg-cream mx-auto mb-8" />
            <p className="font-display text-2xl text-cream">Marcus McClean</p>
            <p className="text-muted-foreground mt-1">Fall 2024</p>
            <a
              href="tel:4102749268"
              className="inline-flex items-center gap-2 mt-4 text-cream hover:text-cream-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(410) 274-9268</span>
            </a>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Search */}
          <div className="mb-12">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search brothers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-card border-border"
              />
            </div>
          </div>

          {/* Brother Listing by Semester */}
          <div className="space-y-12">
            {filteredDirectory.map((semester) => (
              <motion.div
                key={semester.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="font-display text-2xl text-cream mb-4 cream-underline pb-3">
                  {semester.label}
                </h2>
                <div className="grid gap-2">
                  {semester.brothers.map((brother, idx) => (
                    <div
                      key={`${semester.key}-${idx}`}
                      className="flex items-center justify-between py-3 px-4 bg-card border border-border hover:border-cream/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-medium">
                          {brother.firstName} {brother.lastName}
                        </span>
                        {brother.role && (
                          <span className="text-xs bg-cream/20 text-cream px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                            {brother.role}
                          </span>
                        )}
                      </div>
                      {brother.phone ? (
                        <a
                          href={`tel:${formatPhoneLink(brother.phone)}`}
                          className="flex items-center gap-2 text-sm text-cream hover:text-cream-dark transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="hidden sm:inline">{brother.phone}</span>
                        </a>
                      ) : (
                        <span className="text-muted-foreground/40 text-sm">—</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 bg-card border border-border p-8"
          >
            <h3 className="font-display text-2xl text-cream mb-6">QUICK LINKS</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <a href="https://kappaalphapsi1911.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:underline">IHQ Portal →</a>
              <a href="https://epkapsi.org" target="_blank" rel="noopener noreferrer" className="text-cream hover:underline">Eastern Province →</a>
              <a href="https://benchmarkkappas.org/" target="_blank" rel="noopener noreferrer" className="text-cream hover:underline">Baltimore Alumni Chapter →</a>
              <a href="https://nphchq.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:underline">NPHC →</a>
              <a href="https://morgan.edu" target="_blank" rel="noopener noreferrer" className="text-cream hover:underline">Morgan State University →</a>
              <a href="https://thekappafoundation.org/" target="_blank" rel="noopener noreferrer" className="text-cream hover:underline">Kappa Foundation →</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
