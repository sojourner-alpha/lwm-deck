import { DeckConfig } from '../../types/deck';

export const aiFinanceDeck: DeckConfig = {
  id: 'ai-finance',
  title: 'AI 101 for Financial Professionals',
  subtitle: 'Understanding Artificial Intelligence in Finance',
  author: 'Curt Lederle',
  description: 'Comprehensive guide to artificial intelligence applications and implications for financial professionals',
  
  slideImages: {
    title: "/images/slides/boardroom.png",
    technology: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    ai: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    finance: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
    market: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    strategy: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    education: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
    services: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1600&q=80",
    risks: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80",
    general: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
  },
  
  slides: [
    {
      key: "Title",
      category: "title",
      headlines: ["Introduction to AI for Wealth Managers"],
      subtitle: "Primer & Catalyst",
      author: "Curt Lederle",
      footer: "Prepared for Kevin Manzo @ Axxcess Wealth Management"
    },
    {
      key: "Introductions",
      category: "general",
      title: "Who's in the Room",
      bullets: [
        "Kevin - Partner @ AWM",
        "Jeff - Director of Portfolio Services @ AWM", 
        "Curt - Founding Partner @ Sojourn Insight"
      ],
      subtext: [
        "Introduction through CEO (Adrian) and CFO (Andy) at Nestpoint",
        "Fast Roundtable Introductions: Role / Background / AI use cases today",
      ]
    },
    {
      key: "About",
      category: "strategy",
      title: "What I Do",
      bullets: [
        "Advisory services on AI research & development in finance and operations.",
        "Clients span venture portfolios, asset managers, private equity and research labs.",
        "Founded Sojourn Insight in 2023, partners based in Minneapolis and Seoul.",
        "Investor, trader, husband, father and free agent."
      ],
      subtext: [
        "Engineer → Analyst → Operator → Manager → Advisor → Investor",
        "Minneapolis → Montreal → New York → Toronto → San Francisco → Minneapolis"
      ]
    },
    {
      key: "Objectives",
      category: "education",
      title: "Why we're Here",
      bullets: [
        "General overview of AI landscape and applications.",
        "Awareness → Understanding → Adoption.",
        "Templates of best practices.",
        "Free condensed version of a workshop.",
      ],
      subtext: [
        "Demystify AI and provide actionable next steps.",
        "Full 7 course meal, or a la carte."
      ]
    },
    {
      key: "Landscape",
      category: "ai",
      title: "What is Artificial Intelligence ",
      bullets: [
        "Machine Learning → Neural Networks → Large Language Models (LLMs)",
        "Reinforcement Learning from Human Feedback (RLHF)",
        "Multi-Modal or Omnichannel I/O (text, image, audio, video)",
        "Probabilistic Output + Weights Concept",
        "Pre-Training → Inference ; Reasoning Models (Deep Research)"
      ]
    },
    {
      key: "Models",
      category: "technology",
      title: "Foundational AI Models (LLMs)"
    },
    {
      key: "Players",
      category: "market",
      title: "Key Players & Edge"
    },
    {
      key: "Use Cases",
      category: "finance",
      title: "Daily Use Cases for AI",
      bullets: [
        "The Synthesist – morning commute voice dump → structured brief.",
        "The Analyst – 10x faster research and depth; ID of primary sources.",
        "The Ideator – cross domain integration and brainstorming.",
        "The Tutor – theory questions, liquidity strategy, FX hedging plan.",
        "The Coder – advanced code and math, live charts (Perplexity finance API).",
      ]
    },
    {
      key: "Prompting",
      category: "education",
      title: "Prompt Engineering – 10× → 100×",
      bullets: [
        "RACE formula: Role + Ambition + Context + Expected",
        "First-draft → critique → iterate",
        "Coal in (high density) ➔ diamond out (high quality)",
        "Higher-entropy prompt leads to higher compute on target tokens",
      ]
    },
    {
      key: "Toolkit",
      category: "technology",
      title: "Where to Start"
    },
    {
      key: "FinTech",
      category: "finance",
      title: "Advanced AI in Finance",
      bullets: [
        "Algorithmic Trading: AI-driven strategy development, backtesting, and execution optimization.",
        "Technical & Fundamental Analysis: Pattern recognition, earnings prediction, and market timing models.",
        "Sentiment Analysis: Real-time processing of 10-Ks, earnings calls, social media, and news sentiment.",
        "Risk Management: Portfolio optimization, stress testing, and dynamic hedging strategies.",
        "Alternative Data: Satellite imagery, credit card transactions, and social signals for alpha generation."
      ]
    },
    {
      key: "Frameworks",
      category: "strategy",
      title: "Mental Models for AI",
      bullets: [
        "Human in the Loop: AI augments human decision-making, doesn't replace it.",
        "Centaur vs Cyborg: Collaboration (centaur) vs integration (cyborg) approaches.",
        "Rate of Improvement: Exponential capability gains vs linear human adaptation.",
        "Steps to AGI: OpenAI's 5 stages from chatbots to organizations."
      ]
    },
    {
      key: "Vision",
      category: "strategy",
      title: "The Coming Curve",
      bullets: [
        "\"S-curve of adoption\" graphic: Finance ≈ 2010 smartphone moment.",
        "Risk of obsolescence vs first-mover alpha.",
        "Quote: \"Half-life of expertise is collapsing.\""
      ]
    },
    {
      key: "Resources",
      category: "general",
      title: "Resources & Next Steps",
      bullets: [
        "Reading list (links).",
        "Follow: Sojourn blog, newsletter.",
        "Offering: full-day workshop, bespoke integration project.",
        "Contact info QR."
      ]
    },
    {
      key: "QA",
      category: "general",
      title: "Q&A / Wrap",
      bullets: [
        "Single prompt: \"What's the first workflow you'll automate?\"",
        "Leave 10 min buffer.",
        "Capture questions in shared doc for follow-up."
      ]
    }
  ]
}; 