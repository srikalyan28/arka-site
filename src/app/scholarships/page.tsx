import Link from "next/link";
import { Award, BookOpen, GraduationCap, DollarSign } from "lucide-react";

export const metadata = {
  title: "Scholarships & Financial Aid | ARKA ABROAD",
  description: "Make your international education more accessible with our scholarship guidance.",
};

export default function ScholarshipsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-6">
              Make your international education more accessible.
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
              Studying abroad is an investment in your future. We help you explore and apply for various scholarships and financial aid options to reduce your financial burden.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--primary)] mb-16">Types of Scholarships</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-[var(--primary)] rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Merit-Based</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Awarded to students with outstanding academic records, high standardized test scores, or exceptional extracurricular achievements.
              </p>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-[var(--primary)] rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Need-Based</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Granted to students who can demonstrate financial need. Requires detailed financial documentation during the application.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-[var(--primary)] rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">University-Specific</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Many universities offer automatic or competitive scholarships for international students upon successful admission.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-[var(--primary)] rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Government/External</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Funds provided by the host country's government (e.g., Chevening, Fulbright) or independent organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-8">Application Tips</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Apply Early</h4>
                  <p className="text-gray-600">Many scholarship funds are limited and awarded on a rolling basis. Applying early maximizes your chances.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Follow Instructions Carefully</h4>
                  <p className="text-gray-600">Ensure all requested documents are submitted in the correct format. Incomplete applications are often rejected immediately.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Tailor Your Essay</h4>
                  <p className="text-gray-600">If an essay is required, ensure it directly addresses the scholarship's criteria and demonstrates why you are the ideal candidate.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-12 text-center bg-blue-50 border border-blue-100 rounded-xl p-8">
            <p className="text-blue-900 font-medium mb-4">
              Disclaimer: Scholarships are highly competitive and awarded at the discretion of the funding body or university. Arka Abroad provides guidance but does not guarantee the award of any scholarship.
            </p>
            <Link href="/book-consultation" className="inline-flex items-center justify-center bg-[var(--primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--secondary)] transition-colors">
              Speak to a counsellor about your options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
