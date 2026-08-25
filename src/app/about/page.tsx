import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { team } from "@/data/team";
import { Target, Heart, Shield, Award } from "lucide-react";

export const metadata = {
  title: "About Us | ARKA ABROAD",
  description: "Helping students turn global ambitions into real opportunities.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary)] mb-6">
              Helping students turn global ambitions into real opportunities.
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
              We are a team of passionate educators and international education experts dedicated to guiding students toward their academic and professional dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gray-200">
              {/* Note: Update to use Next Image later */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Image src="/images/about.png" alt="Counsellor helping a student" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)]">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At {siteConfig.name}, our mission is to demystify the complex world of international education. We believe that every student with the drive to succeed globally should have access to clear, honest, and expert guidance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We do not just send students abroad; we carefully map their academic background and career goals to the right universities and programs, ensuring they are positioned for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Why Students Choose Us</h2>
            <p className="text-lg text-[var(--muted)]">Our core values dictate every piece of advice we give.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-8 h-8"/>, title: "Student-First", desc: "Your goals come first. We don't push universities just because we represent them." },
              { icon: <Shield className="w-8 h-8"/>, title: "Transparent", desc: "No hidden fees, no false promises. Just honest guidance and clear communication." },
              { icon: <Award className="w-8 h-8"/>, title: "Expertise", desc: "Our team consists of industry veterans who know the ins and outs of global admissions." },
              { icon: <Heart className="w-8 h-8"/>, title: "End-to-End Care", desc: "From the first hello to your first day on campus, we are with you." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-50 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">Meet the Experts</h2>
            <p className="text-lg text-[var(--muted)]">The people behind your success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 border-4 border-[var(--background)] group-hover:border-[var(--accent)] transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Profile</div>
                </div>
                <h3 className="text-xl font-bold text-[var(--primary)] mb-1">{member.name}</h3>
                <p className="text-[var(--accent)] font-semibold text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start your journey with us</h2>
          <Link href="/book-consultation" className="inline-block bg-[var(--accent)] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-600 transition-colors shadow-lg">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
