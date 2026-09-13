"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ConsultationForm from "@/components/forms/ConsultationForm";

export default function PopupConsultation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("consultationPopupShown");
    
    if (!hasSeenPopup) {
      // Show the popup after 4 seconds of landing on the site
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("consultationPopupShown", "true");
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!hasMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg max-h-full overflow-y-auto bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col">
        {/* Premium Gradient Header */}
        <div className="relative z-10 flex justify-between items-center p-6 bg-gradient-to-r from-[var(--primary)] to-blue-600 rounded-t-2xl text-white shadow-md">
          <div>
            <h2 className="text-2xl font-bold mb-1">Book a Free Session</h2>
            <p className="text-white/80 text-sm font-medium">Expert guidance on universities, courses & visas</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors self-start"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Form Container */}
        <div className="p-6 sm:p-8">
          <ConsultationForm isPopup={true} />
        </div>
      </div>
    </div>
  );
}
