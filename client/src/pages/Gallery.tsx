import { motion } from "framer-motion";
import { galleryItems } from "@/lib/mockData";
import { useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(galleryItems.map((item) => item.category)));
  const filteredItems = selectedCategory
    ? galleryItems.filter((item) => item.category === selectedCategory)
    : galleryItems;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-primary/5 to-secondary/5 min-h-screen"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Work</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mt-4 mb-6">Project Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of premium aluminum and uPVC installations across residential and commercial spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 sticky top-12 z-40 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap md:flex-wrap gap-3 justify-start md:justify-center items-center overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide"
               style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-white/60 dark:bg-white/10 border border-primary/20 text-foreground hover:bg-white/80 dark:hover:bg-white/20"
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-white/60 dark:bg-white/10 border border-primary/20 text-foreground hover:bg-white/80 dark:hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-72"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-6">
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Premium {item.category} installation showcasing quality craftsmanship and attention to detail.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Happy Customers" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
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
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Showcase Your Space
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
              Ready to transform your space? Contact our experts today for a free consultation.
            </p>
            <a
              href="/enquiry"
              className="inline-flex items-center justify-center px-10 py-5 text-primary bg-white rounded-full font-bold text-lg hover:bg-white/90 hover:scale-105 transition-all shadow-2xl"
            >
              Get Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
