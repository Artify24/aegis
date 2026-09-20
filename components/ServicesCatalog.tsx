"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TRANSITION_EASE } from "./Motion";
import {
  ChatIcon,
  GearIcon,
  LayersIcon,
  LinkIcon,
  ChartBarIcon,
  ShieldIcon,
  ArrowRightIcon,
  SearchIcon,
  PhoneCallIcon,
  CartIcon,
  BuildingIcon,
  GraduationIcon,
  ReceiptIcon,
  TruckIcon,
  BriefcaseIcon,
  DatabaseIcon,
  BankIcon,
  CalculatorIcon,
  CpuIcon,
  StoreIcon,
  WrenchIcon,
  VideoCameraIcon,
  GavelIcon,
  ShieldCheckIcon,
  NavigationIcon,
  UserMinusIcon,
  GiftIcon,
  TrendingUpIcon,
  FileTextIcon,
  ClipboardCheckIcon,
  HeartHandshakeIcon,
} from "./Icons";

export interface MetricItem {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface ServiceCardData {
  id: number;
  number: string;
  title: string;
  description: string;
  bullets: [string, string, string];
  metrics: [MetricItem, MetricItem, MetricItem];
  badge: {
    label: string;
    type: "popular" | "roi" | "custom" | "enterprise" | "industry";
  };
  category: "Support & Sales" | "Operations & Workflow" | "Finance & Compliance" | "Industry Solutions" | "Intelligence & Data";
  iconType: string;
  watermark: "bubbles" | "flowchart" | "cube" | "chain" | "chart" | "compass" | "cards" | "plug" | "doc" | "truck" | "shield" | "cart" | "phone";
  deepDetails?: {
    overview: string;
    deliverables: string[];
    typicalTimeline: string;
  };
}

export const SERVICES_DATA: ServiceCardData[] = [
  // 01
  {
    id: 1,
    number: "01",
    title: "AI Chatbots & Assistants",
    description: "Custom AI assistants for customer support, internal ops and lead generation.",
    bullets: [
      "24/7 customer support",
      "Reduce support costs by up to 70%",
      "Improve customer satisfaction (CSAT)",
    ],
    metrics: [
      { value: "70%", label: "Cost Reduction" },
      { value: "2.5x", label: "Faster Response" },
      { value: "+40%", label: "CSAT Increase" },
    ],
    badge: { label: "Popular Solution", type: "popular" },
    category: "Support & Sales",
    iconType: "chat",
    watermark: "bubbles",
    deepDetails: {
      overview: "Automates customer queries across WhatsApp, web, and internal channels with human-level accuracy and grounded ERP knowledge.",
      deliverables: ["Custom WhatsApp & Web Chatbot", "CRM Integration & Escalation Flow", "Analytics Dashboard & CSAT Tracking"],
      typicalTimeline: "2 to 3 weeks",
    },
  },
  // 02
  {
    id: 2,
    number: "02",
    title: "Process Automation",
    description: "Automate repetitive work and streamline workflows across your tools.",
    bullets: [
      "Eliminate manual work",
      "Improve accuracy & compliance",
      "Integrate with your existing systems",
    ],
    metrics: [
      { value: "60%", label: "Time Saved" },
      { value: "45%", label: "Operational Cost ↓" },
      { value: "3–6", label: "Months ROI" },
    ],
    badge: { label: "High ROI", type: "roi" },
    category: "Operations & Workflow",
    iconType: "gear",
    watermark: "flowchart",
    deepDetails: {
      overview: "Eliminates repetitive data-entry and manual coordination by linking Notion, Slack, Google Workspace, and proprietary ERPs into automated pipelines.",
      deliverables: ["End-to-End Workflow Automations", "Error Handling & Fallback Pipelines", "Audit Trails & System Logging"],
      typicalTimeline: "2 to 4 weeks",
    },
  },
  // 03
  {
    id: 3,
    number: "03",
    title: "Custom AI Solutions",
    description: "Tailored AI systems built for your unique business challenges.",
    bullets: [
      "Domain-specific AI models",
      "End-to-end implementation",
      "Ongoing support & optimization",
    ],
    metrics: [
      { value: "2–10x", label: "Productivity Gain" },
      { value: "30–50%", label: "Cost Reduction" },
      { value: "3–6", label: "Months ROI" },
    ],
    badge: { label: "Custom Build", type: "custom" },
    category: "Intelligence & Data",
    iconType: "cube",
    watermark: "cube",
    deepDetails: {
      overview: "Bespoke AI architectures tailored to unique proprietary data, compliance requirements, and specialized enterprise processes.",
      deliverables: ["Fine-Tuned LLM Models", "Secure RAG Infrastructure", "Production SLA & Monitoring"],
      typicalTimeline: "4 to 8 weeks",
    },
  },
  // 04
  {
    id: 4,
    number: "04",
    title: "Integrations & APIs",
    description: "Connect your tools and data for a seamless ecosystem.",
    bullets: [
      "API development & integrations",
      "Sync data across platforms",
      "Custom connectors (CRM, ERP, etc.)",
    ],
    metrics: [
      { value: "50%", label: "Less Manual Work" },
      { value: "3x", label: "Data Accessibility" },
      { value: "2–4", label: "Months ROI" },
    ],
    badge: { label: "Essential", type: "custom" },
    category: "Operations & Workflow",
    iconType: "link",
    watermark: "chain",
    deepDetails: {
      overview: "Synchronizes data in real-time across fragmented business systems, legacy databases, and modern SaaS APIs with zero data loss.",
      deliverables: ["Custom REST/GraphQL Webhooks", "Automated Two-Way Database Sync", "Zero-Downtime Monitoring"],
      typicalTimeline: "2 to 4 weeks",
    },
  },
  // 05
  {
    id: 5,
    number: "05",
    title: "Analytics & Insights",
    description: "Turn your data into actionable insights with AI-powered analytics.",
    bullets: [
      "Real-time dashboards",
      "Predictive analytics",
      "Business intelligence reports",
    ],
    metrics: [
      { value: "2–5x", label: "Faster Decision Making" },
      { value: "40%", label: "Revenue Growth" },
      { value: "3–6", label: "Months ROI" },
    ],
    badge: { label: "Data-Driven", type: "roi" },
    category: "Intelligence & Data",
    iconType: "chart",
    watermark: "chart",
    deepDetails: {
      overview: "Extracts data from multiple sales, accounting, and marketing tools to generate daily executive digests and predictive forecasts.",
      deliverables: ["Automated Executive Briefings", "Anomaly Detection Alerts", "Interactive BI Dashboards"],
      typicalTimeline: "3 to 5 weeks",
    },
  },
  // 06
  {
    id: 6,
    number: "06",
    title: "AI Consulting & Strategy",
    description: "Get expert guidance to identify opportunities and implement AI effectively.",
    bullets: [
      "AI strategy & roadmap",
      "Use case identification",
      "Implementation support",
    ],
    metrics: [
      { value: "Clear", label: "Roadmap" },
      { value: "Higher", label: "ROI Success Rate" },
      { value: "Long-Term", label: "Growth" },
    ],
    badge: { label: "Strategic Partner", type: "enterprise" },
    category: "Intelligence & Data",
    iconType: "shield",
    watermark: "compass",
    deepDetails: {
      overview: "Comprehensive audit of your workflows to map the highest-ROI automation opportunities, ROI forecasts, and technology selection.",
      deliverables: ["Automation Feasibility Matrix", "ROI & Cost Breakdown", "Detailed 90-Day Roadmap"],
      typicalTimeline: "1 to 2 weeks",
    },
  },
  // 07
  {
    id: 7,
    number: "07",
    title: "AI Lead-Response & Qualification Agent",
    description: "Instantly responds to ad/WhatsApp leads and qualifies high-intent prospects.",
    bullets: [
      "Instant response within 60 seconds",
      "Intent qualification & budget scoring",
      "Auto-scheduling for top sales reps",
    ],
    metrics: [
      { value: "3.5h → 52s", label: "Response Speed" },
      { value: "58% → 94%", label: "Qualified Leads" },
      { value: "28x", label: "Campaign ROI", highlight: true },
    ],
    badge: { label: "High ROI", type: "roi" },
    category: "Support & Sales",
    iconType: "gear",
    watermark: "cards",
  },
  // 08
  {
    id: 8,
    number: "08",
    title: "Admissions Enquiry-to-Enrolment Automation",
    description: "Captures, follows up and nurtures education enquiries from first contact.",
    bullets: [
      "After-hours lead capture & replies",
      "Personalized WhatsApp drip journeys",
      "Document collection & checklist automation",
    ],
    metrics: [
      { value: "18h → 2min", label: "Response Time" },
      { value: "+40%", label: "Enrolment Lift" },
      { value: "-30%", label: "Cost Per Student", highlight: true },
    ],
    badge: { label: "Education", type: "industry" },
    category: "Industry Solutions",
    iconType: "graduation",
    watermark: "cube",
  },
  // 09
  {
    id: 9,
    number: "09",
    title: "Real-Estate Site-Visit & Pipeline Automation",
    description: "Centralizes property leads and converts dormant leads into site visits.",
    bullets: [
      "Automated WhatsApp visit booking",
      "Reactivates cold & dormant leads",
      "Instant broker geo-routing",
    ],
    metrics: [
      { value: "4.2x", label: "Visit Conversion" },
      { value: "₹4,800", label: "CAC (from 22K)" },
      { value: "₹2.1 Cr", label: "Closed Pipeline", highlight: true },
    ],
    badge: { label: "Real Estate", type: "industry" },
    category: "Industry Solutions",
    iconType: "building",
    watermark: "plug",
  },
  // 10
  {
    id: 10,
    number: "10",
    title: "AI Commerce Agent — In-Chat Ordering",
    description: "Handles product questions, buying assistance, in-chat checkout and cart recovery.",
    bullets: [
      "In-chat catalog browse & checkout",
      "Automated cart recovery follow-ups",
      "Dynamic upsells & order tracking",
    ],
    metrics: [
      { value: "31%", label: "Cart Recovery" },
      { value: "+24%", label: "Average Order Value" },
      { value: "4.5x", label: "Campaign ROI", highlight: true },
    ],
    badge: { label: "High ROI", type: "roi" },
    category: "Support & Sales",
    iconType: "cart",
    watermark: "chart",
  },
  // 11
  {
    id: 11,
    number: "11",
    title: "Restaurant Direct-Ordering & Loyalty Engine",
    description: "Moves customers from aggregators to direct WhatsApp ordering with loyalty.",
    bullets: [
      "Direct ordering without commissions",
      "Automated loyalty point rewards",
      "WhatsApp win-back campaigns",
    ],
    metrics: [
      { value: "2x", label: "Direct Orders" },
      { value: "-63%", label: "Aggregator Fees" },
      { value: "58%", label: "Repeat Rate", highlight: true },
    ],
    badge: { label: "F&B Loyalty", type: "industry" },
    category: "Industry Solutions",
    iconType: "store",
    watermark: "compass",
  },
  // 12
  {
    id: 12,
    number: "12",
    title: "AI Booking & Appointment System",
    description: "Automates appointment booking, reminders and missed-slot recovery.",
    bullets: [
      "Self-serve WhatsApp & web booking",
      "Automated pre-visit reminders & prep",
      "Missed-appointment recovery loops",
    ],
    metrics: [
      { value: "40% → 12%", label: "No-Show Drop" },
      { value: "-80%", label: "Reception Load" },
      { value: "2,300+", label: "Month 1 Bookings", highlight: true },
    ],
    badge: { label: "Popular", type: "popular" },
    category: "Industry Solutions",
    iconType: "link",
    watermark: "cards",
  },
  // 13
  {
    id: 13,
    number: "13",
    title: "AI Voice Agent / AI Receptionist",
    description: "Handles inbound/outbound calls, first-touch qualification and FAQs.",
    bullets: [
      "Human-grade conversational voice",
      "Inbound call qualification & routing",
      "Outbound reminders & call logs",
    ],
    metrics: [
      { value: "88%", label: "No-Human Calls" },
      { value: "-30%", label: "Handle Time" },
      { value: "3.2x", label: "Team Capacity", highlight: true },
    ],
    badge: { label: "Voice AI", type: "popular" },
    category: "Support & Sales",
    iconType: "phone",
    watermark: "bubbles",
  },
  // 14
  {
    id: 14,
    number: "14",
    title: "AI Workforce — Event-Driven Lifecycle Ops",
    description: "Triggers automated actions across signups, renewals, payments and referrals.",
    bullets: [
      "Zero-latency event trigger pipelines",
      "Cross-system team task routing",
      "Automated win-back & renewal flows",
    ],
    metrics: [
      { value: "275K", label: "Touchpoints/Month" },
      { value: "1,000/day", label: "Tasks Routed" },
      { value: "₹3.2L", label: "Recovered Cash", highlight: true },
    ],
    badge: { label: "High ROI", type: "roi" },
    category: "Operations & Workflow",
    iconType: "cpu",
    watermark: "cube",
  },
  // 15
  {
    id: 15,
    number: "15",
    title: "AI Invoice & Accounts-Payable Automation",
    description: "Extracts invoice data, validates it, reconciles GST/ERP info and routes approvals.",
    bullets: [
      "Intelligent OCR for PDFs & scans",
      "Automated 3-way PO & GST matching",
      "Manager exception routing",
    ],
    metrics: [
      { value: "88%", label: "Faster Processing" },
      { value: "4% → 0.2%", label: "Error Rate" },
      { value: "400%", label: "Approval Speed", highlight: true },
    ],
    badge: { label: "Finance", type: "roi" },
    category: "Finance & Compliance",
    iconType: "receipt",
    watermark: "doc",
  },
  // 16
  {
    id: 16,
    number: "16",
    title: "AI PO-to-Order & Order Management",
    description: "Converts WhatsApp/email/Excel purchase orders into ERP-ready sales orders.",
    bullets: [
      "Converts messy POs to structured data",
      "Live inventory check & fill-rate view",
      "Instant SAP, Tally & Zoho sync",
    ],
    metrics: [
      { value: "-85%", label: "Manual Effort" },
      { value: "250+ hrs", label: "Reclaimed/Month" },
      { value: "₹650 Cr", label: "Supported Scale", highlight: true },
    ],
    badge: { label: "ERP Ready", type: "custom" },
    category: "Operations & Workflow",
    iconType: "fileText",
    watermark: "cards",
  },
  // 17
  {
    id: 17,
    number: "17",
    title: "Logistics & Shipment Automation",
    description: "Automates dispatch documentation, labels, tracking, POD and status alerts.",
    bullets: [
      "Automated dispatch docs & labels",
      "Instant POD verification & alerts",
      "Customer WhatsApp delivery notifications",
    ],
    metrics: [
      { value: "50 → 80", label: "Daily Dispatches" },
      { value: "24 hrs", label: "Saved / Week" },
      { value: "3 Days", label: "Faster Payouts", highlight: true },
    ],
    badge: { label: "Logistics", type: "industry" },
    category: "Operations & Workflow",
    iconType: "truck",
    watermark: "truck",
  },
  // 18
  {
    id: 18,
    number: "18",
    title: "AI HR & Recruitment Automation",
    description: "Automates candidate screening, interview scheduling and onboarding flows.",
    bullets: [
      "AI resume qualification & ranking",
      "Automated interview calendar booking",
      "Digital document collection & offers",
    ],
    metrics: [
      { value: "-52%", label: "Time-to-Hire" },
      { value: "+60%", label: "HR Time Freed" },
      { value: "100%", label: "Compliance Rate", highlight: true },
    ],
    badge: { label: "HR Tech", type: "custom" },
    category: "Operations & Workflow",
    iconType: "briefcase",
    watermark: "compass",
  },
  // 19
  {
    id: 19,
    number: "19",
    title: "RAG Knowledge Assistant over Company Docs",
    description: "Answers employee/customer questions using company documents and ERP knowledge.",
    bullets: [
      "Grounded answers strictly from internal PDFs",
      "Role-based access & permissions",
      "Hallucination-free source citations",
    ],
    metrics: [
      { value: "80%+", label: "Accuracy Rate" },
      { value: "25,000", label: "Queries Offloaded" },
      { value: "+22%", label: "Lead Boost", highlight: true },
    ],
    badge: { label: "Popular", type: "popular" },
    category: "Intelligence & Data",
    iconType: "database",
    watermark: "cube",
  },
  // 20
  {
    id: 20,
    number: "20",
    title: "BFSI Collections & Loan Lifecycle Automation",
    description: "Automates pre-due reminders, collections outreach and compliant loan notifications.",
    bullets: [
      "Compliant WhatsApp & SMS payment links",
      "AI conversational promise-to-pay capture",
      "Auditable regulatory inspection logs",
    ],
    metrics: [
      { value: "66% → 85%", label: "Connectivity" },
      { value: "-70%", label: "Dialer Costs" },
      { value: "-42%", label: "Overdue EMIs", highlight: true },
    ],
    badge: { label: "BFSI", type: "enterprise" },
    category: "Finance & Compliance",
    iconType: "bank",
    watermark: "chart",
  },
  // 21
  {
    id: 21,
    number: "21",
    title: "CA & Professional Services Lifecycle Automation",
    description: "Automates client onboarding, document collection, deadline alerts and fee collection.",
    bullets: [
      "Self-serve tax & audit checklist requests",
      "WhatsApp deadline nudges & compliance alerts",
      "Automated fee invoicing & payment tracking",
    ],
    metrics: [
      { value: "+89%", label: "Client Capacity" },
      { value: "+93%", label: "Revenue Lift" },
      { value: "-82%", label: "Comm. Hours", highlight: true },
    ],
    badge: { label: "Professional", type: "industry" },
    category: "Industry Solutions",
    iconType: "calculator",
    watermark: "doc",
  },
  // 22
  {
    id: 22,
    number: "22",
    title: "SaaS Multi-Agent Internal Ops & Intelligence",
    description: "Uses multiple AI agents to automate lead qualification, onboarding and reporting.",
    bullets: [
      "Autonomous agents collaborating on tasks",
      "Zero-touch CRM data cleansing & scoring",
      "Automated executive weekly slide decks",
    ],
    metrics: [
      { value: "20 → 2 hrs", label: "Qualify Time / Wk" },
      { value: "3h → 0", label: "Reporting Hours" },
      { value: "7,450%", label: "Measured ROI", highlight: true },
    ],
    badge: { label: "High ROI", type: "roi" },
    category: "Support & Sales",
    iconType: "layers",
    watermark: "cards",
  },
  // 23
  {
    id: 23,
    number: "23",
    title: "Dealer & Distributor Network Automation",
    description: "Automates distributor ordering, pricing queries, support tickets and field-sales.",
    bullets: [
      "WhatsApp live dealer catalog & ordering",
      "Instant tiered discount & credit validation",
      "Dispatch notification & shipment tracking",
    ],
    metrics: [
      { value: "48h → <2h", label: "Order Processing" },
      { value: "80%", label: "Auto-Resolved" },
      { value: "₹50L+", label: "Annual Savings", highlight: true },
    ],
    badge: { label: "B2B Scale", type: "industry" },
    category: "Industry Solutions",
    iconType: "store",
    watermark: "plug",
  },
  // 24
  {
    id: 24,
    number: "24",
    title: "Warranty & Field-Service Dispatch Automation",
    description: "Reads warranty info from product photos, checks coverage and dispatches technicians.",
    bullets: [
      "Visual OCR reads serial & warranty labels",
      "Automated warranty database entitlement",
      "Smart geolocation technician dispatch",
    ],
    metrics: [
      { value: "4d → 2d", label: "Turnaround" },
      { value: "<90s", label: "Response Speed" },
      { value: "+17%", label: "CSAT Improvement", highlight: true },
    ],
    badge: { label: "Field Service", type: "custom" },
    category: "Operations & Workflow",
    iconType: "wrench",
    watermark: "compass",
  },
  // 25
  {
    id: 25,
    number: "25",
    title: "Content Operations & AI UGC Production",
    description: "Automates content ideation, drafting, UGC creation and multi-platform distribution.",
    bullets: [
      "AI script & video creative generation",
      "Multi-platform scheduled auto-publishing",
      "Creative performance iteration analytics",
    ],
    metrics: [
      { value: "1.4x → 3.2x", label: "Ad ROAS" },
      { value: "-40%", label: "Production Cost" },
      { value: "130 Posts", label: "In 2 Hours", highlight: true },
    ],
    badge: { label: "Popular", type: "popular" },
    category: "Intelligence & Data",
    iconType: "video",
    watermark: "cube",
  },
  // 26
  {
    id: 26,
    number: "26",
    title: "Government Tender & Bid Intelligence",
    description: "Reads large tender documents, extracts requirements and accelerates bid preparation.",
    bullets: [
      "Instant 200+ page RFP document parsing",
      "Automated compliance checklist generation",
      "Technical proposal response drafting",
    ],
    metrics: [
      { value: "1wk → 15m", label: "Doc Analysis" },
      { value: "+25%", label: "Bid Win Rate" },
      { value: "98.7%", label: "Extraction Acc.", highlight: true },
    ],
    badge: { label: "Enterprise", type: "enterprise" },
    category: "Intelligence & Data",
    iconType: "gavel",
    watermark: "doc",
  },
  // 27
  {
    id: 27,
    number: "27",
    title: "Brand Protection & Marketplace Monitoring",
    description: "Monitors marketplace listings, unauthorized sellers, MAP violations and counterfeiters.",
    bullets: [
      "24/7 scraping of Amazon, Flipkart & quick-comm",
      "Immediate MAP price drop violation alerts",
      "Creator authenticity & audience verification",
    ],
    metrics: [
      { value: "400+", label: "SKUs Monitored" },
      { value: "24/7", label: "Live Protection" },
      { value: "-60%", label: "Wasted Creator Spend", highlight: true },
    ],
    badge: { label: "Security", type: "enterprise" },
    category: "Intelligence & Data",
    iconType: "shieldCheck",
    watermark: "shield",
  },
  // 28
  {
    id: 28,
    number: "28",
    title: "AI Document Processing & Data Extraction",
    description: "Extracts structured data from PDFs, images and handwritten documents into systems.",
    bullets: [
      "Handwritten and multi-table OCR precision",
      "Validates extracted data against rules",
      "Direct API ingestion into databases & ERP",
    ],
    metrics: [
      { value: "~90s", label: "Per Document" },
      { value: "-50%", label: "Ordering Time" },
      { value: "250 Pgs", label: "<25min Ingest", highlight: true },
    ],
    badge: { label: "Core AI", type: "custom" },
    category: "Finance & Compliance",
    iconType: "fileText",
    watermark: "doc",
  },
  // 29
  {
    id: 29,
    number: "29",
    title: "AI Customer Feedback & Sentiment Analysis",
    description: "Analyzes support, complaints and conversations to identify sentiment and intent.",
    bullets: [
      "Real-time sentiment categorization across chats",
      "Early defect & dissatisfaction detection",
      "Automated priority escalation to executives",
    ],
    metrics: [
      { value: "80%", label: "Auto-Resolved" },
      { value: "4.5+", label: "CSAT Score" },
      { value: "+20%", label: "Sales Uplift", highlight: true },
    ],
    badge: { label: "Popular", type: "popular" },
    category: "Intelligence & Data",
    iconType: "heartHandshake",
    watermark: "bubbles",
  },
];

// Helper to render specific squircle icon (matching media_1789895085564.jpg)
function ServiceIcon({ type }: { type: string }) {
  const iconClass = "w-[22px] h-[22px] text-[#5E52F0]";
  switch (type) {
    case "chat":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="8.5" cy="11.5" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="12" cy="11.5" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="11.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "gear":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "cube":
    case "database":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "link":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "chart":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="12" width="3.5" height="9" rx="1.75" />
          <rect x="10.25" y="7" width="3.5" height="14" rx="1.75" />
          <rect x="16.5" y="3" width="3.5" height="18" rx="1.75" />
        </svg>
      );
    case "shield":
    case "compass":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "phone": return <PhoneCallIcon className={iconClass} />;
    case "cart": return <CartIcon className={iconClass} />;
    case "building": return <BuildingIcon className={iconClass} />;
    case "graduation": return <GraduationIcon className={iconClass} />;
    case "receipt": return <ReceiptIcon className={iconClass} />;
    case "truck": return <TruckIcon className={iconClass} />;
    case "briefcase": return <BriefcaseIcon className={iconClass} />;
    case "bank": return <BankIcon className={iconClass} />;
    case "calculator": return <CalculatorIcon className={iconClass} />;
    case "cpu": return <CpuIcon className={iconClass} />;
    case "store": return <StoreIcon className={iconClass} />;
    case "wrench": return <WrenchIcon className={iconClass} />;
    case "video": return <VideoCameraIcon className={iconClass} />;
    case "gavel": return <GavelIcon className={iconClass} />;
    case "shieldCheck": return <ShieldCheckIcon className={iconClass} />;
    case "navigation": return <NavigationIcon className={iconClass} />;
    case "userMinus": return <UserMinusIcon className={iconClass} />;
    case "gift": return <GiftIcon className={iconClass} />;
    case "trendingUp": return <TrendingUpIcon className={iconClass} />;
    case "fileText": return <FileTextIcon className={iconClass} />;
    case "clipboardCheck": return <ClipboardCheckIcon className={iconClass} />;
    case "heartHandshake": return <HeartHandshakeIcon className={iconClass} />;
    default: return <ChatIcon className={iconClass} />;
  }
}

