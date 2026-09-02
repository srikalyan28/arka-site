import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Intro */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight text-white">
                ARKA <span className="text-[var(--accent)]">ABROAD</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              {/* Simple Social Icons (Placeholders) */}
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--accent)] transition-colors">
                IG
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--accent)] transition-colors">
                FB
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--accent)] transition-colors">
                IN
              </a>
            </div>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Study Countries</h4>
            <ul className="flex flex-col gap-2">
              {["UK", "Canada", "Australia", "USA", "Germany", "Ireland", "New Zealand", "UAE"].map((country) => (
                <li key={country}>
                  <Link href={`/countries/${country.toLowerCase().replace(" ", "-")}`} className="text-gray-300 hover:text-[var(--accent)] text-sm transition-colors">
                    Study in {country}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Courses", href: "/courses" },
                // { name: "Success Stories", href: "/success-stories" }, // Hidden for now
                { name: "Blog", href: "/blog" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[var(--accent)] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contact Us</h4>
            <address className="not-italic text-sm text-gray-300 flex flex-col gap-2">
              <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--accent)]">{siteConfig.contact.email}</a></p>
              <p>Phone: <a href={`tel:${siteConfig.contact.phones[0].replace(/[^0-9+]/g, '')}`} className="hover:text-[var(--accent)]">{siteConfig.contact.phones[0]}</a></p>
            </address>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Legal</h4>
            <ul className="flex flex-col gap-2">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[var(--accent)] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col justify-center items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
