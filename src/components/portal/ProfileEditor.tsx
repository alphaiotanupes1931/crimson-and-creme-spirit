import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { US_STATES, FIELD_CATEGORIES } from '@/data/portalOptions';

interface ProfileEditorProps {
  userId: string;
  onClose: () => void;
  onSaved: () => void;
}

export const ProfileEditor = ({ userId, onClose, onSaved }: ProfileEditorProps) => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    role: '',
    position: '',
    field_of_study: '',
    job: '',
    links: '',
    line_name: '',
    state: '',
    field_category: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await supabase
        .from('brothers')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (data) {
        setProfile({
          first_name: data.first_name || '',
          last_name: data.last_name || '',
          phone: data.phone || '',
          email: data.email || '',
          role: data.role || '',
          position: data.position || '',
          field_of_study: data.field_of_study || '',
          job: data.job || '',
          links: (data as any).links || '',
          line_name: (data as any).line_name || '',
          state: (data as any).state || '',
          field_category: (data as any).field_category || '',
        });
      }
      setLoading(false);
    };
    fetchProfile();
  }, [userId]);

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from('brothers')
      .update({
        phone: profile.phone || null,
        email: profile.email || null,
        position: profile.position || null,
        field_of_study: profile.field_of_study || null,
        job: profile.job || null,
        links: profile.links || null,
        line_name: profile.line_name || null,
        state: profile.state || null,
        field_category: profile.field_category || null,
      } as any)
      .eq('user_id', userId);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Profile Updated', description: 'Your information has been saved.' });
      onSaved();
    }
    setSaving(false);
  };

  if (loading) return <div className="text-center text-muted-foreground py-8">Loading profile...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border p-6 max-w-lg mx-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-2xl text-cream">Edit Your Profile</h3>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">First Name</label>
            <Input value={profile.first_name} disabled className="bg-muted border-border" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Last Name</label>
            <Input value={profile.last_name} disabled className="bg-muted border-border" />
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Line Name</label>
          <Input
            value={profile.line_name}
            onChange={(e) => setProfile({ ...profile, line_name: e.target.value })}
            placeholder="e.g. Diesel"
            className="bg-card border-border"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Phone</label>
          <Input
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            placeholder="(xxx) xxx-xxxx"
            className="bg-card border-border"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Email</label>
          <Input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            placeholder="your@email.com"
            className="bg-card border-border"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Position / Title</label>
          <Input
            value={profile.position}
            onChange={(e) => setProfile({ ...profile, position: e.target.value })}
            placeholder="e.g. Vice Polemarch"
            className="bg-card border-border"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Field of Study</label>
          <Input
            value={profile.field_of_study}
            onChange={(e) => setProfile({ ...profile, field_of_study: e.target.value })}
            placeholder="e.g. Computer Science"
            className="bg-card border-border"
          />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Job / Occupation</label>
          <Input
            value={profile.job}
            onChange={(e) => setProfile({ ...profile, job: e.target.value })}
            placeholder="e.g. Software Engineer at Google"
            className="bg-card border-border"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Field / Industry</label>
            <select
              value={profile.field_category}
              onChange={(e) => setProfile({ ...profile, field_category: e.target.value })}
              className="w-full h-10 px-3 bg-card border border-border text-foreground"
            >
              <option value="">Select field…</option>
              {FIELD_CATEGORIES.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">State</label>
            <select
              value={profile.state}
              onChange={(e) => setProfile({ ...profile, state: e.target.value })}
              className="w-full h-10 px-3 bg-card border border-border text-foreground"
            >
              <option value="">Select state…</option>
              {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Links (LinkedIn, Instagram, website, etc.)</label>
          <Input
            value={profile.links}
            onChange={(e) => setProfile({ ...profile, links: e.target.value })}
            placeholder="https://linkedin.com/in/you, https://instagram.com/you"
            className="bg-card border-border"
          />
          <p className="text-xs text-muted-foreground mt-1">Separate multiple links with commas.</p>
        </div>



        <Button onClick={handleSave} variant="cream" className="w-full py-5" disabled={saving}>
          <Save className="w-4 h-4 mr-2" />
          {saving ? 'Saving...' : 'Save Profile'}
        </Button>
      </div>
    </motion.div>
  );
};
