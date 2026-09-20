"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import ServicesCatalog from "@/components/ServicesCatalog";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  HoverScale,
  InfiniteMarquee,
} from "@/components/Motion";
import {
  ArrowRightIcon,
  ChatIcon,
  GearIcon,
  LayersIcon,
  LinkIcon,
  ChartBarIcon,
  ShieldIcon,
  SearchIcon,
  LightbulbIcon,
  CodeIcon,
  RocketIcon,
  OpenAiLogo,
  AnthropicLogo,
  GoogleCloudLogo,
  AwsLogo,
  MicrosoftLogo,
  SlackLogo,
  NotionLogo,
  ZapierLogo,
  MakeLogo,
} from "@/components/Icons";

export default function ServicesPage() {
  const faqItems = [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We work with startups, growing SaaS businesses, and mid-market enterprises looking to automate manual workflows, scale operations, and integrate intelligent AI tools into daily workflows.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we provide post-launch monitoring, routine updates, model tuning, and continuous enhancements to guarantee maximum uptime and ROI.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Standard automation projects take between 2 to 4 weeks. Deep custom AI integrations or complex workflows typically take 4 to 8 weeks depending on scope.",
    },
    {
      question: "Can you work with our existing tools?",
      answer:
        "Absolutely. We seamlessly connect with your existing tech stack—Slack, HubSpot, Notion, Salesforce, Google Workspace, custom databases, and any REST API.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFD] text-[#0B0D17]">
      <Navbar />

      <main className="flex-grow">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden w-full bg-[#FAFAFD] lg:h-[calc(100vh-5.5rem)] lg:min-h-[640px] lg:max-h-[820px] flex flex-col justify-between pt-4 sm:pt-6 lg:pt-12 pb-3 sm:pb-8">
          {/* Background Graphic with smooth scale fade-in - Desktop only */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden anim-fade-scale hidden lg:block">
            <Image
              src="/assets/hero-services.png"
              alt="From Ideas to Intelligent Execution - Aegiss Automation Partner"
              fill
              priority
              sizes="(min-width: 1024px) 100vw, 1px"
              className="object-cover object-[82%_center] xl:object-right"
            />
          </div>
          {/* Subtle mobile backdrop gradient so text remains crisp and unobstructed */}
          <div className="absolute inset-0 pointer-events-none z-0 lg:hidden bg-gradient-to-b from-[#FAF8FE] via-[#F4F0FD]/30 to-[#FAFAFD]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between flex-grow">
            {/* Top / Middle Left Content Area */}
            <div className="max-w-xl lg:max-w-[580px] xl:max-w-[620px] pt-2 sm:pt-6 lg:pt-10 space-y-4 sm:space-y-6">
              {/* Badge */}
              <FadeIn direction="up" delay={0.05} distance={16}>
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#635BFF] shrink-0 animate-pulse" />
                  <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.18em] text-slate-600 uppercase">
                    OUR SERVICES
                  </span>
                </div>
              </FadeIn>

              {/* Heading */}
              <FadeIn direction="up" delay={0.12} distance={24}>
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black tracking-tight text-[#0B0D17] leading-[1.08]">
                  From Ideas to <br />
                  Intelligent{" "}
                  <span className="bg-gradient-to-r from-[#635BFF] via-[#7559FF] to-[#8A6FF8] bg-clip-text text-transparent">
                    Execution.
                  </span>
                </h1>
              </FadeIn>

              {/* Subheading */}
              <FadeIn direction="up" delay={0.18} distance={20}>
                <p className="text-slate-600 text-sm sm:text-base lg:text-[16.5px] max-w-lg leading-relaxed font-normal">
                  We design, build and deploy AI-powered solutions and automations
                  that help businesses save time, reduce costs and scale faster.
                </p>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn direction="up" delay={0.25} distance={20}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <HoverScale scale={1.04} tapScale={0.96}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-[14.5px] font-bold text-white bg-[#635BFF] hover:bg-[#5247E6] transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/25 group w-auto text-center"
                    >
                      <span>Book a Free Call</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1 text-base leading-none">&rarr;</span>
                    </Link>
                  </HoverScale>
                  <HoverScale scale={1.04} tapScale={0.96}>
                    <Link
                      href="#services-list"
                      className="inline-flex items-center justify-center gap-1.5 px-1 py-1.5 text-sm font-bold text-slate-900 border-b border-slate-900 sm:border-0 sm:px-7 sm:py-3.5 sm:rounded-full sm:bg-white/95 sm:backdrop-blur-xs sm:border sm:border-slate-900 hover:text-[#635BFF] sm:hover:bg-slate-900 sm:hover:text-white transition-all w-auto text-center"
                    >
                      <span>Explore Our Work</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1 text-base leading-none">&rarr;</span>
                    </Link>
                  </HoverScale>
                </div>
              </FadeIn>

              {/* Seamless 3D Visual on Mobile (Matches media_1789912195105.png) */}
              <div className="lg:hidden relative w-full flex justify-center pt-2 sm:pt-4">
                <div className="relative w-[280px] sm:w-[340px] aspect-[770/880]">
                  <Image
                    src="/assets/hero-services-mobile.png"
                    alt="Aegis Automation Services"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, 340px"
                    className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_16px_36px_rgba(99,91,255,0.18)]"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row: Stats on Left, Sub-text on Right */}
            <FadeIn direction="up" delay={0.32} distance={20} className="w-full relative z-10 mt-2 lg:mt-0">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                {/* Stats Row: 3-column pill card on mobile with dividers, seamless row on desktop */}
                <div className="grid grid-cols-3 divide-x divide-slate-200/80 bg-white/95 backdrop-blur-md border border-white/80 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-[0_12px_36px_-8px_rgba(99,91,255,0.08)] w-full lg:w-auto lg:bg-transparent lg:border-0 lg:p-0 lg:shadow-none lg:flex lg:items-center lg:gap-8">
                  <div className="text-center sm:text-left px-2 sm:px-4 lg:px-0">
                    <div className="text-xl sm:text-3xl lg:text-[34px] font-black text-slate-950 tracking-tight">50+</div>
                    <div className="text-[10px] sm:text-[13px] text-slate-500 font-medium mt-0.5 leading-tight">Projects Delivered</div>
                  </div>

                  <div className="text-center sm:text-left px-2 sm:px-4 lg:px-0">
                    <div className="text-xl sm:text-3xl lg:text-[34px] font-black text-slate-950 tracking-tight">30+</div>
                    <div className="text-[10px] sm:text-[13px] text-slate-500 font-medium mt-0.5 leading-tight">Happy Clients</div>
                  </div>

                  <div className="text-center sm:text-left px-2 sm:px-4 lg:px-0">
                    <div className="text-xl sm:text-3xl lg:text-[34px] font-black text-slate-950 tracking-tight">4.9/5</div>
                    <div className="text-[10px] sm:text-[13px] text-slate-500 font-medium mt-0.5 leading-tight">Satisfaction</div>
                  </div>
                </div>

                {/* Bottom-Right Sub-text */}
                <div className="hidden lg:block text-right pb-1">
                  <div className="text-[11px] font-extrabold tracking-[0.2em] text-slate-400 uppercase leading-relaxed">
                    LESS MANUAL WORK.
                  </div>
                  <div className="text-[11px] font-extrabold tracking-[0.2em] text-slate-400 uppercase leading-relaxed">
                    MORE IMPACT.
                  </div>
                </div>
              </div>

              {/* Mobile Scroll to Explore (Matches media_1789912195105.png) */}
              <div className="lg:hidden flex flex-col items-center justify-center pt-2.5 pb-1 text-slate-400">
                <div className="w-7 h-7 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-xs flex items-center justify-center shadow-2xs mb-0.5">
                  <svg className="w-3.5 h-3.5 text-slate-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <span className="text-[9px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                  Scroll to Explore
                </span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===================== SERVICES CATALOG (ALL 29 SERVICES) ===================== */}
        <ServicesCatalog />

        {/* ===================== TECH STACK & INTEGRATIONS MARQUEE ===================== */}
        <section className="py-10 bg-white/60 border-y border-slate-200/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
            <FadeIn direction="up" distance={12}>
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                INTEGRATING WITH YOUR ENTIRE TECH STACK
              </p>
            </FadeIn>
          </div>
          <InfiniteMarquee speed={32} className="py-2">
            <div className="flex items-center gap-12 sm:gap-16 opacity-75 hover:opacity-100 transition-opacity">
              <OpenAiLogo />
              <AnthropicLogo />
              <GoogleCloudLogo />
              <AwsLogo />
              <MicrosoftLogo />
              <SlackLogo />
              <NotionLogo />
              <ZapierLogo />
              <MakeLogo />
            </div>
          </InfiniteMarquee>
        </section>

        {/* ===================== SPLIT IMPACT & CTA SECTION (EXACT MATCH TO media_1789896649090.png) ===================== */}
        <section className="py-12 sm:py-16" id="impact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.58fr_1fr] gap-4 sm:gap-5 items-stretch">
              
              {/* Left Card: See What's Possible (61% width, panoramic aspect ratio, zero tablet cropping) */}
              <FadeIn direction="right" duration={0.75} distance={24} className="h-full">
                <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[250px] sm:min-h-[265px] lg:min-h-[275px] h-full p-6 sm:p-7 lg:p-8 flex flex-col justify-between border border-white/10 bg-[#070311] shadow-[0_12px_36px_rgba(0,0,0,0.35)]">
                  <Image
                    src="/assets/services-case-study.png"
                    alt="See What's Possible - Aegis Dashboard & Real Business Impact"
                    fill
                    sizes="(max-width: 1024px) 100vw, 62vw"
                    priority
                    className="object-cover object-[center_right] lg:object-right"
                  />
                  
                  {/* Top Badge: Purple Dot + REAL BUSINESS IMPACT */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-300 uppercase">
                      <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                      <span>REAL BUSINESS IMPACT</span>
                    </div>
                  </div>

                  {/* Middle Content: 2-line Heading + Short Description */}
                  <div className="relative z-10 space-y-2 py-2">
                    <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-extrabold text-white tracking-tight leading-tight">
                      See What&apos;s<br />Possible.
                    </h3>
                    <p className="text-slate-300/90 text-xs sm:text-[13px] leading-relaxed max-w-[240px] sm:max-w-[260px]">
                      Explore under-projects, real results, and real growth.
                    </p>
                  </div>

                  {/* Bottom CTA Button */}
                  <div className="relative z-10 pt-1">
                    <HoverScale scale={1.04} tapScale={0.96} className="inline-block">
                      <Link
                        href="/#case-studies"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold text-white bg-white/5 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all shadow-2xs"
                      >
                        <span>View Case Studies</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </HoverScale>
                  </div>
                </div>
              </FadeIn>

              {/* Right Card: Let's Build Something Meaningful (39% width, handwriting on right) */}
              <FadeIn direction="left" duration={0.75} distance={24} className="h-full">
                <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[250px] sm:min-h-[265px] lg:min-h-[275px] h-full p-6 sm:p-7 lg:p-8 flex flex-col justify-between border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(99,91,255,0.06),0_2px_6px_rgba(0,0,0,0.02)]">
                  <Image
                    src="/assets/services-cta-pattern.png"
                    alt="Ideas Automate Scale"
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover object-right pointer-events-none opacity-90"
                  />

                  {/* Top Badge: Purple Dot + READY TO AUTOMATE? */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#635BFF] uppercase">
                      <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
                      <span>READY TO AUTOMATE?</span>
                    </div>
                  </div>

                  {/* Middle Content: 2-line Heading + Description */}
                  <div className="relative z-10 space-y-2 py-2">
                    <h3 className="text-xl sm:text-[24px] lg:text-[26px] font-extrabold text-slate-950 tracking-tight leading-tight max-w-[270px]">
                      Let&apos;s Build Something<br />Meaningful Together.
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[12.5px] leading-relaxed max-w-[240px] sm:max-w-[260px]">
                      Book a free consultation and let&apos;s explore how Aegiss can help you save time, reduce costs and scale with AI.
                    </p>
                  </div>

                  {/* Bottom CTA Button */}
                  <div className="relative z-10 pt-1">
                    <HoverScale scale={1.04} tapScale={0.96} className="inline-block">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-[13px] font-bold text-white bg-[#635BFF] hover:bg-[#5247E6] shadow-[0_6px_20px_rgba(99,91,255,0.35)] transition-all"
                      >
                        <span>Book a Free Call</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </HoverScale>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* ===================== FAQ SECTION ===================== */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <FadeIn direction="up">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-indigo-100 text-[#635BFF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
                    <span>FAQ</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                    Common <span className="text-[#635BFF]">Questions.</span>
                  </h2>
                </div>
                <Link
                  href="/contact#faq"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#635BFF] hover:underline"
                >
                  <span>View All</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <FaqAccordion items={faqItems} />
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

