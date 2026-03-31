import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, UserPlus, LogIn } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface PortalAuthProps {
  onAuthenticated: () => void;
}

export const PortalAuth = ({ onAuthenticated }: PortalAuthProps) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [matchedBrothers, setMatchedBrothers] = useState<any[]>([]);
  const [selectedBrotherId, setSelectedBrotherId] = useState<string | null>(null);
  const [showMatches, setShowMatches] = useState(false);
  const { toast } = useToast();

  // Check for name matches when signing up
  useEffect(() => {
    if (mode !== 'signup' || !firstName.trim() || !lastName.trim()) {
      setMatchedBrothers([]);
      setShowMatches(false);
      return;
    }

    const timer = setTimeout(async () => {
      const { data } = await supabase
        .from('brothers')
        .select('id, first_name, last_name, semester_label, phone, user_id')
        .ilike('first_name', firstName.trim())
        .ilike('last_name', lastName.trim());

      if (data && data.length > 0) {
        setMatchedBrothers(data);
        setShowMatches(true);
      } else {
        setMatchedBrothers([]);
        setShowMatches(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [firstName, lastName, mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onAuthenticated();
      } else {
        // Check if selected brother is already claimed
        if (selectedBrotherId) {
          const matched = matchedBrothers.find(b => b.id === selectedBrotherId);
          if (matched?.user_id) {
            toast({
              title: 'Profile Already Claimed',
              description: 'This profile is already linked to an account. Try logging in instead.',
              variant: 'destructive',
            });
            setLoading(false);
            return;
          }
        }

        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              first_name: firstName,
              last_name: lastName,
              brother_id: selectedBrotherId,
            },
          },
        });
        if (error) throw error;

        // If they selected a brother to claim, do it now
        if (selectedBrotherId) {
          const { data: { session } } = await supabase.auth.getSession();
          if (session) {
            await supabase.rpc('claim_brother_profile', { brother_id: selectedBrotherId });
          }
        }

        toast({
          title: 'Account Created!',
          description: 'Welcome, Brother. You can now access the portal.',
        });
        onAuthenticated();
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl text-foreground mb-2">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </h2>
          <p className="text-muted-foreground">
            {mode === 'login' ? 'Sign in to access the chapter portal.' : 'Sign up to claim your profile.'}
          </p>
        </div>

        {mode === 'signup' && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="py-5 bg-card border-border"
                required
              />
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="py-5 bg-card border-border"
                required
              />
            </div>

            {showMatches && matchedBrothers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-cream/30 p-4 space-y-3"
              >
                <p className="text-cream text-sm font-semibold">
                  Your name is already in the directory. Is this you?
                </p>
                {matchedBrothers.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBrotherId(selectedBrotherId === b.id ? null : b.id)}
                    className={`w-full text-left p-3 border transition-colors ${
                      selectedBrotherId === b.id
                        ? 'border-cream bg-cream/10'
                        : 'border-border hover:border-cream/30'
                    }`}
                  >
                    <span className="text-foreground font-medium">
                      {b.first_name} {b.last_name}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">
                      ({b.semester_label})
                    </span>
                    {b.user_id && (
                      <span className="text-red-400 text-xs ml-2">Already claimed</span>
                    )}
                  </button>
                ))}
                <p className="text-muted-foreground text-xs">
                  Click to link your account to this profile, or continue to create a new entry.
                </p>
              </motion.div>
            )}
          </>
        )}

        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="py-5 bg-card border-border"
          required
        />

        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="pr-12 py-5 bg-card border-border"
            required
            minLength={6}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <Button type="submit" variant="cream" className="w-full py-5 text-lg" disabled={loading}>
          {loading ? 'Please wait...' : mode === 'login' ? (
            <><LogIn className="w-5 h-5 mr-2" /> Sign In</>
          ) : (
            <><UserPlus className="w-5 h-5 mr-2" /> Sign Up</>
          )}
        </Button>

        <p className="text-center text-muted-foreground text-sm">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setSelectedBrotherId(null); }}
            className="text-cream hover:underline"
          >
            {mode === 'login' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </form>
    </motion.div>
  );
};
