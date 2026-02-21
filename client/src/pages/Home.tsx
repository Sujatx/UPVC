import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import { services } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

const ServicesSection = () => (
  <section id="services" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">Premium Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We specialize in premium aluminum and uPVC solutions, customized to elevate your architectural vision.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href="/services" className="h-full block">
              <Card className="glass-card h-full border-none overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-8 relative">
                  <div className="absolute -top-8 right-6 bg-white dark:bg-card p-4 rounded-xl shadow-xl text-primary transition-transform group-hover:-translate-y-2">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-serif mt-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ServicesSection />
      <Gallery />
      
      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/glass-bg.png')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Transform Your Space?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
              Get in touch with us today for a free consultation and quote. We bring your vision to life with precision and care.
            </p>
            <Link 
              href="/enquiry" 
              className="inline-flex items-center justify-center px-10 py-5 text-primary bg-white rounded-full font-bold text-lg hover:bg-white/90 hover:scale-105 transition-all shadow-2xl"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
