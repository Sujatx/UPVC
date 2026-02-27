import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import { services } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, PenTool, Wrench, ShieldCheck } from "lucide-react";
import { useEffect } from "react";

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
                    loading="lazy"
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

const ProcessSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Simple Steps</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From first contact to final installation, we make the process smooth and stress-free.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Connector line desktop */}
        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-primary/20 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            { step: "01", icon: Phone, title: "Free Consultation", desc: "Tell us about your project requirements and we'll guide you through the options." },
            { step: "02", icon: PenTool, title: "Custom Design", desc: "We craft a design tailored to your space, style, and budget." },
            { step: "03", icon: Wrench, title: "Expert Installation", desc: "Our skilled team handles the full installation with precision." },
            { step: "04", icon: ShieldCheck, title: "After-Sales Support", desc: "Warranty included with dedicated support long after the job is done." },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  useEffect(() => {
    document.title = "Shukla uPVC Craft | Premium uPVC Windows & Doors, Delhi";
    return () => { document.title = "Shukla uPVC Craft | Modern Windows & Doors"; };
  }, []);

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
      <ProcessSection />
      <Testimonials />
      <Clients />

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/glass-bg.webp')] opacity-20 bg-cover bg-center mix-blend-overlay" />
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
