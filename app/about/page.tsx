"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  HoverScale,
  Float,
} from "@/components/Motion";
import {
  ArrowRightIcon,
  CheckIcon,
  TargetIcon,
  TargetBullseyeIcon,
  EyeIcon,
  DiamondIcon,
  BoltIcon,
  UsersIcon,
  ChartBarIcon,
  RocketIcon,
  SearchIcon,
  GearIcon,
} from "@/components/Icons";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFD] text-[#0B0D17]">
      <Navbar />

      <main className="flex-grow">
        {/* ===================== HERO SECTION (EXACT MATCH TO media_1789897446052.png) ===================== */}
        {/* ===================== HERO SECTION (EXACT MATCH TO media_1789897446052.png) ===================== */}
        <section className="relative overflow-hidden w-full bg-[#FAFAFD] lg:h-[calc(100vh-5.5rem)] lg:min-h-[620px] lg:max-h-[780px] flex flex-col justify-between pt-4 sm:pt-6 lg:pt-12 pb-3 sm:pb-8">
          {/* Background Graphic with smooth scale fade-in - Desktop only */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden anim-fade-scale hidden lg:block">
            <Image
              src="/assets/hero-about.png"
              alt="Ideas Today. A Smarter Tomorrow. - Aegiss"
              fill
              priority
              sizes="(min-width: 1024px) 100vw, 1px"
              className="object-cover object-[78%_center] xl:object-right"
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
                    ABOUT AEGISS
                  </span>
                </div>
              </FadeIn>

              {/* Heading: Exactly 2 lines matching reference */}
              <FadeIn direction="up" delay={0.12} distance={24}>
                <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black tracking-tight text-[#0B0D17] leading-[1.08]">
                  Ideas Today. <br />
                  A Smarter{" "}
                  <span className="text-[#635BFF]">
                    Tomorrow.
                  </span>
                </h1>
              </FadeIn>

              {/* Subheading */}
              <FadeIn direction="up" delay={0.18} distance={20}>
                <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] max-w-lg leading-relaxed font-normal">
                  We are an AI &amp; automation agency helping businesses eliminate manual
                  work, integrate intelligent systems, and scale with technology that actually
                  delivers results.
                </p>
              </FadeIn>

              {/* Action Buttons */}
              <FadeIn direction="up" delay={0.25} distance={20}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <HoverScale scale={1.04} tapScale={0.96}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 sm:py-3.5 rounded-full text-sm font-bold text-white bg-[#635BFF] hover:bg-[#5247E6] shadow-[0_6px_20px_rgba(99,91,255,0.35)] transition-all w-auto text-center"
                    >
                      <span>Book a Free Call</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </HoverScale>
                  <HoverScale scale={1.04} tapScale={0.96}>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-1.5 px-1 py-1.5 text-sm font-bold text-slate-900 border-b border-slate-900 sm:border-0 sm:px-7 sm:py-3.5 sm:rounded-full sm:bg-white sm:border sm:border-slate-300 hover:text-[#635BFF] sm:hover:bg-slate-50 transition-all w-auto text-center"
                    >
                      <span>Our Services</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </HoverScale>
                </div>
              </FadeIn>

              {/* Seamless 3D Visual on Mobile (Matches media_1789912195105.png) */}
              <div className="lg:hidden relative w-full flex justify-center pt-2 sm:pt-4">
                <div className="relative w-[280px] sm:w-[340px] aspect-[1019/818]">
                  <Image
                    src="/assets/hero-about-mobile.png"
                    alt="Aegis Architecture"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, 340px"
                    className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_16px_36px_rgba(99,91,255,0.18)]"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Stats Row: 3-column pill card on mobile with dividers, seamless row on desktop */}
            <FadeIn direction="up" delay={0.32} distance={20} className="w-full relative z-10 mt-2 lg:mt-0">
              <div className="pt-2 sm:pt-10">
                <div className="grid grid-cols-3 divide-x divide-slate-200/80 bg-white/95 backdrop-blur-md border border-white/80 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-[0_12px_36px_-8px_rgba(99,91,255,0.08)] w-full lg:w-auto lg:bg-transparent lg:border-0 lg:p-0 lg:shadow-none lg:flex lg:items-center lg:gap-8">
                  {/* Metric 1 */}
                  <div className="text-center sm:text-left px-2 sm:px-4 lg:px-0">
                    <div className="text-xl sm:text-3xl lg:text-[32px] font-black text-slate-950 tracking-tight leading-none">
                      50+
                    </div>
                    <div className="text-[10px] sm:text-[13px] text-slate-500 font-medium mt-1 leading-tight">
                      Projects Delivered
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="text-center sm:text-left px-2 sm:px-4 lg:px-0">
                    <div className="text-xl sm:text-3xl lg:text-[32px] font-black text-slate-950 tracking-tight leading-none">
                      30+
                    </div>
                    <div className="text-[10px] sm:text-[13px] text-slate-500 font-medium mt-1 leading-tight">
                      Happy Clients
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="text-center sm:text-left px-2 sm:px-4 lg:px-0">
                    <div className="text-xl sm:text-3xl lg:text-[32px] font-black text-slate-950 tracking-tight leading-none">
                      4.9/5
                    </div>
                    <div className="text-[10px] sm:text-[13px] text-slate-500 font-medium mt-1 leading-tight">
                      Satisfaction
                    </div>
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

        {/* ===================== MISSION, VISION, VALUES (EXACT MATCH TO media_1789898198987.png) ===================== */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-100/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header with Left Branding & Right Aegis Quote */}
            <div className="relative mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              {/* Decorative Aegis Brand Mark in background on right (matches reference) */}
              <div className="absolute right-0 -top-8 pointer-events-none opacity-[0.045] select-none text-[#635BFF] hidden md:block">
                <svg className="w-56 h-56 lg:w-64 lg:h-64" viewBox="0 0 200 200" fill="currentColor">
                  <path d="M100 20 L180 180 L140 180 L100 95 L60 180 L20 180 Z" />
                </svg>
              </div>

              {/* Left: Tag + Title + Subtitle */}
              <FadeIn direction="right" delay={0.05} distance={20} className="max-w-xl">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
                  <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#7C8BA1] uppercase">
                    OUR FOUNDATION
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0D1527] tracking-tight leading-[1.12]">
                  Mission. Vision. <span className="text-[#635BFF]">Values.</span>
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                  The principles that drive everything we build at Aegis.
                </p>
              </FadeIn>

              {/* Right: Quote & Author Attribution */}
              <FadeIn direction="left" delay={0.15} distance={20} className="relative z-10 text-left md:text-right">
                <p className="text-sm sm:text-base lg:text-[17px] italic font-medium text-slate-500/95 leading-snug tracking-tight">
                  &ldquo;Automation for today.<br />
                  Opportunities for tomorrow.&rdquo;
                </p>
                <div className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-slate-400 tracking-widest uppercase">
                  <span className="w-4 h-px bg-slate-300 hidden md:inline-block" />
                  <span>AEGIS</span>
                </div>
              </FadeIn>
            </div>

            {/* 3-Column Feature Cards */}
            <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {/* Card 1: Our Mission */}
              <StaggerItem>
                <HoverCard hoverY={-8} className="h-full">
                  <div className="relative rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 bg-gradient-to-b from-[#FFFFFF] via-[#FCFCFE] to-[#F8F9FE] border border-slate-200/80 shadow-[0_12px_36px_-6px_rgba(99,91,255,0.06),0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col justify-between group hover:border-[#635BFF]/35 hover:shadow-[0_18px_44px_-6px_rgba(99,91,255,0.12)] transition-all duration-300 min-h-[350px] sm:min-h-[380px] h-full">
                    {/* Background Peak Graphic with gentle float */}
                    <div className="absolute right-0 bottom-0 w-44 h-44 sm:w-52 sm:h-52 pointer-events-none select-none z-0">
                      <Float duration={5.5} distance={6} className="w-full h-full relative">
                        <Image
                          src="/assets/mission-mountain.png"
                          alt="Our Mission Peak"
                          fill
                          sizes="208px"
                          className="object-contain object-bottom-right"
                        />
                      </Float>
                    </div>

                    <div className="relative z-10">
                      {/* 3D Cushion Squircle */}
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ECE7FE] via-[#F4F1FF] to-[#EDE9FE] border border-[#DDD6FE]/70 shadow-[0_4px_14px_rgba(99,91,255,0.14),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#635BFF] transition-transform duration-300 group-hover:scale-105">
                        <TargetBullseyeIcon className="w-6 h-6 text-[#635BFF]" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] mt-6">
                        Our <span className="text-[#635BFF]">Mission</span>
                      </h3>

                      <p className="mt-2.5 text-sm sm:text-[14.5px] text-slate-500 leading-relaxed max-w-[270px]">
                        To empower businesses with intelligent automation and AI systems that save time, reduce costs, and create real impact.
                      </p>
                    </div>

                    {/* Bottom Action Pill */}
                    <div className="inline-flex items-center gap-2.5 mt-auto pt-8 relative z-10">
                      <div className="w-7 h-7 rounded-full bg-[#ECE7FE] text-[#635BFF] flex items-center justify-center shadow-xs shrink-0 group-hover:translate-x-1 transition-transform">
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-medium text-slate-600">
                        Build solutions that matter
                      </span>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>

              {/* Card 2: Our Vision */}
              <StaggerItem>
                <HoverCard hoverY={-8} className="h-full">
                  <div className="relative rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 bg-gradient-to-b from-[#FFFFFF] via-[#FCFCFE] to-[#F8F9FE] border border-slate-200/80 shadow-[0_12px_36px_-6px_rgba(99,91,255,0.06),0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col justify-between group hover:border-[#635BFF]/35 hover:shadow-[0_18px_44px_-6px_rgba(99,91,255,0.12)] transition-all duration-300 min-h-[350px] sm:min-h-[380px] h-full">
                    {/* Background Planet Graphic with gentle float */}
                    <div className="absolute -right-2 -bottom-2 w-48 h-48 sm:w-56 sm:h-56 pointer-events-none select-none z-0">
                      <Float duration={6} distance={7} className="w-full h-full relative">
                        <Image
                          src="/assets/vision-planet.png"
                          alt="Our Vision Planet"
                          fill
                          sizes="224px"
                          className="object-contain object-bottom-right"
                        />
                      </Float>
                    </div>

                    <div className="relative z-10">
                      {/* 3D Cushion Squircle */}
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ECE7FE] via-[#F4F1FF] to-[#EDE9FE] border border-[#DDD6FE]/70 shadow-[0_4px_14px_rgba(99,91,255,0.14),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#635BFF] transition-transform duration-300 group-hover:scale-105">
                        <EyeIcon className="w-5 h-5 text-[#635BFF]" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] mt-6">
                        Our <span className="text-[#635BFF]">Vision</span>
                      </h3>

                      <p className="mt-2.5 text-sm sm:text-[14.5px] text-slate-500 leading-relaxed max-w-[270px]">
                        A world where every business, big or small, can harness the power of AI to unlock greater possibilities.
                      </p>
                    </div>

                    {/* Bottom Action Pill */}
                    <div className="inline-flex items-center gap-2.5 mt-auto pt-8 relative z-10">
                      <div className="w-7 h-7 rounded-full bg-[#ECE7FE] text-[#635BFF] flex items-center justify-center shadow-xs shrink-0 group-hover:translate-x-1 transition-transform">
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-medium text-slate-600">
                        A more efficient, inclusive future
                      </span>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>

              {/* Card 3: Our Values */}
              <StaggerItem>
                <HoverCard hoverY={-8} className="h-full">
                  <div className="relative rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 bg-gradient-to-b from-[#FFFFFF] via-[#FCFCFE] to-[#F8F9FE] border border-slate-200/80 shadow-[0_12px_36px_-6px_rgba(99,91,255,0.06),0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col justify-between group hover:border-[#635BFF]/35 hover:shadow-[0_18px_44px_-6px_rgba(99,91,255,0.12)] transition-all duration-300 min-h-[350px] sm:min-h-[380px] h-full">
                    {/* Background Handwriting Graphic */}
                    <div className="absolute right-3 sm:right-5 top-12 sm:top-14 w-32 h-32 sm:w-36 sm:h-36 pointer-events-none select-none z-0 opacity-75">
                      <Float duration={4.8} distance={5} className="w-full h-full relative">
                        <Image
                          src="/assets/values-script.png"
                          alt="People Process Progress"
                          fill
                          sizes="144px"
                          className="object-contain object-center"
                        />
                      </Float>
                    </div>

                    <div className="relative z-10">
                      {/* 3D Cushion Squircle */}
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ECE7FE] via-[#F4F1FF] to-[#EDE9FE] border border-[#DDD6FE]/70 shadow-[0_4px_14px_rgba(99,91,255,0.14),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#635BFF] transition-transform duration-300 group-hover:scale-105">
                        <DiamondIcon className="w-5 h-5 text-[#635BFF]" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F172A] mt-6">
                        Our <span className="text-[#635BFF]">Values</span>
                      </h3>

                      <ul className="mt-3.5 space-y-2.5 text-sm sm:text-[14px] font-medium text-slate-700">
                        <li className="flex items-center gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-[#635BFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                            <CheckIcon className="w-2.5 h-2.5 text-white stroke-[3]" />
                          </span>
                          <span>Impact over Hype</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-[#635BFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                            <CheckIcon className="w-2.5 h-2.5 text-white stroke-[3]" />
                          </span>
                          <span>Client Success First</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-[#635BFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                            <CheckIcon className="w-2.5 h-2.5 text-white stroke-[3]" />
                          </span>
                          <span>Continuous Learning</span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-[#635BFF] text-white flex items-center justify-center shrink-0 shadow-xs">
                            <CheckIcon className="w-2.5 h-2.5 text-white stroke-[3]" />
                          </span>
                          <span>Build with Integrity</span>
                        </li>
                      </ul>
                    </div>

                    {/* Bottom Action Pill */}
                    <div className="inline-flex items-center gap-2.5 mt-auto pt-8 relative z-10">
                      <div className="w-7 h-7 rounded-full bg-[#ECE7FE] text-[#635BFF] flex items-center justify-center shadow-xs shrink-0 group-hover:translate-x-1 transition-transform">
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-medium text-slate-600">
                        Guided by what&apos;s right
                      </span>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* ===================== BUILT FOR A MORE EFFICIENT WORLD (EXACT MATCH TO media_1789897806447.png) ===================== */}
        <section className="py-12 sm:py-16" id="why-aegis">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up" duration={0.8} distance={30}>
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden p-6 sm:p-8 lg:p-10 border border-white/10 bg-[#06040E] text-white shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
                {/* Background Network Graphic */}
                <Image
                  src="/assets/about-earth-network.png"
                  alt="Smarter Systems. Brighter Tomorrow. - Aegiss Network"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-right pointer-events-none"
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                  {/* Left Column: Heading, Badge, Subtitle & Button (5 cols) */}
                  <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-300 uppercase">
                      <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                      <span>WHY AEGISS</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold tracking-tight text-white leading-[1.12]">
                      Built for a More <br />
                      Efficient World.
                    </h2>

                    <p className="text-slate-300/90 text-xs sm:text-[13px] leading-relaxed max-w-[340px]">
                      We combine deep technical expertise with real business understanding to deliver solutions that create measurable impact — not just automation, but growth.
                    </p>

                    <div className="pt-1">
                      <HoverScale scale={1.04} tapScale={0.96} className="inline-block">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all shadow-xs"
                        >
                          <span>What Makes Us Different</span>
                          <ArrowRightIcon className="w-3.5 h-3.5" />
                        </Link>
                      </HoverScale>
                    </div>
                  </div>

                  {/* Middle Column: 4 Value Pillars with circular dark glass badges (4 cols) */}
                  <StaggerContainer staggerDelay={0.08} className="lg:col-span-4 space-y-3.5 sm:space-y-4">
                    {/* Pillar 1 */}
                    <StaggerItem direction="left">
                      <div className="flex items-center gap-3.5 group">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/20 transition-colors">
                          <RocketIcon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-xs sm:text-[13.5px] leading-snug">
                            Real Business Understanding
                          </h4>
                          <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5 leading-snug">
                            We focus on actual outcomes.
                          </p>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Pillar 2 */}
                    <StaggerItem direction="left">
                      <div className="flex items-center gap-3.5 group">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/20 transition-colors">
                          <SearchIcon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-xs sm:text-[13.5px] leading-snug">
                            End-to-End Support
                          </h4>
                          <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5 leading-snug">
                            From strategy to deployment.
                          </p>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Pillar 3 */}
                    <StaggerItem direction="left">
                      <div className="flex items-center gap-3.5 group">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/20 transition-colors">
                          <GearIcon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-xs sm:text-[13.5px] leading-snug">
                            Tailored Solutions
                          </h4>
                          <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5 leading-snug">
                            No copy-paste systems.
                          </p>
                        </div>
                      </div>
                    </StaggerItem>

                    {/* Pillar 4 */}
                    <StaggerItem direction="left">
                      <div className="flex items-center gap-3.5 group">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center shrink-0 shadow-inner group-hover:bg-white/20 transition-colors">
                          <UsersIcon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-xs sm:text-[13.5px] leading-snug">
                            Long-Term Partnership
                          </h4>
                          <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5 leading-snug">
                            We grow with you.
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>

                  {/* Right Column: Clear view for Earth graphic & handwriting (3 cols) */}
                  <div className="hidden lg:block lg:col-span-3 pointer-events-none" />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ===================== OUR TEAM (EXACT MATCH TO media_1789897833076.png) ===================== */}
        <section className="py-12 sm:py-16" id="team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-4.5 items-stretch">
              
              {/* Card 1: Left Info Block */}
              <StaggerItem className="h-full">
                <div className="relative rounded-[24px] sm:rounded-[28px] bg-[#FAF8FF] border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(99,91,255,0.04)] min-h-[260px] sm:min-h-[280px] h-full">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-500 uppercase">
                      <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
                      <span>OUR TEAM</span>
                    </div>

                    <h2 className="text-2xl sm:text-[25px] lg:text-[26px] xl:text-[28px] font-black tracking-tight text-slate-950 leading-[1.15] mt-3">
                      A Team That <br />
                      Builds What{" "}
                      <span className="text-[#635BFF]">
                        Matters.
                      </span>
                    </h2>

                    <p className="text-slate-500 text-xs sm:text-[12.5px] leading-relaxed mt-2.5">
                      We&apos;re a group of builders, thinkers and doers who are passionate about using technology to solve real problems.
                    </p>
                  </div>

                  <div className="pt-4">
                    <HoverScale scale={1.04} tapScale={0.96} className="inline-block">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-bold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs"
                      >
                        <span>Meet the Team</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </HoverScale>
                  </div>
                </div>
              </StaggerItem>

              {/* Card 2: Collaborate (Photo Card) */}
              <StaggerItem className="h-full">
                <HoverCard hoverY={-6} className="h-full">
                  <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[260px] sm:min-h-[280px] h-full p-4 flex flex-col justify-end shadow-md border border-slate-200/70 group">
                    <Image
                      src="/assets/team-collaborate.jpg"
                      alt="Team Collaborate - Aegiss"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/80 hover:bg-white/95 backdrop-blur-md text-slate-950 shadow-md border border-white/60 transition-all">
                        <span className="w-2.5 h-2.5 rounded-full border-2 border-[#635BFF] bg-transparent shrink-0" />
                        <span>Collaborate</span>
                      </span>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>

              {/* Card 3: Innovate (Glass Handwriting Photo Card) */}
              <StaggerItem className="h-full">
                <HoverCard hoverY={-6} className="h-full">
                  <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[260px] sm:min-h-[280px] h-full p-4 flex flex-col justify-end shadow-md border border-slate-200/70 group">
                    <Image
                      src="/assets/team-innovate.jpg"
                      alt="Ideas Automate Scale - Innovate"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/80 hover:bg-white/95 backdrop-blur-md text-slate-950 shadow-md border border-white/60 transition-all">
                        <span className="w-2.5 h-2.5 rounded-full border-2 border-[#635BFF] bg-transparent shrink-0" />
                        <span>Innovate</span>
                      </span>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>

              {/* Card 4: Execute (Team Photo Card) */}
              <StaggerItem className="h-full">
                <HoverCard hoverY={-6} className="h-full">
                  <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[260px] sm:min-h-[280px] h-full p-4 flex flex-col justify-end shadow-md border border-slate-200/70 group">
                    <Image
                      src="/assets/team-execute.jpg"
                      alt="Team Execute - Aegiss"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/80 hover:bg-white/95 backdrop-blur-md text-slate-950 shadow-md border border-white/60 transition-all">
                        <span className="w-2.5 h-2.5 rounded-full border-2 border-[#635BFF] bg-transparent shrink-0" />
                        <span>Execute</span>
                      </span>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>

              {/* Card 5: Quote Card */}
              <StaggerItem className="h-full">
                <HoverCard hoverY={-6} className="h-full">
                  <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden min-h-[260px] sm:min-h-[280px] h-full p-6 sm:p-7 flex flex-col justify-between bg-[#0B0C16] border border-white/10 shadow-md">
                    {/* Ambient glow in background */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#635BFF]/15 blur-2xl rounded-full pointer-events-none" />

                    {/* Quote text */}
                    <div className="relative z-10 pt-1">
                      <p className="text-white text-[15px] sm:text-[16px] lg:text-[17px] font-semibold leading-relaxed tracking-tight">
                        &ldquo;Great things happen when the right people build together.&rdquo;
                      </p>
                    </div>

                    {/* Author block with horizontal line */}
                    <div className="relative z-10 space-y-2 pt-4">
                      <div className="w-6 h-0.5 bg-[#635BFF] rounded-full" />
                      <div className="text-xs sm:text-[13px] font-bold text-slate-400">
                        Team Aegiss
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>

            </StaggerContainer>
          </div>
        </section>

        {/* ===================== CTA BANNER ===================== */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up" duration={0.8} distance={28}>
              <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 min-h-[260px] flex items-center">
                {/* Background Image */}
                <Image
                  src="/assets/cta-banner-bg.png"
                  alt="Ready to Build What's Next?"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-center"
                />

                {/* Banner Content */}
                <div className="relative z-10 max-w-2xl space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>LET&apos;S TALK</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Ready to Build What&apos;s Next?
                  </h2>

                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-lg">
                    Let&apos;s discuss how Aegiss can help you automate, scale and create real impact for your business.
                  </p>

                  <div className="pt-2">
                    <HoverScale scale={1.04} tapScale={0.96} className="inline-block">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-slate-950 bg-white hover:bg-slate-100 transition-all shadow-md"
                      >
                        <span>Book a Free Call</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </Link>
                    </HoverScale>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

