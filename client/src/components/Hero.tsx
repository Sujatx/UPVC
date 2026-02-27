import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-window.webp"
          alt="Modern Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent dark:from-black/90 dark:via-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground dark:text-accent font-semibold text-sm backdrop-blur-sm border border-accent/20">
              #1 uPVC Manufacturer
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight text-shadow">
            Crafting Vision <br />
            <span className="text-primary italic">Into Reality</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Premium aluminum and uPVC solutions designed for modern living. 
            Elevate your space with our precision-engineered windows and doors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full px-8 text-lg h-12 shadow-lg hover:scale-105 transition-transform">
              <Link href="/enquiry">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-lg h-12 bg-white/50 backdrop-blur-md border-primary/20 hover:bg-white/80 dark:bg-black/20 dark:hover:bg-black/40">
              <Link href="/gallery">
                View Gallery
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "10 Year Warranty",
              "Sound Proof",
              "Energy Efficient"
            ].map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80"
              >
                <CheckCircle className="h-5 w-5 text-primary" />
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative glass element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute right-[-10%] bottom-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-3xl z-0 pointer-events-none" 
      />
    </div>
  );
}
