import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon, TwitterXIcon, YoutubeIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#07080D] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-7 w-28 brightness-0 invert">
                <Image
                  src="/assets/logo-png.png"
                  alt="Aegiss Logo"
                  fill
                  sizes="140px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Ideas Today.
              <br />
              A Smarter Tomorrow.
            </p>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-sm font-semibold tracking-wide">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Col */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-white text-sm font-semibold tracking-wide">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#635BFF] hover:border-[#635BFF] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#635BFF] hover:border-[#635BFF] transition-all"
                  aria-label="X (Twitter)"
                >
                  <TwitterXIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#635BFF] hover:border-[#635BFF] transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#635BFF] hover:border-[#635BFF] transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-900 lg:border-none lg:pt-0">
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-snug">
                A Smarter
                <br />
                More Efficient
                <br />
                Tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Aegiss. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

