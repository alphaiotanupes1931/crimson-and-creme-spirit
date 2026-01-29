import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const [pollVote, setPollVote] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: 'general', message: '' });
  };

  const handlePollVote = (value: string) => {
    setPollVote(value);
    toast({
      title: "Vote Recorded!",
      description: "Thank you for participating in our poll.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-crimson tracking-[0.2em] uppercase text-sm font-semibold">Connect</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions about our chapter or interested in learning more? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Subject</Label>
                    <RadioGroup
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      className="flex flex-wrap gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general">General Inquiry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="membership" id="membership" />
                        <Label htmlFor="membership">Membership Interest</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="event" id="event" />
                        <Label htmlFor="event">Event Inquiry</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="crimson" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Poll */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <Card variant="cream">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-crimson" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground text-sm">Morgan State University, Baltimore, MD 21251</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-crimson" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground text-sm">ainupes1931@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Poll */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-lg">Community Poll</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">What aspect of our chapter interests you most?</p>
                <RadioGroup
                  value={pollVote || ''}
                  onValueChange={handlePollVote}
                  className="space-y-3"
                  disabled={!!pollVote}
                >
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <RadioGroupItem value="service" id="poll-service" />
                    <Label htmlFor="poll-service" className="cursor-pointer flex-1">Community Service</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <RadioGroupItem value="brotherhood" id="poll-brotherhood" />
                    <Label htmlFor="poll-brotherhood" className="cursor-pointer flex-1">Brotherhood & Networking</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <RadioGroupItem value="academics" id="poll-academics" />
                    <Label htmlFor="poll-academics" className="cursor-pointer flex-1">Academic Excellence</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <RadioGroupItem value="events" id="poll-events" />
                    <Label htmlFor="poll-events" className="cursor-pointer flex-1">Events & Step Shows</Label>
                  </div>
                </RadioGroup>
                {pollVote && (
                  <p className="text-sm text-crimson mt-4 font-medium">Thank you for voting!</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
