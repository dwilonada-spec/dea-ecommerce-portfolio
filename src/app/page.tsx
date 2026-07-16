"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const CONTACT_EMAIL = "dwilona.da@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/deaawilona";
const RESUME_URL = "/Dea_Annisa_Wilona_Resume.pdf";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Evidence", href: "#evidence" },
  { label: "Case Study", href: "#case-study" },
  { label: "Projects", href: "#projects" },
  { label: "Results", href: "#results" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "5+", label: "Years in ecommerce", proof: "Live operating experience across marketplace and social commerce channels." },
  { value: "2,000+", label: "SKUs managed", proof: "Catalog, listing, attributes, visibility, and marketplace readiness." },
  { value: "50,000+", label: "Orders coordinated", proof: "Order flow, fulfillment, returns, customer support, and tracking controls." },
  { value: "300+", label: "Campaigns executed", proof: "Vouchers, pricing, seasonal events, ads, and double-date campaigns." },
  { value: "100+", label: "SOPs developed", proof: "CS, fulfillment, HR, inventory, returns, COD, QC, KPI, and marketplace workflows." },
  { value: "5", label: "Marketplaces managed", proof: "Shopee, TikTok Shop, Tokopedia, Zalora, and Lazada exposure." },
  { value: "3", label: "Brands operated", proof: "Reven, HelloBare, and NA-IVE operating evidence appears in the portfolio." },
  { value: "6+", label: "Team members led", proof: "Cross-functional work across CS, admin, content, fulfillment, and operations." },
];

const transformations = [
  {
    before: "Orders tracked manually",
    after: "Order dashboard used to coordinate 50,000+ marketplace orders",
  },
  {
    before: "Revenue checked per platform",
    after: "Seller-center dashboards reviewed across Shopee, TikTok Shop, Tokopedia, and Zalora",
  },
  {
    before: "Knowledge stayed in chat",
    after: "100+ SOPs organized into a working operations library",
  },
  {
    before: "Team performance was subjective",
    after: "KPI system made review, coaching, and accountability measurable",
  },
  {
    before: "CS coverage depended on memory",
    after: "Customer service schedule created daily ownership and handoff clarity",
  },
  {
    before: "Marketplace launch was a checklist risk",
    after: "Zalora launch connected catalog setup, orders, revenue, and ads tracking",
  },
];

const projects = [
  {
    title: "Scaled Multi-Brand Ecommerce Operations",
    problem: "Marketplace execution depended on manual follow-up, owner memory, and scattered reporting.",
    actions: ["Built order, revenue, ads, and KPI dashboards", "Connected SOPs with Discord task routines", "Reviewed execution through weekly operating checks"],
    outcome: "Centralized daily control for 2,000+ SKUs and 50,000+ coordinated orders.",
    skills: ["Marketplace Ops", "Dashboards", "Team Coordination"],
  },
  {
    title: "HelloBare Marketplace Expansion to Zalora",
    problem: "Zalora required stricter catalog, product attribute, image, and seller-center discipline.",
    actions: ["Prepared marketplace-ready product catalog", "Set up storefront and seller-center operations", "Tracked revenue, orders, and sponsored ads after launch"],
    outcome: "Supported marketplace expansion with storefront, order, revenue, and ads evidence.",
    skills: ["Zalora", "Catalog Ops", "Marketplace Launch"],
  },
  {
    title: "NA-IVE Brand Launch",
    problem: "A new leather goods brand needed channels, product presentation, and operating routines from zero.",
    actions: ["Built Shopee and TikTok Shop presence", "Coordinated content and product display", "Linked storefront work with fulfillment and risk workflows"],
    outcome: "Moved the brand from concept into active marketplace and social commerce channels.",
    skills: ["Brand Launch", "Shopee", "TikTok Shop"],
  },
  {
    title: "KPI and Performance Management System",
    problem: "Team performance was hard to evaluate without shared targets and review evidence.",
    actions: ["Designed KPI scoring by role", "Built weekly monitoring sheets", "Connected review notes to operational behavior"],
    outcome: "Improved accountability and made coaching less subjective.",
    skills: ["KPI Design", "People Ops", "Google Sheets"],
  },
  {
    title: "SOP and Workflow Standardization",
    problem: "Critical work depended on individual memory as order volume, SKUs, and team responsibility grew.",
    actions: ["Built SOP master lists", "Documented CS, fulfillment, HR, return, COD, QC, and inventory procedures", "Defined repeatable standards for training and handoff"],
    outcome: "Reduced dependency on memory and made execution easier to repeat.",
    skills: ["SOPs", "Documentation", "Process Improvement"],
  },
  {
    title: "AI-Assisted Operations",
    problem: "SOP writing, reporting, SEO, HR documentation, and admin tasks took too much operator time.",
    actions: ["Used ChatGPT, Codex, and Gemini for structured documentation", "Built prompts for SOP, KPI, marketplace, SEO, HR, and content workflows", "Kept human review in business decisions"],
    outcome: "Improved documentation speed while preserving operator judgment.",
    skills: ["ChatGPT", "Codex", "Gemini"],
  },
];

