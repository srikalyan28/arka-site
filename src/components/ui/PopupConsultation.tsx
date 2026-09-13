"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { motion, AnimatePresence } from "framer-motion";

export default function PopupConsultation() {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<'hidden' | 'bag-entering' | 'bag-opening' | 'form-entering'>('hidden');
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

  useEffect(() => {
    if (isOpen) {
      setStage('bag-entering');
      
      const t1 = setTimeout(() => {
        setStage('bag-opening');
      }, 1200);
      
      const t2 = setTimeout(() => {
        setStage('form-entering');
      }, 1800);

      return () => { clearTimeout(t1); clearTimeout(t2); }
    } else {
      setStage('hidden');
    }
  }, [isOpen]);

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
          {/* Cartoon Bag Animation */}
          <AnimatePresence>
            {(stage === 'bag-entering' || stage === 'bag-opening') && (
              <motion.div 
                className="absolute z-50 flex flex-col items-center"
                style={{ perspective: "1000px" }}
                initial={{ y: 500, scale: 0.1 }}
                animate={
                  stage === 'bag-entering' 
                    ? { y: 0, scale: 1.5, rotate: [0, -15, 15, -15, 15, 0] } 
                    : { y: 0, scale: 1.5 }
                }
                exit={{ y: 200, scale: 0.5, opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  damping: 12, 
                  stiffness: 100, 
                  rotate: { duration: 0.6, delay: 0.4 } 
                }}
              >
                 {/* Bag Handle */}
                 <div className="w-16 h-8 border-[6px] border-amber-900 rounded-t-xl mb-[-6px] z-10" />
                 
                 {/* Bag Top Lid */}
                 <motion.div 
                   animate={ stage === 'bag-opening' ? { rotateX: 130 } : { rotateX: 0 }}
                   transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                   className="w-48 h-20 bg-amber-500 rounded-t-2xl shadow-inner border-b-4 border-amber-700 z-30 origin-top flex justify-between px-8 items-end pb-2 relative"
                   style={{ transformStyle: "preserve-3d" }}
                 >
                   <div className="w-4 h-6 bg-yellow-400 rounded-sm shadow-sm" />
                   <div className="w-4 h-6 bg-yellow-400 rounded-sm shadow-sm" />
                 </motion.div>

                 {/* Bag Inside (Dark area exposed when lid opens) */}
                 <div className="w-48 h-20 bg-amber-900/80 rounded-t-2xl -mt-20 z-20 absolute top-[26px] shadow-inner" />

                 {/* Bag Body */}
                 <div className="w-48 h-24 bg-amber-600 rounded-b-2xl shadow-2xl z-30 flex justify-center pt-2 relative">
                    <div className="w-32 h-2 bg-amber-700 rounded-full opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl pointer-events-none" />
                 </div>
                 
                 <div className="mt-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full shadow text-[var(--primary)] font-bold text-xs tracking-wider uppercase animate-pulse">
                   Special Delivery!
                 </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* The Actual Form */}
          <AnimatePresence>
            {stage === 'form-entering' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.1, y: 150 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 200, rotate: -10 }}
                transition={{ type: "spring", damping: 15, stiffness: 150, mass: 1 }}
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl flex flex-col z-[60]"
              >
                {/* Premium Gradient Header */}
                <div className="relative z-10 flex justify-between items-center p-6 bg-gradient-to-r from-[var(--primary)] to-blue-600 rounded-t-2xl text-white shadow-md">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Book a Free Session</h2>
                    <p className="text-white/80 text-sm font-medium">Expert guidance on universities, courses & visas</p>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors self-start shrink-0 ml-4"
                    aria-label="Close popup"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Form Container */}
                <div className="p-6 sm:p-8 overflow-y-auto">
                  <ConsultationForm isPopup={true} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
