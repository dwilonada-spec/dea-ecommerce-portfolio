"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const CONTACT_EMAIL = "dwilona.da@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/deaawilona";
const RESUME_URL = "/Dea_Annisa_Wilona_Resume.pdf";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Evidence", href: "#evidence" },
  { label: "Results", href: "#results" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const metrics = [
  { value: "5+", label: "Years in ecommerce operations", proof: "Hands-on marketplace, commercial, fulfillment, customer, and team operations." },
  { value: "2,000+", label: "SKUs managed", proof: "Product lifecycle work across listings, catalog readiness, pricing, stock, and marketplace visibility." },
  { value: "50,000+", label: "Orders coordinated", proof: "Order flow, fulfillment, returns, customer operations, and follow-up controls." },
  { value: "300+", label: "Marketplace campaigns", proof: "Double-date events, flash sales, vouchers, promotional pricing, and seasonal campaigns." },
  { value: "100+", label: "SOPs and workflow controls", proof: "CS, fulfillment, HR, inventory, returns, COD, QC, KPI, and recurring workflows." },
  { value: "5", label: "Marketplace platforms", proof: "Shopee, TikTok Shop, Lazada, Tokopedia, and Zalora operating exposure." },
  { value: "3", label: "Brands operated", proof: "Reven, HelloBare, and NA-IVE operating evidence appears in the portfolio." },
  { value: "6+", label: "Team members coordinated", proof: "Cross-functional work across CS, marketplace admin, content, warehouse, and operations." },
];

const transformations = [
  {
    before: "Marketplace work lived across separate channels",
    after: "Dashboards, order trackers, SOPs, and review routines made daily operations visible",
  },
  {
    before: "Pricing changes were a business risk",
    after: "Cost updates, margin checks, promotional pricing, and marketplace implementation were tracked together",
  },
  {
    before: "Inventory problems depended on ad hoc follow-up",
    after: "Replenishment, damaged stock, returns, and storage controls became documented workflows",
  },
  {
    before: "Knowledge stayed in chat",
    after: "100+ SOPs turned recurring work into repeatable operating standards",
  },
  {
    before: "Team ownership depended on memory",
    after: "CS schedules, Discord routines, and KPI tracking clarified responsibility and handoffs",
  },
  {
    before: "AI was only a general productivity tool",
    after: "AI now supports research, SOP drafting, communication, analysis support, and repetitive admin work with human review",
  },
];

const caseStudies = [
  {
    title: "Multi-Brand Marketplace Operations",
    focus: "Marketplace execution, reporting, campaigns, and team coordination",
    challenge: "Daily operations spanned multiple brands and marketplaces, with orders, campaigns, reporting, seller-center tasks, and team follow-up spread across different tools.",
    approach: "Turn scattered operating work into visible controls: order trackers, seller-center review, SOPs, KPI routines, and daily team communication.",
    execution: [
      "Coordinated marketplace work across Shopee, TikTok Shop, Lazada, Tokopedia, and Zalora.",
      "Managed listing, campaign, promotion, customer operation, order, and reporting routines.",
      "Connected dashboards, SOPs, schedules, and Discord operating cadence so execution did not depend on memory.",
    ],
    impact: "Supported 2,000+ SKUs, approximately 50,000+ customer orders, and 300+ marketplace campaigns without presenting unsupported performance claims.",
    evidence: [
      { label: "Orders tracker", image: "/evidence/orders-list-july-2026.webp" },
      { label: "Shopee revenue", image: "/evidence/reven-shopee-revenue-2025.webp" },
      { label: "SOP system", image: "/evidence/sop-master-lists.webp" },
    ],
    skills: ["Marketplace Operations", "Reporting", "Campaign Execution", "Team Coordination"],
  },
  {
    title: "Inventory & Fulfillment Process Improvement",
    focus: "Inventory management, replenishment, warehouse coordination, and risk control",
    challenge: "Inventory and fulfillment work needed clearer controls for replenishment, storage, discrepancies, damaged stock, returns, and handoffs between internal and third-party warehouse operations.",
    approach: "Document recurring failure points and build operating routines that make stock movement, damaged items, repairs, returns, and fulfillment responsibilities easier to track.",
    execution: [
      "Coordinated stock readiness, replenishment schedules, and fulfillment responsibilities.",
      "Documented damaged inventory, repair/defect handling, returns, and storage controls.",
      "Used SOPs and trackers to reduce dependency on informal follow-up.",
    ],
    impact: "Positioned inventory and fulfillment as controlled operations work, not just back-office admin.",
    evidence: [
      { label: "SOP library", image: "/evidence/sop-master-lists.webp" },
      { label: "Orders workflow", image: "/evidence/orders-list-july-2026.webp" },
      { label: "Team cadence", image: "/evidence/discord-team-communication.webp" },
    ],
    skills: ["Inventory", "Fulfillment", "Warehouse Coordination", "SOP Development"],
  },
  {
    title: "Pricing & Margin Operations",
    focus: "COGS updates, pricing decisions, promotional pricing, and profitability monitoring",
    challenge: "Supplier cost and reseller pricing changes required careful marketplace implementation so price updates, promotional mechanics, and margin monitoring stayed commercially sustainable.",
    approach: "Treat pricing as an operating system: track product costs, review margin signals, adjust marketplace pricing gradually where needed, and connect campaign decisions with profitability context.",
    execution: [
      "Managed product cost and pricing updates across operational records.",
      "Handled reseller pricing changes, promotional pricing, and marketplace implementation.",
      "Used spreadsheets and seller-center dashboards for sales, margin, and campaign review with human validation.",
    ],
    impact: "Strengthened commercial operations credibility without inventing margin improvement percentages.",
    evidence: [
      { label: "Shopee revenue", image: "/evidence/reven-shopee-revenue-2025.webp" },
      { label: "Shopee ads", image: "/evidence/shopee-ads-may-july-2026.webp" },
      { label: "Tokopedia revenue", image: "/evidence/reven-tokped-revenue-2025-2026.webp" },
    ],
    skills: ["Pricing", "COGS", "Margin Monitoring", "Campaign Review"],
  },
  {
    title: "Brand and Marketplace Expansion",
    focus: "Catalog preparation, listing setup, launch readiness, and post-launch review",
    challenge: "New brand and marketplace expansion work needed product catalog readiness, pricing, storefront setup, listing quality, fulfillment workflows, and post-launch performance review.",
    approach: "Connect marketplace launch tasks with operating controls so the work goes beyond a published storefront.",
    execution: [
      "Prepared product catalog, pricing, listings, storefront structure, and marketplace compliance steps.",
      "Supported HelloBare expansion to Zalora and NA-IVE channel setup across Shopee and TikTok Shop.",
      "Reviewed seller-center orders, revenue, sponsored ads, and storefront evidence after launch.",
    ],
    impact: "Shows marketplace expansion capability from setup through operational review.",
    evidence: [
      { label: "Zalora storefront", image: "/evidence/hellobare-zalora-landing-page.webp" },
      { label: "Zalora orders", image: "/evidence/zalora-seller-center-hellobare.webp" },
      { label: "NA-IVE Shopee", image: "/evidence/na-ive-shopee-landing-page-2.webp" },
    ],
    skills: ["Marketplace Launch", "Catalog Operations", "Pricing", "Fulfillment Readiness"],
  },
];

const aiUseCases = [
  "SOP drafting and structuring",
  "Operational problem-solving and decision support",
  "Commercial and business analysis support",
  "Research and information synthesis",
  "Internal briefs and stakeholder communication",
  "Recruitment and candidate-screening support",
  "Workflow design and process documentation",
  "Spreadsheet and formula assistance with human validation",
  "Marketplace and content research",
  "Templates, standardized communication, and repetitive admin acceleration",
  "Portfolio iteration through Codex with human direction and final judgment",
];

const supportProjects = [
  {
    title: "KPI and Performance Management System",
    problem: "Team performance was hard to evaluate without shared targets and review evidence.",
    actions: ["Designed KPI scoring by role", "Built weekly monitoring sheets", "Connected review notes to operational behavior"],
    outcome: "Improved accountability and made coaching less subjective.",
    skills: ["KPI Tracking", "Team Coordination", "Google Sheets"],
  },
  {
    title: "AI-Assisted Operations",
    problem: "Documentation, research, communication, and repetitive admin work needed more structure and speed without outsourcing business judgment.",
    actions: ["Used ChatGPT, Codex, and Gemini for documentation, research, analysis support, workflow design, and communication drafting", "Validated outputs against business context before use"],
    outcome: "Improved operating speed and consistency while keeping ecommerce and operations judgment primary.",
    skills: ["AI-Assisted Operations", "Workflow Improvement", "Business Judgment"],
  },
];

const evidenceItems = [
  {
    title: "Content Production Tracker",
    image: "/evidence/content-production-lists.webp",
    purpose: "Production sheet for product videos, campaign content, due dates, status, and approvals.",
    problem: "Keeps content execution from becoming scattered across chat and memory.",
    skills: ["Google Sheets", "Content Ops", "Campaign Readiness"],
    project: "Brand and Marketplace Expansion",
  },
  {
    title: "Customer Service Schedule",
    image: "/evidence/customer-service-schedule.webp",
    purpose: "Daily CS coverage plan with ownership, handoff, and escalation windows.",
    problem: "Protects response consistency when several people support the same store.",
    skills: ["CS Operations", "Scheduling", "Team Coordination"],
    project: "Multi-Brand Marketplace Operations",
  },
  {
    title: "Discord Team Operating Cadence",
    image: "/evidence/discord-team-communication.webp",
    purpose: "Daily checklist and task communication for a distributed operating team.",
    problem: "Makes work visible so follow-up does not depend on one person remembering everything.",
    skills: ["Async Ops", "Team Management", "Workflow Control"],
    project: "Multi-Brand Marketplace Operations",
  },
  {
    title: "HelloBare Zalora Storefront",
    image: "/evidence/hellobare-zalora-landing-page.webp",
    purpose: "Customer-facing proof of a completed Zalora marketplace launch.",
    problem: "Shows catalog and storefront execution beyond an internal launch plan.",
    skills: ["Zalora", "Catalog Launch", "Marketplace Compliance"],
    project: "Brand and Marketplace Expansion",
  },
  {
    title: "HelloBare Zalora Revenue Dashboard",
    image: "/evidence/hellobare-zalora-revenue-2026.webp",
    purpose: "Revenue dashboard used after the Zalora launch.",
    problem: "Connects marketplace setup with sales review and channel traction.",
    skills: ["Revenue Tracking", "Seller Center", "Performance Review"],
    project: "Brand and Marketplace Expansion",
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
    project: "Brand and Marketplace Expansion",
  },
  {
    title: "NA-IVE Shopee Brand Landing Page",
    image: "/evidence/na-ive-shopee-landing-page-2.webp",
    purpose: "Shopee storefront merchandising for product positioning and first impression.",
    problem: "Improves shopper understanding before they compare individual listings.",
    skills: ["Shopee", "Storefront Merchandising", "Product Presentation"],
    project: "Brand and Marketplace Expansion",
  },
  {
    title: "NA-IVE Shopee Product Blocks",
    image: "/evidence/na-ive-shopee-landing-page-3.webp",
    purpose: "Product grouping and browsing structure inside Shopee.",
    problem: "Prevents listings from feeling like an unorganized product dump.",
    skills: ["Marketplace UX", "Listing Structure", "Visual Systems"],
    project: "Brand and Marketplace Expansion",
  },
  {
    title: "NA-IVE Shopee Seller Page",
    image: "/evidence/na-ive-shopee-landing-page.webp",
    purpose: "Seller page with brand identity, vouchers, product recommendations, and navigation.",
    problem: "Connects promotion setup with store browsing behavior.",
    skills: ["Shopee Seller Center", "Campaign Setup", "Store Operations"],
    project: "Brand and Marketplace Expansion",
  },
  {
    title: "NA-IVE TikTok Shop Presence",
    image: "/evidence/na-ive-tiktok.webp",
    purpose: "TikTok Shop presence linking content, profile, product visibility, and shop channel.",
    problem: "Shows social commerce execution beyond content posting.",
    skills: ["TikTok Shop", "Social Commerce", "Content Ops"],
    project: "Brand and Marketplace Expansion",
  },
  {
    title: "Orders List July 2026",
    image: "/evidence/orders-list-july-2026.webp",
    purpose: "Order tracker used to coordinate marketplace orders, payment, shipping, and follow-up.",
    problem: "Supports the 50,000+ order claim with a real operating control.",
    skills: ["Order Management", "Google Sheets", "Fulfillment Control"],
    project: "Multi-Brand Marketplace Operations",
  },
  {
    title: "Business Instagram Content System",
    image: "/evidence/personal-account-instagram.webp",
    purpose: "Business communication channel for ecommerce and operations context.",
    problem: "Shows judgment in explaining business work, not only doing internal tasks.",
    skills: ["Business Storytelling", "Content Strategy", "Brand Trust"],
    project: "AI-Assisted Operations",
  },
  {
    title: "Business TikTok Content System",
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
    project: "Pricing & Margin Operations",
  },
  {
    title: "Reven TikTok Revenue Dashboard",
    image: "/evidence/reven-tiktok-revenue-2025-2026.webp",
    purpose: "TikTok Shop dashboard for GMV, traffic, product data, and daily movement.",
    problem: "Separates visible activity from measurable channel performance.",
    skills: ["TikTok Seller Center", "GMV Analysis", "Channel Monitoring"],
    project: "Multi-Brand Marketplace Operations",
  },
  {
    title: "Reven Tokopedia Revenue Dashboard",
    image: "/evidence/reven-tokped-revenue-2025-2026.webp",
    purpose: "Tokopedia revenue dashboard for multi-channel business review.",
    problem: "Keeps channel decisions comparable across marketplaces.",
    skills: ["Tokopedia", "Marketplace Analytics", "Multi-Channel Ops"],
    project: "Pricing & Margin Operations",
  },
  {
    title: "Shopee Ads May-July 2026",
    image: "/evidence/shopee-ads-may-july-2026.webp",
    purpose: "Ads dashboard for spend, clicks, sales from ads, and product ad performance.",
    problem: "Keeps campaign decisions tied to margin and sales signals.",
    skills: ["Shopee Ads", "Budget Control", "Performance Marketing Ops"],
    project: "Pricing & Margin Operations",
  },
  {
    title: "Shopee Seller Center Product Operations",
    image: "/evidence/shopee-seller-center-reven.webp",
    purpose: "Seller-center product operations: listings, compliance notices, stock, and status.",
    problem: "Proves hands-on platform execution, not only external reporting.",
    skills: ["Shopee Seller Center", "Product Ops", "Listing Maintenance"],
    project: "Multi-Brand Marketplace Operations",
  },
  {
    title: "SOP Master List",
    image: "/evidence/sop-master-lists.webp",
    purpose: "SOP library for categories, workflow ownership, failure points, and fixes.",
    problem: "Moves process knowledge out of chat and into a repeatable system.",
    skills: ["SOP Development", "Risk Control", "Documentation"],
    project: "Inventory & Fulfillment Process Improvement",
  },
  {
    title: "Team Leave Application Form",
    image: "/evidence/team-leave-application-form.webp",
    purpose: "HR operating form for leave categories, approval logic, and team availability.",
    problem: "Protects daily operations when a small team has time-off requests.",
    skills: ["HR Ops", "Policy Documentation", "Team Planning"],
    project: "Inventory & Fulfillment Process Improvement",
  },
  {
    title: "TikTok Seller Center Product Operations",
    image: "/evidence/tiktok-seller-center-reven.webp",
    purpose: "TikTok Seller Center product management, stock visibility, and platform prompts.",
    problem: "Keeps social commerce products ready for sales and issue review.",
    skills: ["TikTok Seller Center", "Product Readiness", "Stock Monitoring"],
    project: "Multi-Brand Marketplace Operations",
  },
  {
    title: "Zalora Ads Dashboard",
    image: "/evidence/zalora-ads-2026.webp",
    purpose: "Zalora sponsored ads dashboard for impressions, clicks, sales, and cost.",
    problem: "Measures paid visibility after marketplace expansion.",
    skills: ["Zalora Ads", "Campaign Review", "Performance Tracking"],
    project: "Brand and Marketplace Expansion",
  },
  {
    title: "Zalora Seller Center Orders",
    image: "/evidence/zalora-seller-center-hellobare.webp",
    purpose: "Zalora seller-center order workflow after launch.",
    problem: "Shows post-launch operations, not just a published storefront.",
    skills: ["Zalora Seller Center", "Order Management", "Marketplace Expansion"],
    project: "Brand and Marketplace Expansion",
  },
];

const evidenceChains = [
  ["Marketplace Operations", "Order tracker", "Seller-center dashboards", "SOP library", "Recruiter signal: daily control"],
  ["Commercial Operations", "COGS updates", "Pricing implementation", "Campaign review", "Recruiter signal: business judgment"],
  ["Inventory and Fulfillment", "Replenishment", "Damage and returns handling", "Workflow documentation", "Recruiter signal: risk control"],
  ["Marketplace Expansion", "Catalog setup", "Seller-center orders", "Ads and revenue review", "Recruiter signal: launch plus follow-through"],
];

const skillGroups = [
  {
    group: "Marketplace Operations",
    items: [
      "Shopee Seller Center",
      "TikTok Shop Seller Center",
      "Lazada Seller Center",
      "Tokopedia Seller",
      "Zalora Seller Center",
      "Marketplace campaigns and promotions",
      "Product listing and seller-center administration",
    ],
  },
  {
    group: "Commercial Operations",
    items: [
      "Pricing decisions",
      "Product cost and COGS management",
      "Promotional pricing",
      "Margin monitoring",
      "Marketplace performance analysis",
      "Campaign review",
    ],
  },
  {
    group: "Operations and Fulfillment",
    items: [
      "Inventory management",
      "Replenishment scheduling",
      "Warehouse coordination",
      "Fulfillment workflows",
      "Returns",
      "Damaged stock handling",
      "Customer operations",
    ],
  },
  {
    group: "Process and Team Operations",
    items: [
      "SOP development",
      "KPI tracking",
      "Workflow design",
      "Task delegation",
      "Team coordination",
      "Process improvement",
    ],
  },
  {
    group: "Tools",
    items: [
      "Google Sheets - Intermediate",
      "Microsoft Excel - Intermediate",
      "Google Workspace",
      "Canva",
      "CapCut",
      "Discord",
    ],
  },
  {
    group: "AI-Assisted Workflows",
    items: [
      "ChatGPT",
      "Codex",
      "Gemini",
      "SOP and documentation support",
      "Research and analysis support",
      "Communication drafting",
      "Repetitive operational task acceleration",
    ],
  },
];

const experience = [
  {
    period: "2020 - Present",
    title: "Built ecommerce experience by operating the work directly",
    details:
      "Managed marketplace execution, pricing, inventory, fulfillment, campaigns, customer operations, content coordination, and team responsibility across independent ecommerce brands in Indonesia.",
  },
  {
    period: "Current direction",
    title: "Translating hands-on operating experience into international ecommerce and business operations",
    details:
      "The portfolio shows the operating systems behind the work: dashboards, pricing and margin routines, inventory workflows, SOP libraries, KPI trackers, customer operation schedules, and AI-assisted documentation with human review.",
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
        "Commercial Operations",
        "Pricing and Margin Management",
        "Shopee",
        "TikTok Shop",
        "Lazada",
        "Tokopedia",
        "Zalora",
        "Google Sheets",
        "SOP Development",
        "KPI Design",
        "Inventory Management",
        "Fulfillment Operations",
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
              E-commerce & Marketplace Operations | Indonesia
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-zinc-950 dark:text-white md:text-6xl">
              Marketplace operator across Shopee, TikTok Shop, Lazada, Tokopedia, and Zalora.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 md:text-lg">
              5+ years of hands-on experience managing multi-brand ecommerce operations: marketplace execution,
              campaigns, pricing, inventory, fulfillment, process improvement, customer operations, and team
              coordination. AI supports the workflow, but ecommerce operations remain the core.
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
              <p className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">Experienced ecommerce operator with inspectable proof.</p>
            </div>
            <div className="grid gap-3 pt-4">
              {[
                "2,000+ SKUs, approximately 50,000+ orders, and 300+ marketplace campaigns.",
                "Hands-on marketplace work across Shopee, TikTok Shop, Lazada, Tokopedia, and Zalora.",
                "Commercial operations: pricing, product cost updates, margin monitoring, and promotional pricing.",
                "100+ SOPs and workflow controls across inventory, fulfillment, CS, KPI, QC, returns, and admin work.",
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
            title="Direct operating experience, translated into systems."
            intro="Dea built her ecommerce experience by running the work directly rather than following a traditional corporate path. The value is practical: marketplace execution, commercial judgment, inventory control, process documentation, and team coordination."
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

      <section id="case-studies" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Case Studies"
            title="Business cases first. Screenshots as proof."
            intro="Recruiters should not need to inspect every screenshot before understanding the value. These four cases summarize the operating work, then link to the evidence below."
          />

          <div className="grid gap-6">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45 }}
                className="grid gap-5 rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#0b0e13] lg:grid-cols-[0.95fr_1.05fr] lg:p-6"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                    Case {index + 1} | {study.focus}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-zinc-950 dark:text-white md:text-3xl">{study.title}</h3>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                    <p><span className="font-semibold text-zinc-950 dark:text-white">Challenge:</span> {study.challenge}</p>
                    <p><span className="font-semibold text-zinc-950 dark:text-white">Approach:</span> {study.approach}</p>
                    <div>
                      <p className="font-semibold text-zinc-950 dark:text-white">Execution:</p>
                      <ul className="mt-2 space-y-2">
                        {study.execution.map((item) => (
                          <li key={item} className="border-l border-zinc-300 pl-3 dark:border-zinc-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                    <p><span className="font-semibold text-zinc-950 dark:text-white">Business impact:</span> {study.impact}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.skills.map((skill) => (
                      <span key={skill} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {study.evidence.map((item) => (
                    <div key={item.label} className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
                        <Image
                          src={item.image}
                          alt={`${item.label} evidence`}
                          fill
                          sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 35vw, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="p-3 text-sm font-semibold text-zinc-950 dark:text-white">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="evidence" className="border-y border-zinc-200 bg-zinc-50 px-5 py-20 dark:border-zinc-800 dark:bg-zinc-950/70 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Evidence Library"
            title="The screenshots support the business cases."
            intro="Dashboards, SOPs, seller centers, order lists, and team systems are kept below the case studies so the portfolio reads as operating proof, not a screenshot dump."
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

      <section id="ai-assisted-operations" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="AI-Assisted Operations"
            title="AI improves speed and structure. It does not replace business judgment."
            intro="Dea integrates AI tools into operational workflows to accelerate research, documentation, analysis support, communication, and repetitive tasks while retaining human review and ecommerce context."
          />
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-[#0b0e13]">
              <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">Practical tools</h3>
              <div className="mt-5 grid gap-3">
                {["ChatGPT", "Codex", "Gemini"].map((tool) => (
                  <div key={tool} className="rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
                    {tool}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                This portfolio is also an example of AI-assisted execution: Dea supplied the business requirements,
                content direction, validation, and final judgment while using Codex to help iterate and maintain the site.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {aiUseCases.map((item) => (
                <div key={item} className="rounded-lg border border-zinc-200 bg-white p-4 text-sm leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-[#0b0e13] dark:text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-zinc-200 bg-zinc-50 px-5 py-20 dark:border-zinc-800 dark:bg-zinc-950/70 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Supporting Systems"
            title="Additional systems that support the core operating work."
            intro="These are useful proof points, but they sit behind marketplace, commercial, fulfillment, and expansion case studies."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {supportProjects.map((project) => (
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

      <section id="skills" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Skills"
            title="Competencies grouped by business use."
            intro="The skills section is organized around ecommerce operations, commercial operations, fulfillment, team systems, tools, and AI-assisted workflows."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.group} className="rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-[#0b0e13]">
                <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{group.group}</h3>
                <div className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <div key={item} className="border-b border-zinc-100 pb-3 last:border-0 last:pb-0 dark:border-zinc-800">
                      <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">{item}</p>
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
            Best fit: e-commerce operations specialist, marketplace specialist, marketplace operations specialist,
            e-commerce operations coordinator, business operations specialist, or operations specialist roles.
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