const evidenceItems = [
  {
    title: "Content Production Tracker",
    image: "/evidence/content-production-lists.webp",
    purpose: "Production sheet for product videos, campaign content, due dates, status, and approvals.",
    problem: "Keeps content execution from becoming scattered across chat and memory.",
    skills: ["Google Sheets", "Content Ops", "Campaign Readiness"],
    project: "NA-IVE Brand Launch",
  },
  {
    title: "Customer Service Schedule",
    image: "/evidence/customer-service-schedule.webp",
    purpose: "Daily CS coverage plan with ownership, handoff, and escalation windows.",
    problem: "Protects response consistency when several people support the same store.",
    skills: ["CS Operations", "Scheduling", "Team Coordination"],
    project: "Scaled Multi-Brand Ecommerce Operations",
  },
  {
    title: "Discord Team Operating Cadence",
    image: "/evidence/discord-team-communication.webp",
    purpose: "Daily checklist and task communication for a distributed operating team.",
    problem: "Makes work visible so follow-up does not depend on one person remembering everything.",
    skills: ["Async Ops", "Team Management", "Workflow Control"],
    project: "KPI and Performance Management System",
  },
  {
    title: "HelloBare Zalora Storefront",
    image: "/evidence/hellobare-zalora-landing-page.webp",
    purpose: "Customer-facing proof of a completed Zalora marketplace launch.",
    problem: "Shows catalog and storefront execution beyond an internal launch plan.",
    skills: ["Zalora", "Catalog Launch", "Marketplace Compliance"],
    project: "HelloBare Marketplace Expansion to Zalora",
  },
  {
    title: "HelloBare Zalora Revenue Dashboard",
    image: "/evidence/hellobare-zalora-revenue-2026.webp",
    purpose: "Revenue dashboard used after the Zalora launch.",
    problem: "Connects marketplace setup with sales review and channel traction.",
    skills: ["Revenue Tracking", "Seller Center", "Performance Review"],
    project: "HelloBare Marketplace Expansion to Zalora",
  },
  {
    title: "KPI 2026 System",
    image: "/evidence/kpi-2026.webp",
    purpose: "Role-based KPI sheet with scores, targets, notes, and review signals.",
    problem: "Turns team evaluation into a measurable operating habit.",
    skills: ["KPI Design", "Performance Review", "People Operations"],
    project: "KPI and Performance Management System",
  },
  {
    title: "NA-IVE Instagram Channel",
    image: "/evidence/na-ive-instagram.webp",
    purpose: "Brand channel supporting product trust and marketplace traffic.",
    problem: "Gives a new brand proof outside seller-center listings.",
    skills: ["Content Coordination", "Brand Consistency", "Social Commerce"],
    project: "NA-IVE Brand Launch",
  },
  {
    title: "NA-IVE Shopee Brand Landing Page",
    image: "/evidence/na-ive-shopee-landing-page-2.webp",
    purpose: "Shopee storefront merchandising for product positioning and first impression.",
    problem: "Improves shopper understanding before they compare individual listings.",
    skills: ["Shopee", "Storefront Merchandising", "Product Presentation"],
    project: "NA-IVE Brand Launch",
  },
  {
    title: "NA-IVE Shopee Product Blocks",
    image: "/evidence/na-ive-shopee-landing-page-3.webp",
    purpose: "Product grouping and browsing structure inside Shopee.",
    problem: "Prevents listings from feeling like an unorganized product dump.",
    skills: ["Marketplace UX", "Listing Structure", "Visual Systems"],
    project: "NA-IVE Brand Launch",
  },
  {
    title: "NA-IVE Shopee Seller Page",
    image: "/evidence/na-ive-shopee-landing-page.webp",
    purpose: "Seller page with brand identity, vouchers, product recommendations, and navigation.",
    problem: "Connects promotion setup with store browsing behavior.",
    skills: ["Shopee Seller Center", "Campaign Setup", "Store Operations"],
    project: "NA-IVE Brand Launch",
  },
  {
    title: "NA-IVE TikTok Shop Presence",
    image: "/evidence/na-ive-tiktok.webp",
    purpose: "TikTok Shop presence linking content, profile, product visibility, and shop channel.",
    problem: "Shows social commerce execution beyond content posting.",
    skills: ["TikTok Shop", "Social Commerce", "Content Ops"],
    project: "NA-IVE Brand Launch",
  },
  {
    title: "Orders List July 2026",
    image: "/evidence/orders-list-july-2026.webp",
    purpose: "Order tracker used to coordinate marketplace orders, payment, shipping, and follow-up.",
    problem: "Supports the 50,000+ order claim with a real operating control.",
    skills: ["Order Management", "Google Sheets", "Fulfillment Control"],
    project: "Scaled Multi-Brand Ecommerce Operations",
  },
  {
    title: "Founder Instagram Content System",
    image: "/evidence/personal-account-instagram.webp",
    purpose: "Business communication channel for ecommerce and operations context.",
    problem: "Shows judgment in explaining business work, not only doing internal tasks.",
    skills: ["Business Storytelling", "Content Strategy", "Brand Trust"],
    project: "AI-Assisted Operations",
  },
  {
    title: "Founder TikTok Content System",
    image: "/evidence/personal-account-tiktok.webp",
    purpose: "Short-form channel for ecommerce education and business documentation.",
    problem: "Connects operator thinking with public-facing communication.",
    skills: ["TikTok Content", "Business Communication", "Audience Insight"],
    project: "AI-Assisted Operations",
  },
  {
    title: "Reven Shopee Revenue Dashboard",
    image: "/evidence/reven-shopee-revenue-2025.webp",
    purpose: "Shopee dashboard for sales, orders, conversion, product movement, and store health.",
    problem: "Makes marketplace decisions less dependent on instinct.",
    skills: ["Shopee Analytics", "Revenue Review", "Campaign Evaluation"],
    project: "Scaled Multi-Brand Ecommerce Operations",
  },
  {
    title: "Reven TikTok Revenue Dashboard",
    image: "/evidence/reven-tiktok-revenue-2025-2026.webp",
    purpose: "TikTok Shop dashboard for GMV, traffic, product data, and daily movement.",
    problem: "Separates visible activity from measurable channel performance.",
    skills: ["TikTok Seller Center", "GMV Analysis", "Channel Monitoring"],
    project: "Scaled Multi-Brand Ecommerce Operations",
  },
  {
    title: "Reven Tokopedia Revenue Dashboard",
    image: "/evidence/reven-tokped-revenue-2025-2026.webp",
    purpose: "Tokopedia revenue dashboard for multi-channel business review.",
    problem: "Keeps channel decisions comparable across marketplaces.",
    skills: ["Tokopedia", "Marketplace Analytics", "Multi-Channel Ops"],
    project: "Scaled Multi-Brand Ecommerce Operations",
  },
  {
    title: "Shopee Ads May-July 2026",
    image: "/evidence/shopee-ads-may-july-2026.webp",
    purpose: "Ads dashboard for spend, clicks, sales from ads, and product ad performance.",
    problem: "Keeps campaign decisions tied to margin and sales signals.",
    skills: ["Shopee Ads", "Budget Control", "Performance Marketing Ops"],
    project: "Marketplace Performance Improvement",
  },
  {
    title: "Shopee Seller Center Product Operations",
    image: "/evidence/shopee-seller-center-reven.webp",
    purpose: "Seller-center product operations: listings, compliance notices, stock, and status.",
    problem: "Proves hands-on platform execution, not only external reporting.",
    skills: ["Shopee Seller Center", "Product Ops", "Listing Maintenance"],
    project: "Scaled Multi-Brand Ecommerce Operations",
  },
  {
    title: "SOP Master List",
    image: "/evidence/sop-master-lists.webp",
    purpose: "SOP library for categories, workflow ownership, failure points, and fixes.",
    problem: "Moves process knowledge out of chat and into a repeatable system.",
    skills: ["SOP Development", "Risk Control", "Documentation"],
    project: "SOP and Workflow Standardization",
  },
  {
    title: "Team Leave Application Form",
    image: "/evidence/team-leave-application-form.webp",
    purpose: "HR operating form for leave categories, approval logic, and team availability.",
    problem: "Protects daily operations when a small team has time-off requests.",
    skills: ["HR Ops", "Policy Documentation", "Team Planning"],
    project: "SOP and Workflow Standardization",
  },
  {
    title: "TikTok Seller Center Product Operations",
    image: "/evidence/tiktok-seller-center-reven.webp",
    purpose: "TikTok Seller Center product management, stock visibility, and platform prompts.",
    problem: "Keeps social commerce products ready for sales and issue review.",
    skills: ["TikTok Seller Center", "Product Readiness", "Stock Monitoring"],
    project: "Scaled Multi-Brand Ecommerce Operations",
  },
  {
    title: "Zalora Ads Dashboard",
    image: "/evidence/zalora-ads-2026.webp",
    purpose: "Zalora sponsored ads dashboard for impressions, clicks, sales, and cost.",
    problem: "Measures paid visibility after marketplace expansion.",
    skills: ["Zalora Ads", "Campaign Review", "Performance Tracking"],
    project: "HelloBare Marketplace Expansion to Zalora",
  },
  {
    title: "Zalora Seller Center Orders",
    image: "/evidence/zalora-seller-center-hellobare.webp",
    purpose: "Zalora seller-center order workflow after launch.",
    problem: "Shows post-launch operations, not just a published storefront.",
    skills: ["Zalora Seller Center", "Order Management", "Marketplace Expansion"],
    project: "HelloBare Marketplace Expansion to Zalora",
  },
];

