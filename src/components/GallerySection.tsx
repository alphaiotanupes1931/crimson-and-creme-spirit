import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import serviceImg from '@/assets/service.jpg';
import stepShowImg from '@/assets/step-show.jpg';
import morganCampus from '@/assets/morgan-campus.jpg';

const galleryImages = [
  { src: heroBg, alt: "Alpha Iota Chapter formal event with brothers in crimson and cream attire under elegant chandeliers" },
  { src: serviceImg, alt: "Community service volunteer event with Alpha Iota brothers helping at local food bank" },
  { src: stepShowImg, alt: "Step show performance featuring Alpha Iota Chapter brothers in coordinated crimson blazers" },
  { src: morganCampus, alt: "Morgan State University main campus building, home of the Alpha Iota Chapter since 1931" },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-crimson tracking-[0.2em] uppercase text-sm font-semibold">Gallery</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
            Capturing Moments
          </h2>
          <p className="text-muted-foreground text-lg">
            A visual journey through our chapter's events, celebrations, and brotherhood.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-full' : 'aspect-square'
                }`}
              />
              <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-cream hover:text-cream/80 transition-colors"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-6 text-cream hover:text-cream/80 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-6 text-cream hover:text-cream/80 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>
        </motion.div>
      )}
    </section>
  );
};
