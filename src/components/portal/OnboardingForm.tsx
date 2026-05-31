import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface OnboardingFormProps {
  userId: string;
  defaultEmail?: string;
  defaultFirstName?: string;
  defaultLastName?: string;
  onComplete: () => void;
}

const SEMESTER_OPTIONS = [
  { label: 'Spring', value: 'SP' },
  { label: 'Fall', value: 'FA' },
];

const currentYear = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: 12 }, (_, i) => currentYear - i);

export const OnboardingForm = ({
  userId,
  defaultEmail = '',
  defaultFirstName = '',
  defaultLastName = '',
  onComplete,
}: OnboardingFormProps) => {
  const [firstName, setFirstName] = useState(defaultFirstName);
  const [lastName, setLastName] = useState(defaultLastName);
  const [lineName, setLineName] = useState('');
  const [season, setSeason] = useState('FA');
  const [year, setYear] = useState(String(currentYear));
  const [job, setJob] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(defaultEmail);
  const [links, setLinks] = useState('');
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      toast({ title: 'Name required', description: 'First and last name are required.', variant: 'destructive' });
      return;
    }
    if (!phone.trim() && !email.trim()) {
      toast({ title: 'Contact required', description: 'Please provide a phone number or email.', variant: 'destructive' });
      return;
    }

    setSaving(true);
    const yearNum = parseInt(year, 10);
    const semester = `${season}${String(yearNum).slice(-2)}`;
    const semester_label = `${season === 'SP' ? 'Spring' : 'Fall'} ${yearNum}`;
    // Sort: year * 10, +5 for FA to put Fall after Spring of the same year
    const semester_sort = yearNum * 10 + (season === 'FA' ? 5 : 0);

    const { error } = await supabase.from('brothers').insert({
      user_id: userId,
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      line_name: lineName.trim() || null,
      semester,
      semester_label,
      semester_sort,
      phone: phone.trim() || null,
      email: email.trim() || null,
      job: job.trim() || null,
      field_of_study: fieldOfStudy.trim() || null,
      links: links.trim() || null,
    } as any);

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
      setSaving(false);
      return;
    }

    toast({ title: 'Welcome, Brother!', description: 'Your profile has been added to the directory.' });
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto bg-card border border-border p-8"
    >
      <div className="text-center mb-8">
        <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Welcome</span>
        <h2 className="font-display text-3xl text-foreground mt-2">Complete Your Profile</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Tell us about yourself so the chapter can reach you. You can edit any of this later.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">First Name *</label>
            <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="bg-background border-border" required />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Last Name *</label>
            <Input value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-background border-border" required />
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Line Name (optional)</label>
          <Input value={lineName} onChange={(e) => setLineName(e.target.value)} placeholder="e.g. Diesel" className="bg-background border-border" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Season</label>
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="w-full h-10 px-3 bg-background border border-border text-foreground"
            >
              {SEMESTER_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Year Crossed</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full h-10 px-3 bg-background border border-border text-foreground"
            >
              {YEAR_OPTIONS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Occupation</label>
          <Input value={job} onChange={(e) => setJob(e.target.value)} placeholder="e.g. Software Engineer at Google" className="bg-background border-border" />
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Field of Study</label>
          <Input value={fieldOfStudy} onChange={(e) => setFieldOfStudy(e.target.value)} placeholder="e.g. Computer Science" className="bg-background border-border" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Phone</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(xxx) xxx-xxxx" className="bg-background border-border" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="bg-background border-border" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground -mt-2">* Phone or email required so brothers can reach you.</p>

        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Links (optional)</label>
          <Input value={links} onChange={(e) => setLinks(e.target.value)} placeholder="https://linkedin.com/in/you, https://instagram.com/you" className="bg-background border-border" />
          <p className="text-xs text-muted-foreground mt-1">Separate multiple links with commas.</p>
        </div>

        <Button type="submit" variant="cream" className="w-full py-5 mt-2" disabled={saving}>
          {saving ? 'Saving...' : 'Join the Directory'}
        </Button>
      </form>
    </motion.div>
  );
};
