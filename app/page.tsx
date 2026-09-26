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
  StarIcon,
  BoltIcon,
  LayersIcon,
  ScaleIcon,
  ShieldIcon,
  ChatIcon,
  GearIcon,
  LinkIcon,
  SolidChatIcon,
  SolidGearIcon,
  SolidLayersIcon,
  SolidLinkIcon,
  ChartBarIcon,
  TargetIcon,
  TargetBullseyeIcon,
  SolidUsersIcon,
  SolidBarChartIcon,
  UsersIcon,
  CodeIcon,
  LightbulbIcon,
  RocketIcon,
  SearchIcon,
  ProcessSearchIcon,
  ProcessBulbIcon,
  ProcessCodeIcon,
  ProcessRocketIcon,
  MicrosoftLogo,
  GoogleLogo,
  SlackLogo,
  NotionLogo,
  AwsLogo,
  ZapierLogo,
  OpenAiLogo,
} from "@/components/Icons";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFD] text-[#0B0D17]">
      <Navbar />

      <main className="flex-grow">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden w-full bg-[#FAFAFD] lg:h-[calc(100vh-5.5rem)] lg:min-h-[640px] lg:max-h-[820px] flex flex-col justify-between pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8">
          {/* Background Graphic with smooth scale fade-in - Desktop only */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden anim-fade-scale hidden lg:block">
            <Image
              src="/assets/hero-home.png"
              alt="Turn Your Business Into Possibility"
              fill
              priority
              sizes="(min-width: 1024px) 100vw, 1px"
              className="object-cover object-[82%_top] xl:object-right"
            />
          </div>
          {/* Subtle mobile backdrop gradient so text remains crisp and unobstructed */}
          <div className="absolute inset-0 pointer-events-none z-0 lg:hidden bg-gradient-to-b from-[#FAF8FE] via-[#F4F0FD]/30 to-[#FAFAFD]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between flex-grow">
            {/* Top Left Content Area */}
            <FadeIn direction="up" delay={0.08} className="max-w-xl lg:max-w-[560px] pt-2 sm:pt-4 space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-xs border border-indigo-100/80 shadow-2xs text-[#635BFF]">
                <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
                <span className="text-slate-800">AI Company</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold tracking-tight text-[#0B0D17] leading-[1.08]">
                Turn Your <br />
                Business Into <br />
                <span className="text-[#635BFF]">Possibility.</span>
              </h1>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base max-w-md sm:max-w-lg leading-relaxed font-normal">
                Custom AI solutions, automations and intelligent systems to
                help you save time, cut costs and scale faster.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-row items-center gap-2.5 sm:gap-4 pt-1">
                <HoverScale>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#635BFF] hover:bg-[#5247E6] transition-colors shadow-md hover:shadow-indigo-500/25 w-auto text-center"
                  >
                    <span>Book a Free Call</span>
                    <ArrowRightIcon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </Link>
                </HoverScale>
                <HoverScale>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-white/90 hover:bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs transition-all w-auto text-center"
                  >
                    <span>See Our Work</span>
                    <ArrowRightIcon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </Link>
                </HoverScale>
              </div>

              {/* Seamless 3D Mascot Character on Mobile (Matches media_1789912195105.png) */}
              <div className="lg:hidden relative w-full flex justify-center pt-2 sm:pt-4">
                <div className="relative w-[280px] sm:w-[340px] aspect-[740/880]">
                  <Image
                    src="/assets/hero-girl-mobile.png"
                    alt="Aegis AI Mascot"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, 340px"
                    className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_16px_36px_rgba(99,91,255,0.18)]"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Bottom Feature Bar: Glassmorphic transparent with blur bg */}
            <FadeIn direction="up" delay={0.25} className="w-full bg-white/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/75 rounded-[24px] sm:rounded-[28px] lg:rounded-full px-3 py-3 sm:px-6 sm:py-4 lg:px-10 lg:py-5 shadow-[0_16px_40px_-8px_rgba(99,91,255,0.12),inset_0_1.5px_2px_0_rgba(255,255,255,0.95)] mt-2 lg:mt-0 relative z-10">
              {/* Mobile 4-Column Compact Layout (Matches media_1789912195105.png) */}
              <div className="grid grid-cols-4 gap-1 sm:gap-2 items-center text-center lg:hidden">
                {/* 1. Save Hours */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-b from-white/90 via-[#F7F5FF]/75 to-[#E5DCFF]/60 border border-white/85 flex items-center justify-center shrink-0 shadow-2xs mb-1 backdrop-blur-xs">
                    <BoltIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#635BFF]" />
                  </div>
                  <span className="text-[10.5px] sm:text-xs font-bold text-[#0B0D17] leading-tight tracking-tight">Save Hours</span>
                </div>
                {/* 2. Reduce Costs */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-b from-white/90 via-[#F7F5FF]/75 to-[#E5DCFF]/60 border border-white/85 flex items-center justify-center shrink-0 shadow-2xs mb-1 backdrop-blur-xs">
                    <LayersIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#635BFF]" />
                  </div>
                  <span className="text-[10.5px] sm:text-xs font-bold text-[#0B0D17] leading-tight tracking-tight">Reduce Costs</span>
                </div>
                {/* 3. Scale Faster */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-b from-white/90 via-[#F7F5FF]/75 to-[#E5DCFF]/60 border border-white/85 flex items-center justify-center shrink-0 shadow-2xs mb-1 backdrop-blur-xs">
                    <ScaleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#635BFF]" />
                  </div>
                  <span className="text-[10.5px] sm:text-xs font-bold text-[#0B0D17] leading-tight tracking-tight">Scale Faster</span>
                </div>
                {/* 4. Stay Secure */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-b from-white/90 via-[#F7F5FF]/75 to-[#E5DCFF]/60 border border-white/85 flex items-center justify-center shrink-0 shadow-2xs mb-1 backdrop-blur-xs">
                    <ShieldIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#635BFF]" />
                  </div>
                  <span className="text-[10.5px] sm:text-xs font-bold text-[#0B0D17] leading-tight tracking-tight">Stay Secure</span>
                </div>
              </div>

              {/* Desktop 4-Column Detailed Layout */}
              <div className="hidden lg:grid lg:grid-cols-4 lg:gap-0">
                {/* 1. Save Hours */}
                <HoverCard hoverY={-3} className="flex items-center gap-4 lg:pr-6 cursor-default">
                  <div className="w-14 sm:w-15 sm:h-15 rounded-[22px] bg-gradient-to-b from-white/90 via-[#F7F5FF]/75 to-[#E5DCFF]/60 border border-white/85 flex items-center justify-center shrink-0 shadow-[0_10px_22px_-6px_rgba(99,91,255,0.22),inset_0_1.5px_2px_rgba(255,255,255,1)] backdrop-blur-xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#635BFF]" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3.5 13.5h7L8.5 22l12-12.5h-7.5L13 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] sm:text-base font-bold text-[#0B0D17] tracking-tight">Save Hours</h4>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5 tracking-tight">Automate repetitive work</p>
                  </div>
                </HoverCard>

                {/* 2. Reduce Costs */}
                <HoverCard hoverY={-3} className="flex items-center gap-4 lg:px-6 lg:border-l lg:border-white/70 cursor-default">
                  <div className="w-14 sm:w-15 sm:h-15 rounded-[22px] bg-gradient-to-b from-white/90 via-[#F7F5FF]/75 to-[#E5DCFF]/60 border border-white/85 flex items-center justify-center shrink-0 shadow-[0_10px_22px_-6px_rgba(99,91,255,0.22),inset_0_1.5px_2px_rgba(255,255,255,1)] backdrop-blur-xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3L3.5 7.2L12 11.4L20.5 7.2L12 3Z" fill="#635BFF" />
                      <path d="M3.5 11.2L12 15.4L20.5 11.2" stroke="#635BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3.5 15.2L12 19.4L20.5 15.2" stroke="#635BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] sm:text-base font-bold text-[#0B0D17] tracking-tight">Reduce Costs</h4>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5 tracking-tight">Do more with less</p>
                  </div>
                </HoverCard>

                {/* 3. Scale Faster */}
                <HoverCard hoverY={-3} className="flex items-center gap-4 lg:px-6 lg:border-l lg:border-white/70 cursor-default">
                  <div className="w-14 sm:w-15 sm:h-15 rounded-[22px] bg-gradient-to-b from-white/90 via-[#F7F5FF]/75 to-[#E5DCFF]/60 border border-white/85 flex items-center justify-center shrink-0 shadow-[0_10px_22px_-6px_rgba(99,91,255,0.22),inset_0_1.5px_2px_rgba(255,255,255,1)] backdrop-blur-xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3.5" y="4.5" width="17" height="15" rx="3.5" fill="#635BFF" />
                      <path d="M8.5 14L15.5 7M15.5 7H11M15.5 7V11.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] sm:text-base font-bold text-[#0B0D17] tracking-tight">Scale Faster</h4>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5 tracking-tight">Grow with you</p>
                  </div>
                </HoverCard>

                {/* 4. Stay Secure */}
                <HoverCard hoverY={-3} className="flex items-center gap-4 lg:pl-6 lg:border-l lg:border-white/70 cursor-default">
                  <div className="w-14 sm:w-15 sm:h-15 rounded-[22px] bg-gradient-to-b from-white/90 via-[#F7F5FF]/75 to-[#E5DCFF]/60 border border-white/85 flex items-center justify-center shrink-0 shadow-[0_10px_22px_-6px_rgba(99,91,255,0.22),inset_0_1.5px_2px_rgba(255,255,255,1)] backdrop-blur-xs">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.5L4.5 5.8v6.2c0 5.4 3.2 10.3 7.5 11.5 4.3-1.2 7.5-6.1 7.5-11.5V5.8L12 2.5z" fill="#635BFF" />
                      <path d="M12 7.8l.75 2.45 2.45.75-2.45.75L12 14.2l-.75-2.45-2.45-.75 2.45-.75L12 7.8z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[15px] sm:text-base font-bold text-[#0B0D17] tracking-tight">Stay Secure</h4>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5 tracking-tight">Enterprise security</p>
                  </div>
                </HoverCard>
              </div>
            </FadeIn>

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
          </div>
        </section>
      
    

        {/* ===================== WHAT WE DO ===================== */}
        <section className="relative pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 overflow-hidden bg-gradient-to-b from-[#FAFAFE] via-[#F8F8FD] to-[#FBFBFF]" id="services">
          {/* Subtle ambient lilac glow behind top left */}
          <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-[#635BFF]/[0.035] blur-3xl pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-7 xl:gap-10">
              {/* Left Column Header */}
              <FadeIn direction="right" className="w-full lg:w-[390px] xl:w-[430px] shrink-0 space-y-4 sm:space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#635BFF] shrink-0" />
                  <span className="text-xs sm:text-[13.5px] font-extrabold tracking-[0.16em] text-slate-600 uppercase">
                    WHAT WE DO
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-black tracking-tight text-[#0B0D17] leading-[1.12]">
                  AI Solutions <br />
                  That Fit{" "}
                  <span className="whitespace-nowrap bg-gradient-to-r from-[#635BFF] via-[#7052FF] to-[#806BF8] bg-clip-text text-transparent">
                    Your Business.
                  </span>
                </h2>

                <p className="text-slate-500 text-sm sm:text-[15px] xl:text-base leading-relaxed max-w-[360px] sm:max-w-[400px]">
                  From AI chatbots to full workflow automation, we design and build custom solutions that actually solve real problems.
                </p>

                <div className="pt-2">
                  <HoverScale>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-3 px-7 py-3 rounded-full text-sm sm:text-[14.5px] font-bold text-[#0B0D17] bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all group"
                    >
                      <span>Explore Services</span>
                      <span className="text-[#0B0D17] transition-transform duration-200 group-hover:translate-x-1 text-base leading-none">&rarr;</span>
                    </Link>
                  </HoverScale>
                </div>
              </FadeIn>

              {/* Right Column 4 Cards Side-by-Side */}
              <StaggerContainer className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 xl:gap-4.5">
                {/* Card 1: AI Chatbots */}
                <StaggerItem direction="up">
                  <HoverCard hoverY={-8} className="group rounded-[24px] sm:rounded-[32px] bg-white border border-slate-100/90 p-4 sm:p-6 xl:p-6.5 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 shadow-[0_4px_24px_rgba(99,91,255,0.04),0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_14px_36px_rgba(99,91,255,0.1)] transition-all duration-300 min-h-0 sm:min-h-[270px]">
                    <div className="relative w-13 h-13 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0 mb-0 sm:mb-6 xl:mb-7">
                      <div className="absolute -inset-1 rounded-[20px] sm:rounded-[26px] bg-[#635BFF]/18 blur-[8px] pointer-events-none" />
                      <div className="relative w-full h-full rounded-[18px] sm:rounded-[24px] bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(109,40,217,0.12),0_6px_16px_rgba(99,91,255,0.14)] flex items-center justify-center">
                        <SolidChatIcon className="w-6 h-6 sm:w-[34px] sm:h-[34px] text-[#635BFF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-950 text-[15px] sm:text-[17px] xl:text-[18.5px] tracking-tight group-hover:text-[#635BFF] transition-colors">
                        AI Chatbots
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-1 sm:mt-2 font-normal">
                        Customer support, sales and internal assistants.
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>

                {/* Card 2: Process Automation */}
                <StaggerItem direction="up">
                  <HoverCard hoverY={-8} className="group rounded-[24px] sm:rounded-[32px] bg-white border border-slate-100/90 p-4 sm:p-6 xl:p-6.5 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 shadow-[0_4px_24px_rgba(99,91,255,0.04),0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_14px_36px_rgba(99,91,255,0.1)] transition-all duration-300 min-h-0 sm:min-h-[270px]">
                    <div className="relative w-13 h-13 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0 mb-0 sm:mb-6 xl:mb-7">
                      <div className="absolute -inset-1 rounded-[20px] sm:rounded-[26px] bg-[#635BFF]/18 blur-[8px] pointer-events-none" />
                      <div className="relative w-full h-full rounded-[18px] sm:rounded-[24px] bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(109,40,217,0.12),0_6px_16px_rgba(99,91,255,0.14)] flex items-center justify-center">
                        <SolidGearIcon className="w-6 h-6 sm:w-[34px] sm:h-[34px] text-[#635BFF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-950 text-[15px] sm:text-[17px] xl:text-[18.5px] tracking-tight group-hover:text-[#635BFF] transition-colors">
                        Process Automation
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-1 sm:mt-2 font-normal">
                        Automate repetitive tasks and workflows.
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>

                {/* Card 3: Custom AI Solutions */}
                <StaggerItem direction="up">
                  <HoverCard hoverY={-8} className="group rounded-[24px] sm:rounded-[32px] bg-white border border-slate-100/90 p-4 sm:p-6 xl:p-6.5 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 shadow-[0_4px_24px_rgba(99,91,255,0.04),0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_14px_36px_rgba(99,91,255,0.1)] transition-all duration-300 min-h-0 sm:min-h-[270px]">
                    <div className="relative w-13 h-13 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0 mb-0 sm:mb-6 xl:mb-7">
                      <div className="absolute -inset-1 rounded-[20px] sm:rounded-[26px] bg-[#635BFF]/18 blur-[8px] pointer-events-none" />
                      <div className="relative w-full h-full rounded-[18px] sm:rounded-[24px] bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(109,40,217,0.12),0_6px_16px_rgba(99,91,255,0.14)] flex items-center justify-center">
                        <SolidLayersIcon className="w-6 h-6 sm:w-[34px] sm:h-[34px] text-[#635BFF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-950 text-[15px] sm:text-[17px] xl:text-[18.5px] tracking-tight group-hover:text-[#635BFF] transition-colors">
                        Custom AI Solutions
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-1 sm:mt-2 font-normal">
                        Tailored systems for your business needs.
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>

                {/* Card 4: AI Integration */}
                <StaggerItem direction="up">
                  <HoverCard hoverY={-8} className="group rounded-[24px] sm:rounded-[32px] bg-white border border-slate-100/90 p-4 sm:p-6 xl:p-6.5 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 shadow-[0_4px_24px_rgba(99,91,255,0.04),0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_14px_36px_rgba(99,91,255,0.1)] transition-all duration-300 min-h-0 sm:min-h-[270px]">
                    <div className="relative w-13 h-13 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0 mb-0 sm:mb-6 xl:mb-7">
                      <div className="absolute -inset-1 rounded-[20px] sm:rounded-[26px] bg-[#635BFF]/18 blur-[8px] pointer-events-none" />
                      <div className="relative w-full h-full rounded-[18px] sm:rounded-[24px] bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(109,40,217,0.12),0_6px_16px_rgba(99,91,255,0.14)] flex items-center justify-center">
                        <SolidLinkIcon className="w-6 h-6 sm:w-[34px] sm:h-[34px] text-[#635BFF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-950 text-[15px] sm:text-[17px] xl:text-[18.5px] tracking-tight group-hover:text-[#635BFF] transition-colors">
                        AI Integration
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-1 sm:mt-2 font-normal">
                        Connect your tools and data seamlessly.
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ===================== OUR PROCESS ===================== */}
        <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-22 bg-white border-y border-slate-100/90 overflow-hidden" id="process">
          {/* Subtle ambient glow in top left */}
          <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-[#635BFF]/[0.025] blur-3xl pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-7 xl:gap-10">
              {/* Left Column Header */}
              <FadeIn direction="right" className="w-full lg:w-[360px] xl:w-[400px] shrink-0 space-y-4 sm:space-y-5">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#635BFF] shrink-0" />
                  <span className="text-xs sm:text-[13.5px] font-extrabold tracking-[0.16em] text-slate-600 uppercase">
                    OUR PROCESS
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-black tracking-tight text-[#0B0D17] leading-[1.12]">
                  From Idea <br />
                  to{" "}
                  <span className="bg-gradient-to-r from-[#635BFF] via-[#7052FF] to-[#806BF8] bg-clip-text text-transparent whitespace-nowrap">
                    Impact.
                  </span>
                </h2>

                <p className="text-slate-500 text-sm sm:text-[15px] xl:text-base leading-relaxed max-w-[360px]">
                  A simple and collaborative process to bring your vision to life.
                </p>

                <div className="pt-2">
                  <HoverScale>
                    <Link
                      href="/services#process"
                      className="inline-flex items-center gap-3 px-7 py-3 rounded-full text-sm sm:text-[14.5px] font-bold text-[#0B0D17] bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all group"
                    >
                      <span>See Our Process</span>
                      <span className="text-[#0B0D17] transition-transform duration-200 group-hover:translate-x-1 text-base leading-none">&rarr;</span>
                    </Link>
                  </HoverScale>
                </div>
              </FadeIn>

              {/* Right Column 4 Steps */}
              <StaggerContainer staggerDelay={0.14} className="w-full flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-0">
                {/* Step 01 */}
                <StaggerItem direction="up" className="flex flex-col pr-0 lg:pr-3">
                  <div className="flex items-start gap-4 lg:flex-col lg:gap-0">
                    <div className="flex flex-col items-center shrink-0">
                      {/* 3D Pillowy Cushion Circular Badge with Gentle Float */}
                      <Float duration={4.5} distance={6}>
                        <div className="relative w-13 h-13 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0">
                          <div className="absolute inset-0 rounded-full bg-[#635BFF]/18 blur-[9px] pointer-events-none scale-110" />
                          <div className="relative w-full h-full rounded-full bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(109,40,217,0.12),0_6px_18px_rgba(99,91,255,0.16)] flex items-center justify-center">
                            <ProcessSearchIcon className="w-6 h-6 sm:w-[34px] sm:h-[34px] text-[#635BFF]" />
                          </div>
                        </div>
                      </Float>
                      {/* Mobile Vertical Connector Line */}
                      <div className="w-0.5 h-10 bg-indigo-100 mt-2 rounded-full lg:hidden" />
                    </div>

                    {/* Desktop Dotted Arrow to Step 2 */}
                    <div className="hidden lg:flex flex-1 items-center px-2 sm:px-3">
                      <svg className="w-full h-3.5" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                        <line x1="0" y1="6" x2="86" y2="6" stroke="#94A3B8" strokeWidth="1.6" strokeDasharray="4 4" />
                        <path d="M82 2L88 6L82 10" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Step Text */}
                    <div className="pt-0.5 lg:pt-0 lg:mt-6 sm:lg:mt-7">
                      <span className="text-xs sm:text-base font-black text-[#635BFF] lg:text-slate-900 block tracking-tight">01</span>
                      <h3 className="font-extrabold text-slate-950 text-base sm:text-[18px] xl:text-[19px] tracking-tight mt-0.5 sm:mt-1.5">Discover</h3>
                      <p className="text-slate-500 text-xs sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-1 sm:mt-2 font-normal max-w-[240px]">
                        Understand your goals and challenges.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                {/* Step 02 */}
                <StaggerItem direction="up" className="flex flex-col lg:pl-5 xl:pl-6 pr-0 lg:pr-3 relative">
                  <div className="flex items-start gap-4 lg:flex-col lg:gap-0">
                    <div className="flex flex-col items-center shrink-0">
                      {/* 3D Pillowy Cushion Circular Badge with Gentle Float */}
                      <Float duration={5.1} distance={6}>
                        <div className="relative w-13 h-13 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0">
                          <div className="absolute inset-0 rounded-full bg-[#635BFF]/18 blur-[9px] pointer-events-none scale-110" />
                          <div className="relative w-full h-full rounded-full bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(109,40,217,0.12),0_6px_18px_rgba(99,91,255,0.16)] flex items-center justify-center">
                            <ProcessBulbIcon className="w-6 h-6 sm:w-[34px] sm:h-[34px] text-[#635BFF]" />
                          </div>
                        </div>
                      </Float>
                      {/* Mobile Vertical Connector Line */}
                      <div className="w-0.5 h-10 bg-indigo-100 mt-2 rounded-full lg:hidden" />
                    </div>

                    {/* Desktop Dotted Arrow to Step 3 */}
                    <div className="hidden lg:flex flex-1 items-center px-2 sm:px-3">
                      <svg className="w-full h-3.5" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                        <line x1="0" y1="6" x2="86" y2="6" stroke="#94A3B8" strokeWidth="1.6" strokeDasharray="4 4" />
                        <path d="M82 2L88 6L82 10" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Step Text with Vertical Divider Line */}
                    <div className="pt-0.5 lg:pt-0 lg:mt-6 sm:lg:mt-7 relative">
                      <div className="hidden lg:block absolute -left-5 xl:-left-6 top-1 bottom-1 w-px bg-slate-200" />
                      <span className="text-xs sm:text-base font-black text-[#635BFF] lg:text-slate-900 block tracking-tight">02</span>
                      <h3 className="font-extrabold text-slate-950 text-base sm:text-[18px] xl:text-[19px] tracking-tight mt-0.5 sm:mt-1.5">Design</h3>
                      <p className="text-slate-500 text-xs sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-1 sm:mt-2 font-normal max-w-[240px]">
                        Create a tailored solution strategy.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                {/* Step 03 */}
                <StaggerItem direction="up" className="flex flex-col lg:pl-5 xl:pl-6 pr-0 lg:pr-3 relative">
                  <div className="flex items-start gap-4 lg:flex-col lg:gap-0">
                    <div className="flex flex-col items-center shrink-0">
                      {/* 3D Pillowy Cushion Circular Badge with Gentle Float */}
                      <Float duration={4.8} distance={6}>
                        <div className="relative w-13 h-13 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0">
                          <div className="absolute inset-0 rounded-full bg-[#635BFF]/18 blur-[9px] pointer-events-none scale-110" />
                          <div className="relative w-full h-full rounded-full bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(109,40,217,0.12),0_6px_18px_rgba(99,91,255,0.16)] flex items-center justify-center">
                            <ProcessCodeIcon className="w-6 h-6 sm:w-[34px] sm:h-[34px] text-[#635BFF]" />
                          </div>
                        </div>
                      </Float>
                      {/* Mobile Vertical Connector Line */}
                      <div className="w-0.5 h-10 bg-indigo-100 mt-2 rounded-full lg:hidden" />
                    </div>

                    {/* Desktop Dotted Arrow to Step 4 */}
                    <div className="hidden lg:flex flex-1 items-center px-2 sm:px-3">
                      <svg className="w-full h-3.5" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                        <line x1="0" y1="6" x2="86" y2="6" stroke="#94A3B8" strokeWidth="1.6" strokeDasharray="4 4" />
                        <path d="M82 2L88 6L82 10" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Step Text with Vertical Divider Line */}
                    <div className="pt-0.5 lg:pt-0 lg:mt-6 sm:lg:mt-7 relative">
                      <div className="hidden lg:block absolute -left-5 xl:-left-6 top-1 bottom-1 w-px bg-slate-200" />
                      <span className="text-xs sm:text-base font-black text-[#635BFF] lg:text-slate-900 block tracking-tight">03</span>
                      <h3 className="font-extrabold text-slate-950 text-base sm:text-[18px] xl:text-[19px] tracking-tight mt-0.5 sm:mt-1.5">Build</h3>
                      <p className="text-slate-500 text-xs sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-1 sm:mt-2 font-normal max-w-[240px]">
                        Develop, integrate and test.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                {/* Step 04 */}
                <StaggerItem direction="up" className="flex flex-col lg:pl-5 xl:pl-6 relative">
                  <div className="flex items-start gap-4 lg:flex-col lg:gap-0">
                    <div className="flex flex-col items-center shrink-0">
                      {/* 3D Pillowy Cushion Circular Badge with Gentle Float */}
                      <Float duration={5.4} distance={6}>
                        <div className="relative w-13 h-13 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0">
                          <div className="absolute inset-0 rounded-full bg-[#635BFF]/18 blur-[9px] pointer-events-none scale-110" />
                          <div className="relative w-full h-full rounded-full bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(109,40,217,0.12),0_6px_18px_rgba(99,91,255,0.16)] flex items-center justify-center">
                            <ProcessRocketIcon className="w-8 h-8 sm:w-[34px] sm:h-[34px] text-[#635BFF]" />
                          </div>
                        </div>
                      </Float>
                    </div>

                    {/* Step Text with Vertical Divider Line */}
                    <div className="pt-0.5 lg:pt-0 lg:mt-6 sm:lg:mt-7 relative">
                      <div className="hidden lg:block absolute -left-5 xl:-left-6 top-1 bottom-1 w-px bg-slate-200" />
                      <span className="text-xs sm:text-base font-black text-[#635BFF] lg:text-slate-900 block tracking-tight">04</span>
                      <h3 className="font-extrabold text-slate-950 text-base sm:text-[18px] xl:text-[19px] tracking-tight mt-0.5 sm:mt-1.5">Launch</h3>
                      <p className="text-slate-500 text-xs sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-1 sm:mt-2 font-normal max-w-[240px]">
                        Deploy and optimize for real results.
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ===================== CASE STUDY & WHY Aegis (ONE FRAME) ===================== */}
        <section className="relative pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-18 lg:pb-20 bg-gradient-to-b from-[#FAF8FF] via-[#F3EDFE] to-[#FAF8FF] border-y border-purple-100/70 overflow-hidden" id="case-studies">
          {/* Soft purplish ambient highlight glows */}
          <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[#635BFF]/[0.06] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full bg-[#7052FF]/[0.06] blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 sm:space-y-8 lg:space-y-9 relative z-10">
            {/* ROW 1: CASE STUDY HIGHLIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Left Column Card (Visual - exact image fitted with zero cropping) */}
              <FadeIn direction="right" className="lg:col-span-7 relative w-full aspect-[1918/820] rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden bg-[#0B0416] shadow-sm">
                <Image
                  src="/assets/case-study-laptop.png"
                  alt="From manual work to 70% higher efficiency - Aegis Case Study"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                  className="object-contain object-center"
                />
              </FadeIn>

              {/* Right Column Card (Metrics & Info) */}
              <FadeIn direction="left" className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl lg:rounded-[28px] p-6 sm:p-8 lg:p-7 xl:p-8 border border-slate-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div className="space-y-3 sm:space-y-3.5">
                  <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-slate-400 block">
                    CASE STUDY
                  </span>
                  <h3 className="text-2xl sm:text-[28px] lg:text-[32px] xl:text-[36px] font-black text-slate-950 tracking-tight leading-[1.14]">
                    Scaling a Growing <br className="hidden sm:inline" />SaaS Startup
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-[14px] xl:text-[15px] text-slate-500 leading-relaxed">
                    We helped a SaaS company automate their customer support and internal operations, reducing manual work by 70% and saving 200+ hours every month.
                  </p>
                </div>

                <div className="pt-6 sm:pt-7 flex items-center justify-between mt-6 lg:mt-0">
                  <div className="flex-1">
                    <div className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[38px] font-black text-[#635BFF] tracking-tight">
                      70%
                    </div>
                    <div className="text-xs sm:text-[12.5px] xl:text-[13.5px] text-slate-500 font-medium mt-1 whitespace-nowrap">
                      Less Manual Work
                    </div>
                  </div>

                  <div className="w-px h-10 sm:h-11 xl:h-12 bg-slate-200/80 mx-2.5 sm:mx-3.5 xl:mx-4 shrink-0" />

                  <div className="flex-1">
                    <div className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[38px] font-black text-[#635BFF] tracking-tight">
                      200+
                    </div>
                    <div className="text-xs sm:text-[12.5px] xl:text-[13.5px] text-slate-500 font-medium mt-1 whitespace-nowrap">
                      Hours Saved
                    </div>
                  </div>

                  <div className="w-px h-10 sm:h-11 xl:h-12 bg-slate-200/80 mx-2.5 sm:mx-3.5 xl:mx-4 shrink-0" />

                  <div className="flex-1">
                    <div className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[38px] font-black text-[#635BFF] tracking-tight">
                      3x
                    </div>
                    <div className="text-xs sm:text-[12.5px] xl:text-[13.5px] text-slate-500 font-medium mt-1 whitespace-nowrap">
                      Faster Operations
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ROW 2: WHY Aegis */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-2 sm:pt-3">
              {/* Left Header Column */}
              <FadeIn direction="right" className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#635BFF] shrink-0" />
                    <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.18em] text-slate-500 uppercase">
                      WHY Aegis
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-black tracking-tight text-[#0B0D17] leading-[1.12]">
                    More Than <br className="hidden sm:inline" />an AI Company.
                  </h2>

                  <p className="text-slate-500 text-xs sm:text-sm lg:text-[14px] xl:text-[14.5px] leading-relaxed max-w-[360px]">
                    We combine technical expertise with real business understanding to deliver solutions that create measurable impact.
                  </p>
                </div>

                <div className="pt-2">
                  <HoverScale>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-sm sm:text-[14.5px] font-bold text-slate-900 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all group"
                    >
                      <span>Learn More</span>
                      <span className="text-slate-900 transition-transform duration-200 group-hover:translate-x-1 text-base leading-none">&rarr;</span>
                    </Link>
                  </HoverScale>
                </div>
              </FadeIn>

              {/* Right 3 Cards Grid */}
              <StaggerContainer className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 xl:gap-6">
                {/* Card 1: Business First */}
                <StaggerItem direction="up">
                  <HoverCard hoverY={-6} className="group rounded-[26px] sm:rounded-[28px] bg-white border border-slate-100/90 p-5.5 sm:p-6 xl:p-6.5 flex flex-col justify-between shadow-[0_4px_24px_rgba(99,91,255,0.03)] hover:shadow-[0_12px_32px_rgba(99,91,255,0.08)] transition-all duration-300 min-h-[220px]">
                    <div>
                      {/* 3D Cushion Squircle */}
                      <div className="relative w-16 h-16 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0 mb-6 xl:mb-7">
                        <div className="absolute -inset-1.5 rounded-[26px] bg-[#635BFF]/18 blur-[9px] pointer-events-none" />
                        <div className="relative w-full h-full rounded-[24px] bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2.5px_4px_rgba(255,255,255,1),inset_0_-2.5px_4px_rgba(109,40,217,0.12),0_6px_18px_rgba(99,91,255,0.16)] flex items-center justify-center">
                          <TargetBullseyeIcon className="w-8 h-8 sm:w-[32px] sm:h-[32px] text-[#635BFF]" />
                        </div>
                      </div>

                      <h3 className="font-extrabold text-slate-950 text-base sm:text-[17px] xl:text-[18px] tracking-tight whitespace-nowrap">
                        Business First
                      </h3>

                      <p className="text-slate-500 text-[13px] sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-2 font-normal">
                        We focus on real outcomes, not just technology.
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>

                {/* Card 2: End-to-End Support */}
                <StaggerItem direction="up">
                  <HoverCard hoverY={-6} className="group rounded-[26px] sm:rounded-[28px] bg-white border border-slate-100/90 p-5.5 sm:p-6 xl:p-6.5 flex flex-col justify-between shadow-[0_4px_24px_rgba(99,91,255,0.03)] hover:shadow-[0_12px_32px_rgba(99,91,255,0.08)] transition-all duration-300 min-h-[220px]">
                    <div>
                      {/* 3D Cushion Squircle */}
                      <div className="relative w-16 h-16 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0 mb-6 xl:mb-7">
                        <div className="absolute -inset-1.5 rounded-[26px] bg-[#635BFF]/18 blur-[9px] pointer-events-none" />
                        <div className="relative w-full h-full rounded-[24px] bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2.5px_4px_rgba(255,255,255,1),inset_0_-2.5px_4px_rgba(109,40,217,0.12),0_6px_18px_rgba(99,91,255,0.16)] flex items-center justify-center">
                          <SolidUsersIcon className="w-8 h-8 sm:w-[32px] sm:h-[32px] text-[#635BFF]" />
                        </div>
                      </div>

                      <h3 className="font-extrabold text-slate-950 text-base sm:text-[17px] xl:text-[18px] tracking-tight whitespace-nowrap">
                        End-to-End Support
                      </h3>

                      <p className="text-slate-500 text-[13px] sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-2 font-normal">
                        From strategy to deployment and beyond.
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>

                {/* Card 3: Scalable Solutions */}
                <StaggerItem direction="up">
                  <HoverCard hoverY={-6} className="group rounded-[26px] sm:rounded-[28px] bg-white border border-slate-100/90 p-5.5 sm:p-6 xl:p-6.5 flex flex-col justify-between shadow-[0_4px_24px_rgba(99,91,255,0.03)] hover:shadow-[0_12px_32px_rgba(99,91,255,0.08)] transition-all duration-300 min-h-[220px]">
                    <div>
                      {/* 3D Cushion Squircle */}
                      <div className="relative w-16 h-16 sm:w-[68px] sm:h-[68px] xl:w-[72px] xl:h-[72px] flex items-center justify-center shrink-0 mb-6 xl:mb-7">
                        <div className="absolute -inset-1.5 rounded-[26px] bg-[#635BFF]/18 blur-[9px] pointer-events-none" />
                        <div className="relative w-full h-full rounded-[24px] bg-gradient-to-b from-white via-[#F3EFFF] to-[#DDD3FE] border border-white shadow-[inset_0_2.5px_4px_rgba(255,255,255,1),inset_0_-2.5px_4px_rgba(109,40,217,0.12),0_6px_18px_rgba(99,91,255,0.16)] flex items-center justify-center">
                          <SolidBarChartIcon className="w-8 h-8 sm:w-[32px] sm:h-[32px] text-[#635BFF]" />
                        </div>
                      </div>

                      <h3 className="font-extrabold text-slate-950 text-base sm:text-[17px] xl:text-[18px] tracking-tight whitespace-nowrap">
                        Scalable Solutions
                      </h3>

                      <p className="text-slate-500 text-[13px] sm:text-[13.5px] xl:text-[14px] leading-relaxed mt-2 font-normal">
                        Built to grow with your business.
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ===================== CTA BANNER ===================== */}
        <section className="py-6 sm:py-8 lg:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up" className="relative rounded-3xl overflow-hidden p-6 sm:p-9 lg:p-11 min-h-[210px] sm:min-h-[230px] flex items-center shadow-lg">
              {/* Background Image */}
              <Image
                src="/assets/cta-banner-bg.png"
                alt="Ready to Automate Your Tomorrow?"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center"
              />

              {/* Banner Content */}
              <div className="relative z-10 max-w-2xl space-y-3.5 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-purple-300" />
                  <span>Let&apos;s Build What&apos;s Next</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.12]">
                  Ready to Automate Your Tomorrow?
                </h2>

                <p className="text-white/90 text-sm sm:text-[15px] xl:text-base leading-relaxed max-w-xl font-normal">
                  Book a free consultation and let&apos;s explore how Aegis can help you scale with AI and automation.
                </p>

                <div className="pt-1.5 sm:pt-2">
                  <HoverScale>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2.5 px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-[14.5px] font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all shadow-md"
                    >
                      <span>Book a Free Call</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </HoverScale>
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
