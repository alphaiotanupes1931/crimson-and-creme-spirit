import { motion } from 'framer-motion';
import { Users, Calendar, FileText, Vote } from 'lucide-react';

export type PortalView = 'apps' | 'directory' | 'calendar' | 'notes' | 'elections';

const APPS: { id: PortalView; title: string; description: string; icon: any }[] = [
  { id: 'directory', title: 'Brother Directory', description: 'Search, filter, and connect with brothers across the chapter.', icon: Users },
  { id: 'calendar', title: 'Calendar', description: 'Chapter meetings, events, and important dates.', icon: Calendar },
  { id: 'notes', title: 'Meeting Notes', description: 'Minutes and notes from chapter and committee meetings.', icon: FileText },
  { id: 'elections', title: 'Elections', description: 'Cast votes and review chapter elections.', icon: Vote },
];

export const AppSuite = ({ onSelect, brotherLastName }: { onSelect: (v: PortalView) => void; brotherLastName?: string }) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Chapter Apps</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3">
            {brotherLastName ? `Where to, Brother ${brotherLastName.toUpperCase()}?` : 'Chapter Apps'}
          </h2>
          <p className="text-muted-foreground mt-2">Choose where you'd like to go.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {APPS.map((app, i) => {
            const Icon = app.icon;
            return (
              <motion.button
                key={app.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => onSelect(app.id)}
                className="text-left p-8 bg-card border border-border hover:border-cream/40 hover:bg-card/80 transition-all group"
              >
                <Icon className="w-8 h-8 text-cream mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-display text-2xl text-foreground mb-2">{app.title}</h3>
                <p className="text-muted-foreground text-sm">{app.description}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const PlaceholderApp = ({ title, description, onBack }: { title: string; description: string; onBack: () => void }) => (
  <section className="py-16 bg-background min-h-[60vh]">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <button onClick={onBack} className="text-cream text-sm hover:underline mb-8">← Back to apps</button>
      <h2 className="font-display text-4xl text-foreground mb-4">{title}</h2>
      <p className="text-muted-foreground mb-12">{description}</p>
      <div className="bg-card border border-border p-12">
        <p className="text-muted-foreground">Nothing here yet. This will be filled in soon.</p>
      </div>
    </div>
  </section>
);
