import { Link } from "wouter";
import { contactInfo } from "@/lib/mockData";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const { socials, email, phone, address } = contactInfo;

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-serif font-bold text-white flex items-center gap-2 cursor-pointer">
              <span className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-lg text-lg">S</span>
              Shukla uPVC
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
              <li><Link href="/#services" className="text-white/60 hover:text-primary transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/#gallery" className="text-white/60 hover:text-primary transition-colors cursor-pointer">Gallery</Link></li>
              <li><Link href="/enquiry" className="text-white/60 hover:text-primary transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 {phone}</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>{email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Connect</h3>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={socials.instagram.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={socials.facebook.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={socials.twitter.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={socials.linkedin.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={socials.youtube.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
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
