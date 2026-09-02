import Link from "next/link";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Visa Guidance | ARKA ABROAD",
  description: "Comprehensive support for your student visa application.",
};

export default function VisaGuidancePage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-24 pb-8 md:pt-28 md:pb-12 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-4">
              Expert Visa Guidance.
            </h1>
            <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed">
              We help you prepare a clear, complete, and accurate application to maximize your chances of a successful visa outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Our Visa Support Services</h2>
              <ul className="space-y-4">
                {[
                  "Detailed document checklist based on country rules",
                  "Financial documentation review and planning",
                  "Assistance with filling visa application forms",
                  "Guidance on writing the Statement of Purpose for Visa",
                  "Mock interviews to prepare for consulate appointments",
                  "Application tracking and follow-up support",
                  "Dependent visa guidance (if applicable)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="bg-[var(--primary)] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Why is visa guidance crucial?</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Even with an unconditional offer from a top university, a minor error in your visa application or financial documentation can lead to a rejection. 
                  Immigration rules change frequently, and having experienced professionals review your file ensures compliance with the latest regulations.
                </p>
                <Link href="/book-consultation" className="inline-block bg-[var(--accent)] text-white px-6 py-3 rounded-md font-bold hover:bg-yellow-600 transition-colors">
                  Get Visa Assistance
                </Link>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex gap-4">
                <ShieldAlert className="w-8 h-8 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Important Legal Disclaimer</h4>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Visa decisions are made entirely by the relevant immigration authorities and consulates. Arka Abroad does not, and cannot, guarantee visa approval. Our role is strictly advisory—we ensure your application is presented accurately and completely according to the published guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
