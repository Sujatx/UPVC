import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "@/lib/mockData";

export default function FloatingActionButtons() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20services.`;
  const phoneUrl = `tel:+91${contactInfo.phone}`;

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 items-end"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 group"
      >
        <span className="hidden group-hover:inline-block text-sm font-medium pr-2 bg-green-500 px-4 py-2 rounded-full">
          WhatsApp
        </span>
        <img src="/whatsapp.png" alt="WhatsApp" className="h-7 w-7 object-contain" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={phoneUrl}
        variants={buttonVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 group"
      >
        <span className="hidden group-hover:inline-block text-sm font-medium pr-2 bg-blue-500 px-4 py-2 rounded-full">
          Call
        </span>
        <Phone className="h-6 w-6" />
      </motion.a>
    </motion.div>
  );
}
