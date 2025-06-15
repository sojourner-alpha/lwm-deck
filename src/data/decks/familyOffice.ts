import { DeckConfig } from '../../types/deck';

export const familyOfficeDeck: DeckConfig = {
  id: 'family-office',
  title: 'Family Office Practice',
  subtitle: 'Business Proposal',
  author: 'Curt Lederle',
  description: 'Strategic business proposal for establishing a dedicated family office practice',
  
  slideImages: {
    title: "/images/slides/boardroom.png",
    market: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
    services: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1600&q=80",
    strategy: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    governance: "https://images.unsplash.com/photo-1536895058696-cad8e04f21e7?auto=format&fit=crop&w=1600&q=80",
    risks: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80",
    general: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
  },
  
  slides: [
    {
      key: "Title",
      category: "title",
      headlines: ["Family Office Practice"],
      subtitle: "Business Proposal",
      author: "Curt Lederle",
      footer: "Prepared for review by Brad Beveridge & Carl Lovas"
    },
    { 
      key: "Market", 
      category: "market", 
      title: "Market Landscape & Size", 
      bullets: [
        "$9.5T family‑office‑controlled assets by 2030 (↑189% since 2019).",
        "UHNW population led by 148k Americans worth $30M+.",
        "Canada & U.S. remain core hubs for single‑family offices."
      ] 
    },
    { 
      key: "Trends", 
      category: "market", 
      title: "Key Trends & Pain Points", 
      bullets: [
        "60% expect inter‑gen wealth transfer within 10 yrs.",
        "Only 53% of Family Offices have plans in place for succession.",
        "Impact / ESG now >50% of FO deal flow.",
        "84% struggle to hire specialist talent; governance gaps persist."
      ] 
    },
    { 
      key: "Opportunity", 
      category: "market", 
      title: "Family Office Growth Opportunity", 
      bullets: [
        "North America hosts ~3,180 family offices — 40% of global total.",
        "Segment projected to double by 2030 amid $84T wealth transfer.",
        "Timing is ideal to establish a dedicated Odgers practice."
      ] 
    },
    { 
      key: "Scope", 
      category: "services", 
      title: "Comprehensive Service Suite", 
      bullets: [
        "Executive & Interim Search",
        "Board / Governance Advisory",
        "Succession & Leader Assessment",
        "Strategic Talent Mapping & Impact Advisory"
      ] 
    },
    { 
      key: "Search", 
      category: "services", 
      title: "Executive Search & Interim", 
      bullets: [
        "CEO, CIO, CFO, GC, Impact Director & niche roles.",
        "Unique interim bench bridges urgent gaps & projects.",
        "Rigorous cultural‑fit vetting + discreet market approach."
      ] 
    },
    { 
      key: "Governance", 
      category: "governance", 
      title: "Governance & Board Advisory", 
      bullets: [
        "Design boards, councils, investment committees.",
        "Recruit independent directors trusted by families.",
        "Codify charters, risk frameworks & decision rights."
      ] 
    },
    { 
      key: "Succession", 
      category: "services", 
      title: "Succession & Next‑Gen Readiness", 
      bullets: [
        "Objective heir & exec assessments with coaching roadmaps.",
        "Emergency, short‑ & long‑term succession plans.",
        "Accelerated integration for seamless leadership hand‑off."
      ] 
    },
    { 
      key: "Talent", 
      category: "services", 
      title: "Strategic Talent & Impact Alignment", 
      bullets: [
        "Proactive mapping of niche talent pools (tech, ESG, PE).",
        "Org design to match evolving investment & philanthropic goals.",
        "Act as outsourced Chief Talent Officer across entities."
      ] 
    },
    { 
      key: "Edge", 
      category: "strategy", 
      title: "Odgers Competitive Edge", 
      bullets: [
        "Global scale + boutique‑level intimacy.",
        "Only top‑6 firm with full interim capability.",
        "Proven discretion, high retention, thought leadership."
      ] 
    },
    { 
      key: "Risks", 
      category: "risks", 
      title: "Risks & Challenges", 
      bullets: [
        "Highly private decision‑making dependent on individuals.",
        "Gaining trust requires long lead times & strict confidentiality.",
        "Intense competition for CIOs/CFOs drives compensation volatility.",
        "Economic downturns can freeze hiring & advisory spend.",
        "Incumbent firms entrenched with multi‑generation relationships."
      ] 
    },
    { 
      key: "Summary", 
      category: "strategy", 
      title: "Synthesis", 
      bullets: [
        "Odgers Berndtson can unlock a durable, high‑margin revenue stream by becoming the premier talent & governance partner to North American family offices—leveraging our global reach, interim bench, and board expertise to solve their succession, professionalization, and impact‑investment challenges while mitigating confidentiality and market‑cycle risks through relationship‑led engagement."
      ] 
    }
  ]
}; 