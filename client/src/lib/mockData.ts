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
    image: "/work-4.webp"
  },
  {
    id: "alum-doors",
    title: "Aluminum Doors",
    description: "Sleek, robust aluminum doors that combine security with elegance.",
    icon: DoorOpen,
    image: "/doors/door-detail.webp"
  },
  {
    id: "partitions",
    title: "Office Partitions",
    description: "Glass and aluminum partitions to create productive, modern workspaces.",
    icon: LayoutGrid,
    image: "/work-3.webp"
  },
  {
    id: "glass-work",
    title: "Custom Glass Work",
    description: "Bespoke glass solutions including railings, shower cubicles, and mirrors.",
    icon: Wind,
    image: "/glass-bg.webp"
  }
];

export const galleryItems: GalleryItem[] = [
  { id: "1", title: "Luxury Villa Windows", category: "Windows", image: "/hero-window.webp" },
  { id: "2", title: "Modern Sliding Doors", category: "Doors", image: "/work-2.webp" },
  { id: "3", title: "Corporate Office", category: "Commercial", image: "/work-3.webp" },
  { id: "4", title: "Kitchen Renovation", category: "Windows", image: "/work-4.webp" },
  { id: "5", title: "Aluminum Entrance", category: "Doors", image: "/doors/door-detail.webp" },
  { id: "6", title: "Glass Railing", category: "Glass", image: "/glass-bg.webp" },
  { id: "door-1", title: "UPVC Door Design 1", category: "Doors", image: "/doors/door-1.webp" },
  { id: "door-5", title: "UPVC Door Design 2", category: "Doors", image: "/doors/door-5.webp" },
  { id: "door-6", title: "UPVC Door Design 3", category: "Doors", image: "/doors/door-6.webp" },
  { id: "door-7", title: "UPVC Door Design 4", category: "Doors", image: "/doors/door-7.webp" },
  { id: "door-8", title: "UPVC Door Design 5", category: "Doors", image: "/doors/door-8.webp" },
  { id: "door-9", title: "UPVC Door Design 6", category: "Doors", image: "/doors/door-9.webp" },
  { id: "door-10", title: "UPVC Door Design 7", category: "Doors", image: "/doors/door-10.webp" },
  { id: "door-11", title: "UPVC Door Design 8", category: "Doors", image: "/doors/door-11.webp" },
  { id: "door-12", title: "UPVC Door Design 9", category: "Doors", image: "/doors/door-12.webp" },
  { id: "window-1", title: "UPVC Window Design 1", category: "Windows", image: "/windows/window-1.webp" },
  { id: "window-2", title: "UPVC Window Design 2", category: "Windows", image: "/windows/window-2.webp" },
  { id: "window-3", title: "UPVC Window Design 3", category: "Windows", image: "/windows/window-3.webp" },
  { id: "window-4", title: "UPVC Window Design 4", category: "Windows", image: "/windows/window-4.webp" },
  { id: "window-5", title: "UPVC Window Design 5", category: "Windows", image: "/windows/window-5.webp" },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner",
    rating: 5,
    text: "The uPVC windows completely transformed our home. Noise reduction is amazing."
  },
  {
    id: 2,
    name: "Sarah Fernandes",
    role: "Interior Designer",
    rating: 5,
    text: "Shukla uPVC Craft delivers the quality I need for my high-end clients. Impeccable finish."
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Architect",
    rating: 5,
    text: "Professional installation and timely delivery. Highly recommended for commercial projects."
  }
];
