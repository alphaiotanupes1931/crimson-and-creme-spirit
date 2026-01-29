import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import eventsImg from '@/assets/events-new.jpg';

// Event images from ainupes1931.com
const eventImages = [
  { src: "https://i.ibb.co/pBTcPDGw/550752848-18525648166059119-3641791866013179254-n.jpg", alt: "Brotherhood Event" },
  { src: "https://i.ibb.co/TDXZSX8c/553688566-18526744873059119-1731940400145656090-n.jpg", alt: "Sports Event" },
  { src: "https://i.ibb.co/rKy1ppQR/553742451-18526744930059119-8240484950499882513-n.jpg", alt: "Chapter Performance" },
  { src: "https://i.ibb.co/7JwGrCxD/556039895-17961018852004947-3328951905216805747-n.jpg", alt: "Chapter Performance" },
  { src: "https://i.ibb.co/tTZJFJ5w/557702693-18527879638059119-241453019873149262-n.jpg", alt: "Fraternity Performance" },
  { src: "https://i.ibb.co/S7t7KdNz/566499597-18532781590059119-3755042225832754609-n.jpg", alt: "Awards Ceremony" },
  { src: "https://i.ibb.co/bRKV5D7g/567730539-18345279607207632-8150350111063121967-n.jpg", alt: "Awards Ceremony" },
  { src: "https://i.ibb.co/W4yXmRLY/568450345-18533493001059119-6846249649031623057-n.jpg", alt: "Fraternity Event" },
  { src: "https://i.ibb.co/9mk7M1t3/568488793-18533494108059119-8006000507828156133-n.jpg", alt: "Fraternity Event" },
  { src: "https://i.ibb.co/gZ2X79hF/570289662-18533492593059119-8590332464255981203-n.jpg", alt: "Fraternity Event" },
  { src: "https://i.ibb.co/35R7rDKd/570623628-18534028321059119-7381806001614807201-n.jpg", alt: "Event 2015" },
  { src: "https://i.ibb.co/pNXMqF2/571200174-18533732329059119-4790292620716938813-n.jpg", alt: "Group Photo" },
  { src: "https://i.ibb.co/SDrx5g2x/572007033-18045973397679947-7150755599109613719-n.jpg", alt: "Chapter Event" },
  { src: "https://i.ibb.co/8gYr2FTQ/572275873-18346939168207632-1706656254147176860-n.jpg", alt: "Fraternity Event" },
  { src: "https://i.ibb.co/v65sbVfV/575594249-18538048693059119-6106360230588259961-n.jpg", alt: "Chapter Event" },
  { src: "https://i.ibb.co/wZZhjXJw/580424467-17920538727193975-3440699187736512436-n.jpg", alt: "Fraternity Event" },
  { src: "https://i.ibb.co/9HVMQG6w/580467710-18538527484059119-222791440745673034-n.jpg", alt: "Chapter Performance" },
  { src: "https://i.ibb.co/SwVbZpt3/580550859-18538260679059119-2731396671305981998-n.jpg", alt: "Brotherhood Event" },
  { src: "https://i.ibb.co/Ndx5YHh9/581707239-18545801680013286-5788179095895671338-n.jpg", alt: "Fraternity Event" },
  { src: "https://i.ibb.co/Mkxqh1Nd/583027821-18156355342405628-3058677570273232338-n.jpg", alt: "Chapter Event" },
  { src: "https://i.ibb.co/ksddvt0r/584956205-18546267643028513-3428755860836270766-n.jpg", alt: "Fraternity Event" },
  { src: "https://i.ibb.co/PvpjvCzv/587194386-18539697358059119-1776691852613083053-n.jpg", alt: "Fraternity Event" },
  { src: "https://i.ibb.co/tPDKBnDB/588059365-18540669835059119-7581615777524042261-n.jpg", alt: "Fraternity Event" },
];

export const EventsPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? eventImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === eventImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={eventsImg} 
          alt="Alpha Iota Chapter events"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-crimson-dark/70" />
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-cream text-sm font-semibold tracking-[0.3em] uppercase">Celebrations & Achievements</span>
            <h1 className="font-display text-6xl md:text-8xl text-foreground mt-4 mb-6">
              CHAPTER <span className="text-cream">EVENTS</span>
            </h1>
            <p className="text-foreground/80 text-xl">
              Capturing memorable moments from our chapter's events, performances, and celebrations.
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
            <span className="text-cream text-sm font-semibold tracking-[0.2em] uppercase">Our Events</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4">
              EVENTS <span className="text-gradient-cream">GALLERY</span>
            </h2>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {eventImages.map((image, index) => (
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
            src={eventImages[selectedImage].src}
            alt={eventImages[selectedImage].alt}
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