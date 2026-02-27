import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { services } from "@/lib/mockData";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | Shukla uPVC Craft";
    return () => { document.title = "Shukla uPVC Craft | Modern Windows & Doors"; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mt-4 mb-6">Premium Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of premium aluminum and uPVC solutions, crafted with precision and dedication to elevate your spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="glass-card border-none overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="h-56 md:h-auto md:w-2/5 flex-shrink-0 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 flex flex-col justify-center">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-primary text-primary-foreground p-3 rounded-xl flex-shrink-0">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold font-serif">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Service Details */}
                      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                        <p>✓ Custom design and installation</p>
                        <p>✓ Premium quality materials</p>
                        <p>✓ Expert craftsmanship</p>
                        <p>✓ Timely project delivery</p>
                        <p>✓ Warranty & after-sales support</p>
                      </div>

                      <Link
                        href="/enquiry"
                        className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all w-fit"
                      >
                        Get Quote
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring years of experience, quality craftsmanship, and customer-centric approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our skilled professionals have years of experience in aluminum and uPVC installations.",
              },
              {
                title: "Quality Materials",
                description: "We use only premium-grade materials that ensure durability and longevity.",
              },
              {
                title: "Custom Solutions",
                description: "Every project is tailored to meet your unique needs and preferences.",
              },
              {
                title: "Timely Delivery",
                description: "We respect your time and ensure on-schedule project completion.",
              },
              {
                title: "Competitive Pricing",
                description: "Quality doesn't have to be expensive. We offer the best value for your investment.",
              },
              {
                title: "Full Support",
                description: "We provide comprehensive warranty and dedicated after-sales service.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold font-serif mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
              Contact us today for a free consultation. Let's bring your vision to life with our premium services.
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
