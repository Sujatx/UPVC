import { m } from "framer-motion";
import { galleryItems } from "@/lib/mockData";
import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  useEffect(() => {
    document.title = "Project Gallery | Shukla uPVC Craft";
    const meta = document.querySelector('meta[name="description"]');
    const prev = meta?.getAttribute("content") ?? "";
    meta?.setAttribute("content", "Browse our portfolio of completed uPVC windows, aluminum doors, and glass installations. See the quality of Shukla uPVC Craft's work.");
    return () => {
      document.title = "Shukla uPVC Craft | Modern Windows & Doors";
      meta?.setAttribute("content", prev);
    };
  }, []);

  const categories = Array.from(new Set(galleryItems.map((item) => item.category)));
  const filteredItems = selectedCategory
    ? galleryItems.filter((item) => item.category === selectedCategory)
    : galleryItems;

  const selectedIndex = filteredItems.findIndex((i) => i.id === selectedItem?.id);

  const navigate = useCallback((dir: 1 | -1) => {
    setSelectedItem((cur) => {
      const idx = filteredItems.findIndex((i) => i.id === cur?.id);
      if (idx === -1) return cur;
      return filteredItems[(idx + dir + filteredItems.length) % filteredItems.length];
    });
  }, [filteredItems]);

  useEffect(() => {
    if (!selectedItem) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedItem, navigate]);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-primary/5 to-secondary/5 min-h-screen"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Work</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mt-4 mb-6">Project Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of premium aluminum and uPVC installations across residential and commercial spaces.
            </p>
          </m.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 sticky top-12 z-40 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap md:flex-wrap gap-3 justify-start md:justify-center items-center overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide"
               style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
            <button
              onClick={() => setSelectedCategory(null)}
              aria-pressed={selectedCategory === null}
              className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-white/60 border border-primary/20 text-foreground hover:bg-white/80"
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-white/60 border border-primary/20 text-foreground hover:bg-white/80"
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
          <m.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <m.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-72"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
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
              </m.div>
            ))}
          </m.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedItem !== null} onOpenChange={(open) => { if (!open) setSelectedItem(null); }}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
          {selectedItem && (
            <div className="space-y-3">
              <div className="relative h-[60vh] flex items-center justify-center bg-black/90 rounded-lg overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  onClick={() => navigate(-1)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => navigate(1)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              <div className="bg-card p-5 rounded-lg flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-1">{selectedItem.title}</h2>
                  <p className="text-primary font-semibold">{selectedItem.category}</p>
                </div>
                <span className="text-muted-foreground text-sm shrink-0">
                  {selectedIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Happy Customers" },
            ].map((stat, index) => (
              <m.div
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
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <m.div
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
          </m.div>
        </div>
      </section>
    </m.div>
  );
}
