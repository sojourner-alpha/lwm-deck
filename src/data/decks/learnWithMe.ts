import { DeckConfig } from '../../types/deck';

export const learnWithMeDeck: DeckConfig = {
  id: 'lwm',
  title: 'Learn With Me',
  subtitle: 'Feedback & Research Insights for Social Capital',
  author: 'Curt Lederle',
  description: 'Strategic feedback and research methodology presentation for Learn With Me at Social Capital',
  
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
  
  brandColor: '#475569',
  accentColor: '#64748b',
  
  slides: [
    // 1. Title
    {
      key: "Title",
      category: "title",
      template: "title",
      headlines: ["Learn With Me"],
      subtitle: "Strategic Feedback & Research Framework",
      subtext: [
        "Application Submission for Research Associate"
      ],
      author: "Curt Lederle",
      footer: "Prepared for Will Vu, GM @ Learn With Me"
    },

    // 2. Scope - prompt that I am responding to
    {
      key: "Scope",
      category: "strategy",
      template: "title",
      headlines: ["Scope"],
      subtitle: "Critique Existing Deep Dive(s) + Proposed Research Methodology",
      subtext: [
        "\"Once you've reviewed 1 and 2, send a loom/screen recording of you answering the two questions above...\""
      ]
    },

    // 3. Structure - presentation flow overview
    {
      key: "Structure",
      category: "general",
      template: "research",
      title: "Presentation Structure",
      subtitle: "4 Main Sections with Individual Slide Components",
      researchSteps: [
        "Introduction & Scope",
        "Critique Section Analysis", 
        "Research Methodology Framework",
        "Synthesis & Next Steps"
      ]
    },

    // 4. Critique Section Title
    {
      key: "Critique",
      category: "market",
      template: "title",
      header: "Critique - Analysis of Existing Deep Dives",
      headlines: ["Media Landscape","+", "Drug Development"],
      subtext: [
        "Evaluating two existing research pieces with structured feedback",
        "Focus on strengths, constructive improvements, and strategic gaps"
      ]
    },

    // 5. Media Critique
    {
      key: "Media",
      category: "services",
      template: "critique",
      title: "Media Landscape Analysis",
      subtitle: "Critique of Existing Research",
      sourceLink: "The Media Landscape Sense Making 2.pdf",
      critiqueContent: {
        positive: [
          "Clean Visual Design\nDirect iconography and simple layout\nNot overly dense per slide\nConsistent monochrome+1 design ethos",
          "Strong Highlights\nLegacy system infographic (p52)\nStep function audience expansion (p85)\nBeast reach visualization (p87)\nAbundance anchor for bullish case (p88)",
          "Effective Framework\n'Sense-making 1.0 vs 2.0' anchors concepts\nStrong conclusion linking media to politics\nClear narrative progression",
          "Systems-Level Analysis\nLinks technology → business → social impact\nAlgorithmic optimization creates polarization\nFragmentation to governance challenges"
        ],
        constructive: [
          "Missing Key Data Points\nNews media ownership and bias (p10)\nJournalist market flow legacy→direct (p12)\nGrowth of input data to facial/eye tracking (p35)",
          "Abstraction Layer Needs\nSense-making framework could separate:\nDistribution disruption (layer 1)\nSource disruption (layer 2)",
          "Psychology Gap\nNo analysis of attention psychology\nWhat engagement patterns drive most attention\nBehavioral impacts missing from framework"
        ],
        gaps: [
          "Limited Media Scope\nIgnores entertainment, educational (MOOCs)\nMissing gaming and other media formats\nFocus too narrow on news only",
          "US-Centric Analysis\nSense 2.0 transition requires global view\nMissing international competitive dynamics",
          "Poor Data Visualization\nMedia graphs ignore last 10 years\nPolicy approval vs adoption chart (p100)\nOutdated data undermines credibility",
          "Technical Depth Missing\nLacking algorithmic analysis\nNo investment perspective included\nMarket sizing data absent"
        ]
      }
    },

    // 6. Drug Development Critique
    {
      key: "Drug Dev",
      category: "technology",
      template: "critique",
      title: "Drug Development Analysis",
      subtitle: "Critique of Existing Research",
      sourceLink: "Deep Dive: A Primer On Drug Development.pdf",
      critiqueContent: {
        positive: [
          "Strong Graphics & Flow\nFinancing rounds by area (p12/13)\nThematic arc: drugs → bio → drugs\nClear visual progression",
          "Excellent Technical Depth\nBridges basics to sophisticated concepts\nStep-by-step biological processes\nClear complex explanations (CRISPR, mRNA)",
          "Real-World Grounding\nHousehold drug examples (Humira, Ozempic)\nConcrete metrics ($1B+ cost, 10-15 years, 5%)\nContemporary cases (Moderna, CRISPR)",
          "Quality Visuals\nResolution upgrade throughout\nML application on tables/prediction (p58)\nCost and time drop visualization (p63)"
        ],
        constructive: [
          "Structure Improvements\nInclude bullet advancements for each phase (p31)\nFix unstructured/unintuitive layout (p72)\nMore consistent organization",
          "Data Visualization Gaps\nNeed more charts and graphs\nProportionate drop-off visualization\nFollow through on cost projections",
          "Technology Analysis Outdated\nML/AI section feels like 2021 thinking\nNo specific algorithms or architectures\nMissing data moats and competitive advantages"
        ],
        gaps: [
          "Poor Data Emphasis\nKey data lost in subtext labels (p55)\nImportant information not highlighted\nCritical metrics buried",
          "Outdated Timeline\nFeels 5 years behind, not forward-looking\nMissing current and future projections\nDelayed publication impact evident",
          "Superficial Business Analysis\nHealthcare value chain oversimplified\nNo business model innovation discussion\nMissing M&A dynamics and competitive analysis",
          "Missing Modern AI Revolution\n'Drug Development 2.0' feels dated\nNo AlphaFold, foundation models discussion\nMissing digital therapeutics, synthetic biology"
        ]
      }
    },

    // 7. Premium Recommendations
    {
      key: "Premium",
      category: "strategy",
      template: "premium",
      title: "Premium Value-Add Opportunities",
      subtitle: "Universal Improvement Categories with Applications",
      premiumRecommendations: [
        {
          category: "Modernize Distribution",
          media: ["Live Links", "Multi Model (Dogfooding)"],
          drugDev: ["Open Source (ARC)", "ML Models (Alpha Fold)"]
        },
        {
          category: "Quantitative Frameworks", 
          media: ["LTV/CAC Comparison", "Creator Economy Valuation"],
          drugDev: ["Market Sizing", "Impact of Cost/Time to Market"]
        },
        {
          category: "Proprietary Data + Analysis",
          media: ["Turnaround Playbook", "Deal Flow and Velocity"],
          drugDev: ["Real-world evidence", "Biomarker data"]
        },
        {
          category: "Forecasting First Principles",
          media: ["Trend Prediction", "TAM"],
          drugDev: ["Opprotunity Areas", "Long Term Impact"]
        }
      ]
    },

    // 8. Research Section Title
    {
      key: "Research",
      category: "education",
      template: "title",
      header: "Research - Methodology for Approaching New Topics",
      headlines: ["China", "+", "GLP-1s"],
      subtext: [
        "Systematic approach to unfamiliar subjects and markets (one broad, one technical)",
        "Scalable methodology from universal principles to specific applications"
      ]
    },

    // 9. Universal Methodology
    {
      key: "Methodology",
      category: "general",
      template: "research",
      title: "Universal Research Methodology",
      subtitle: "7-Stage Approach to New Topics",
      researchSteps: [
        "Define the Scope and Objectives",
        "Top-Down Analysis",
        "Bottom-Up Exploration", 
        "Synthesis and Contextualization",
        "Identify and Address Gaps",
        "Strategic Implications by Stakeholder",
        "Visualization and Communication"
      ]
    },

    // 10. China Application
    {
      key: "China",
      category: "market",
      template: "research",
      title: "China",
      subtitle: "Methodology Application - Broad Topic",
      researchSteps: [
        "Define Scope & Objectives: Decode China's transition from hypergrowth to fortress economy for executives and investors",
        "Top-Down Analysis: High level research of history, culture, population, technology, finance, and macro-economic growth",
        "Bottom-Up Exploration: Bottom up research of available data (East and West sources) on population, markets, CCP statements", 
        "Synthesis & Contextualization: Shift to security-focused self-reliance, innovation leadership, real estate collapse, currency etc.",
        "Identify & Address Gaps: Unknown unknowns, Taiwan flashpoint, social unrest, unreliable data, and Western short-term myopia",
        "Strategic Implications by Stakeholder: Government, Population, Companies, Investors, Adversaries, etc.",
        "Visualization & Communication: Compilation of broad and deep research into a concise and impactful deep dive."
      ]
    },

    // 11. GLP-1 Application
    {
      key: "GLP-1s",
      category: "technology",
      template: "research",
      title: "GLP-1 Therapeutics",
      subtitle: "Methodology Application - Technical Topic",
      researchSteps: [
        "Define Scope & Objectives: Decode GLP-1 market for executives and investors, understand the biological + commercial dynamics.",
        "Top-Down Analysis: Understand scientific foundation and the overall market landscape of players and compounds.",
        "Bottom-Up Exploration: Examine clinical trials data, early market data, performance of producers, and patient outomes.", 
        "Synthesis & Contextualization: Connect scientific understanding with market trends and healthcare implications.",
        "Identify & Address Gaps: Unknown unknowns, long term effects, emergent competition and alternative treatments.",
        "Strategic Implications by Stakeholder: FDA, Researchers, Companies, Patients, Policymakers, Competitors, etc.",
        "Visualization & Communication: Compilation of technical and deep research into a concise and impactful deep dive."
      ]
    },

    // 12. Summary
    {
      key: "Summary",
      category: "strategy",
      template: "title",
      headlines: ["Uniquely Qualified Research Associate"],
      subtitle: "Demonstrated Core Competencies for Learn With Me",
      subtext: [
        "✓ Critical Analysis",
        "✓ Systematic Methodology",
        "✓ Stakeholder Thinking",
        "✓ Practical Application",
        "✓ Ready to Hit the Ground Running",
      ]
    }
  ]
};