const evidenceChains = [
  ["Marketplace Operations", "50,000+ order tracker", "Revenue dashboards", "SOP library", "Result: daily control"],
  ["Team Management", "CS schedule", "Discord task cadence", "KPI 2026", "Result: clearer accountability"],
  ["Marketplace Expansion", "Zalora storefront", "Seller-center orders", "Zalora ads", "Result: launch plus review"],
  ["Brand Launch", "NA-IVE social channels", "Shopee storefront", "TikTok Shop", "Result: channel execution"],
];

const featuredCaseStudy = {
  title: "Scaling Multi-Brand Ecommerce Operations",
  situation:
    "From 2023 to 2026, Dea rebuilt ecommerce operations across Reven, HelloBare, and NA-IVE while managing marketplace work across Shopee, TikTok Shop, Tokopedia, and Zalora.",
  problem:
    "The operating risk was not one missing tool. It was scattered execution: orders, revenue, ads, SOPs, CS coverage, and team review lived in separate places.",
  actions: [
    "Centralized order tracking for marketplace fulfillment and follow-up.",
    "Built revenue and ads dashboards for seller-center review.",
    "Created SOP and KPI systems so team execution could be reviewed.",
    "Used Discord and CS schedules to keep daily ownership visible.",
  ],
  evidence: [
    { label: "Orders", image: "/evidence/orders-list-july-2026.webp", caption: "Used to coordinate marketplace order flow." },
    { label: "Revenue", image: "/evidence/reven-shopee-revenue-2025.webp", caption: "Seller-center review for Shopee performance." },
    { label: "SOPs", image: "/evidence/sop-master-lists.webp", caption: "Process library for repeatable execution." },
  ],
  result:
    "The result was not a prettier workflow. It was a more controlled operation: 2,000+ SKUs, 50,000+ coordinated orders, 300+ campaigns, and 100+ SOPs supported by systems recruiters can inspect.",
  lessons:
    "The strongest operator signal is the pattern: when work becomes messy, Dea turns it into a dashboard, checklist, SOP, cadence, or review system.",
};

