"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
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
  BoltIcon,
  UsersIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChatIcon,
} from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqItems = [
    {
      question: "How quickly can I expect a response?",
      answer:
        "We typically reply within 24 business hours. For immediate requests, you can also schedule a direct video call on our calendar.",
    },
    {
      question: "Can we schedule a demo or consultation?",
      answer:
        "Yes! You can book a free 30-minute consultation call where our AI engineers review your current workflows and provide tailored recommendations.",
    },
    {
      question: "Do you work with early-stage startups?",
      answer:
        "Yes, we collaborate with startups from seed stage through growth, as well as established enterprises looking to automate core operations.",
    },
    {
      question: "Is my information confidential?",
      answer:
        "Absolutely. All project discussions and architecture reviews are held under strict non-disclosure terms and confidentiality agreements.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFD] text-[#0B0D17]">
      <Navbar />

      <main className="flex-grow">
        {/* ===================== HERO SECTION (EXACT MATCH TO media_1789900471760.png) ===================== */}
        <section className="relative overflow-hidden w-full bg-[#FAFAFD] min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5.5rem)] lg:min-h-[620px] lg:max-h-[780px] flex flex-col justify-between pt-6 sm:pt-10 lg:pt-12 pb-8 sm:pb-12">
          {/* Background Graphic with smooth scale fade-in */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden anim-fade-scale">
            <Image
              src="/assets/hero-contact.png"
              alt="Let's turn your ideas into impact. - Aegiss"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[74%_center] xl:object-right"
            />
            {/* Soft gradient overlay on mobile/tablet so text remains crystal clear */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0FC]/95 via-[#F4F0FC]/85 to-transparent lg:hidden" />
          </div>

          {/* Main Headline & Intro */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
            <div className="max-w-xl xl:max-w-2xl space-y-4 sm:space-y-6">
              {/* Tag / Sub-label */}
              <FadeIn direction="up" delay={0.05} distance={16}>
                <div className="inline-flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#635BFF] animate-pulse" />
                  <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#7C8BA1] uppercase">
                    CONTACT US
                  </span>
                </div>
              </FadeIn>

              {/* Main Heading */}
              <FadeIn direction="up" delay={0.12} distance={24}>
                <h1 className="text-4xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-black text-[#0D1527] tracking-tight leading-[1.05]">
                  Let&apos;s Build <br />
                  <span className="text-[#635BFF]">What&apos;s Next.</span>
                </h1>
              </FadeIn>

              {/* Subtitle */}
              <FadeIn direction="up" delay={0.18} distance={20}>
                <p className="text-slate-500 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-lg">
                  Have a project in mind, a question, or just want to explore what&apos;s
                  possible? We&apos;d love to hear from you.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Bottom Row: 3 Guarantees (Left) & Floating Social Proof Badge (Right) */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* 3 Guarantees */}
              <StaggerContainer staggerDelay={0.08} className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
                {/* Quick Response */}
                <StaggerItem>
                  <HoverCard hoverY={-3}>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#ECE7FE] via-[#F4F1FF] to-[#EDE9FE] border border-[#DDD6FE]/70 shadow-[0_4px_14px_rgba(99,91,255,0.14),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#635BFF] shrink-0">
                        <BoltIcon className="w-5 h-5 text-[#635BFF]" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">Quick Response</h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">Usually within 24 hours</p>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>

                {/* Expert Guidance */}
                <StaggerItem>
                  <HoverCard hoverY={-3}>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#ECE7FE] via-[#F4F1FF] to-[#EDE9FE] border border-[#DDD6FE]/70 shadow-[0_4px_14px_rgba(99,91,255,0.14),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#635BFF] shrink-0">
                        <UsersIcon className="w-5 h-5 text-[#635BFF]" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">Expert Guidance</h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">From our specialists</p>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>

                {/* Confidential */}
                <StaggerItem>
                  <HoverCard hoverY={-3}>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#ECE7FE] via-[#F4F1FF] to-[#EDE9FE] border border-[#DDD6FE]/70 shadow-[0_4px_14px_rgba(99,91,255,0.14),inset_0_1px_1px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#635BFF] shrink-0">
                        <LockIcon className="w-5 h-5 text-[#635BFF]" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">Confidential</h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">Your ideas are safe with us</p>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              </StaggerContainer>

              {/* Floating Social Proof Badge (Desktop) */}
              <FadeIn direction="up" delay={0.25} distance={16} className="hidden md:block">
                <Float duration={5} distance={5}>
                  <div className="flex items-center gap-3.5 bg-white/85 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-white/90 shadow-[0_12px_32px_rgba(99,91,255,0.08),0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="flex -space-x-2.5 overflow-hidden">
                      <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-xs">
                        <Image
                          src="/assets/avatar-client-1.jpg"
                          alt="Client"
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-xs">
                        <Image
                          src="/assets/avatar-client-2.jpg"
                          alt="Client"
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-xs">
                        <Image
                          src="/assets/avatar-client-3.jpg"
                          alt="Client"
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-500 font-medium leading-none">Trusted by</div>
                      <div className="text-xs sm:text-[13px] font-extrabold text-slate-900 leading-tight mt-0.5 whitespace-nowrap">
                        30+ businesses
                      </div>
                    </div>
                  </div>
                </Float>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ===================== MAIN CONTACT SECTION ===================== */}
        <section className="py-20 bg-white border-y border-slate-100" id="form">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Form Card */}
              <FadeIn direction="right" duration={0.75} distance={24} className="lg:col-span-7">
                <div className="bg-[#FAFAFD] p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-indigo-100 text-[#635BFF]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
                      <span>SEND US A MESSAGE</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                      Start a <span className="text-[#635BFF]">Conversation.</span>
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm">
                      Fill out the form and our team will get back to you shortly.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-8 rounded-2xl bg-white border border-emerald-200 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">Message Received!</h3>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                        Thank you for contacting Aegiss. Our team will review your requirements and respond within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Row 1: Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-700">
                            Your Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-indigo-100 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-700">
                            Your Email <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-indigo-100 transition-all"
                          />
                        </div>
                      </div>

                      {/* Row 2: Company & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-700">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({ ...formData, company: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-indigo-100 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-slate-700">
                            Phone Number
                          </label>
                          <div className="flex rounded-xl bg-white border border-slate-200 overflow-hidden focus-within:border-[#635BFF] focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                            <div className="flex items-center gap-1 px-3 bg-slate-50 border-r border-slate-200 text-xs font-medium text-slate-700">
                              <span>🇮🇳</span>
                              <ChevronDownIcon className="w-3 h-3 text-slate-400" />
                              <span className="text-slate-500 ml-1">+91</span>
                            </div>
                            <input
                              type="tel"
                              placeholder="98765 43210"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              className="w-full px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Interested In */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          What are you interested in? <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-indigo-100 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled>
                              Select a service
                            </option>
                            <option value="chatbots">AI Chatbots &amp; Assistants</option>
                            <option value="process-automation">Process Automation</option>
                            <option value="custom-ai">Custom AI Solutions</option>
                            <option value="integrations">Integrations &amp; APIs</option>
                            <option value="analytics">Analytics &amp; Insights</option>
                            <option value="consulting">AI Consulting &amp; Strategy</option>
                          </select>
                          <ChevronDownIcon className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Row 4: Message */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700">
                          Your Message <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          rows={4}
                          required
                          maxLength={500}
                          placeholder="Tell us about your project, goals, or questions..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                        />
                        <div className="text-right text-[11px] text-slate-400">
                          {formData.message.length}/500
                        </div>
                      </div>

                      {/* Submit Button */}
                      <HoverScale scale={1.02} tapScale={0.98}>
                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-[#635BFF] hover:bg-[#5247E6] transition-all shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Send Message</span>
                          <ArrowRightIcon className="w-4 h-4" />
                        </button>
                      </HoverScale>
                    </form>
                  )}
                </div>
              </FadeIn>

              {/* Right Column: Contact Ways & Map */}
              <FadeIn direction="left" duration={0.75} distance={24} className="lg:col-span-5 space-y-8">
                {/* Other Ways to Reach Us */}
                <div className="bg-[#FAFAFD] p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-indigo-100 text-[#635BFF]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
                      <span>GET IN TOUCH</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950">
                      Other Ways to <span className="text-[#635BFF]">Reach Us.</span>
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Prefer a direct conversation? Here are other ways to connect.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {/* Email Us */}
                    <HoverCard hoverY={-3}>
                      <a
                        href="mailto:hello@aegiss.ai"
                        className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between hover:border-indigo-200 hover:shadow-xs transition-all group"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#635BFF] flex items-center justify-center group-hover:bg-[#635BFF] group-hover:text-white transition-colors">
                            <MailIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">Email Us</h4>
                            <p className="text-xs text-slate-500">hello@aegiss.ai</p>
                          </div>
                        </div>
                        <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-[#635BFF] group-hover:translate-x-0.5 transition-all" />
                      </a>
                    </HoverCard>

                    {/* Call Us */}
                    <HoverCard hoverY={-3}>
                      <a
                        href="tel:+919876543210"
                        className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between hover:border-indigo-200 hover:shadow-xs transition-all group"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#635BFF] flex items-center justify-center group-hover:bg-[#635BFF] group-hover:text-white transition-colors">
                            <PhoneIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">Call Us</h4>
                            <p className="text-xs text-slate-500">+91 98765 43210</p>
                          </div>
                        </div>
                        <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-[#635BFF] group-hover:translate-x-0.5 transition-all" />
                      </a>
                    </HoverCard>

                    {/* Visit Us */}
                    <HoverCard hoverY={-3}>
                      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between hover:border-indigo-200 hover:shadow-xs transition-all group">
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#635BFF] flex items-center justify-center group-hover:bg-[#635BFF] group-hover:text-white transition-colors">
                            <MapPinIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">Visit Us</h4>
                            <p className="text-xs text-slate-500">Navi Mumbai, Maharashtra, India</p>
                          </div>
                        </div>
                        <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-[#635BFF] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </HoverCard>

                    {/* Book a Meeting */}
                    <HoverCard hoverY={-3}>
                      <a
                        href="#pre-faq"
                        className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-between hover:border-indigo-200 hover:shadow-xs transition-all group"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#635BFF] flex items-center justify-center group-hover:bg-[#635BFF] group-hover:text-white transition-colors">
                            <CalendarIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">Book a Meeting</h4>
                            <p className="text-xs text-slate-500">Schedule a call with our team</p>
                          </div>
                        </div>
                        <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-[#635BFF] group-hover:translate-x-0.5 transition-all" />
                      </a>
                    </HoverCard>
                  </div>
                </div>

                {/* Find Us Here (Map Card) */}
                <div className="bg-[#FAFAFD] p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-indigo-100 text-[#635BFF]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
                      <span>OUR LOCATION</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950">
                      Find Us <span className="text-[#635BFF]">Here.</span>
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Come say hi! We&apos;re based in Navi Mumbai, India.
                    </p>
                  </div>

                  {/* Stylized Map Viewport */}
                  <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-800 bg-[#0E1118] flex items-center justify-center p-4">
                    {/* SVG map background lines */}
                    <svg
                      className="absolute inset-0 w-full h-full opacity-20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#635BFF" strokeWidth="0.5" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#mapGrid)" />
                      {/* Coastlines/Roads */}
                      <path
                        d="M -20,120 Q 80,60 180,90 T 380,40 T 520,140"
                        fill="none"
                        stroke="#635BFF"
                        strokeWidth="1.5"
                        strokeDasharray="4 2"
                      />
                      <path
                        d="M 20,-10 Q 120,80 200,110 T 360,190"
                        fill="none"
                        stroke="#4F46E5"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Area labels */}
                    <span className="absolute top-4 left-6 text-[10px] tracking-widest font-mono text-slate-500 uppercase">
                      Kharghar
                    </span>
                    <span className="absolute bottom-4 left-8 text-[10px] tracking-widest font-mono text-slate-500 uppercase">
                      Seawoods
                    </span>
                    <span className="absolute bottom-4 right-6 text-[11px] tracking-wider font-semibold text-slate-400">
                      Navi Mumbai
                    </span>

                    {/* Pin Callout Card */}
                    <Float duration={4} distance={4}>
                      <div className="relative z-10 bg-[#161B26]/90 backdrop-blur-md border border-slate-700/80 px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#635BFF] text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/30">
                          <MapPinIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="text-xs font-bold text-white">Aegiss</h5>
                          <p className="text-[11px] text-slate-400">Navi Mumbai, Maharashtra</p>
                        </div>
                      </div>
                    </Float>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ===================== PRE-FAQ BANNER ===================== */}
        <section className="py-12" id="pre-faq">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up" duration={0.75} distance={28}>
              <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-indigo-100 bg-gradient-to-r from-white via-indigo-50/20 to-purple-50/40 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Background script on the right */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden md:block">
                  <Image
                    src="/assets/contact-cta-pattern.png"
                    alt="Same Team. Real Conversations."
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-right opacity-85"
                  />
                </div>

                {/* Left Content */}
                <div className="relative z-10 space-y-4 max-w-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100/70 text-[#635BFF] flex items-center justify-center shrink-0">
                      <ChatIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-[#635BFF] uppercase">
                      NOT SURE WHERE TO START?
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                    Let&apos;s Figure It Out Together.
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md">
                    Book a free consultation and our experts will help you find the right
                    solution for your business.
                  </p>

                  <div className="pt-2">
                    <HoverScale scale={1.04} tapScale={0.96} className="inline-block">
                      <Link
                        href="#form"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5247E6] transition-all shadow-sm"
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

        {/* ===================== FAQ SECTION ===================== */}
        <section className="py-20 bg-white border-t border-slate-100" id="faq">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <FadeIn direction="up">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-indigo-100 text-[#635BFF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
                    <span>FAQ</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                    Quick <span className="text-[#635BFF]">Answers.</span>
                  </h2>
                </div>
                <Link
                  href="/services#faq"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#635BFF] hover:underline"
                >
                  <span>View All FAQs</span>
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

