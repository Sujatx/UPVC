import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Aquarium Home", logo: "/aquarium.png" },
  { name: "Park Plaza", logo: "/park-plaza.png" },
  { name: "Radisson", logo: "/radisson.png" },
  { name: "Hero MotoCorp", logo: "/hero.png" },
];

export default function Clients() {
  return (
    <section className="py-20 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif font-bold text-muted-foreground/60 uppercase tracking-widest">
            Our Clients
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
