"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Countries", href: "/countries" },
    { name: "Courses", href: "/courses" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  const moreLinks = [
    // { name: "Success Stories", href: "/success-stories" }, // Hidden for now
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50" onClick={closeMenu}>
          <img src="/logo-transparent.png" alt="ARKA ABROAD Logo" className="w-auto h-10 md:h-12 object-contain drop-shadow-sm" />
          <span className="text-2xl font-bold tracking-tight text-[var(--primary)]">
            ARKA <span className="text-[var(--accent)]">ABROAD</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[var(--accent)]",
                pathname === link.href ? "text-[var(--accent)]" : "text-[var(--text)]"
              )}
            >
              {link.name}
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors py-2">
              More <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--primary)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/book-consultation"
            className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-md font-medium text-sm hover:bg-[var(--secondary)] transition-colors shadow-sm"
          >
            Book Free Counselling
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 text-[var(--primary)] p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-16 h-16" /> : <Menu className="w-16 h-16" />}
        </button>
      </div>
    </header>

    {/* Mobile Menu */}
    <div
      className={cn(
        "fixed inset-0 bg-white z-40 flex flex-col pt-28 px-6 lg:hidden transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col gap-6 overflow-y-auto pb-32">
        {mainLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl font-bold text-[var(--primary)] border-b border-gray-100 pb-4 block w-full"
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        ))}
        <div className="pt-4">
          <span className="text-base font-bold text-gray-400 uppercase tracking-wider mb-4 block">More Resources</span>
          <div className="flex flex-col gap-5">
            {moreLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-gray-600 block w-full"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <Link
          href="/book-consultation"
          className="flex justify-center bg-[var(--accent)] text-white px-5 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-colors shadow-md w-full text-center"
          onClick={closeMenu}
        >
          Book Free Counselling
        </Link>
      </div>
    </div>
    </>
  );
}
