import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import serviceHeader from '@/assets/service-header.jpg';

// Community service images from ainupes1931.com
const serviceImages = [
  { src: "https://i.ibb.co/gFh1rYM4/570990002-18535211530059119-3570289733761100455-n-1.jpg", alt: "Community Service Event" },
  { src: "https://i.ibb.co/5WbBXg2Q/575293295-18538157734059119-6063348452536197021-n.jpg", alt: "Community Service" },
  { src: "https://i.ibb.co/cXDhVb0C/575618783-18537962470059119-5117852952081036452-n.jpg", alt: "Youth Mentorship" },
  { src: "https://i.ibb.co/n9Y2qH9/576379984-18537962521059119-8927125477881639054-n.jpg", alt: "Youth Mentorship" },
  { src: "https://i.ibb.co/DPDTKBPv/581125254-18538684075059119-2490502689798920680-n.jpg", alt: "Youth Mentorship" },
  { src: "https://i.ibb.co/HTrKjFY0/584000487-18540011692059119-6385190800057455750-n.jpg", alt: "Youth Mentorship" },
  { src: "https://i.ibb.co/qFXx8srX/584954876-18540011701059119-208467036566405967-n.jpg", alt: "Youth Mentorship" },
  { src: "https://i.ibb.co/sv2VnCMr/587998494-18541261876059119-6645476709016468775-n.jpg", alt: "Youth Mentorship" },
  { src: "https://i.ibb.co/1GxG4V53/589434761-18541261942059119-4176240625992304402-n.jpg", alt: "Community Event" },
  { src: "https://i.ibb.co/KcZ0GcZh/540279259-18521520655059119-2186195110399614768-n.jpg", alt: "Community Service" },
  { src: "https://i.ibb.co/jZ3d6f4G/542353692-18522979396059119-3917314118346700482-n.jpg", alt: "Service Event" },
  { src: "https://i.ibb.co/dwsC1c6n/550683704-18525264928059119-7036506080628493179-n.jpg", alt: "Community Outreach" },
  { src: "https://i.ibb.co/PG0JpxGJ/565099122-18532140751059119-8288393091119442784-n.jpg", alt: "Service Project" },
];

export const CommunityServicePage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? serviceImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === serviceImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={serviceHeader} 
          alt="Alpha Iota Chapter community service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Service to All Mankind</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground mt-4 mb-6">
              COMMUNITY <span className="text-cream">SERVICE</span>
            </h1>
            <p className="text-foreground/80 text-xl">
              Dedicated to uplifting our community through meaningful volunteer work and outreach programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">Making A Difference</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">
              RECENT <span className="text-gradient-cream">SERVICE</span>
            </h2>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                className="relative overflow-hidden cursor-pointer group aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity font-display text-lg">
                    VIEW
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-cream transition-colors z-50"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-6 text-foreground hover:text-cream transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <img
            src={serviceImages[selectedImage].src}
            alt={serviceImages[selectedImage].alt}
            className="max-w-full max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-6 text-foreground hover:text-cream transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </motion.div>
      )}
    </>
  );
};