const toolGroups = [
  {
    group: "Marketplace",
    tools: [
      ["Shopee Seller Center", "Expert"],
      ["TikTok Shop Seller Center", "Expert"],
      ["Tokopedia Seller", "Advanced"],
      ["Zalora Seller Center", "Advanced"],
      ["Lazada Seller Center", "Intermediate"],
    ],
  },
  {
    group: "Operations",
    tools: [
      ["Google Sheets", "Advanced"],
      ["Microsoft Excel", "Advanced"],
      ["Google Docs", "Advanced"],
      ["Google Calendar", "Operational use"],
      ["Google Drive", "Advanced"],
    ],
  },
  {
    group: "AI",
    tools: [
      ["ChatGPT", "Expert"],
      ["Codex", "Advanced"],
      ["Gemini", "Advanced"],
    ],
  },
  {
    group: "Creative and Communication",
    tools: [
      ["Canva", "Advanced"],
      ["CapCut", "Operational use"],
      ["Discord", "Team coordination"],
    ],
  },
];

const experience = [
  {
    period: "2020 - 2022",
    title: "Built and operated a fast-growing ecommerce business",
    details:
      "Managed listings, customer service, inventory, fulfillment, campaigns, and team coordination. The business grew, but weak systems showed why scale needs SOPs, reporting, KPIs, and process ownership.",
  },
  {
    period: "2023 - Present",
    title: "Rebuilt operations through systems, dashboards, and documentation",
    details:
      "Built Google Sheets dashboards, SOP libraries, KPI systems, CS schedules, order trackers, marketplace reports, AI-assisted documentation, and seller-center workflows across multiple brands.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-300 md:text-lg">{intro}</p>
    </div>
  );
}

