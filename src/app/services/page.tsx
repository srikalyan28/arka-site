import Link from "next/link";
import { CheckCircle, Compass, FileSignature, Landmark, PlaneTakeoff } from "lucide-react";
import { servicePhases } from "@/data/services";
import Image from "next/image";

export const metadata = {
  title: "Our Services | ARKA ABROAD",
  description: "Comprehensive guidance for international education from university selection to pre-departure.",
};

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-8 h-8" />,
  FileSignature: <FileSignature className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
  PlaneTakeoff: <PlaneTakeoff className="w-8 h-8" />,
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-6">
              Your Journey to Study Abroad.
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
              We provide comprehensive end-to-end support. From the moment you decide to study abroad until you successfully settle in your dream country.
            </p>
          </div>
        </div>
      </section>

      {/* Services Journey Timeline */}
      <section className="py-20 md:py-32 bg-gray-50/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="max-w-5xl mx-auto">
            {servicePhases.map((phase, index) => (
              <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-16 mb-24 last:mb-0 group">
                
                {/* Connecting Line (Desktop) */}
                {index !== servicePhases.length - 1 && (
                  <div className="hidden md:block absolute left-[3.5rem] top-24 bottom-[-6rem] w-0.5 bg-gradient-to-b from-blue-100 to-transparent group-hover:from-[var(--accent)] transition-colors duration-700"></div>
                )}
                
                {/* Icon Column */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-blue-900/5 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
                    {iconMap[phase.icon]}
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-grow pt-2 md:pt-4">
                  <div className="mb-2 text-[var(--accent)] font-bold tracking-wider uppercase text-sm">Phase {index + 1}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">{phase.title}</h2>
                  <p className="text-lg text-gray-500 mb-10 max-w-2xl">{phase.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {phase.services.map((service, sIndex) => (
                      <div key={sIndex} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[var(--primary)]/20 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build your profile together.</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                A strong application is more than just good grades. It's about presenting your story, your ambitions, and your unique strengths in the best possible light.
              </p>
              <Link href="/book-consultation" className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition-colors shadow-lg">
                Talk to an Expert
              </Link>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
               <Image src="/images/services.png" alt="University application documents" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
