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
  subTags?: string[];
  category: "Conversational AI & Chatbots" | "Workflow & Automation" | "Document Intelligence" | "Analytics & Custom AI" | "Industry Solutions";
  iconType: string;
  watermark: "bubbles" | "flowchart" | "cube" | "chain" | "chart" | "compass" | "cards" | "plug" | "doc" | "truck" | "shield" | "cart" | "phone";
  deepDetails?: {
    overview: string;
    deliverables: string[];
    typicalTimeline: string;
  };
}

export const SERVICES_DATA: ServiceCardData[] = [
  // ==================== 1. CONVERSATIONAL AI & CHATBOTS ====================
  // 01
  {
    id: 1,
    number: "01",
    title: "AI Chatbots & Customer Support Assistants",
    description: "24/7 intelligent customer support, ticket resolution and multilingual helpdesk assistants across WhatsApp and web.",
    subTags: ["24/7 Support", "WhatsApp & Web", "Ticket Deflection"],
    bullets: [
      "24/7 instant resolution with grounded business knowledge",
      "Seamless human handoff & CRM ticket escalation",
      "Up to 70% support cost reduction & higher CSAT",
    ],
    metrics: [
      { value: "70%", label: "Cost Reduction" },
      { value: "2.5x", label: "Faster Response" },
      { value: "+40%", label: "CSAT Increase" },
    ],
    badge: { label: "Popular Solution", type: "popular" },
    category: "Conversational AI & Chatbots",
    iconType: "chat",
    watermark: "bubbles",
    deepDetails: {
      overview: "Deploys custom AI agents across WhatsApp, website widgets, and internal support channels that resolve repetitive tier-1 & tier-2 queries with human-level empathy and exact database grounding.",
      deliverables: ["Custom WhatsApp & Web Chatbot", "Zendesk/Freshdesk/HubSpot Ticketing Integration", "Real-Time CSAT & Analytics Dashboard"],
      typicalTimeline: "2 to 3 weeks",
    },
  },
  // 02
  {
    id: 2,
    number: "02",
    title: "AI Sales, In-Chat Commerce & Booking Agents",
    description: "Conversational agents that instantly qualify ad leads, take direct orders in chat, recover abandoned carts and schedule calls.",
    subTags: ["Lead Qualification", "WhatsApp Commerce", "Calendar Booking"],
    bullets: [
      "Sub-60s instant lead response & budget intent scoring",
      "In-chat catalog browsing, ordering, and cart recovery",
      "2-way automated calendar scheduling with sales reps",
    ],
    metrics: [
      { value: "3.5h → 52s", label: "Response Speed" },
      { value: "+31%", label: "Cart Recovery" },
      { value: "28x", label: "Campaign ROI", highlight: true },
    ],
    badge: { label: "High ROI", type: "roi" },
    category: "Conversational AI & Chatbots",
    iconType: "cart",
    watermark: "cards",
    deepDetails: {
      overview: "Combines fast conversational sales, automated qualification, WhatsApp product ordering, and calendar booking into a single high-conversion sales engine that converts traffic into paying clients 24/7.",
      deliverables: ["WhatsApp & Web Lead Qualification Engine", "In-Chat Catalog, Cart & Stripe/Razorpay Checkout", "Google Calendar & Outlook 2-Way Sync"],
      typicalTimeline: "2 to 4 weeks",
    },
  },
  // 03
  {
    id: 3,
    number: "03",
    title: "AI Voice Agents & Autonomous Receptionists",
    description: "Ultra-realistic conversational voice bots for inbound call handling, appointment scheduling, and caller qualification.",
    subTags: ["Voice AI", "Phone Receptionist", "Inbound & Outbound"],
    bullets: [
      "Sub-second voice latency with natural speech cadence",
      "Automated call screening, FAQs & emergency routing",
      "Integrates directly with your telephony (Twilio, VoIP, PBX)",
    ],
    metrics: [
      { value: "<600ms", label: "Voice Latency" },
      { value: "-70%", label: "Call Center Cost" },
      { value: "99.2%", label: "Call Answer Rate", highlight: true },
    ],
    badge: { label: "Voice AI", type: "custom" },
    category: "Conversational AI & Chatbots",
    iconType: "phone",
    watermark: "phone",
    deepDetails: {
      overview: "Custom voice agents that answer inbound calls instantly, qualify caller intent, answer complex FAQs, and book appointments or warm-transfer high-priority callers to human staff.",
      deliverables: ["Custom Telephony & VoIP Integration", "Natural Speech Synthesis & Grounded Knowledge", "Call Recordings, Transcriptions & CRM Sync"],
      typicalTimeline: "3 to 4 weeks",
    },
  },
  // 04
  {
    id: 4,
    number: "04",
    title: "Enterprise RAG Knowledge Assistant",
    description: "Private ChatGPT over your company documents, Notion, Google Drive, manuals, and internal databases with strict permissions.",
    subTags: ["Private RAG", "Company Wiki", "Role-Based Access"],
    bullets: [
      "Zero data leakage with enterprise-grade data isolation",
      "Instant citation & page-reference verification",
      "Drastically speeds up internal team onboarding and research",
    ],
    metrics: [
      { value: "100%", label: "Private Data" },
      { value: "8.5h → 15m", label: "Search Time" },
      { value: "99.4%", label: "Citation Accuracy", highlight: true },
    ],
    badge: { label: "Enterprise Security", type: "enterprise" },
    category: "Conversational AI & Chatbots",
    iconType: "database",
    watermark: "doc",
    deepDetails: {
      overview: "Builds a grounded, hallucination-resistant knowledge base across your company's scattered files, spreadsheets, and SOPs, allowing employees to query company intelligence securely.",
      deliverables: ["Secure Vector Database & Hybrid Search", "Granular Role-Based Access Control (RBAC)", "Slack & Microsoft Teams Embedded Bots"],
      typicalTimeline: "3 to 5 weeks",
    },
  },

  // ==================== 2. WORKFLOW & AUTOMATION ====================
  // 05
  {
    id: 5,
    number: "05",
    title: "Intelligent Process Automation (IPA)",
    description: "Automate repetitive data-entry, approvals, cross-tool handoffs and routine operations across your stack.",
    subTags: ["Workflow Automation", "Zero Manual Entry", "Error-Proof"],
    bullets: [
      "Connects disparate cloud apps and legacy systems",
      "Automated validation, routing, and exception alerting",
      "Eliminates 80%+ of repetitive administrative work",
    ],
    metrics: [
      { value: "60%", label: "Time Saved" },
      { value: "45%", label: "Operational Cost ↓" },
      { value: "3–6", label: "Months ROI" },
    ],
    badge: { label: "High ROI", type: "roi" },
    category: "Workflow & Automation",
    iconType: "gear",
    watermark: "flowchart",
    deepDetails: {
      overview: "Eliminates repetitive data-entry and manual coordination by linking Notion, Slack, Google Workspace, and proprietary ERPs into automated pipelines.",
      deliverables: ["End-to-End Workflow Automations", "Error Handling & Fallback Pipelines", "Audit Trails & System Logging"],
      typicalTimeline: "2 to 4 weeks",
    },
  },
  // 06
  {
    id: 6,
    number: "06",
    title: "System Integrations & Custom API Connectors",
    description: "Connect your fragmented CRM, ERP, billing and operational tools for real-time bi-directional data flow.",
    subTags: ["API Pipelines", "Two-Way Sync", "Custom Webhooks"],
    bullets: [
      "Custom REST, GraphQL and webhook event pipelines",
      "Real-time two-way synchronization with zero data loss",
      "Replaces fragile spreadsheets and manual exports",
    ],
    metrics: [
      { value: "50%", label: "Less Manual Work" },
      { value: "3x", label: "Data Accessibility" },
      { value: "2–4", label: "Months ROI" },
    ],
    badge: { label: "Essential", type: "custom" },
    category: "Workflow & Automation",
    iconType: "link",
    watermark: "chain",
    deepDetails: {
      overview: "Synchronizes data in real-time across fragmented business systems, legacy databases, and modern SaaS APIs with zero data loss.",
      deliverables: ["Custom REST/GraphQL Webhooks", "Automated Two-Way Database Sync", "Zero-Downtime Monitoring"],
      typicalTimeline: "2 to 4 weeks",
    },
  },
  // 07
  {
    id: 7,
    number: "07",
    title: "Autonomous Multi-Agent Systems & Workforce",
    description: "Deploy multi-agent teams that collaborate to automate complex multi-step research, ops and reporting tasks.",
    subTags: ["Multi-Agent AI", "Autonomous Ops", "Executive Reporting"],
    bullets: [
      "Autonomous agents dividing complex tasks into subtasks",
      "Zero-touch CRM data cleansing, enrichment and scoring",
      "Automated executive briefings and weekly slide generation",
    ],
    metrics: [
      { value: "20 → 2 hrs", label: "Task Time / Wk" },
      { value: "3h → 0", label: "Reporting Hours" },
      { value: "7,450%", label: "Measured ROI", highlight: true },
    ],
    badge: { label: "Next-Gen AI", type: "enterprise" },
    category: "Workflow & Automation",
    iconType: "layers",
    watermark: "cards",
    deepDetails: {
      overview: "Orchestrates multiple autonomous AI agents that collaborate on complex tasks, verifying each other's outputs, enriching CRM records, and delivering ready-to-present management summaries.",
      deliverables: ["Autonomous Multi-Agent Swarm Framework", "Task Routing & Verification Protocol", "Automated Weekly Executive Briefings"],
      typicalTimeline: "3 to 6 weeks",
    },
  },

  // ==================== 3. DOCUMENT INTELLIGENCE ====================
  // 08
  {
    id: 8,
    number: "08",
    title: "AI Document Extraction & Accounts Payable",
    description: "Extracts structured line-item data from invoices, POs, bank statements and forms directly into your ERP.",
    subTags: ["Invoices & POs", "OCR & Line Items", "ERP Ingestion"],
    bullets: [
      "Precision OCR across printed, scanned and handwritten PDFs",
      "Automated 3-way matching (PO vs. Invoice vs. Receipt)",
      "Direct ingestion into Tally, SAP, QuickBooks and NetSuite",
    ],
    metrics: [
      { value: "~90s", label: "Per Document" },
      { value: "-85%", label: "AP Processing Cost" },
      { value: "99.2%", label: "Extraction Accuracy", highlight: true },
    ],
    badge: { label: "High ROI", type: "roi" },
    category: "Document Intelligence",
    iconType: "fileText",
    watermark: "doc",
    deepDetails: {
      overview: "Automates end-to-end accounts payable and document ingestion. Extracts vendor data, totals, taxes, and line-items from email attachments and synchronizes directly with accounting systems.",
      deliverables: ["Multi-Format OCR Extraction Pipeline", "Automated 3-Way Matching Logic", "ERP & Accounting System Sync"],
      typicalTimeline: "2 to 4 weeks",
    },
  },
  // 09
  {
    id: 9,
    number: "09",
    title: "RFP, Tender & Contract Intelligence",
    description: "Parses 200+ page tenders, RFPs and contracts to extract compliance matrices, risks and draft bid proposals.",
    subTags: ["Tender Intelligence", "RFP Parsing", "Risk Extraction"],
    bullets: [
      "Automated extraction of clauses, deadlines and deliverables",
      "Instant compliance checklist and disqualifier flagging",
      "First-draft technical response generation from past wins",
    ],
    metrics: [
      { value: "1wk → 15m", label: "Analysis Time" },
      { value: "+25%", label: "Bid Win Rate" },
      { value: "98.7%", label: "Extraction Accuracy", highlight: true },
    ],
    badge: { label: "Enterprise", type: "enterprise" },
    category: "Document Intelligence",
    iconType: "gavel",
    watermark: "doc",
    deepDetails: {
      overview: "Ingests massive government and enterprise RFPs, highlighting strict qualification criteria, submission deadlines, and generating compliance verification matrices in minutes.",
      deliverables: ["RFP Ingestion & Compliance Matrix Generator", "Bid Risk & Disqualification Alert Engine", "Proposal Drafting Assistant"],
      typicalTimeline: "3 to 5 weeks",
    },
  },

  // ==================== 4. ANALYTICS & CUSTOM AI ====================
  // 10
  {
    id: 10,
    number: "10",
    title: "Predictive Analytics & Executive BI",
    description: "Converts raw customer interactions, revenue metrics and chat logs into predictive executive intelligence.",
    subTags: ["Executive BI", "Sentiment Analysis", "Churn Prediction"],
    bullets: [
      "Real-time executive dashboards & automated morning summaries",
      "Multi-channel sentiment analysis & early churn detection",
      "Predictive revenue forecasting and anomaly alerts",
    ],
    metrics: [
      { value: "2–5x", label: "Faster Decisions" },
      { value: "+20%", label: "Sales Uplift" },
      { value: "4.5+", label: "Avg CSAT Score", highlight: true },
    ],
    badge: { label: "Data-Driven", type: "roi" },
    category: "Analytics & Custom AI",
    iconType: "chart",
    watermark: "chart",
    deepDetails: {
      overview: "Extracts data from multiple sales, accounting, and customer interaction channels to generate daily executive digests, sentiment alerts, and predictive business forecasts.",
      deliverables: ["Automated Executive Briefings", "Anomaly Detection Alerts", "Interactive BI Dashboards"],
      typicalTimeline: "3 to 5 weeks",
    },
  },
  // 11
  {
    id: 11,
    number: "11",
    title: "Custom Enterprise AI Models & Fine-Tuning",
    description: "Bespoke AI architectures and domain-specific LLMs built for unique proprietary enterprise workflows.",
    subTags: ["Custom LLMs", "Fine-Tuning", "Private Hosting"],
    bullets: [
      "Domain-specific model adaptation and fine-tuning",
      "On-premise or sovereign private cloud deployment",
      "End-to-end implementation with enterprise SLA",
    ],
    metrics: [
      { value: "2–10x", label: "Productivity Gain" },
      { value: "30–50%", label: "Cost Reduction" },
      { value: "3–6", label: "Months ROI" },
    ],
    badge: { label: "Custom Build", type: "custom" },
    category: "Analytics & Custom AI",
    iconType: "cube",
    watermark: "cube",
    deepDetails: {
      overview: "Bespoke AI architectures tailored to unique proprietary data, strict compliance mandates, and specialized industry vocabulary.",
      deliverables: ["Fine-Tuned LLM Models", "Secure RAG Infrastructure", "Production SLA & Monitoring"],
      typicalTimeline: "4 to 8 weeks",
    },
  },
  // 12
  {
    id: 12,
    number: "12",
    title: "AI Consulting & Strategic Roadmap",
    description: "Expert architectural audits to identify highest-ROI automation opportunities and design 90-day execution plans.",
    subTags: ["AI Audit", "ROI Forecast", "90-Day Roadmap"],
    bullets: [
      "Comprehensive workflow audit & automation feasibility matrix",
      "Projected ROI, cost breakdown and vendor tool evaluation",
      "Phased rollout strategy with hands-on executive guidance",
    ],
    metrics: [
      { value: "Clear", label: "90-Day Roadmap" },
      { value: "Highest", label: "ROI Success" },
      { value: "Long-Term", label: "Scalability" },
    ],
    badge: { label: "Strategic Partner", type: "enterprise" },
    category: "Analytics & Custom AI",
    iconType: "shield",
    watermark: "compass",
    deepDetails: {
      overview: "Comprehensive audit of your workflows to map the highest-ROI automation opportunities, ROI forecasts, and technology selection.",
      deliverables: ["Automation Feasibility Matrix", "ROI & Cost Breakdown", "Detailed 90-Day Roadmap"],
      typicalTimeline: "1 to 2 weeks",
    },
  },

  // ==================== 5. INDUSTRY SOLUTIONS ====================
  // 13
  {
    id: 13,
    number: "13",
    title: "Real Estate & Property Pipeline Automation",
    description: "Automates buyer qualification, WhatsApp property matching, virtual tours and site-visit scheduling.",
    subTags: ["Real Estate", "Site-Visit Booking", "WhatsApp Pipeline"],
    bullets: [
      "Instant buyer budget & preference qualification via WhatsApp",
      "Automated site-visit calendar coordination & broker routing",
      "Re-engagement campaigns for stale property inquiries",
    ],
    metrics: [
      { value: "82%", label: "Site Visits Scheduled" },
      { value: "4.8x", label: "Pipeline Velocity" },
      { value: "₹1.2Cr+", label: "Attributed Deals", highlight: true },
    ],
    badge: { label: "Industry Solution", type: "industry" },
    category: "Industry Solutions",
    iconType: "building",
    watermark: "compass",
    deepDetails: {
      overview: "Connects real estate ad campaigns directly to WhatsApp bots that qualify buyer budgets, share brochures and floor plans, and book site-visits directly onto agents' calendars.",
      deliverables: ["Real Estate Lead Qualification Bot", "Brochure & Floorplan Dispatch Flow", "Broker Calendar & Site-Visit Dispatch"],
      typicalTimeline: "2 to 3 weeks",
    },
  },
  // 14
  {
    id: 14,
    number: "14",
    title: "BFSI Collections & Loan Lifecycle Automation",
    description: "Automates pre-due reminders, payment collection links, and compliant loan notification workflows.",
    subTags: ["BFSI / FinTech", "Debt Collections", "Compliance"],
    bullets: [
      "Conversational promise-to-pay capture via WhatsApp & SMS",
      "Compliant, auditable regulatory communication logs",
      "Up to 70% reduction in outbound dialer costs",
    ],
    metrics: [
      { value: "85%", label: "Connectivity Rate" },
      { value: "-70%", label: "Dialer Costs" },
      { value: "-42%", label: "Overdue EMIs", highlight: true },
    ],
    badge: { label: "BFSI", type: "enterprise" },
    category: "Industry Solutions",
    iconType: "bank",
    watermark: "chart",
    deepDetails: {
      overview: "Automates pre-due and overdue payment collections with multi-channel payment link delivery and AI-driven conversational payment promises.",
      deliverables: ["Omnichannel Payment Reminder Bot", "Promise-to-Pay Logging Engine", "Regulatory Compliance Audit Logs"],
      typicalTimeline: "3 to 4 weeks",
    },
  },
  // 15
  {
    id: 15,
    number: "15",
    title: "Education & Admissions Funnel Automation",
    description: "Automates student inquiry-to-enrolment pipelines across web, social campaigns, and WhatsApp.",
    subTags: ["EdTech / Higher Ed", "Admissions Funnel", "Auto-Followups"],
    bullets: [
      "24/7 instant course inquiry counseling & fee FAQs",
      "Automated document verification checklist follow-ups",
      "Direct calendar booking with academic admissions counselors",
    ],
    metrics: [
      { value: "64%", label: "Enrollment Lift" },
      { value: "3.2x", label: "Faster Processing" },
      { value: "-50%", label: "Drop-off Rate", highlight: true },
    ],
    badge: { label: "Education", type: "industry" },
    category: "Industry Solutions",
    iconType: "graduation",
    watermark: "doc",
    deepDetails: {
      overview: "Drives prospective student inquiries from ads to completed application submissions with automated document collection and counselor booking.",
      deliverables: ["Admissions Inquiry Counselor Bot", "Document Upload & Verification Flow", "Counselor Scheduling Integration"],
      typicalTimeline: "2 to 3 weeks",
    },
  },
  // 16
  {
    id: 16,
    number: "16",
    title: "Supply Chain, Logistics & Field Service Dispatch",
    description: "Automates dealer orders, shipment tracking, warranty visual OCR and field-technician dispatch.",
    subTags: ["Supply Chain", "Distributor Orders", "Field Dispatch"],
    bullets: [
      "24/7 WhatsApp dealer ordering & tier-discount verification",
      "Real-time GPS shipment tracking & delivery notifications",
      "Visual OCR on warranty labels with auto-technician routing",
    ],
    metrics: [
      { value: "48h → <2h", label: "Order Processing" },
      { value: "80%", label: "Auto-Resolved" },
      { value: "₹50L+", label: "Annual Savings", highlight: true },
    ],
    badge: { label: "Supply Chain", type: "industry" },
    category: "Industry Solutions",
    iconType: "truck",
    watermark: "truck",
    deepDetails: {
      overview: "Streamlines B2B distributor re-orders, shipment visibility, and warranty claim handling through WhatsApp automation and smart geolocation technician dispatch.",
      deliverables: ["Distributor Ordering Portal & WhatsApp Bot", "Live GPS Shipment Tracking Webhooks", "Warranty OCR & Field Dispatch Engine"],
      typicalTimeline: "3 to 5 weeks",
    },
  },
  // 17
  {
    id: 17,
    number: "17",
    title: "Brand Protection & Marketplace Monitoring",
    description: "Monitors e-commerce listings 24/7 to detect unauthorized sellers, counterfeiters and MAP pricing violations.",
    subTags: ["E-Commerce", "Brand Protection", "MAP Pricing"],
    bullets: [
      "Automated scraping across Amazon, Flipkart, Blinkit & Zepto",
      "Instant MAP price-drop and rogue reseller alerts",
      "Automated takedown notices and evidence archival",
    ],
    metrics: [
      { value: "400+", label: "SKUs Monitored" },
      { value: "24/7", label: "Live Detection" },
      { value: "-60%", label: "Margin Leakage", highlight: true },
    ],
    badge: { label: "Brand Security", type: "enterprise" },
    category: "Industry Solutions",
    iconType: "shieldCheck",
    watermark: "shield",
    deepDetails: {
      overview: "24/7 crawler monitoring unauthorized third-party listings, MAP pricing breaches, and counterfeit products across major online marketplaces.",
      deliverables: ["24/7 Marketplace Scraping & Alert Bot", "MAP Compliance Violation Reports", "Automated Takedown Evidence Package"],
      typicalTimeline: "2 to 3 weeks",
    },
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
  const [activeCategory, setActiveCategory] = useState<string>("All Services (17)");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"paginated" | "all">("paginated");
  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);

  const categories = [
    "All Services (17)",
    "Conversational AI & Chatbots",
    "Workflow & Automation",
    "Document Intelligence",
    "Analytics & Custom AI",
    "Industry Solutions",
  ];

  // Filter logic
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((svc) => {
      const matchCategory =
        activeCategory === "All Services (17)" ||
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
          {/* Filter Pills - Horizontally scrollable on mobile, wrapping on desktop */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1.5 sm:pb-0 sm:flex-wrap no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold tracking-tight transition-all active:scale-95 whitespace-nowrap shrink-0 ${
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
                setActiveCategory("All Services (17)");
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
                  className="relative rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(99,91,255,0.06),0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(99,91,255,0.16),0_6px_16px_rgba(0,0,0,0.04)] hover:border-[#635BFF]/50 hover:-translate-y-1.5 transition-all duration-200 group cursor-pointer h-full"
                >
                {/* Top Section */}
                <div className="flex-1 flex flex-col">
                  {/* Top Row: 3D Squircle Icon on Left, Number on Right */}
                  <div className="flex items-center justify-between gap-4 h-11 sm:h-12 shrink-0">
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
                  <div className="flex items-start justify-between gap-2.5 sm:gap-3 mt-3 sm:mt-3.5 flex-1">
                    {/* Left Text Block */}
                    <div className="flex-1 min-w-0 pr-0.5 flex flex-col">
                      {/* Title - Consistent Baseline Height */}
                      <div className="min-h-[50px] sm:min-h-[54px] flex items-center">
                        <h3 className="text-[17.5px] sm:text-[19px] font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#5E52F0] transition-colors [text-wrap:balance] break-normal [hyphens:none]">
                          {service.title}
                        </h3>
                      </div>

                      {/* Grouped Capability Pills - Consistent Baseline Height */}
                      <div className="min-h-[26px] sm:min-h-[28px] flex items-center mt-2 mb-1.5">
                        {service.subTags && service.subTags.length > 0 && (
                          <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {service.subTags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[10.5px] font-bold bg-[#F4F1FD] text-[#635BFF] border border-[#E4DCFC] whitespace-nowrap"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Description - Consistent Baseline Height */}
                      <p className="text-slate-500 text-[12.5px] sm:text-[13px] leading-relaxed font-normal line-clamp-2 min-h-[38px] sm:min-h-[40px] break-normal [hyphens:none]">
                        {service.description}
                      </p>

                      {/* 3 Feature Bullets - Consistent Baseline Height */}
                      <div className="mt-3 space-y-2 min-h-[88px] sm:min-h-[92px] flex flex-col justify-start">
                        {service.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[12px] sm:text-[12.5px] font-medium text-slate-700">
                            <span className="w-4 h-4 rounded-full bg-[#5E52F0] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="leading-snug break-normal [hyphens:none]">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right 3D Glass Illustration Artwork */}
                    <div className="shrink-0 pt-0.5">
                      <CardIllustration type={service.watermark} />
                    </div>
                  </div>
                </div>

                {/* Bottom Section: 3-Column Metrics Container + Action Row - Always Level Across Row */}
                <div className="mt-auto pt-4 space-y-3.5">
                  {/* 3-Column Metrics Box with Hairline Dividers */}
                  <div className="rounded-xl bg-[#F8F9FD] border border-slate-100 py-2.5 sm:py-3 px-1 sm:px-2 grid grid-cols-3 divide-x divide-slate-200/80 items-center text-center">
                    {service.metrics.map((metric, idx) => {
                      const hasArrow = metric.value.includes("→");
                      return (
                        <div key={idx} className="px-1 min-w-0 flex flex-col items-center justify-center text-center">
                          <div className="h-[22px] flex items-center justify-center">
                            {hasArrow ? (
                              <span className="text-[12.5px] xs:text-[13.5px] sm:text-[14.5px] font-black tracking-tight text-slate-900 whitespace-nowrap tabular-nums inline-flex items-center justify-center gap-0.5">
                                <span>{metric.value.split("→")[0].trim()}</span>
                                <span className="text-[#635BFF] font-bold mx-0.5">→</span>
                                <span>{metric.value.split("→")[1].trim()}</span>
                              </span>
                            ) : (
                              <span className="text-[14px] sm:text-[16px] font-black tracking-tight text-slate-900 whitespace-nowrap tabular-nums">
                                {metric.value}
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-tight text-center line-clamp-1 h-[18px] flex items-center justify-center break-normal [hyphens:none]">
                            {metric.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Row: Black Pill Button on Left, Status Tag on Right */}
                  <div className="flex items-center justify-between pt-0.5 h-[38px]">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="inline-flex items-center gap-2 px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-bold text-white bg-[#0F172A] hover:bg-[#1E293B] active:scale-95 transition-all shadow-xs group/btn"
                    >
                      <span className="whitespace-nowrap">Learn More</span>
                      <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.28, ease: TRANSITION_EASE }}
              className="relative w-full max-w-xl max-h-[88vh] overflow-y-auto bg-white rounded-[24px] sm:rounded-[32px] p-4.5 sm:p-8 shadow-2xl border border-white/80"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold transition-all z-10"
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex items-center gap-3.5 sm:gap-4 pr-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-white via-[#F6F3FF] to-[#EAE2FE] border border-white shadow-[0_4px_16px_rgba(99,91,255,0.15)] flex items-center justify-center shrink-0">
                  <ServiceIcon type={selectedService.iconType} />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-400">SOLUTION {selectedService.number}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">{selectedService.title}</h3>
                  {selectedService.subTags && selectedService.subTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedService.subTags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#F4F1FD] text-[#635BFF] border border-[#E4DCFC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-4">
                {selectedService.deepDetails?.overview || selectedService.description}
              </p>

              {/* Metrics */}
              <div className="mt-5 sm:mt-6 rounded-2xl bg-[#F8F9FD] border border-slate-200/80 p-3 sm:p-4 grid grid-cols-3 divide-x divide-slate-200 items-center text-center">
                {selectedService.metrics.map((m, i) => {
                  const hasArrow = m.value.includes("→");
                  return (
                    <div key={i} className="px-1.5 sm:px-2">
                      <div className={`text-base sm:text-lg font-black whitespace-nowrap tabular-nums ${m.highlight ? 'text-[#635BFF]' : 'text-slate-950'}`}>
                        {hasArrow ? (
                          <span className="inline-flex items-center justify-center gap-1">
                            <span>{m.value.split("→")[0].trim()}</span>
                            <span className="text-[#635BFF] font-bold">→</span>
                            <span>{m.value.split("→")[1].trim()}</span>
                          </span>
                        ) : (
                          m.value
                        )}
                      </div>
                      <div className="text-[10.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 whitespace-nowrap">
                        {m.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Feature Bullets */}
              <div className="mt-5 sm:mt-6 space-y-2.5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Key Capabilities</span>
                {selectedService.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
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
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <span className="text-xs text-slate-500">
                  Typical deployment: <strong className="text-slate-800">{selectedService.deepDetails?.typicalTimeline || "2 to 4 weeks"}</strong>
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#635BFF] hover:bg-[#5247E6] transition-all shadow-md active:scale-95 w-full sm:w-auto text-center"
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
