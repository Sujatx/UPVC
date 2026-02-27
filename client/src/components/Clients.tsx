import React from "react";
import { m } from "framer-motion";

const clients = [
  { name: "Aquarium Home", logo: "/aquarium.webp" },
  { name: "Park Plaza", logo: "/park-plaza.webp" },
  { name: "Radisson", logo: "/radisson.webp" },
  { name: "Hero MotoCorp", logo: "/hero.webp" },
];

export default function Clients() {
  return (
    <section className="py-20 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif font-bold text-primary uppercase tracking-widest">
            Our Clients
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {clients.map((client) => (
            <m.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                width={100}
                height={64}
                loading="lazy"
                className="max-h-16 w-auto object-contain"
              />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
