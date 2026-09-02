import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight, GraduationCap, MapPin, Briefcase, Calendar, DollarSign, Clock } from "lucide-react";
import { countries } from "@/data/countries";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const country = countries.find(d => d.slug === slug);
  
  if (!country) return { title: "Country Not Found" };
  
  return {
    title: `Study in ${country.name} | ARKA ABROAD`,
    description: country.description,
  };
}

export default async function CountryDetailPage({ params }: Props) {
  const { slug } = await params;
  const country = countries.find(d => d.slug === slug);
  
  if (!country) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex items-center text-sm text-gray-300 mb-6 gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/countries" className="hover:text-white transition-colors">Countries</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{country.name}</span>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Study in {country.name}</h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              {country.description}
            </p>
            <Link href="/book-consultation" className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-yellow-600 transition-colors shadow-lg shadow-[var(--accent)]/20">
              Talk to a Counsellor
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts Strip */}
      <section className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-20">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <DollarSign className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Tuition (Avg)</span>
              </div>
              <p className="font-bold text-[var(--primary)]">{country.facts.tuition}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Duration</span>
              </div>
              <p className="font-bold text-[var(--primary)]">{country.facts.duration}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Intakes</span>
              </div>
              <p className="font-bold text-[var(--primary)]">{country.facts.intakes}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Post-Study</span>
              </div>
              <p className="font-bold text-[var(--primary)]">{country.facts.postStudyOptions}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[var(--primary)] mb-6">Why Study in {country.name}?</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  {country.whyStudy?.map((paragraph, index) => (
                    <p key={index} className={index > 0 ? "mt-4" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-[var(--accent)]" /> 
                  Popular Areas of Study
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {country.popularAreas.map(area => (
                    <div key={area} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="font-medium text-gray-800">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[var(--accent)]" /> 
                  Top Student Cities
                </h2>
                <div className="flex flex-wrap gap-3">
                  {country.facts.cities.map(city => (
                    <span key={city} className="bg-white border border-gray-200 shadow-sm px-5 py-2 rounded-full font-medium text-[var(--primary)]">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Disclaimer</h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  The tuition fees, living costs, and post-study work visa rules mentioned are approximate guidelines and subject to change based on university policies and government immigration laws. 
                  Always verify current regulations with official sources or consult our experts for the latest information.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-[var(--background)] rounded-xl p-8 border border-gray-100 sticky top-32">
                <h3 className="text-xl font-bold text-[var(--primary)] mb-4">Start Your Application</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get expert guidance on university shortlisting, documentation, and visa processing for {country.name}.
                </p>
                <div className="space-y-4">
                  <Link href="/book-consultation" className="w-full flex items-center justify-center bg-[var(--primary)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--secondary)] transition-colors">
                    Book Free Consultation
                  </Link>
                </div>
                
                <hr className="my-6 border-gray-200" />
                
                <h4 className="font-semibold text-gray-900 mb-3">What we help with:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Profile Evaluation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> University Selection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> SOP & Document Prep</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Visa Guidance</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
