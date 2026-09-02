"use client";

import { useState } from "react";
import { submitLead } from "@/actions/leadActions";
import { CheckCircle2, Loader2 } from "lucide-react";
import { allCountries } from "@/data/allCountries";

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await submitLead(formData);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Request Received!</h3>
        <p className="text-green-700 mb-6">
          Thank you for reaching out. One of our expert counsellors will contact you shortly to confirm your session.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="text-green-800 font-medium hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md text-sm border border-red-200">
          {error}
        </div>
      )}
      
      <div className="space-y-5 mb-8">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
          <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-shadow" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</label>
          <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-shadow" placeholder="+91 98765 43210" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
          <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-shadow" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="preferredCountry" className="text-sm font-medium text-gray-700">Interested In (Optional)</label>
          <select id="preferredCountry" name="preferredCountry" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-shadow bg-white">
            <option value="">Not decided yet</option>
            {allCountries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[var(--primary)] text-white py-4 rounded-md font-bold text-lg hover:bg-[var(--secondary)] transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Book My Counselling Session"
        )}
      </button>

      <p className="text-xs text-gray-500 text-center mt-6">
        By submitting this form, you agree to our Privacy Policy. Your information is kept strictly confidential and will only be used to contact you regarding your study abroad inquiry.
      </p>
    </form>
  );
}
