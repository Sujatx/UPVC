import { Link } from "wouter";
import { contactInfo } from "@/lib/mockData";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const { socials, email, phone, address } = contactInfo;

  return (
    <footer className="bg-foreground text-background py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-0">
            <Link href="/" className="inline-block cursor-pointer group">
              <img
                src="/logo.webp"
                alt="Shukla uPVC Craft"
                width={80}
                height={64}
                className="max-h-16 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/60 leading-relaxed">
              Premium uPVC and aluminum solutions for modern spaces. 
              Quality craftsmanship meets architectural elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/60 hover:text-primary transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-primary transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/gallery" className="text-white/60 hover:text-primary transition-colors cursor-pointer">Gallery</Link></li>
              <li><Link href="/enquiry" className="text-white/60 hover:text-primary transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <a
                  href={`https://maps.google.com/maps?q=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {address}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:+91${phone}`} className="hover:underline">
                  +91 {phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Connect</h3>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={socials.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={socials.facebook.url} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={socials.twitter.url} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={socials.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={socials.youtube.url} target="_blank" rel="noopener noreferrer" aria-label="Subscribe on YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Shukla uPVC Craft. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
