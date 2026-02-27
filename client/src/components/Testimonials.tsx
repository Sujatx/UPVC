import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/mockData";

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            What People Say About Us
          </motion.h2>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="embla__slide flex-[0_0_100%] min-w-0 px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="flex justify-center mb-8">
                    <Quote className="h-24 w-24 text-primary/10 rotate-180" />
                  </div>
                  <p className="text-xl md:text-2xl font-light italic leading-relaxed text-foreground/80 mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="font-serif">
                    <span className="block text-xl font-bold text-primary">
                      - {testimonial.name}
                    </span>
                    <span className="text-sm text-muted-foreground uppercase tracking-widest mt-1 block">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
