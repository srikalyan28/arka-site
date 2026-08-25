"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { AccordionItem } from "@/components/ui/Accordion";
import Link from "next/link";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryId: string, questionIndex: number) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="bg-[var(--background)] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            Find answers to common questions about studying abroad, admissions, visas, and our services.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={!!openItems[`${category.category}-${index}`]}
                    onClick={() => toggleItem(category.category, index)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            If you couldn't find the answer to your question, feel free to reach out to our team directly. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-md font-medium hover:bg-[var(--secondary)] transition-colors">
              Contact Us
            </Link>
            <Link href="/book-consultation" className="inline-block bg-white text-[var(--primary)] border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
