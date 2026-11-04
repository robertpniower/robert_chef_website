"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to scroll smoothly if already on homepage, or let Link navigate
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    // Check if currently on home page (e.g., "/", "/en", "/es", "/ca")
    const isHomePage = pathname === "/" || /^\/(en|es|ca)\/?$/.test(pathname);

    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Update URL hash without forcing page reload
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 h-25 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-36 h-14 overflow-hidden flex items-center justify-center">
            <Image
              src="/assets/img/Gemini_Generated_Image_bqry0mbqry0mbqry (1).jpeg"
              alt="Mar y Muntanya Logo"
              fill
              sizes="(max-width: 768px) 140px, 180px"
              className="object-contain object-left"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-stone-900 group-hover:text-stone-700 transition-colors">
              Mar y Muntanya Private Chef
            </span>
            <span className="text-[10px] tracking-widest text-stone-500 uppercase">
              Bespoke Culinary Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>

          <Link href="/experiences" className="hover:text-stone-900 transition-colors">
            Experiences
          </Link>
          <Link href="/how-it-works" className="hover:text-stone-900 transition-colors">
            How it works
          </Link>

          {/* Homepage Section Anchors with Smooth Scroll Handler */}
          <Link
            href="/#chef"
            onClick={(e) => handleAnchorClick(e, "chef")}
            className="hover:text-stone-900 transition-colors"
          >
            About Chef
          </Link>
          <Link href="/menu" className="hover:text-stone-900 transition-colors">
            Menu
          </Link>
          <Link
            href="/#gallery"
            onClick={(e) => handleAnchorClick(e, "gallery")}
            className="hover:text-stone-900 transition-colors"
          >
            Gallery
          </Link>
          <Link href="/reviews" className="hover:text-stone-900 transition-colors">
            Reviews
          </Link>
          <Link
            href="/#faq"
            onClick={(e) => handleAnchorClick(e, "faq")}
            className="hover:text-stone-900 transition-colors"
          >
            FAQ
          </Link>
        </div>

        {/* Action CTA & Language Switcher */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <LanguageSwitcher />
          <Link
            href="/booking"
            className="px-5 py-2.5 rounded-full bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-all shadow-sm hover:shadow"
          >
            Request availability
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-stone-700 hover:text-stone-900"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-b border-stone-200 px-6 py-6 space-y-4">
          <div className="flex flex-col gap-4 text-base font-medium text-stone-700">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/experiences" onClick={() => setIsMobileMenuOpen(false)}>
              Experiences
            </Link>
            <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)}>
              How it works
            </Link>
            <Link
              href="/#chef"
              onClick={(e) => handleAnchorClick(e, "chef")}
            >
              About Chef
            </Link>
            <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)}>
              Menu
            </Link>
            <Link
              href="/#gallery"
              onClick={(e) => handleAnchorClick(e, "gallery")}
            >
              Gallery
            </Link>
            <Link href="/reviews" onClick={() => setIsMobileMenuOpen(false)}>
              Reviews
            </Link>
            <Link
              href="/#faq"
              onClick={(e) => handleAnchorClick(e, "faq")}
            >
              FAQ
            </Link>
          </div>
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-4">
            <Link
              href="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center block px-5 py-3 rounded-full bg-stone-900 text-stone-50 text-sm font-medium"
            >
              Request availability
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
