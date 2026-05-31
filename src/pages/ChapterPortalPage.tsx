import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Lock, Phone, Search, LogOut, Edit } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import portalHeader from '@/assets/portal-header.png';
import { supabase } from '@/integrations/supabase/client';
import { PortalAuth } from '@/components/portal/PortalAuth';
import { ProfileEditor } from '@/components/portal/ProfileEditor';
import { OnboardingForm } from '@/components/portal/OnboardingForm';

const CHAPTER_PASSWORD = 'admin123';

const formatPhoneLink = (phone: string) => phone.replace(/[^0-9]/g, '');

interface Brother {
  id: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  email: string | null;
  role: string | null;
  position: string | null;
  field_of_study: string | null;
  job: string | null;
  links: string | null;
  line_name: string | null;
  semester: string;
  semester_label: string;
  semester_sort: number;
  user_id: string | null;
}

export const ChapterPortalPage = () => {
  const [portalPassword, setPortalPassword] = useState('');
  const [portalUnlocked, setPortalUnlocked] = useState(false);
  const [portalError, setPortalError] = useState('');
  const [user, setUser] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [brothers, setBrothers] = useState<Brother[]>([]);
  const [brothersFetched, setBrothersFetched] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [occupationFilter, setOccupationFilter] = useState('all');
  const [showEditor, setShowEditor] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Check auth state
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthChecked(true);
      if (session?.user) setPortalUnlocked(true);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthChecked(true);
      if (session?.user) setPortalUnlocked(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  const fetchBrothers = useCallback(async () => {
    const { data } = await supabase
      .from('brothers')
      .select('*')
      .order('semester_sort', { ascending: false });
    if (data) setBrothers(data as any);
    setBrothersFetched(true);
  }, []);

  useEffect(() => {
    if (portalUnlocked) fetchBrothers();
  }, [portalUnlocked, fetchBrothers]);

  const handlePortalPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (portalPassword === CHAPTER_PASSWORD) {
      setPortalUnlocked(true);
      setPortalError('');
    } else {
      setPortalError('Incorrect password. Please try again.');
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const userBrother = user ? brothers.find(b => b.user_id === user.id) : null;
  const needsOnboarding = !!user && brothersFetched && !userBrother;

  // Unique filter options
  const yearOptions = Array.from(
    new Map(brothers.map(b => [b.semester_label, b.semester_sort])).entries()
  ).sort((a, b) => b[1] - a[1]).map(([label]) => label);

  const occupationOptions = Array.from(
    new Set(brothers.map(b => (b.job || '').trim()).filter(Boolean))
  ).sort();

  // Flat, filtered, searchable list of brothers
  const q = searchQuery.trim().toLowerCase();
  const filteredBrothers = brothers.filter(b => {
    if (yearFilter !== 'all' && b.semester_label !== yearFilter) return false;
    if (occupationFilter !== 'all' && (b.job || '') !== occupationFilter) return false;
    if (!q) return true;
    const hay = `${b.first_name} ${b.last_name} ${b.line_name || ''} ${b.position || ''} ${b.role || ''} ${b.field_of_study || ''} ${b.job || ''}`.toLowerCase();
    return hay.includes(q);
  });

  // Find polemarch
  const polemarch = brothers.find(b => b.role === 'Polemarch');



  // Not unlocked yet — show password gate
  if (!portalUnlocked) {
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
              <form onSubmit={handlePortalPassword} className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl text-foreground mb-2">Enter Password</h2>
                  <p className="text-muted-foreground">This area is restricted to active chapter members only.</p>
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={portalPassword}
                    onChange={(e) => setPortalPassword(e.target.value)}
                    placeholder="Chapter password"
                    className="pr-12 py-6 text-lg bg-card border-border"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPassword ? <span className="text-sm">Hide</span> : <span className="text-sm">Show</span>}
                  </button>
                </div>
                {portalError && <p className="text-destructive text-sm text-center">{portalError}</p>}
                <Button type="submit" variant="cream" className="w-full py-6 text-lg">Access Portal</Button>
              </form>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  // Unlocked but not logged in — show auth
  if (!user && authChecked) {
    return (
      <>
        <section className="relative h-[40vh] overflow-hidden">
          <img src={portalHeader} alt="Alpha Iota 90th Anniversary" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-crimson-dark/70" />
          <div className="container mx-auto px-6 relative h-full flex items-center justify-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="font-display text-5xl md:text-7xl text-cream mb-4">CHAPTER PORTAL</h1>
              <p className="text-cream/70 text-lg">Sign in or create an account to continue</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <PortalAuth onAuthenticated={() => {
              supabase.auth.getSession().then(({ data: { session } }) => {
                setUser(session?.user ?? null);
              });
            }} />
          </div>
        </section>
      </>
    );
  }

  // Fully authenticated — show portal
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] overflow-hidden">
        <img src={portalHeader} alt="Alpha Iota 90th Anniversary" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Members Only</span>
            <h1 className="font-display text-5xl md:text-7xl text-cream mt-4 mb-4">
              {userBrother ? `WELCOME, BROTHER ${userBrother.last_name.toUpperCase()}` : 'CHAPTER PORTAL'}
            </h1>
            <p className="text-cream/70 text-lg">The Alpha Iota chapter directory.</p>

          </motion.div>
        </div>
        <div className="absolute top-6 right-6 flex items-center gap-3">
          {userBrother && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowEditor(true)}
              className="border-cream/30 text-cream hover:bg-cream/10"
            >
              <Edit className="w-4 h-4 mr-1" /> Edit Profile
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleSignOut}
            className="border-cream/30 text-cream hover:bg-cream/10"
          >
            <LogOut className="w-4 h-4 mr-1" /> Sign Out
          </Button>
        </div>
      </section>

      {/* Profile Editor */}
      {showEditor && user && (
        <section className="py-8 bg-background">
          <div className="container mx-auto px-6">
            <ProfileEditor
              userId={user.id}
              onClose={() => setShowEditor(false)}
              onSaved={() => { setShowEditor(false); fetchBrothers(); }}
            />
          </div>
        </section>
      )}

      {/* Onboarding for new brothers */}
      {needsOnboarding && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <OnboardingForm
              userId={user.id}
              defaultEmail={user.email || ''}
              defaultFirstName={user.user_metadata?.first_name || ''}
              defaultLastName={user.user_metadata?.last_name || ''}
              onComplete={fetchBrothers}
            />
          </div>
        </section>
      )}



      {/* Polemarch Section */}
      {polemarch && (
        <section className="py-16 bg-card border-b border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center">
              <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Chapter Leadership</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-2">Polemarch</h2>
              <div className="w-16 h-0.5 bg-cream mx-auto mb-8" />
              <p className="font-display text-2xl text-cream">{polemarch.first_name} {polemarch.last_name}</p>
              <p className="text-muted-foreground mt-1">{polemarch.semester_label}</p>
              {polemarch.phone && (
                <a href={`tel:${formatPhoneLink(polemarch.phone)}`} className="inline-flex items-center gap-2 mt-4 text-cream hover:text-cream-dark transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{polemarch.phone}</span>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Directory */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-10 space-y-3">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, line name, occupation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-card border-border"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="h-11 px-3 bg-card border border-border text-foreground"
              >
                <option value="all">All Years / Lines</option>
                {yearOptions.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              <select
                value={occupationFilter}
                onChange={(e) => setOccupationFilter(e.target.value)}
                className="h-11 px-3 bg-card border border-border text-foreground"
              >
                <option value="all">All Occupations</option>
                {occupationOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
              {(yearFilter !== 'all' || occupationFilter !== 'all' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => { setYearFilter('all'); setOccupationFilter('all'); setSearchQuery(''); }}
                  className="h-11 px-3 border border-border text-muted-foreground hover:text-foreground hover:border-cream/30 transition-colors text-sm"
                >
                  Clear filters
                </button>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Showing {filteredBrothers.length} of {brothers.length} brothers
            </p>
          </div>


          <div className="grid gap-2">
            {filteredBrothers.map((brother) => {
              const linkList = (brother.links || '')
                .split(',')
                .map(l => l.trim())
                .filter(Boolean);
              return (
                <motion.div
                  key={brother.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-3 px-4 bg-card border border-border hover:border-cream/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3 flex-wrap min-w-0">
                      <span className="text-foreground font-medium">{brother.first_name} {brother.last_name}</span>
                      {brother.role && (
                        <span className="text-xs bg-cream/20 text-cream px-2 py-0.5 rounded font-semibold uppercase tracking-wider">{brother.role}</span>
                      )}
                      {brother.position && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded font-semibold">{brother.position}</span>
                      )}
                      <span className="text-xs text-muted-foreground">{brother.semester_label}</span>
                      {brother.field_of_study && (
                        <span className="text-xs text-muted-foreground hidden sm:inline">• {brother.field_of_study}</span>
                      )}
                      {brother.job && (
                        <span className="text-xs text-muted-foreground hidden md:inline">• {brother.job}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      {brother.email && (
                        <a href={`mailto:${brother.email}`} className="text-sm text-cream hover:text-cream-dark transition-colors hidden md:inline">
                          {brother.email}
                        </a>
                      )}
                      {brother.phone ? (
                        <a href={`tel:${formatPhoneLink(brother.phone)}`} className="flex items-center gap-2 text-sm text-cream hover:text-cream-dark transition-colors">
                          <Phone className="w-4 h-4" />
                          <span className="hidden sm:inline">{brother.phone}</span>
                        </a>
                      ) : (
                        <span className="text-muted-foreground/40 text-sm">—</span>
                      )}
                    </div>
                  </div>
                  {linkList.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                      {linkList.map((link, i) => {
                        const href = link.startsWith('http') ? link : `https://${link}`;
                        return (
                          <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cream/80 hover:text-cream underline underline-offset-2 break-all"
                          >
                            {link}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              );
            })}
            {filteredBrothers.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No brothers match your search.</p>
            )}
          </div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-16 bg-card border border-border p-8">
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
