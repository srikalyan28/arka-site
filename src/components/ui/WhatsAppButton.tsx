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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us!
      </span>
      
      {/* Notification Dot with Ping */}
      <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
      </span>
    </a>
  );
}
