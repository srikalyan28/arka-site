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
        {/* Header with Close Button */}
        <div className="sticky top-0 right-0 z-10 flex justify-between items-center p-4 bg-white border-b border-gray-100 rounded-t-2xl">
          <h2 className="text-xl font-bold text-[var(--primary)] pl-2">Free Consultation</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Form Container */}
        <div className="p-2 sm:p-4">
          {/* We wrap the existing form. Note: ConsultationForm has its own padding and border, we can let it render as is, but it might double-pad. 
              The existing ConsultationForm has `bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8`. 
              We can override those classes in the ConsultationForm if we pass a prop, or we can just let it render inside.
              To make it look very professional, letting it render inside our modal is perfectly fine as it matches the style. */}
          <div className="bg-blue-50/50 -mx-2 -mt-2 p-4 sm:p-6 mb-4 rounded-xl text-center">
             <p className="text-gray-600 font-medium text-sm sm:text-base">
               Get expert guidance on universities, courses, and visas. Fill out the form below and we'll contact you within 24 hours!
             </p>
          </div>
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
}
