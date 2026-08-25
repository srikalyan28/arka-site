import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countries } from "@/data/countries";

export const metadata = {
  title: "Study Countries | ARKA ABROAD",
  description: "Explore opportunities across some of the world's leading Study Countries with Arka Abroad.",
};

export default function CountriesPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">Where do you want to study?</h1>
          <p className="text-lg text-[var(--muted)]">
            Discover the perfect country that aligns with your academic goals, career aspirations, and lifestyle preferences.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {countries.map((country) => (
            <Link 
              key={country.id} 
              href={`/countries/${country.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <Image 
                  src={country.image} 
                  alt={`Study in ${country.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--secondary)]/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute bottom-5 left-5 z-20">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{country.name}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-gray-600 line-clamp-3 mb-6 leading-relaxed">{country.description}</p>
                
                <div className="mb-6 space-y-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Popular Fields</p>
                  <div className="flex flex-wrap gap-2">
                    {country.popularAreas.slice(0, 3).map(area => (
                      <span key={area} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-[var(--accent)] font-semibold text-sm">
                  Explore country
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
