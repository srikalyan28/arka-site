import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, PenTool, Landmark, PlaneTakeoff, Plane, BookOpen, Compass, Globe2 } from "lucide-react";
import { countries } from "@/data/countries";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-transparent">

        {/* Abstract Background GFX (Orbits, Flight Paths, Planes) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Whorl Tail 1 - Dotted */}
            <path d="M -50 200 C 150 200, 200 400, 400 350 S 500 100, 650 150" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="4 8" opacity="0.2" />
            
            {/* Whorl Tail 2 - Dotted */}
            <path d="M 900 -50 C 700 100, 800 300, 600 400 S 300 300, 200 600" fill="none" stroke="var(--accent)" strokeWidth="3" strokeDasharray="4 8" opacity="0.3" />

            {/* Whorl Tail 3 - Dotted */}
            <path d="M -50 800 C 200 900, 400 700, 600 750 S 800 1000, 1100 850" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="4 8" opacity="0.2" />
          </svg>

          {/* Solid Icons placed at the end of tails or scattered */}
          {/* Plane 1 */}
          <Plane className="absolute top-[130px] left-[650px] w-10 h-10 text-[var(--accent)] -rotate-12 drop-shadow-xl" fill="currentColor" />
          
          {/* Plane 2 */}
          <Plane className="absolute top-[600px] left-[200px] w-8 h-8 text-[var(--primary)] rotate-[120deg] drop-shadow-xl" fill="currentColor" />
          
          {/* Plane 3 */}
          <Plane className="absolute top-[850px] left-[1050px] w-12 h-12 text-[var(--primary)] -rotate-[20deg] drop-shadow-xl" fill="currentColor" />
          
          {/* Scattered Book */}
          <BookOpen className="absolute top-[80px] left-[350px] w-10 h-10 text-[var(--primary)] drop-shadow-xl animate-bounce-slow" fill="currentColor" />
          
          {/* Scattered Pen */}
          <PenTool className="absolute top-[250px] left-[850px] w-8 h-8 text-[var(--accent)] drop-shadow-xl animate-pulse" fill="currentColor" />

          {/* Scattered Globe */}
          <Globe2 className="absolute top-[700px] left-[500px] w-14 h-14 text-[var(--accent)] drop-shadow-xl animate-[spin_20s_linear_infinite]" fill="currentColor" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="flex flex-col gap-6 max-w-2xl">
              <div className="mb-2">
                <Image src="/logo-transparent.png" alt="ARKA ABROAD Logo" width={350} height={350} className="w-48 md:w-72 h-auto object-contain drop-shadow-2xl" priority />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--primary)] leading-[1.1]">
                Your Future <br />
                <span className="text-[var(--accent)]">Has No Borders.</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed max-w-lg">
                Explore the right universities, courses and opportunities abroad with guidance from application to arrival.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center justify-center bg-[var(--primary)] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[var(--secondary)] transition-colors shadow-lg shadow-blue-900/10 group"
                >
                  Book Free Counselling
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/countries"
                  className="inline-flex items-center justify-center bg-white text-[var(--primary)] border border-gray-200 px-8 py-4 rounded-md font-semibold text-lg hover:border-[var(--primary)] transition-colors"
                >
                  Explore Countries
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 to-transparent rounded-3xl -m-4"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full group">
                <Image
                  src="/images/hero_abstract.jpg"
                  alt="Abstract modern illustration of global education"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Embedded Stats Overlay */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-12 z-10 pointer-events-none">
                  <div className="text-center drop-shadow-sm">
                    <div className="text-4xl md:text-5xl font-black text-[var(--primary)]">70+</div>
                    <div className="text-sm font-bold text-[var(--primary)] uppercase tracking-widest mt-1 opacity-90">Countries</div>
                  </div>
                  <div className="w-px bg-[var(--primary)]/20 h-12 self-center"></div>
                  <div className="text-center drop-shadow-sm">
                    <div className="text-4xl md:text-5xl font-black text-[var(--primary)]">600+</div>
                    <div className="text-sm font-bold text-[var(--primary)] uppercase tracking-widest mt-1 opacity-90">Universities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility & Brands Strip */}
      <section className="border-y border-gray-100 bg-white py-12 overflow-hidden flex flex-col gap-12">

        {/* Universities Marquee */}
        <div className="flex w-max animate-marquee items-center group hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-shrink-0 items-center justify-around px-4">
              {['Harvard University', 'Oxford University', 'Stanford University', 'MIT', 'University of Toronto', 'Imperial College London', 'University of Melbourne', 'ETH Zurich'].map((uni) => (
                <div key={uni} className="flex items-center gap-8 mx-4 md:mx-8">
                  <span className="text-xl md:text-2xl font-extrabold text-gray-800 whitespace-nowrap">{uni}</span>
                  <span className="text-[var(--accent)] text-2xl">•</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Stats Marquee (Reverse) */}
        <div className="flex w-max animate-marquee-reverse items-center group hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-shrink-0 items-center justify-around px-4">
              {[
                { count: '10k+', label: 'Successful Students' },
                { count: '12+', label: 'Years of Experience' },
                { count: '8', label: 'Top Countries' },
                { count: '500+', label: 'University Partners' },
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-4 mx-8 md:mx-16">
                  <span className="text-4xl md:text-5xl font-bold text-[var(--primary)] whitespace-nowrap">{stat.count}</span>
                  <span className="text-sm md:text-base text-[var(--muted)] font-medium whitespace-nowrap uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Country Flags Marquee */}
        <div className="flex w-max animate-marquee items-center group hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-shrink-0 items-center justify-around px-4">
              {[
                { code: 'gb', alt: 'UK Flag' },
                { code: 'us', alt: 'USA Flag' },
                { code: 'ca', alt: 'Canada Flag' },
                { code: 'au', alt: 'Australia Flag' },
                { code: 'de', alt: 'Germany Flag' },
                { code: 'ie', alt: 'Ireland Flag' },
                { code: 'nz', alt: 'New Zealand Flag' },
                { code: 'ae', alt: 'UAE Flag' }
              ].map((country, index) => (
                <div key={index} className="flex items-center justify-center mx-6 md:mx-12">
                  <img
                    src={`https://flagcdn.com/${country.code}.svg`}
                    alt={country.alt}
                    className="w-20 md:w-24 h-auto shadow-sm rounded-sm hover:scale-110 transition-transform cursor-default"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

      </section>

      {/* Countries Section */}
      <section className="py-20 md:py-28 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Where do you want to study?</h2>
            <p className="text-lg text-[var(--muted)]">Explore opportunities across some of the world&apos;s leading study countries.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.slice(0, 8).map((country) => (
              <Link
                key={country.id}
                href={`/countries/${country.slug}`}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={country.image}
                  alt={`Study in ${country.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">{country.name}</h3>
                  <div className="flex items-center text-white/90 font-medium text-sm transform opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                    Explore country
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Comprehensive Support</h2>
            <p className="text-lg text-[var(--muted)]">Expert guidance at every step of your international education journey.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: GraduationCap, title: "University Selection", desc: "Finding the perfect fit for your academic goals." },
              { icon: PenTool, title: "Applications and Loans", desc: "Guidance on university applications and securing education loans." },
              { icon: Landmark, title: "Visa Processing", desc: "Hassle-free visa documentation and guidance." },
              { icon: PlaneTakeoff, title: "Pre and Post Departure", desc: "Support from getting ready to settling into your new life abroad." }
            ].map((feature, idx) => (
              <div key={idx} className="group relative p-8 rounded-3xl bg-gray-50 hover:bg-[var(--primary)] transition-all duration-500 overflow-hidden text-center flex flex-col items-center shadow-sm hover:shadow-xl">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-700"></div>
                <div className="relative z-10 w-16 h-16 bg-white text-[var(--primary)] rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:text-[var(--accent)] transition-all duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="relative z-10 text-xl font-bold text-[var(--primary)] group-hover:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                <p className="relative z-10 text-gray-500 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center relative z-10">
            <Link href="/services" className="inline-flex items-center justify-center bg-[var(--primary)] text-white px-8 py-4 rounded-full font-semibold hover:bg-[var(--secondary)] transition-all hover:scale-105 shadow-lg shadow-blue-900/10">
              Explore All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-16 text-center shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-6">Ready to take the next step?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our expert counsellors are here to answer your questions and help you plan your international education journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/book-consultation" className="inline-flex items-center justify-center bg-[var(--primary)] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[var(--secondary)] transition-colors">
                Talk to a Counsellor
              </Link>
              <Link href="/courses" className="inline-flex items-center justify-center bg-gray-100 text-[var(--primary)] px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-200 transition-colors">
                Find Your Course
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
