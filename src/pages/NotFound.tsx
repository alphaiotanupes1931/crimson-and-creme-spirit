import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import alphaIotaLogo from "@/assets/alpha-iota-logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        {/* Logo */}
        <motion.img 
          src={alphaIotaLogo} 
          alt="Alpha Iota Logo"
          className="w-32 h-32 mx-auto mb-8 object-contain"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        
        {/* 404 Text */}
        <h1 className="font-display text-8xl md:text-9xl text-cream mb-4">
          404
        </h1>
        
        <div className="w-24 h-1 bg-cream mx-auto mb-6" />
        
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
          Page Not Found
        </h2>
        
        <p className="text-muted-foreground text-lg mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="cream" size="lg">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-cream/30 text-cream hover:bg-cream/10">
            <Link to="/" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Decorative element */}
        <div className="mt-16 flex justify-center gap-2">
          <span className="w-2 h-2 bg-cream/30 rounded-full" />
          <span className="w-2 h-2 bg-cream/50 rounded-full" />
          <span className="w-2 h-2 bg-cream rounded-full" />
          <span className="w-2 h-2 bg-cream/50 rounded-full" />
          <span className="w-2 h-2 bg-cream/30 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