// 3D Translucent Glass Artworks with Atmospheric Radiant Aura (matching media_1789895085564.jpg)
function CardIllustration({ type }: { type: ServiceCardData["watermark"] }) {
  if (type === "bubbles") {
    // 3D frosted speech bubbles with glowing white dots (Card 01)
    return (
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
        {/* Soft atmospheric purple glow aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
        <svg className="w-full h-full relative z-10 drop-shadow-[0_12px_24px_rgba(99,91,255,0.3)]" viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="bubble3DGrad" x1="20" y1="10" x2="130" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#EDE9FE" stopOpacity="0.88" />
              <stop offset="70%" stopColor="#C4B5FD" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="bubbleRimHighlight" x1="30" y1="15" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="50%" stopColor="#DDD6FE" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0.4" />
            </linearGradient>
            <radialGradient id="bubbleInnerLight" cx="60%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            d="M40 32C40 18.7 50.7 8 64 8H106C119.3 8 130 18.7 130 32V72C130 85.3 119.3 96 106 96H86L62 118V96C49.8 96 40 86.2 40 74V32Z"
            fill="url(#bubble3DGrad)"
            stroke="url(#bubbleRimHighlight)"
            strokeWidth="2.5"
          />
          <path
            d="M40 32C40 18.7 50.7 8 64 8H106C119.3 8 130 18.7 130 32V72C130 85.3 119.3 96 106 96H86L62 118V96C49.8 96 40 86.2 40 74V32Z"
            fill="url(#bubbleInnerLight)"
          />
          <path d="M52 18C64 12 82 10 102 10C116 10 124 14 126 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.95" />
          {/* Dual glowing white dots */}
          <circle cx="72" cy="54" r="7" fill="white" className="drop-shadow-[0_2px_6px_rgba(99,91,255,0.3)]" />
          <circle cx="98" cy="54" r="7" fill="white" className="drop-shadow-[0_2px_6px_rgba(99,91,255,0.3)]" />
          <circle cx="28" cy="94" r="14" fill="url(#bubble3DGrad)" stroke="white" strokeWidth="1.8" />
          <ellipse cx="25" cy="89" rx="5" ry="2.5" fill="white" fillOpacity="0.85" />
        </svg>
      </div>
    );
  }

  if (type === "flowchart" || type === "cards") {
    // 3D tilted floating glass panes with flowchart tree diagram (Card 02)
    return (
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
        {/* Soft atmospheric purple glow aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
        <svg className="w-full h-full relative z-10 drop-shadow-[0_14px_28px_rgba(99,91,255,0.28)]" viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="flowGlassGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#EDE9FE" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="flowFrontGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
              <stop offset="60%" stopColor="#F5F3FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.65" />
            </linearGradient>
          </defs>
          {/* Back Glass Pane */}
          <g transform="translate(68, 12) rotate(14)">
            <rect width="52" height="64" rx="12" fill="url(#flowGlassGrad)" stroke="white" strokeWidth="2" />
          </g>
          {/* Middle Glass Pane */}
          <g transform="translate(56, 30) rotate(4)">
            <rect width="54" height="66" rx="12" fill="url(#flowGlassGrad)" stroke="white" strokeWidth="2" />
          </g>
          {/* Front Glass Pane with Flowchart Tree Diagram */}
          <g transform="translate(36, 42) rotate(-6)">
            <rect width="58" height="70" rx="14" fill="url(#flowFrontGrad)" stroke="white" strokeWidth="2.5" />
            {/* Top Node */}
            <rect x="22" y="16" width="14" height="14" rx="3" fill="#5E52F0" className="drop-shadow-xs" />
            {/* Connecting lines */}
            <path d="M29 30v10M16 40h26M16 40v6M42 40v6" stroke="#5E52F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Child Nodes */}
            <rect x="10" y="46" width="12" height="12" rx="2.5" fill="#5E52F0" />
            <rect x="36" y="46" width="12" height="12" rx="2.5" fill="#5E52F0" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "cube") {
    // 3D glowing isometric glass cube (Card 03)
    return (
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
        {/* Soft atmospheric purple glow aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
        <svg className="w-full h-full relative z-10 drop-shadow-[0_16px_32px_rgba(99,91,255,0.32)]" viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="cubeTop3D" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="cubeLeft3D" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#635BFF" stopOpacity="0.65" />
            </linearGradient>
            <linearGradient id="cubeRight3D" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#4338CA" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <g transform="translate(10, 10)">
            <path d="M68 18L114 44L68 70L22 44Z" fill="url(#cubeTop3D)" stroke="white" strokeWidth="2" />
            <path d="M22 44L68 70V122L22 96Z" fill="url(#cubeLeft3D)" stroke="white" strokeWidth="2" />
            <path d="M68 70L114 44V96L68 122Z" fill="url(#cubeRight3D)" stroke="white" strokeWidth="2" />
            <path d="M68 38L92 52L68 66L44 52Z" fill="#FFFFFF" fillOpacity="0.75" stroke="white" strokeWidth="1.5" />
            <path d="M44 52L68 66V96L44 82Z" fill="#8B5CF6" fillOpacity="0.5" stroke="white" strokeWidth="1.5" />
            <path d="M68 66L92 52V82L68 96Z" fill="#635BFF" fillOpacity="0.5" stroke="white" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "chain" || type === "plug") {
    // Two 3D interlocking glass chain links (Card 04)
    return (
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
        {/* Soft atmospheric purple glow aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
        <svg className="w-full h-full relative z-10 drop-shadow-[0_14px_28px_rgba(99,91,255,0.3)]" viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="chainGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#EDE9FE" stopOpacity="0.85" />
              <stop offset="85%" stopColor="#C4B5FD" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="chainGrad2" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#EDE9FE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <g transform="translate(14, 14) rotate(-35 60 60)">
            {/* Link 1 (Back Link) */}
            <rect x="20" y="38" width="56" height="34" rx="17" fill="none" stroke="url(#chainGrad1)" strokeWidth="12" />
            <rect x="20" y="38" width="56" height="34" rx="17" fill="none" stroke="white" strokeWidth="2.5" />
            
            {/* Interlocking Link 2 (Front Link) */}
            <rect x="52" y="38" width="56" height="34" rx="17" fill="none" stroke="url(#chainGrad2)" strokeWidth="12" />
            <rect x="52" y="38" width="56" height="34" rx="17" fill="none" stroke="white" strokeWidth="2.5" />

            {/* Overlap Interlock Patch */}
            <path
              d="M52 46a17 17 0 0 1 12-8h16"
              stroke="url(#chainGrad1)"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M52 46a17 17 0 0 1 12-8h16"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "chart") {
    // Three 3D translucent glass bar chart columns rising in isometric perspective (Card 05)
    return (
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
        {/* Soft atmospheric purple glow aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
        <svg className="w-full h-full relative z-10 drop-shadow-[0_14px_28px_rgba(99,91,255,0.28)]" viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="chartColTop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="chartColSide1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EDE9FE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.65" />
            </linearGradient>
            <linearGradient id="chartColSide2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#635BFF" stopOpacity="0.75" />
            </linearGradient>
          </defs>
          <g transform="translate(18, 14)">
            {/* Front Left Column (Shortest) */}
            <g transform="translate(8, 64)">
              <path d="M14 0L28 8L14 16L0 8Z" fill="url(#chartColTop)" stroke="white" strokeWidth="1.5" />
              <path d="M0 8L14 16V46L0 38Z" fill="url(#chartColSide1)" stroke="white" strokeWidth="1.5" />
              <path d="M14 16L28 8V38L14 46Z" fill="url(#chartColSide2)" stroke="white" strokeWidth="1.5" />
            </g>
            {/* Middle Column (Medium) */}
            <g transform="translate(38, 36)">
              <path d="M14 0L28 8L14 16L0 8Z" fill="url(#chartColTop)" stroke="white" strokeWidth="1.5" />
              <path d="M0 8L14 16V74L0 66Z" fill="url(#chartColSide1)" stroke="white" strokeWidth="1.5" />
              <path d="M14 16L28 8V66L14 74Z" fill="url(#chartColSide2)" stroke="white" strokeWidth="1.5" />
            </g>
            {/* Back Right Column (Tallest) */}
            <g transform="translate(68, 8)">
              <path d="M14 0L28 8L14 16L0 8Z" fill="url(#chartColTop)" stroke="white" strokeWidth="1.5" />
              <path d="M0 8L14 16V102L0 94Z" fill="url(#chartColSide1)" stroke="white" strokeWidth="1.5" />
              <path d="M14 16L28 8V94L14 102Z" fill="url(#chartColSide2)" stroke="white" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    );
  }

  if (type === "doc") {
    // 3D glass document / contract
    return (
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
        <svg className="w-full h-full relative z-10 drop-shadow-[0_14px_28px_rgba(99,91,255,0.28)]" viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="docGrad3D" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <g transform="translate(25, 12) rotate(8 50 60)">
            <rect x="15" y="10" width="70" height="96" rx="12" fill="url(#docGrad3D)" stroke="white" strokeWidth="2.5" />
            <rect x="27" y="24" width="32" height="6" rx="3" fill="#635BFF" />
            <rect x="27" y="38" width="46" height="4" rx="2" fill="#C4B5FD" />
            <rect x="27" y="48" width="40" height="4" rx="2" fill="#DDD6FE" />
            <rect x="27" y="58" width="44" height="4" rx="2" fill="#DDD6FE" />
            <circle cx="62" cy="80" r="12" fill="#635BFF" stroke="white" strokeWidth="2" className="drop-shadow-md" />
            <path d="M57 80l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "truck") {
    // 3D glass delivery / logistics vehicle
    return (
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
        <svg className="w-full h-full relative z-10 drop-shadow-[0_14px_28px_rgba(99,91,255,0.28)]" viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="truckBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.75" />
            </linearGradient>
          </defs>
          <g transform="translate(16, 26)">
            <rect x="10" y="24" width="62" height="46" rx="10" fill="url(#truckBody)" stroke="white" strokeWidth="2" />
            <path d="M72 40h20a10 10 0 0110 10v20H72V40z" fill="#EDE9FE" stroke="white" strokeWidth="2" />
            <path d="M76 45h14a6 6 0 016 6v7H76v-13z" fill="#635BFF" fillOpacity="0.7" />
            <circle cx="32" cy="74" r="10" fill="#635BFF" stroke="white" strokeWidth="2.5" />
            <circle cx="32" cy="74" r="4" fill="white" />
            <circle cx="86" cy="74" r="10" fill="#635BFF" stroke="white" strokeWidth="2.5" />
            <circle cx="86" cy="74" r="4" fill="white" />
            <path d="M2 38h6M-4 48h10M2 58h6" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "shield") {
    // 3D glass security & compliance shield
    return (
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
        <svg className="w-full h-full relative z-10 drop-shadow-[0_16px_32px_rgba(99,91,255,0.3)]" viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="shieldGrad3D" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#EDE9FE" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <g transform="translate(18, 14)">
            <path
              d="M57 14L98 32V72C98 100 57 118 57 118C57 118 16 100 16 72V32L57 14Z"
              fill="url(#shieldGrad3D)"
              stroke="white"
              strokeWidth="2.5"
            />
            <circle cx="57" cy="62" r="14" fill="#635BFF" stroke="white" strokeWidth="2" />
            <path d="M52 60V54a5 5 0 0110 0v6" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="57" cy="62" r="2.5" fill="white" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "cart") {
    // 3D glass e-commerce basket / cart
    return (
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
        <svg className="w-full h-full relative z-10 drop-shadow-[0_14px_28px_rgba(99,91,255,0.28)]" viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="cartGrad3D" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <g transform="translate(18, 18)">
            <path
              d="M20 34h78l-12 44H32L20 34z"
              fill="url(#cartGrad3D)"
              stroke="white"
              strokeWidth="2.5"
            />
            <path d="M12 24h12l8 54" stroke="#635BFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="48" cy="46" r="9" fill="#635BFF" stroke="white" strokeWidth="1.5" />
            <circle cx="68" cy="42" r="11" fill="#A78BFA" stroke="white" strokeWidth="1.5" />
            <circle cx="40" cy="88" r="7" fill="#635BFF" stroke="white" strokeWidth="2" />
            <circle cx="78" cy="88" r="7" fill="#635BFF" stroke="white" strokeWidth="2" />
          </g>
        </svg>
      </div>
    );
  }

  if (type === "phone") {
    // 3D glass phone / voice assistant
    return (
      <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
        <svg className="w-full h-full relative z-10 drop-shadow-[0_14px_28px_rgba(99,91,255,0.28)]" viewBox="0 0 150 150" fill="none">
          <defs>
            <linearGradient id="phoneGrad3D" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.75" />
            </linearGradient>
          </defs>
          <g transform="translate(26, 12) rotate(12 50 60)">
            <rect x="20" y="14" width="56" height="96" rx="14" fill="url(#phoneGrad3D)" stroke="white" strokeWidth="2.5" />
            <rect x="38" y="22" width="20" height="3.5" rx="1.75" fill="#C4B5FD" />
            <path d="M84 40a24 24 0 010 40" stroke="#635BFF" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M92 32a36 36 0 010 56" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
            <circle cx="48" cy="62" r="14" fill="#635BFF" stroke="white" strokeWidth="2" />
            <rect x="45" y="55" width="6" height="10" rx="3" fill="white" />
            <path d="M43 62a5 5 0 0010 0v-2M48 67v3M45 70h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );
  }

  // 3D glass compass dial (Card 06 & fallback)
  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0 select-none pointer-events-none group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 ease-out">
      {/* Soft atmospheric purple glow aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/35 via-[#A78BFA]/25 to-transparent blur-xl rounded-full scale-90" />
      <svg className="w-full h-full relative z-10 drop-shadow-[0_14px_28px_rgba(99,91,255,0.3)]" viewBox="0 0 150 150" fill="none">
        <defs>
          <linearGradient id="compass3D" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#EDE9FE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="needlePurple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5E52F0" />
            <stop offset="100%" stopColor="#4338CA" />
          </linearGradient>
          <linearGradient id="needleLight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <g transform="translate(18, 18)">
          <circle cx="57" cy="57" r="48" fill="url(#compass3D)" stroke="white" strokeWidth="3" />
          <circle cx="57" cy="57" r="38" stroke="#C4B5FD" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
          <circle cx="57" cy="57" r="44" stroke="white" strokeWidth="1" strokeOpacity="0.8" fill="none" />
          <polygon points="57,18 67,57 57,51 47,57" fill="url(#needlePurple)" />
          <polygon points="57,96 67,57 57,51 47,57" fill="url(#needleLight)" />
          <circle cx="57" cy="54" r="5" fill="white" stroke="#5E52F0" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

// Badge pill helper (matching media_1789895085564.jpg)
function CategoryBadge({ label }: { label: string; type?: string }) {
  if (label.includes("Popular")) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#5E52F0]">
        <svg className="w-4 h-4 fill-current text-[#5E52F0]" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <span>{label}</span>
      </span>
    );
  }
  if (label.includes("ROI")) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#5E52F0]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span>{label}</span>
      </span>
    );
  }
  if (label.includes("Custom")) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#5E52F0]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
        <span>{label}</span>
      </span>
    );
  }
  if (label.includes("Essential")) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#5E52F0]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
        <span>{label}</span>
      </span>
    );
  }
  if (label.includes("Data")) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#5E52F0]">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="13" width="3.5" height="8" rx="1.75" />
          <rect x="10.25" y="8" width="3.5" height="13" rx="1.75" />
          <rect x="16.5" y="3" width="3.5" height="18" rx="1.75" />
        </svg>
        <span>{label}</span>
      </span>
    );
  }
  if (label.includes("Strategic") || label.includes("Partner")) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#5E52F0]">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
        <span>{label}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#5E52F0]">
      <span className="w-2 h-2 rounded-full bg-[#5E52F0]" />
      <span>{label}</span>
    </span>
  );
}

export default function ServicesCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("All Services (29)");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"paginated" | "all">("paginated");
  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);

  const categories = [
    "All Services (29)",
    "Support & Sales",
    "Operations & Workflow",
    "Finance & Compliance",
    "Industry Solutions",
    "Intelligence & Data",
  ];

  // Filter logic
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((svc) => {
      const matchCategory =
        activeCategory === "All Services (29)" ||
        svc.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        svc.title.toLowerCase().includes(query) ||
        svc.description.toLowerCase().includes(query) ||
        svc.bullets.some((b) => b.toLowerCase().includes(query)) ||
        svc.metrics.some((m) => m.label.toLowerCase().includes(query) || m.value.toLowerCase().includes(query));

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // 6 cards per page (matching 3x2 grid of media_1789892546170.png)
  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredServices.length / itemsPerPage));

  // Reset page when category or search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // ESC key listener & body scroll lock for modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };
    if (selectedService) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  const displayedServices = useMemo(() => {
    if (viewMode === "all") return filteredServices;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredServices.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredServices, currentPage, viewMode]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#FAF8FF] via-[#F3EDFE]/40 to-[#FAF8FF] text-[#0B0D17]" id="services-list">
      {/* Soft Ambient Background Auras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-[#635BFF]/8 to-[#A78BFA]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#635BFF]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 relative z-10">
        
        {/* ===================== TOP FILTER BAR (EXACT MATCH TO media_1789892546170.png) ===================== */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold tracking-tight transition-all active:scale-95 whitespace-nowrap ${
                    isActive
                      ? "bg-[#635BFF] text-white shadow-[0_4px_16px_rgba(99,91,255,0.35)] scale-[1.02]"
                      : "bg-white text-slate-700 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 shadow-2xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box with Clear Button & Filter Slider Icon on Right */}
          <div className="relative w-full xl:w-80">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, use cases..."
              className="w-full pl-11 pr-14 py-2.5 rounded-full text-xs sm:text-[13px] font-medium bg-white border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#635BFF]/30 focus:border-[#635BFF] text-slate-900 placeholder:text-slate-400 shadow-2xs transition-all"
            />
            {/* Right icons: Clear 'X' if typed, plus Filter Slider Icon */}
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-slate-400">
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="w-4 h-4 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-[10px] font-bold"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
              <svg className="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
          </div>
        </div>

        {/* ===================== SERVICES CARDS GRID ===================== */}
        {displayedServices.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <p className="text-slate-500 text-sm font-medium">
              No services match your search &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All Services (29)");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#635BFF]"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            <AnimatePresence mode="popLayout">
              {displayedServices.map((service) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: TRANSITION_EASE }}
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="relative rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(99,91,255,0.06),0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(99,91,255,0.16),0_6px_16px_rgba(0,0,0,0.04)] hover:border-[#635BFF]/50 hover:-translate-y-1.5 transition-all duration-200 group cursor-pointer"
                >
                {/* Top Section */}
                <div>
                  {/* Top Row: 3D Squircle Icon on Left, Number on Right (Exact media_1789895085564.jpg layout) */}
                  <div className="flex items-start justify-between gap-4">
                    {/* 3D Pillowy Cushion Squircle Badge */}
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-b from-[#FAF8FF] via-[#F2EEFF] to-[#E5DDFF] border border-[#ECE5FE] shadow-[inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(94,82,240,0.12),0_4px_14px_rgba(94,82,240,0.12)] flex items-center justify-center shrink-0">
                      <ServiceIcon type={service.iconType} />
                    </div>

                    {/* Step Number on Top Right */}
                    <span className="text-[13px] sm:text-[14px] font-bold text-slate-400 font-mono tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  {/* Middle Layout: Text on Left, 3D Glass Artwork on Right */}
                  <div className="flex items-start justify-between gap-2.5 sm:gap-3 mt-3 sm:mt-3.5">
                    {/* Left Text Block */}
                    <div className="flex-1 min-w-0 pr-0.5">
                      {/* Title */}
                      <h3 className="text-[18.5px] sm:text-[20px] font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#5E52F0] transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-[12.5px] sm:text-[13px] leading-relaxed mt-1 font-normal line-clamp-2">
                        {service.description}
                      </p>

                      {/* 3 Feature Bullets with Purple Checkmarks */}
                      <div className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2">
                        {service.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[12px] sm:text-[12.5px] font-medium text-slate-700">
                            <span className="w-4 h-4 rounded-full bg-[#5E52F0] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="leading-snug">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right 3D Glass Illustration Artwork */}
                    <CardIllustration type={service.watermark} />
                  </div>
                </div>

                {/* Bottom Section: 3-Column Metrics Container + Action Row */}
                <div className="mt-4 sm:mt-5 pt-0.5 space-y-3 sm:space-y-3.5">
                  {/* 3-Column Metrics Box with Hairline Dividers */}
                  <div className="rounded-xl bg-[#F8F9FD] border border-slate-100 py-2.5 sm:py-3 px-1.5 sm:px-2 grid grid-cols-3 divide-x divide-slate-200/80 items-center text-center">
                    {service.metrics.map((metric, idx) => (
                      <div key={idx} className="px-1 min-w-0 flex flex-col items-center justify-center text-center">
                        <div className="text-[16px] sm:text-[17.5px] font-black tracking-tight text-slate-900 leading-tight">
                          {metric.value}
                        </div>
                        <div className="text-[11px] sm:text-[11.5px] font-medium text-slate-500 mt-0.5 leading-tight text-center break-words max-w-full">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Row: Black Pill Button on Left, Purple Status Tag on Right */}
                  <div className="flex items-center justify-between pt-0.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold text-white bg-[#0F172A] hover:bg-[#1E293B] active:scale-95 transition-all shadow-xs"
                    >
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <CategoryBadge label={service.badge.label} />
                  </div>
                </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* ===================== BOTTOM PAGINATION & CONTROLS ===================== */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/70">
            {/* View Mode Toggle */}
            <div className="inline-flex rounded-full bg-white p-1 border border-slate-200 shadow-2xs text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode("paginated")}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  viewMode === "paginated"
                    ? "bg-[#635BFF] text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Page View (6 per page)
              </button>
              <button
                type="button"
                onClick={() => setViewMode("all")}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  viewMode === "all"
                    ? "bg-[#635BFF] text-white shadow-2xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                View All ({filteredServices.length})
              </button>
            </div>

            {/* Pagination Controls */}
            {viewMode === "paginated" && (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
                  Page {currentPage} of {totalPages}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevPage}
                    aria-label="Previous services page"
                    className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 flex items-center justify-center text-slate-700 shadow-2xs transition-all active:scale-95"
                  >
                    <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPage}
                    aria-label="Next services page"
                    className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 flex items-center justify-center text-slate-700 shadow-2xs transition-all active:scale-95"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* ===================== INTERACTIVE QUICK-VIEW MODAL ===================== */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.28, ease: TRANSITION_EASE }}
              className="relative w-full max-w-xl bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border border-white/80 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold transition-all"
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-white via-[#F6F3FF] to-[#EAE2FE] border border-white shadow-[0_4px_16px_rgba(99,91,255,0.15)] flex items-center justify-center shrink-0">
                  <ServiceIcon type={selectedService.iconType} />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400">SOLUTION {selectedService.number}</span>
                  <h3 className="text-2xl font-black text-slate-950 tracking-tight">{selectedService.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mt-4">
                {selectedService.deepDetails?.overview || selectedService.description}
              </p>

              {/* Metrics */}
              <div className="mt-6 rounded-2xl bg-[#F8F9FD] border border-slate-200/80 p-4 grid grid-cols-3 divide-x divide-slate-200 items-center text-center">
                {selectedService.metrics.map((m, i) => (
                  <div key={i} className="px-2">
                    <div className={`text-xl font-black ${m.highlight ? 'text-[#635BFF]' : 'text-slate-950'}`}>
                      {m.value}
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Bullets */}
              <div className="mt-6 space-y-2.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Key Capabilities</span>
                {selectedService.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                    <span className="w-4 h-4 rounded-full bg-[#ECE7FE] text-[#635BFF] flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Typical deployment: <strong className="text-slate-800">{selectedService.deepDetails?.typicalTimeline || "2 to 4 weeks"}</strong>
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#635BFF] hover:bg-[#5247E6] transition-all shadow-md active:scale-95"
                >
                  <span>Book a Consultation</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
