import Link from "next/link";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Success Stories | ARKA ABROAD",
  description: "Read inspiring stories from our students who achieved their dreams of studying abroad.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-6">
              Success Stories.
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
              Every student's journey is unique. Read about how we helped these individuals navigate their path to leading international universities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm flex flex-col">
                <Quote className="w-10 h-10 text-[var(--accent)]/30 mb-6" />
                <p className="text-gray-700 text-lg leading-relaxed italic mb-8 flex-1">
                  "{testimonial.story}"
                </p>
                <div className="bg-blue-50/50 p-4 rounded-lg mb-6 border border-blue-100/50">
                  <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider block mb-1">Outcome</span>
                  <span className="text-gray-800 font-medium">{testimonial.outcome}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0 flex items-center justify-center text-gray-500 font-bold">
                    {testimonial.studentName.charAt(1) || 'S'}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--primary)]">{testimonial.studentName}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.course}, {testimonial.university} • {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-6">Want to start your own journey?</h3>
            <Link href="/book-consultation" className="inline-block bg-[var(--accent)] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition-colors shadow-lg">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