function ThemeToggle() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", nextDark);
  }, []);

  function toggleTheme() {
    const nextDark = !document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextDark);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="h-9 rounded-md border border-zinc-200 px-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:text-white"
      aria-label="Switch color theme"
    >
      Theme
    </button>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-emerald-500" />;
}

function EvidenceCard({ item }: { item: (typeof evidenceItems)[number] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-[#0b0e13]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
        <Image
          src={item.image}
          alt={`${item.title} evidence screenshot`}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
          Evidence
        </p>
        <h3 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
        <div className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          <p>{item.purpose}</p>
          <p>
            <span className="font-semibold text-zinc-950 dark:text-white">Hiring signal:</span> {item.problem}
          </p>
          <p>
            <span className="font-semibold text-zinc-950 dark:text-white">Related:</span> {item.project}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span key={skill} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dea Annisa Wilona",
      jobTitle: "Ecommerce Operations Specialist",
      address: { "@type": "PostalAddress", addressCountry: "Indonesia" },
      knowsAbout: [
        "Marketplace Operations",
        "Shopee",
        "TikTok Shop",
        "Tokopedia",
        "Zalora",
        "Google Sheets",
        "SOP Development",
        "KPI Design",
        "Inventory Management",
        "Customer Support",
        "AI-assisted operations",
      ],
      sameAs: [LINKEDIN_URL],
      email: CONTACT_EMAIL,
    }),
    [],
  );

  async function copyEmail() {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-950 dark:bg-[#080a0d] dark:text-white">
      <ScrollProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/90 backdrop-blur-xl dark:border-zinc-800 dark:bg-[#080a0d]/88">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="text-sm font-semibold text-zinc-950 dark:text-white" aria-label="Go to home">
            Dea Annisa Wilona
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden rounded-md bg-zinc-950 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 sm:inline-flex"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl content-center gap-10 px-5 py-14 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:py-16">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-5 inline-flex rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
              Ecommerce Operations Specialist | Indonesia
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-zinc-950 dark:text-white md:text-6xl">
              Built ecommerce systems for 2,000+ SKUs across Shopee, TikTok Shop, Tokopedia, and Zalora.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 md:text-lg">
              Evidence includes seller-center dashboards, Google Sheets controls, KPI reviews, SOP libraries, order
              tracking, content workflows, and marketplace storefronts. The work is visible before the claims begin.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={RESUME_URL}
                download
                className="rounded-md bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Download Resume
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-zinc-300 px-5 py-3 text-center text-sm font-semibold text-zinc-800 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-500"
              >
                LinkedIn
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-500"
              >
                {copied ? "Email copied" : "Copy Email"}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="self-center rounded-lg border border-zinc-200 bg-zinc-50 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="border-b border-zinc-200 pb-4 dark:border-zinc-800">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">60-second recruiter read</p>
              <p className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">This is operating proof, not portfolio decoration.</p>
            </div>
            <div className="grid gap-3 pt-4">
              {[
                "2,000+ SKUs, 50,000+ coordinated orders, and 300+ campaigns.",
                "Dashboards for revenue, ads, orders, KPIs, and marketplace performance.",
                "100+ SOPs across CS, fulfillment, HR, returns, COD, QC, inventory, and KPI workflows.",
                "Seller-center and storefront proof across Shopee, TikTok Shop, Tokopedia, and Zalora.",
              ].map((item) => (
                <div key={item} className="rounded-md border border-zinc-200 bg-white p-4 text-sm leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-[#0b0e13] dark:text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Story"
            title="The story matters because it explains the systems."
            intro="Dea did not learn ecommerce as theory. She operated stores, managed the work, saw what broke, then rebuilt around dashboards, SOPs, KPIs, and review cadence."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {experience.map((item) => (
              <motion.article
                key={item.period}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
                className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-zinc-600 dark:text-zinc-300">{item.details}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-20 dark:border-zinc-800 dark:bg-zinc-950/70 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Operating Lessons"
            title="The work shifted from reactive selling to controlled operations."
            intro="These are the operating changes recruiters should look for when judging whether Dea can perform the job."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {transformations.map((item) => (
              <div key={item.before} className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#0b0e13]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-500">Before</p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">{item.before}</h3>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">After</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="evidence" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Evidence"
            title="The assets support each other."
            intro="Dashboards, SOPs, seller centers, order lists, and team systems are connected. That is what turns experience into hiring confidence."
          />

          <div className="mb-8 grid gap-4 lg:grid-cols-4">
            {evidenceChains.map((chain) => (
              <div key={chain.join("-")} className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#0b0e13]">
                <p className="mb-4 text-sm font-semibold text-zinc-950 dark:text-white">{chain[0]}</p>
                <div className="space-y-3">
                  {chain.slice(1).map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="mt-1 h-5 w-5 shrink-0 rounded-full border border-emerald-300 text-center text-[11px] font-semibold leading-5 text-emerald-700 dark:border-emerald-500/50 dark:text-emerald-300">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {evidenceItems.map((item) => (
              <EvidenceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="case-study" className="border-y border-zinc-200 bg-zinc-50 px-5 py-20 dark:border-zinc-800 dark:bg-zinc-950/70 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Case Study"
            title={featuredCaseStudy.title}
            intro="One detailed example of how the portfolio evidence connects into an operating system."
          />
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#0b0e13]">
              {[
                ["Situation", featuredCaseStudy.situation],
                ["Problem", featuredCaseStudy.problem],
                ["Business Result", featuredCaseStudy.result],
                ["Lesson", featuredCaseStudy.lessons],
              ].map(([label, text]) => (
                <div key={label} className="border-b border-zinc-200 py-5 first:pt-0 last:border-0 last:pb-0 dark:border-zinc-800">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">{label}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{text}</p>
                </div>
              ))}
              <div className="pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">Actions</p>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {featuredCaseStudy.actions.map((action) => (
                    <li key={action} className="border-l border-zinc-300 pl-3 dark:border-zinc-700">{action}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid gap-5">
              {featuredCaseStudy.evidence.map((item) => (
                <div key={item.label} className="overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#0b0e13]">
                  <div className="relative aspect-[16/8] overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
                    <Image
                      src={item.image}
                      alt={`${item.label} case study evidence`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-semibold text-zinc-950 dark:text-white">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Projects"
            title="Projects explain what the evidence was built to solve."
            intro="Each project follows the same operating logic: identify the failure point, build the control, then review the business result."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#0b0e13]"
              >
                <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  <p><span className="font-semibold text-zinc-950 dark:text-white">Problem:</span> {project.problem}</p>
                  <div>
                    <p className="font-semibold text-zinc-950 dark:text-white">Action:</p>
                    <ul className="mt-2 space-y-2">
                      {project.actions.map((action) => (
                        <li key={action} className="border-l border-zinc-300 pl-3 dark:border-zinc-700">{action}</li>
                      ))}
                    </ul>
                  </div>
                  <p><span className="font-semibold text-zinc-950 dark:text-white">Business result:</span> {project.outcome}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="border-y border-zinc-200 bg-zinc-50 px-5 py-20 dark:border-zinc-800 dark:bg-zinc-950/70 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Results"
            title="Scale indicators a recruiter can verify against the evidence."
            intro="The numbers are limited to claims already present in the CV, portfolio documents, and asset folder."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
                className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#0b0e13]"
              >
                <p className="text-4xl font-semibold text-zinc-950 dark:text-white">{metric.value}</p>
                <p className="mt-3 text-sm font-semibold text-zinc-800 dark:text-zinc-100">{metric.label}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{metric.proof}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Tools"
            title="Tools grouped by how they are used in operations."
            intro="This is not a keyword list. The groups show where each tool fits in Dea's operating system."
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {toolGroups.map((group) => (
              <div key={group.group} className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#0b0e13]">
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{group.group}</h3>
                <div className="mt-5 space-y-3">
                  {group.tools.map(([tool, level]) => (
                    <div key={tool} className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-3 last:border-0 last:pb-0 dark:border-zinc-800">
                      <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{tool}</p>
                      <span className="shrink-0 rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
                        {level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-4xl rounded-lg border border-zinc-200 bg-zinc-950 p-8 text-white dark:border-zinc-800 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">I enjoy building the operating systems that keep ecommerce teams from relying on memory.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            Best fit: ecommerce operations specialist, marketplace coordinator, operations coordinator, ecommerce VA,
            customer support specialist, marketplace operations, or ecommerce project coordinator.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">
              Email Dea
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="rounded-md border border-white/25 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/55">
              LinkedIn
            </a>
            <a href={RESUME_URL} download className="rounded-md border border-white/25 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/55">
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
