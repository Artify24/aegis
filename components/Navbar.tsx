"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SearchIcon, ArrowRightIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname === href) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFD]/95 backdrop-blur-md border-b border-slate-100/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 lg:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative h-8 sm:h-11 lg:h-14 w-28 sm:w-44 lg:w-56">
            <Image 
              src="/assets/logo-png.webp"
              alt="Aegis Logo"
              fill
              priority
              sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 240px"
              className="object-contain object-left scale-105 origin-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-10 text-[15px] sm:text-base font-medium text-slate-600">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2.5 transition-colors hover:text-slate-950 ${
                  active ? "text-slate-950 font-bold" : "text-slate-600"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#635BFF] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Search (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-5">
          <button
            type="button"
            aria-label="Search"
            className="text-slate-600 hover:text-slate-950 p-2.5 rounded-full hover:bg-slate-100 transition-colors"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-3 rounded-full text-xs sm:text-[15px] font-semibold text-white bg-[#635BFF] hover:bg-[#5247E6] transition-all shadow-sm hover:shadow-md hover:shadow-indigo-500/25 active:scale-98"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#635BFF] hover:bg-[#5247E6] shadow-2xs active:scale-95 transition-transform"
          >
            <span>Talk</span>
            <ArrowRightIcon className="w-3 h-3" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-800 hover:bg-slate-100/80 active:bg-slate-200/80 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M4 6.5h16M4 12h16M4 17.5h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200/90 bg-white/95 backdrop-blur-xl px-5 pt-3 pb-6 space-y-2 shadow-2xl anim-fade-in">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-colors ${
                  active
                    ? "bg-[#635BFF]/10 text-[#635BFF]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{link.name}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#0F172A] hover:bg-slate-900 shadow-md active:scale-98 transition-all"
            >
              <span>Book a Free Consultation</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

