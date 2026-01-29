import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import galleryHeader from '@/assets/gallery-header.jpg';

// All gallery images from ainupes1931.com/gallery.html
const galleryImages = [
  { src: "https://i.ibb.co/whzKkyyt/IMG-3584.jpg", alt: "Brotherhood Event", category: "Events" },
  { src: "https://i.ibb.co/Kj0qw6qs/IMG-3585.jpg", alt: "Sports Event", category: "Events" },
  { src: "https://i.ibb.co/0j4HX3Cj/IMG-3317.jpg", alt: "Chapter Performance", category: "Step Show" },
  { src: "https://i.ibb.co/5xMxYvtY/52005.jpg", alt: "Chapter Performance", category: "Step Show" },
  { src: "https://i.ibb.co/5h9t4v8n/IMG-3587.jpg", alt: "Community Event", category: "Service" },
  { src: "https://i.ibb.co/678s4LQv/IMG-3588.jpg", alt: "Fraternity Performance", category: "Step Show" },
  { src: "https://i.ibb.co/qMPgQD6Z/IMG-3589.jpg", alt: "Awards Ceremony", category: "Events" },
  { src: "https://i.ibb.co/9HWmyQdC/IMG-3590.jpg", alt: "Community Service", category: "Service" },
  { src: "https://i.ibb.co/KvWcdBW/IMG7205757927348355459-177842687808405.jpg", alt: "Youth Mentorship", category: "Service" },
  { src: "https://i.ibb.co/mC7mtv7K/IMG-3586.jpg", alt: "Youth Mentorship", category: "Service" },
  { src: "https://i.ibb.co/C3XbZ47P/IMG-1773.jpg", alt: "Awards Ceremony", category: "Events" },
  { src: "https://i.ibb.co/3Ym9LKGQ/IMG-1774.jpg", alt: "Community Service", category: "Service" },
  { src: "https://i.ibb.co/ynWDKWT6/IMG-1775.jpg", alt: "Youth Mentorship", category: "Service" },
  { src: "https://i.ibb.co/N2McFvwT/IMG-1776.jpg", alt: "Youth Mentorship", category: "Service" },
  { src: "https://i.ibb.co/sdtD4rZ0/IMG-1777.jpg", alt: "Youth Mentorship", category: "Service" },
  { src: "https://i.ibb.co/HpHhdbhQ/IMG-5881.jpg", alt: "Youth Mentorship", category: "Service" },
  { src: "https://public.youware.com/users-website-assets/prod/a6286a40-3438-41f7-a774-a30eab6d2c09/4H7A4587.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://public.youware.com/users-website-assets/prod/a6286a40-3438-41f7-a774-a30eab6d2c09/4H7A4764.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://public.youware.com/users-website-assets/prod/a6286a40-3438-41f7-a774-a30eab6d2c09/DSC06535.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/Ng36Wt6q/100-2015.jpg", alt: "Event 2015", category: "Events" },
  { src: "https://i.ibb.co/bMphzgrY/4888624562668811454.jpg", alt: "Group Photo", category: "Brotherhood" },
  { src: "https://i.ibb.co/RG85qVSV/DSC06928.jpg", alt: "Chapter Event", category: "Events" },
  { src: "https://i.ibb.co/LGK2Cbj/IMG-0046.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/sJMH9vnK/IMG-1185.jpg", alt: "Chapter Event", category: "Events" },
  { src: "https://i.ibb.co/rRMj9nGV/IMG-2255.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/JwtsYncZ/IMG-2903.jpg", alt: "Chapter Performance", category: "Step Show" },
  { src: "https://i.ibb.co/FLbg0KHM/IMG-4270.jpg", alt: "Brotherhood Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/bgtWxZRH/IMG-4686.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/KpZzp9g4/IMG-6081.jpg", alt: "Chapter Event", category: "Events" },
  { src: "https://i.ibb.co/XryvSrTb/20181008-013841668-i-OS.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/ZpLcQwSb/20181008-092718758-i-OS.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/LztqF2L4/IMG-0736.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/8nBJsdyM/IMG-0833.jpg", alt: "Chapter Event", category: "Events" },
  { src: "https://i.ibb.co/8gbddsFT/IMG-0834.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/JWWdbY4c/IMG-0852.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/gMjjCFcv/IMG-0858.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/v6bsjFCF/IMG-0884.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/PvqGwN0Z/IMG-0886.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/9kLPPHHZ/IMG-0892.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/fY7K5QRh/IMG-0895.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/8nWjzVJb/IMG-0908.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/bjkvCXQB/IMG-0915.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/20djSP9L/IMG-0917.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/7JPZsGnD/IMG-0918.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/bjYp7jCJ/IMG-0920.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/5ghpRbtf/IMG-0922.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/NGMH6F4/IMG-0935.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/GQGNCcYk/IMG-0936.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/xtTGLNdx/IMG-0939.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/zhJH4QNK/IMG-0963.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/Gfj4jC9S/IMG-0972.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/Qvq0dCg2/IMG-0977.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/4n7M55xs/IMG-1116.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/fVyTgcNn/IMG-1274.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/MkVh8508/IMG-1322.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/S74cRVyY/IMG-1323.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/nsX3ZQFM/IMG-1325.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/5hwj8m23/IMG-1652.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/YFSpBQBt/IMG-1675.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/YBvvfqzq/IMG-1782.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/Wvx0HvSy/IMG-1909.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/BH2LCKP4/IMG-2103.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/KpBTQcJ2/IMG-2251.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/QyzXPsY/IMG-2784.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/4Z6j66y4/IMG-2785.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/rRzH19tr/IMG-2830.jpg", alt: "Fraternity Event", category: "Step Show" },
  { src: "https://i.ibb.co/0R4qXLJJ/IMG-2833.jpg", alt: "Fraternity Event", category: "Step Show" },
  { src: "https://i.ibb.co/LdXk2809/IMG-2834.jpg", alt: "Fraternity Event", category: "Step Show" },
  { src: "https://i.ibb.co/s9g0cPGt/IMG-2843.jpg", alt: "Fraternity Event", category: "Step Show" },
  { src: "https://i.ibb.co/5WxyvMxG/IMG-2849.jpg", alt: "Fraternity Event", category: "Step Show" },
  { src: "https://i.ibb.co/Q3gJDWvL/IMG-2850.jpg", alt: "Fraternity Event", category: "Step Show" },
  { src: "https://i.ibb.co/VWV3TYXP/IMG-2852.jpg", alt: "Fraternity Event", category: "Step Show" },
  { src: "https://i.ibb.co/KxVdvZFv/IMG-2873.jpg", alt: "Fraternity Event", category: "Step Show" },
  { src: "https://i.ibb.co/4nWzHhLH/IMG-2909.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/ktkMrJj/IMG-2946-HEIC.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/xpQgtQd/IMG-3003.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/JRnrMHmH/IMG-3006.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/ksjGnR44/IMG-3300.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/d0xNY8By/IMG-4014.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/jPKpvxdY/IMG-4015.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/35VQtW3W/IMG-4016.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/CsBzCwgq/IMG-4266.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/fG1XxC7V/IMG-4478.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/67ZXCJCz/IMG-4486.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/RTX5vdh6/IMG-4488.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/tM8M3wSR/IMG-4489.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/Xrx1w7tr/IMG-4755.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/nN9JfC9h/IMG-4762-Original.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/KxQd6tCC/IMG-4825.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/SX406pyM/IMG-4832.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/ZpVffdvf/IMG-4833.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/qYsFf2ZD/IMG-4860.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/sJ5SvM03/IMG-4888.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/65SD45j/IMG-4889.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/ZRbKJKvg/IMG-4917.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/Xfy5mQMD/IMG-4948.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/6VPqNDx/IMG-4949.jpg", alt: "Fraternity Event", category: "Brotherhood" },
  { src: "https://i.ibb.co/39tvHCrH/IMG-5397.jpg", alt: "Fraternity Event", category: "Events" },
  { src: "https://i.ibb.co/ZpxHY1bX/IMG-5398.jpg", alt: "Fraternity Event", category: "Events" },
];

export const GalleryPage = () => {
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
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={galleryHeader} 
          alt="Alpha Iota Chapter brothers performing at step show in crimson attire"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Memories</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground mt-4 mb-6">
              PHOTO <span className="text-cream">GALLERY</span>
            </h1>
            <p className="text-foreground/80 text-xl">
              A visual journey through our chapter's events, celebrations, and brotherhood moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
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
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-muted-foreground text-sm">{galleryImages[selectedImage].alt}</p>
          </div>
        </motion.div>
      )}
    </>
  );
};