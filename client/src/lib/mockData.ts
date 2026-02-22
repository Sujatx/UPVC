import { LucideIcon, DoorOpen, LayoutGrid, Maximize, Wind, ShieldCheck, Sun, Instagram, Twitter, Facebook, Linkedin, Youtube, Mail, Phone, MessageCircle } from "lucide-react";

export const contactInfo = {
  email: "shuklaupvccraft@gmail.com",
  phone: "7011407294",
  whatsapp: "917011407294",
  address: "Sector 26, Dwarka, Bhartal Village, Near Heavy Zone Gym, New Delhi – 110077, India",
  socials: {
    instagram: { url: "https://instagram.com/shuklaupvccrafts", handle: "@shuklaupvccrafts", icon: Instagram },
    twitter: { url: "https://x.com/shuklaupvccraft", handle: "@shuklaupvccraft", icon: Twitter },
    facebook: { url: "https://facebook.com/shuklaupvccrafts", handle: "shuklaupvccrafts", icon: Facebook },
    linkedin: { url: "https://www.linkedin.com/company/shukla-upvc-craft/", handle: "Shukla uPVC Craft", icon: Linkedin },
    youtube: { url: "https://www.youtube.com/channel/UCkJPq7uI20owfbwkLNFNoZQ", handle: "Shukla uPVC Craft", icon: Youtube },
  }
};

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "upvc-windows",
    title: "uPVC Windows",
    description: "Energy-efficient, durable, and soundproof uPVC windows for modern homes.",
    icon: Maximize,
    image: "/work-4.png"
  },
  {
    id: "alum-doors",
    title: "Aluminum Doors",
    description: "Sleek, robust aluminum doors that combine security with elegance.",
    icon: DoorOpen,
    image: "/door-detail.png"
  },
  {
    id: "partitions",
    title: "Office Partitions",
    description: "Glass and aluminum partitions to create productive, modern workspaces.",
    icon: LayoutGrid,
    image: "/work-3.png"
  },
  {
    id: "glass-work",
    title: "Custom Glass Work",
    description: "Bespoke glass solutions including railings, shower cubicles, and mirrors.",
    icon: Wind,
    image: "/glass-bg.png"
  }
];

export const galleryItems: GalleryItem[] = [
  { id: "1", title: "Luxury Villa Windows", category: "Windows", image: "/hero-window.png" },
  { id: "2", title: "Modern Sliding Doors", category: "Doors", image: "/work-2.png" },
  { id: "3", title: "Corporate Office", category: "Commercial", image: "/work-3.png" },
  { id: "4", title: "Kitchen Renovation", category: "Windows", image: "/work-4.png" },
  { id: "5", title: "Aluminum Entrance", category: "Doors", image: "/door-detail.png" },
  { id: "6", title: "Glass Railing", category: "Glass", image: "/glass-bg.png" },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner",
    text: "The uPVC windows completely transformed our home. Noise reduction is amazing."
  },
  {
    id: 2,
    name: "Sarah Fernandes",
    role: "Interior Designer",
    text: "Shukla uPVC Craft delivers the quality I need for my high-end clients. Impeccable finish."
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Architect",
    text: "Professional installation and timely delivery. Highly recommended for commercial projects."
  }
];
