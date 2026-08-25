import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, Cog, HeartPulse, Laptop, Palette, Scale } from "lucide-react";
import { courses } from "@/data/courses";

export const metadata = {
  title: "Find Your Course | ARKA ABROAD",
  description: "Discover the right program for your future career across top international universities.",
};

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-8 h-8" />,
  Laptop: <Laptop className="w-8 h-8" />,
  Cog: <Cog className="w-8 h-8" />,
  HeartPulse: <HeartPulse className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  Scale: <Scale className="w-8 h-8" />,
};

export default function CoursesPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">Find the right course for your future.</h1>
          <p className="text-lg text-[var(--muted)]">
            Explore diverse study areas and discover programs that align with your passions and career goals.
          </p>
        </div>


        {/* Course Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {courses.map((course) => (
            <Link key={course.id} href="/book-consultation" className="block bg-white rounded-2xl p-8 border border-gray-100 hover:border-[var(--accent)] hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-[var(--background)] rounded-xl flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                {iconMap[course.icon] || <BookOpen className="w-8 h-8" />}
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">{course.category}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>
              <span className="inline-flex items-center text-[var(--accent)] font-semibold group-hover:text-[var(--primary)] transition-colors">
                Explore programs <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* Not Sure CTA */}
        <div className="bg-[var(--primary)] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure what to choose?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our expert career counsellors can help you identify the perfect course based on your aptitude, interests, and future career prospects.
            </p>
            <Link href="/book-consultation" className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition-colors shadow-lg">
              Talk to a Counsellor
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
