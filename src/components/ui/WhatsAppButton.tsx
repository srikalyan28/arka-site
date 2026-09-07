"use client";

import { siteConfig } from "@/data/siteConfig";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = siteConfig.contact.phones[0].replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-9 h-9 md:w-12 md:h-12" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us!
      </span>
      
      {/* Notification Dot with Ping */}
      <span className="absolute top-1 right-1 md:top-2 md:right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
      </span>
    </a>
  );
}
