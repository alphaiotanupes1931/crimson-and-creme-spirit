import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Send, AlertTriangle } from 'lucide-react';
import contactHeader from '@/assets/contact-header.png';

export const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const [pollVote, setPollVote] = useState<string | null>(null);

  const getSubjectText = (subject: string) => {
    switch(subject) {
      case 'general':
        return 'General Inquiry';
      case 'membership':
        return 'Membership Interest';
      case 'event':
        return 'Event Inquiry';
      default:
        return 'Contact Form Submission';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email draft
    const subject = getSubjectText(formData.subject);
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:ainupes1931@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your message has been prepared. Please send it from your email client.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: 'general', message: '' });
  };

  const handlePollVote = (value: string) => {
    setPollVote(value);
    toast({
      title: "Feedback Received!",
      description: "Thank you for helping us improve our website.",
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={contactHeader} 
          alt="Alpha Iota Chapter brothers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        
        <div className="container mx-auto px-6 h-full flex items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Get in Touch</span>
            <h1 className="font-display text-6xl md:text-8xl text-cream mt-4 mb-6">
              CONTACT <span className="text-cream/80">US</span>
            </h1>
            <p className="text-cream/80 text-xl">
              Have questions about our chapter or interested in learning more? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl text-foreground mb-8 cream-underline pb-4">SEND A MESSAGE</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-card border-border text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="bg-card border-border text-foreground"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-foreground">Subject</Label>
                  <RadioGroup
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    className="flex flex-wrap gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general" className="text-foreground/80">General Inquiry</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="membership" id="membership" />
                      <Label htmlFor="membership" className="text-foreground/80">Membership Interest</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="event" id="event" />
                      <Label htmlFor="event" className="text-foreground/80">Event Inquiry</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={6}
                    required
                    className="bg-card border-border text-foreground"
                  />
                </div>
                
                <Button type="submit" variant="cream" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info & Poll */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-card p-8 border-l-4 border-cream">
                <h3 className="font-display text-2xl text-foreground mb-6">CONTACT INFO</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground text-sm">Morgan State University<br />1700 E Cold Spring Ln<br />Baltimore, MD 21251</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:ainupes1931@gmail.com" className="text-cream hover:text-cream-dark text-sm">ainupes1931@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Website Feedback Poll */}
              <div className="bg-card p-8 border-l-4 border-cream">
                <h3 className="font-display text-2xl text-foreground mb-4">WEBSITE FEEDBACK</h3>
                <p className="text-muted-foreground text-sm mb-6">How would you rate your experience on our website?</p>
                <RadioGroup
                  value={pollVote || ''}
                  onValueChange={handlePollVote}
                  className="space-y-3"
                  disabled={!!pollVote}
                >
                  {[
                    { value: 'excellent', label: 'Excellent - Love the design!' },
                    { value: 'good', label: 'Good - Easy to navigate' },
                    { value: 'average', label: 'Average - Could be improved' },
                    { value: 'needs-work', label: 'Needs Work - Hard to find info' }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-3 p-4 bg-muted/30 hover:bg-muted transition-colors">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="cursor-pointer flex-1 text-foreground/80">{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                {pollVote && (
                  <p className="text-sm text-cream mt-4 font-medium">Thank you for your feedback!</p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anti-Hazing Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-destructive/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h2 className="font-display text-3xl text-foreground mb-4">ANTI-HAZING STATEMENT</h2>
                <p className="text-muted-foreground mb-4">
                  Kappa Alpha Psi Fraternity, Inc. strictly prohibits hazing in any form. Hazing is not only illegal but goes against the fundamental principles upon which our organization was founded. We are committed to creating an environment where all members can grow, learn, and develop without fear of physical or psychological harm.
                </p>
                <p className="text-muted-foreground mb-6">
                  Any individual who witnesses or experiences hazing is encouraged to report it immediately. All reports will be taken seriously and investigated thoroughly.
                </p>
                
                <div className="bg-muted p-6">
                  <p className="font-semibold text-foreground mb-2">Report Hazing - IHQ Hotline</p>
                  <a href="tel:215-228-7184" className="font-display text-3xl text-cream hover:text-cream-dark transition-colors">
                    (215) 228-7184
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">
                    All reports are confidential. You can also report to your university's administration or local law enforcement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};