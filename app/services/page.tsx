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
        <section className="relative overflow-hidden w-full bg-[#FAFAFD] min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5.5rem)] lg:min-h-[640px] lg:max-h-[820px] flex flex-col justify-between pt-6 sm:pt-10 lg:pt-12 pb-8 sm:pb-10">
          {/* Background Graphic with smooth scale fade-in */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden anim-fade-scale">
            <Image
              src="/assets/hero-services.png"
              alt="From Ideas to Intelligent Execution - Aegiss Automation Partner"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[82%_center] xl:object-right"
            />
            {/* Soft gradient on mobile/tablet so text remains crystal clear */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0FC]/95 via-[#F4F0FC]/80 to-transparent lg:hidden" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between flex-grow">
            {/* Top / Middle Left Content Area */}
            <div className="max-w-xl lg:max-w-[580px] xl:max-w-[620px] pt-4 sm:pt-8 lg:pt-10 space-y-5 sm:space-y-6">
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
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black tracking-tight text-[#0B0D17] leading-[1.08]">
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
                <div className="flex flex-wrap items-center gap-4 pt-1 sm:pt-2">
                  <HoverScale scale={1.04} tapScale={0.96}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-[14.5px] font-bold text-white bg-[#635BFF] hover:bg-[#5247E6] transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/25 group"
                    >
                      <span>Book a Free Call</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1 text-base leading-none">&rarr;</span>
                    </Link>
                  </HoverScale>
                  <HoverScale scale={1.04} tapScale={0.96}>
                    <Link
                      href="#services-list"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-[14.5px] font-bold text-slate-900 bg-white/95 backdrop-blur-xs border border-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-xs group"
                    >
                      <span>Explore Our Work</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1 text-base leading-none">&rarr;</span>
                    </Link>
                  </HoverScale>
                </div>
              </FadeIn>
            </div>

            {/* Bottom Row: Stats on Left, Sub-text on Right */}
            <FadeIn direction="up" delay={0.32} distance={20}>
              <div className="pt-8 sm:pt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                {/* Stats Row with Hairline Dividers */}
                <div className="flex items-center gap-5 sm:gap-7 lg:gap-8">
                  <div className="w-px h-10 bg-slate-300/80 shrink-0" />

                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-950 tracking-tight">50+</div>
                    <div className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5 whitespace-nowrap">Projects Delivered</div>
                  </div>

                  <div className="w-px h-10 bg-slate-300/80 shrink-0" />

                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-950 tracking-tight">30+</div>
                    <div className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5 whitespace-nowrap">Happy Clients</div>
                  </div>

                  <div className="w-px h-10 bg-slate-300/80 shrink-0" />

                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-950 tracking-tight">4.9/5</div>
                    <div className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5 whitespace-nowrap">Client Satisfaction</div>
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

