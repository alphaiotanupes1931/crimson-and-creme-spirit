import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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
      })
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

        <Button onClick={handleSave} variant="cream" className="w-full py-5" disabled={saving}>
          <Save className="w-4 h-4 mr-2" />
          {saving ? 'Saving...' : 'Save Profile'}
        </Button>
      </div>
    </motion.div>
  );
};
