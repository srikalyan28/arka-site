"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { motion, AnimatePresence } from "framer-motion";

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

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 sm:p-6 bg-black/60 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.1, y: 400, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 200, rotate: -20 }}
            transition={{ type: "spring", damping: 14, stiffness: 180, mass: 1 }}
            className="relative w-full max-w-lg max-h-full overflow-y-auto bg-white rounded-2xl shadow-2xl flex flex-col"
          >
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
