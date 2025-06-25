import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DeckConfig } from "../../types/deck";
import { SpecialElements } from "./SpecialElements";

interface StrategyDeckProps {
  deck: DeckConfig;
}

export const StrategyDeck: React.FC<StrategyDeckProps> = ({ deck }) => {
  const [active, setActive] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtext visibility state for AI Finance deck
  const [showIntroDetails, setShowIntroDetails] = useState(false);
  const [showAboutDetails, setShowAboutDetails] = useState(false);
  const [showObjectivesDetails, setShowObjectivesDetails] = useState(false);
  
  // Modal state for Models slide
  const [showModelsMatrix, setShowModelsMatrix] = useState(false);

  // AI Finance deck navigation state
  const [showAINavigation, setShowAINavigation] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => setActive(Math.round(el.scrollTop / window.innerHeight));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollTo(Math.max(0, active - 1));
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        scrollTo(Math.min(deck.slides.length - 1, active + 1));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, deck.slides.length]);

  const scrollTo = (i: number) => {
    containerRef.current?.scrollTo({ top: i * window.innerHeight, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const isAIDeck = deck.id === 'ai-finance' || deck.id === 'ai-finance-2nd';
  const isLederleFarms = deck.id === 'lederle-farms';
  const is2ndCallDeck = deck.id === 'ai-finance-2nd';

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Static Background - Title slide image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${deck.slideImages.title})` }}
      />
      
      {/* Static Overlay */}
      <div className="fixed inset-0 bg-black/40" />
      <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />

      {/* Static Logo Header - Deck-specific */}
      {isAIDeck && (
        <div className="hidden sm:flex fixed top-4 right-4 z-20 items-center space-x-3">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 shadow-xl">
            <img 
              src="/images/AWM-logo.png" 
              alt="AWM Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      )}

      {/* Mobile Header - Deck-specific handling */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-md border-b border-white/20">
        <div className="flex flex-col space-y-2 p-3">
          {/* AI Finance deck - show both logos */}
          {isAIDeck ? (
            <>
              {/* Top row: AWM logo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                    <img 
                      src="/images/AWM-logo.png" 
                      alt="AWM Logo" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20"
                >
                  <div className="w-4 h-4 flex flex-col justify-center space-y-0.5">
                    <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                    <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                  </div>
                </button>
              </div>
              {/* Title */}
              <div className="text-center">
                <h1 className="text-white font-bold text-sm leading-tight">{deck.title}</h1>
              </div>
            </>
          ) : (
            <>
              {/* Other decks - minimal header */}
              <div className="flex items-center justify-end">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20"
                >
                  <div className="w-4 h-4 flex flex-col justify-center space-y-0.5">
                    <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                    <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                    <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                  </div>
                </button>
              </div>
              {/* Title */}
              <div className="text-center">
                <h1 className="text-white font-bold text-sm leading-tight">{deck.title}</h1>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-black/80 backdrop-blur-md border-t border-white/20 p-4">
            <div className="grid grid-cols-3 gap-2">
              {deck.slides.map((s, i) => (
                <button 
                  key={i} 
                  onClick={() => scrollTo(i)} 
                  className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                    active === i 
                      ? 'bg-white text-gray-900 shadow-lg font-bold' 
                      : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
                  }`}
                >
                  {s.key === 'QA' ? 'Q&A' : s.key}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div ref={containerRef} className="snap-y snap-mandatory h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 relative z-10">
        {deck.slides.map((s, i) => (
          <section 
            key={i} 
            className="snap-start flex items-center justify-center h-screen relative px-4 sm:px-0 pt-32 sm:pt-0 sm:pl-56 sm:pr-14"
            data-slide-index={i}
            data-slide-key={s.key}
          >
            {i === 0 ? (
              // Title slide - Desktop layout with deck-specific sizing
              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
                className={`w-full mx-auto relative ${
                  is2ndCallDeck
                    ? 'hidden sm:block max-w-5xl aspect-video'
                    : (isLederleFarms 
                      ? 'hidden sm:block max-w-4xl bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 flex flex-col aspect-[3/4] w-[85vw] max-w-sm mx-auto sm:aspect-video sm:w-full sm:max-w-none'
                      : 'hidden sm:block max-w-4xl aspect-video')
                }`}
              >
                {/* Main Content Card - Deck-specific structure */}
                <div className={`h-full ${
                  isLederleFarms 
                    ? 'flex flex-col p-6 md:p-9'
                    : 'bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col p-6 md:p-9'
                }`}>
                  
                  {/* TOP SECTION - Branding Area */}
                  <div className={`flex-shrink-0 flex items-center justify-center ${
                    isLederleFarms ? 'h-1/6 sm:h-1/6 px-4 sm:px-0' : 'h-1/4 pt-6'
                  }`}>
                    <div className="w-full text-center">
                      {isAIDeck ? (
                        /* AI Finance deck - show AWM logo */
                        <>
                          <div className="flex items-center justify-center space-x-4 mb-4">
                            <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30">
                              <img 
                                src="/images/AWM-logo.png" 
                                alt="AWM Logo" 
                                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                              />
                            </div>
                          </div>
                          <p className="text-white/70 text-sm md:text-base font-medium">
                            {deck.subtitle}
                          </p>
                        </>
                      ) : (
                        /* Other decks - simple icon or title */
                        <>
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                            <span className="text-2xl md:text-3xl">🏡</span>
                          </div>
                          <p className="text-white/70 text-sm md:text-base font-medium">
                            {deck.subtitle}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* MIDDLE SECTION - Title Area */}
                  <div className={`flex-1 flex flex-col items-center justify-center text-center ${
                    isLederleFarms ? 'px-4 sm:px-6 md:px-8' : 'px-8'
                  }`}>
                    {s.headlines?.map((line, idx) => (
                      <h1 key={idx} className={`font-bold text-white drop-shadow-lg mb-4 ${
                        isLederleFarms 
                          ? 'text-base sm:text-xl md:text-3xl' 
                          : 'text-2xl md:text-3xl lg:text-4xl'
                      }`}>
                        {line}
                      </h1>
                    ))}
                    <div className="w-32 h-px bg-white/60 mx-auto mb-4" />
                    <h2 className={`text-white/90 font-medium ${
                      isLederleFarms 
                        ? 'text-sm sm:text-base md:text-lg' 
                        : 'text-lg md:text-xl'
                    }`}>
                      {s.subtitle}
                    </h2>
                  </div>

                  {/* BOTTOM SECTION - Footer Area */}
                  <div className={`flex-shrink-0 flex flex-col items-center justify-center text-center ${
                    isLederleFarms 
                      ? 'h-1/6 sm:h-1/6 px-4 sm:px-6 md:px-8 pb-4 sm:pb-6'
                      : 'h-1/4 px-8 pb-6'
                  }`}>
                    <h3 className={`text-white/70 font-medium max-w-2xl leading-relaxed ${
                      isLederleFarms 
                        ? 'text-xs sm:text-sm md:text-base' 
                        : 'text-sm md:text-base'
                    }`}>
                      {s.footer}
                    </h3>
                  </div>

                </div>
              </motion.div>
            ) : (
              // Content slides - Deck-specific sizing and fonts
              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
                className={`w-full mx-auto bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden border border-white/20 relative flex flex-col ${
                  is2ndCallDeck
                    ? 'hidden sm:block max-w-5xl rounded-3xl aspect-video'
                    : (isAIDeck
                      ? 'hidden sm:block max-w-4xl rounded-3xl aspect-video'
                      : (isLederleFarms 
                        ? 'max-w-4xl rounded-2xl sm:rounded-3xl aspect-[3/4] w-[85vw] max-w-sm mx-auto sm:aspect-video sm:w-full sm:max-w-none'
                        : 'max-w-4xl rounded-2xl sm:rounded-3xl aspect-[3/4] w-[85vw] max-w-sm mx-auto sm:aspect-video sm:w-full sm:max-w-none'))
                }`}
              >
                {/* Header Section - Deck-specific spacing */}
                <div className={`relative flex-shrink-0 flex items-center justify-center px-4 sm:px-0 ${
                  is2ndCallDeck ? 'h-1/4 pt-6' : (isAIDeck ? 'h-1/4 pt-6' : (isLederleFarms ? 'h-1/6 sm:h-1/6' : 'h-1/6 sm:h-1/6'))
                }`}>
                  <div className="w-full text-center">
                    <h2 className={`relative z-10 font-bold text-white drop-shadow-lg text-center ${
                      is2ndCallDeck 
                        ? 'text-2xl md:text-3xl lg:text-4xl'
                        : (isAIDeck 
                          ? 'text-2xl md:text-3xl lg:text-4xl'
                          : (isLederleFarms 
                            ? 'text-base sm:text-xl md:text-3xl' 
                            : 'text-sm sm:text-lg md:text-2xl'))
                    }`}>
                      {s.title}
                    </h2>
                  </div>
                </div>
                
                {/* Content Section - Deck-specific sizing */}
                <div className={`relative flex-1 bg-black/50 backdrop-blur-sm border-t border-white/20 overflow-hidden ${
                  isAIDeck ? '' : ''
                }`}>
                  <div className={`h-full flex flex-col justify-center items-center ${
                    is2ndCallDeck 
                      ? (s.key === 'Players' ? 'py-6 px-8' : 'py-8 px-8')
                      : (isAIDeck 
                        ? (s.key === 'Players' ? 'py-6 px-8' : 'py-8 px-8')
                        : (isLederleFarms 
                          ? (s.key === 'Players' ? 'py-2 px-4 sm:px-6 md:px-8' : 'py-4 sm:py-6 px-4 sm:px-6 md:px-8')
                          : (s.key === 'Players' ? 'pt-2 py-4 px-4 sm:px-6 md:px-8' : 'pt-4 sm:pt-6 py-4 px-4 sm:px-6 md:px-8')))
                  }`}>
                    {/* Check if slide has special elements */}
                    {(() => {
                      const hasSpecialElements = (
                        (deck.id === 'family-office' && s.key === 'Market') ||
                        (deck.id === 'ai-finance' && ['Landscape', 'Models', 'Players', 'Toolkit', 'FinTech', 'Use Cases', 'Prompting', 'Frameworks', 'Vision', 'Resources', 'QA'].includes(s.key)) ||
                        (deck.id === 'ai-finance-2nd' && ['Takeaways', 'Questions', 'Ideas'].includes(s.key)) ||
                        (deck.id === 'lederle-farms' && ['Market Analysis', 'Development Plan', 'Financial Model', 'Timeline'].includes(s.key))
                      );
                      
                      // Check for special elements first
                      if (hasSpecialElements && s.key === 'Models') {
                        // Models slide - render chart inline
                        return (
                          <div className="w-full h-full flex items-center justify-center">
                            <SpecialElements 
                              slide={s} 
                              deckId={deck.id} 
                              deck={deck}
                            />
                          </div>
                        );
                      } else if (hasSpecialElements && (s.key === 'Market Analysis' || s.key === 'Development Plan' || s.key === 'Financial Model' || s.key === 'Timeline')) {
                        // Lederle Farms special slides - render visualizations inline
                        return (
                          <div className="w-full h-full flex items-center justify-center">
                            <SpecialElements 
                              slide={s} 
                              deckId={deck.id} 
                              deck={deck}
                            />
                          </div>
                        );
                      } else if (hasSpecialElements && (s.key === 'Takeaways' || s.key === 'Questions' || s.key === 'Ideas')) {
                        // AI Finance 2nd Call special slides - render inline
                        return (
                          <div className="w-full h-full flex items-center justify-center">
                            <SpecialElements 
                              slide={s} 
                              deckId={deck.id} 
                              deck={deck}
                            />
                          </div>
                        );
                      } else if (hasSpecialElements && s.key === 'Players') {
                        // Players slide - render table
                        return (
                          <div className="w-full max-w-4xl flex items-center justify-center h-full mx-auto">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden w-full">
                              {/* Table Header */}
                              <div className="bg-white/20 px-6 py-3 border-b border-white/20">
                                <div className="grid grid-cols-11 gap-4 text-white font-bold text-sm">
                                  <div className="col-span-2">AI Model</div>
                                  <div className="col-span-2">Company</div>
                                  <div className="col-span-3">Core Advantage</div>
                                  <div className="col-span-4">Unique Edge</div>
                                </div>
                              </div>
                              
                              {/* Table Body */}
                              <div className="divide-y divide-white/10">
                                {[
                                  { model: "GPT", company: "OpenAI", advantage: "Broad capability", edge: "Cutting edge consumer apps" },
                                  { model: "Gemini", company: "Google", advantage: "YouTube data advantage", edge: "Cutting edge research" },
                                  { model: "Claude", company: "Anthropic", advantage: "Safety-focused", edge: "Cutting edge performance; king of code" },
                                  { model: "Grok", company: "xAI", advantage: "Twitter/X data advantage", edge: "Cutting edge datacenter (Colossus)" },
                                  { model: "DeepSeek", company: "DeepSeek", advantage: "GPU-constrained innovation", edge: "Cutting edge open source" },
                                  { model: "LLaMA", company: "Meta", advantage: "Open-source innovation", edge: "Ecosystem and social install base" },
                                ].map((player, idx) => (
                                  <div key={idx} className="px-6 py-4 hover:bg-white/5 transition-colors">
                                    <div className="grid grid-cols-11 gap-4 text-white text-sm">
                                      <div className="col-span-2 font-bold text-blue-300">{player.model}</div>
                                      <div className="col-span-2 font-medium">{player.company}</div>
                                      <div className="col-span-3 text-white/80">{player.advantage}</div>
                                      <div className="col-span-4 text-white/70">{player.edge}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      } else if (hasSpecialElements && s.key === 'Use Cases') {
                        // Cases slide - render persona cards in baseball card style
                        return (
                          <div className="w-full max-w-6xl flex items-center justify-center h-full mx-auto">
                            <div className="w-full h-full flex flex-col justify-center">
                              {/* Persona Cards Grid */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="flex flex-wrap justify-center gap-3 md:gap-4 flex-1 content-center max-w-5xl mx-auto"
                                style={{
                                  // Ensure 3 cards on top row, 2 centered on bottom
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}
                              >
                                {[
                                  {
                                    title: "The Synthesist",
                                    description: "morning commute voice dump → structured brief",
                                    icon: "🎙️",
                                    color: "bg-blue-500/80",
                                    accent: "border-blue-400/50",
                                    delay: 0.3
                                  },
                                  {
                                    title: "The Analyst",
                                    description: "10x faster research and depth; ID of primary sources",
                                    icon: "📊",
                                    color: "bg-green-500/80",
                                    accent: "border-green-400/50",
                                    delay: 0.4
                                  },
                                  {
                                    title: "The Ideator",
                                    description: "cross domain integration and brainstorming",
                                    icon: "💡",
                                    color: "bg-purple-500/80",
                                    accent: "border-purple-400/50",
                                    delay: 0.5
                                  },
                                  {
                                    title: "The Tutor",
                                    description: "theory questions, liquidity strategy, FX hedging plan",
                                    icon: "🎓",
                                    color: "bg-amber-500/80",
                                    accent: "border-amber-400/50",
                                    delay: 0.6
                                  },
                                  {
                                    title: "The Coder",
                                    description: "primary-source linkage, live charts (Perplexity finance API)",
                                    icon: "💻",
                                    color: "bg-red-500/80",
                                    accent: "border-red-400/50",
                                    delay: 0.7
                                  }
                                ].map((persona, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, rotateY: 180, scale: 0.8 }}
                                    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: persona.delay }}
                                    className={`bg-white/10 backdrop-blur-md rounded-xl border-2 ${persona.accent} shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:rotate-1 relative overflow-hidden w-full sm:w-72 md:w-80 lg:w-72 xl:w-80 flex-shrink-0`}
                                    style={{
                                      // Ensure consistent card sizing and proper wrapping
                                      minHeight: '140px',
                                      maxWidth: '320px',
                                      flexBasis: 'calc(33.333% - 1rem)', // 3 cards per row on large screens
                                    }}
                                  >
                                    {/* Card Header with gradient */}
                                    <div className={`${persona.color} p-3 md:p-4 relative`}>
                                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                                      <div className="relative flex items-center justify-between">
                                        <div className="flex items-center space-x-2 md:space-x-3">
                                          <div className="w-8 h-8 md:w-10 md:h-10 bg-white/30 rounded-full flex items-center justify-center text-lg md:text-xl backdrop-blur-sm">
                                            {persona.icon}
                                          </div>
                                          <h3 className="text-white font-bold text-sm md:text-base">
                                            {persona.title}
                                          </h3>
                                        </div>
                                        {/* Card number badge */}
                                        <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                          <span className="text-white font-bold text-xs md:text-sm">
                                            {idx + 1}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* Card Body */}
                                    <div className="p-3 md:p-4 flex-1 flex items-center">
                                      <p className="text-white/80 text-xs md:text-sm leading-relaxed text-center">
                                        {persona.description}
                                      </p>
                                    </div>
                                    
                                    {/* Card Footer - subtle pattern */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                  </motion.div>
                                ))}
                              </motion.div>

                              {/* Bottom instruction */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="mt-4 md:mt-6 text-center flex-shrink-0"
                              >
                                <span className="text-white/60 text-xs md:text-sm">
                                  Five AI personas transforming how financial professionals work
                                </span>
                              </motion.div>
                            </div>
                          </div>
                        );
                      } else if (hasSpecialElements && s.key === 'Toolkit') {
                        // Toolkit slide - render infographic
                        return (
                          <div className="w-full max-w-5xl flex items-center justify-center h-full mx-auto">
                            <div className="w-full">
                              {/* Tool Cards */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-2 md:space-y-3"
                              >
                                {[
                                  {
                                    useCase: "Need quick facts?",
                                    model: "Perplexity",
                                    description: "Replaces Google Search",
                                    logo: "/images/perplexity.png",
                                    url: "https://www.perplexity.ai/",
                                    color: "bg-purple-500/80",
                                    delay: 0.3
                                  },
                                  {
                                    useCase: "Need deep analysis?",
                                    model: "GPT",
                                    description: "Hyper productive starting point",
                                    logo: "/images/gpt.png",
                                    url: "https://chatgpt.com/",
                                    color: "bg-green-500/80",
                                    delay: 0.4
                                  },
                                  {
                                    useCase: "Need code or math help?",
                                    model: "Claude",
                                    description: "Technical expert on code and math",
                                    logo: "/images/claude.png",
                                    url: "https://claude.ai/new",
                                    color: "bg-orange-500/80",
                                    delay: 0.5
                                  },
                                  {
                                    useCase: "Want to build something?",
                                    model: "Cursor",
                                    description: "AI native code editor and workshop",
                                    logo: "/images/cursor.png",
                                    url: "https://www.cursor.com/en",
                                    color: "bg-cyan-500/80",
                                    delay: 0.6
                                  }
                                ].map((tool, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: tool.delay }}
                                    className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-3 md:p-4 hover:bg-white/15 transition-all duration-300"
                                  >
                                    <div className="flex items-center space-x-3 md:space-x-4">
                                      {/* Use Case */}
                                      <div className="flex-shrink-0 w-44 md:w-52">
                                        <span className="text-white/80 text-sm md:text-base font-medium">
                                          {tool.useCase}
                                        </span>
                                      </div>
                                      
                                      {/* Arrow */}
                                      <div className="flex-shrink-0">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </div>
                                      
                                      {/* Logo and Model */}
                                      <div className="flex-shrink-0">
                                        <a 
                                          href={tool.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center space-x-2 md:space-x-3 hover:scale-105 transition-transform duration-200 cursor-pointer"
                                        >
                                          <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-md p-1 md:p-1.5 shadow-lg">
                                            <img 
                                              src={tool.logo} 
                                              alt={`${tool.model} logo`}
                                              className="w-full h-full object-contain"
                                            />
                                          </div>
                                          <div className={`${tool.color} rounded-md px-2 py-1 md:px-3 md:py-1.5 hover:opacity-90 transition-opacity w-20 md:w-24 text-center`}>
                                            <span className="text-white font-bold text-xs md:text-sm">
                                              {tool.model}
                                            </span>
                                          </div>
                                        </a>
                                      </div>
                                      
                                      {/* Arrow */}
                                      <div className="flex-shrink-0">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </div>
                                      
                                      {/* Description */}
                                      <div className="flex-1">
                                        <span className="text-white/70 text-sm md:text-base">
                                          {tool.description}
                                        </span>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </motion.div>

                              {/* Bottom instruction */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="mt-3 md:mt-4 text-center"
                              >
                                <span className="text-white/60 text-xs md:text-sm">
                                  Click logos to open tools in new tab
                                </span>
                              </motion.div>
                            </div>
                          </div>
                        );
                      } else if (hasSpecialElements && s.key === 'FinTech') {
                        // FinTech slide - render advanced AI finance infographic
                        return (
                          <div className="w-full max-w-5xl flex items-center justify-center h-full mx-auto">
                            <div className="w-full h-full flex flex-col justify-center">
                              {/* FinTech Application Cards */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="space-y-1 md:space-y-1.5 flex-1 flex flex-col justify-center"
                              >
                                {[
                                  {
                                    category: "Trading",
                                    application: "Algorithmic Trading",
                                    description: "AI-driven strategy development & execution",
                                    icon: "📈",
                                    color: "bg-blue-500/80",
                                    delay: 0.3
                                  },
                                  {
                                    category: "Analysis",
                                    application: "Technical & Fundamental",
                                    description: "Pattern recognition & earnings prediction",
                                    icon: "🔍",
                                    color: "bg-green-500/80",
                                    delay: 0.4
                                  },
                                  {
                                    category: "Sentiment",
                                    application: "Document Analysis",
                                    description: "Real-time 10-Ks, earnings calls & social media",
                                    icon: "📊",
                                    color: "bg-purple-500/80",
                                    delay: 0.5
                                  },
                                  {
                                    category: "Risk",
                                    application: "Portfolio Optimization",
                                    description: "Stress testing & dynamic hedging strategies",
                                    icon: "🛡️",
                                    color: "bg-red-500/80",
                                    delay: 0.6
                                  },
                                  {
                                    category: "Alternative",
                                    application: "Data Mining",
                                    description: "Satellite imagery & transaction signals",
                                    icon: "🛰️",
                                    color: "bg-amber-500/80",
                                    delay: 0.7
                                  }
                                ].map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: item.delay }}
                                    className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-2 md:p-3 hover:bg-white/15 transition-all duration-300"
                                  >
                                    <div className="flex items-center justify-center space-x-4 md:space-x-6">
                                      {/* Category */}
                                      <div className="flex-shrink-0 w-20 md:w-24 text-center">
                                        <span className="text-white text-xs md:text-sm font-bold">
                                          {item.category}
                                        </span>
                                      </div>
                                      
                                      {/* Arrow */}
                                      <div className="flex-shrink-0">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </div>
                                      
                                      {/* Icon and Application */}
                                      <div className="flex-shrink-0 w-52 md:w-60 flex justify-center">
                                        <div className="flex items-center space-x-2 md:space-x-3">
                                          <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm md:text-lg">
                                            {item.icon}
                                          </div>
                                          <div className={`${item.color} rounded-md px-3 py-1 md:px-4 md:py-1.5 hover:opacity-90 transition-opacity`}>
                                            <span className="text-white font-bold text-xs md:text-sm whitespace-nowrap">
                                              {item.application}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      {/* Arrow */}
                                      <div className="flex-shrink-0">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </div>
                                      
                                      {/* Description - centered */}
                                      <div className="flex-1 text-center">
                                        <span className="text-white/70 text-xs md:text-sm">
                                          {item.description}
                                        </span>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </motion.div>

                              {/* Bottom instruction - more compact */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="mt-2 md:mt-3 text-center flex-shrink-0"
                              >
                                <span className="text-white/60 text-xs md:text-sm">
                                  Advanced AI applications transforming financial markets
                                </span>
                              </motion.div>
                            </div>
                          </div>
                        );
                      } else if (hasSpecialElements && s.key === 'Frameworks') {
                        // Frameworks slide - render mental models cards
                        return (
                          <div className="w-full max-w-5xl flex items-center justify-center h-full mx-auto">
                            <div className="w-full h-full flex flex-col justify-center">
                              {/* Mental Models Grid */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-1 content-center"
                              >
                                {[
                                  {
                                    title: "Human in the Loop",
                                    concept: "AI augments human decision-making, doesn't replace it",
                                    icon: "🤝",
                                    color: "bg-blue-500/80",
                                    delay: 0.3
                                  },
                                  {
                                    title: "Centaur vs Cyborg",
                                    concept: "Collaboration (centaur) vs integration (cyborg) approaches",
                                    icon: "⚖️",
                                    color: "bg-green-500/80",
                                    delay: 0.4
                                  },
                                  {
                                    title: "Rate of Improvement",
                                    concept: "Exponential capability gains vs linear human adaptation",
                                    icon: "📈",
                                    color: "bg-purple-500/80",
                                    delay: 0.5
                                  },
                                  {
                                    title: "Steps to AGI",
                                    concept: "OpenAI's 5 stages from chatbots to organizations",
                                    icon: "🎯",
                                    color: "bg-amber-500/80",
                                    delay: 0.6
                                  }
                                ].map((framework, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: framework.delay }}
                                    className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 md:p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                                  >
                                    <div className="flex flex-col items-center text-center space-y-2 md:space-y-3 h-full justify-center">
                                      {/* Icon and Title Row */}
                                      <div className="flex items-center space-x-2 md:space-x-3">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center text-lg md:text-xl">
                                          {framework.icon}
                                        </div>
                                        <div className={`${framework.color} rounded-lg px-3 py-1.5 md:px-4 md:py-2`}>
                                          <h3 className="text-white font-bold text-sm md:text-base whitespace-nowrap">
                                            {framework.title}
                                          </h3>
                                        </div>
                                      </div>
                                      
                                      {/* Concept */}
                                      <p className="text-white/80 text-xs md:text-sm leading-relaxed flex-1 flex items-center">
                                        {framework.concept}
                                      </p>
                                    </div>
                                  </motion.div>
                                ))}
                              </motion.div>

                              {/* Bottom instruction */}
                              <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="mt-4 md:mt-6 text-center flex-shrink-0"
                              >
                                <span className="text-white/60 text-xs md:text-sm">
                                  Essential mental models for understanding AI's role in business
                                </span>
                              </motion.div>
                            </div>
                          </div>
                        );
                      } else if (hasSpecialElements && s.key === 'Prompting') {
                        // Prompting slide - render RACE formula with bullets
                        return (
                          <div className="w-full h-full flex items-center justify-center">
                            <SpecialElements 
                              slide={s} 
                              deckId={deck.id}
                              deck={deck}
                              showIntroDetails={showIntroDetails}
                              showAboutDetails={showAboutDetails}
                              showObjectivesDetails={showObjectivesDetails}
                              setShowIntroDetails={setShowIntroDetails}
                              setShowAboutDetails={setShowAboutDetails}
                              setShowObjectivesDetails={setShowObjectivesDetails}
                            />
                          </div>
                        );
                      } else if (hasSpecialElements && s.key === 'Vision') {
                        // Vision slide - render S-curve with bullets
                        return (
                          <div className="w-full h-full flex items-center justify-center">
                            <SpecialElements 
                              slide={s} 
                              deckId={deck.id}
                              deck={deck}
                              showIntroDetails={showIntroDetails}
                              showAboutDetails={showAboutDetails}
                              showObjectivesDetails={showObjectivesDetails}
                              setShowIntroDetails={setShowIntroDetails}
                              setShowAboutDetails={setShowAboutDetails}
                              setShowObjectivesDetails={setShowObjectivesDetails}
                            />
                          </div>
                        );
                      } else if (hasSpecialElements && s.key === 'Resources') {
                        // Resources slide - render resources grid with next steps
                        return (
                          <div className="w-full h-full flex items-center justify-center">
                            <SpecialElements 
                              slide={s} 
                              deckId={deck.id}
                              deck={deck}
                              showIntroDetails={showIntroDetails}
                              showAboutDetails={showAboutDetails}
                              showObjectivesDetails={showObjectivesDetails}
                              setShowIntroDetails={setShowIntroDetails}
                              setShowAboutDetails={setShowAboutDetails}
                              setShowObjectivesDetails={setShowObjectivesDetails}
                            />
                          </div>
                        );
                      } else if (hasSpecialElements && s.key === 'QA') {
                        // QA slide - render interactive Q&A prompt
                        return (
                          <div className="w-full h-full flex items-center justify-center">
                            <SpecialElements 
                              slide={s} 
                              deckId={deck.id}
                              deck={deck}
                              showIntroDetails={showIntroDetails}
                              showAboutDetails={showAboutDetails}
                              showObjectivesDetails={showObjectivesDetails}
                              setShowIntroDetails={setShowIntroDetails}
                              setShowAboutDetails={setShowAboutDetails}
                              setShowObjectivesDetails={setShowObjectivesDetails}
                            />
                          </div>
                        );
                      }
                      
                      // Then check for bullets and other content with better vertical centering
                      return s.bullets ? (
                        s.key === "Summary" ? (
                          // Summary slide without bullets - Deck-specific fonts
                          <div className={`leading-relaxed text-white text-center w-full max-w-4xl mx-auto flex items-center justify-center h-full ${
                            isAIDeck 
                              ? 'text-xs sm:text-sm md:text-lg'
                              : (isLederleFarms ? 'text-base sm:text-lg md:text-xl' : 'text-xs sm:text-sm md:text-lg')
                          }`}>
                            <p className="font-medium drop-shadow-sm">{s.bullets[0]}</p>
                          </div>
                        ) : (
                          <div className="w-full max-w-4xl mx-auto flex flex-col justify-center h-full">
                            {/* All other slides with bullets - Deck-specific text sizing */}
                            <div className="flex-1 flex flex-col justify-center">
                              <ul className={`list-disc text-white text-left w-full max-w-3xl ml-6 sm:ml-8 md:ml-10 ${
                                isAIDeck
                                  ? 'space-y-3 sm:space-y-4 md:space-y-5 text-xs sm:text-sm md:text-base leading-relaxed'
                                  : (isLederleFarms 
                                    ? 'space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed'
                                    : 'space-y-3 sm:space-y-4 md:space-y-5 text-xs sm:text-sm md:text-base leading-relaxed')
                              }`}>
                              {s.bullets.map((b, idx) => (
                                <li key={idx} className="font-medium drop-shadow-sm">{b}</li>
                              ))}
                            </ul>
                            </div>
                            
                            {/* Subtext section - Deck-specific spacing */}
                            {s.subtext && (() => {
                              // For AI Finance deck, conditionally show subtext based on button state
                              if (deck.id === 'ai-finance') {
                                const shouldShowSubtext = 
                                  (s.key === 'Introductions' && showIntroDetails) ||
                                  (s.key === 'About' && showAboutDetails) ||
                                  (s.key === 'Objectives' && showObjectivesDetails) ||
                                  !['Introductions', 'About', 'Objectives'].includes(s.key);
                                
                                if (!shouldShowSubtext) return null;
                              }
                              
                              return (
                                <AnimatePresence>
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className={`text-gray-300 text-center mx-auto max-w-3xl w-full flex-shrink-0 ${
                                      isAIDeck
                                        ? 'mt-6 sm:mt-8 space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed'
                                        : (isLederleFarms 
                                          ? 'mt-8 sm:mt-10 md:mt-12 pb-6 sm:pb-8 md:pb-10 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed'
                                          : 'mt-6 sm:mt-8 space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed')
                                    }`}
                                  >
                                    {s.subtext.map((text, idx) => (
                                      text === "" ? (
                                        <div key={idx} className={isAIDeck ? "h-1" : (isLederleFarms ? "h-2" : "h-1")}></div>
                                      ) : (
                                        <p key={idx} className="font-normal">{text}</p>
                                      )
                                    ))}
                                  </motion.div>
                                </AnimatePresence>
                              );
                            })()}
                          </div>
                        )
                      ) : s.subtext ? (
                        // Slides with only subtext (no bullets) - Deck-specific sizing
                        (() => {
                          // For AI Finance deck, conditionally show subtext based on button state
                          if (deck.id === 'ai-finance') {
                            const shouldShowSubtext = 
                              (s.key === 'Introductions' && showIntroDetails) ||
                              (s.key === 'About' && showAboutDetails) ||
                              (s.key === 'Objectives' && showObjectivesDetails) ||
                              !['Introductions', 'About', 'Objectives'].includes(s.key);
                            
                            if (!shouldShowSubtext) return null;
                          }
                          
                          return (
                            <div className="w-full max-w-4xl mx-auto flex items-center justify-center h-full">
                              <AnimatePresence>
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  transition={{ duration: 0.3 }}
                                  className={`text-gray-300 text-center max-w-3xl ${
                                    isAIDeck
                                      ? 'space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed'
                                      : (isLederleFarms 
                                        ? 'space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg leading-relaxed'
                                        : 'space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed')
                                  }`}
                                >
                                  {s.subtext.map((text, idx) => (
                                    text === "" ? (
                                      <div key={idx} className={isAIDeck ? "h-2" : (isLederleFarms ? "h-3" : "h-2")}></div>
                                    ) : (
                                      <p key={idx} className="font-normal">{text}</p>
                                    )
                                  ))}
                                </motion.div>
                              </AnimatePresence>
                            </div>
                          );
                        })()
                      ) : (
                        // Only show placeholder if there are no special elements for this slide
                        !hasSpecialElements && (
                          <div className="h-20 flex items-center justify-center w-full">
                            <p className="text-white/60 italic text-xs sm:text-sm text-center">Content placeholder</p>
                          </div>
                        )
                      );
                    })()}
                  </div>
                </div>

                {/* Special Elements - Charts, Pop-outs, etc. (excluding slides that are inline) */}
                {!['Models', 'Prompting', 'Vision', 'Resources', 'QA', 'Takeaways', 'Questions', 'Ideas'].includes(s.key) && (
                  <SpecialElements 
                    slide={s} 
                    deckId={deck.id}
                    deck={deck}
                    showIntroDetails={showIntroDetails}
                    showAboutDetails={showAboutDetails}
                    showObjectivesDetails={showObjectivesDetails}
                    setShowIntroDetails={setShowIntroDetails}
                    setShowAboutDetails={setShowAboutDetails}
                    setShowObjectivesDetails={setShowObjectivesDetails}
                  />
                )}
              </motion.div>
            )}

            {/* Mobile Title Slide Content - Deck-specific styling */}
            {i === 0 && (
              <div className="sm:hidden absolute inset-0 flex items-center justify-center pt-20">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6 }}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col justify-center p-6 ${
                    isAIDeck 
                      ? 'w-[85vw] max-w-sm aspect-[3/4]' 
                      : 'w-[85vw] max-w-sm aspect-[3/4]'
                  }`}
                >
                  {/* AI Finance deck - show AWM logo */}
                  {isAIDeck ? (
                    <>
                      {/* Logo */}
                      <div className="text-center mb-4">
                        <div className="flex items-center justify-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
                            <img 
                              src="/images/AWM-logo.png" 
                              alt="AWM Logo" 
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div className="text-center space-y-4">
                        {s.headlines?.map((line, idx) => (
                          <h1 key={idx} className="text-lg font-bold text-white drop-shadow-lg">
                            {line}
                          </h1>
                        ))}
                        
                        <div className="w-20 h-px bg-white/60 mx-auto" />
                        
                        {/* Subtitle */}
                        <h2 className="text-sm text-white/90 font-medium">
                          {s.subtitle}
                        </h2>
                        
                        {/* Footer */}
                        <h3 className="text-xs text-white/70 font-medium leading-relaxed mt-4">
                          {s.footer}
                        </h3>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Other decks - simple icon */}
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 border border-white/30">
                          <span className="text-xl">🏡</span>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div className="text-center space-y-4">
                        {s.headlines?.map((line, idx) => (
                          <h1 key={idx} className="text-lg font-bold text-white drop-shadow-lg">
                            {line}
                          </h1>
                        ))}
                        
                        <div className="w-20 h-px bg-white/60 mx-auto" />
                        
                        {/* Subtitle */}
                        <h2 className="text-sm text-white/90 font-medium">
                          {s.subtitle}
                        </h2>
                        
                        {/* Footer */}
                        <h3 className="text-xs text-white/70 font-medium leading-relaxed mt-4">
                          {s.footer}
                        </h3>
                      </div>
                    </>
                  )}
                </motion.div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Desktop Navigation - Special handling for AI Finance decks */}
      {isAIDeck ? (
        <nav className="hidden sm:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 bg-white/10 backdrop-blur-md px-3 py-4 rounded-xl shadow-2xl border border-white/20 w-48">
          {/* AI Finance Deck Selector */}
          <div className="flex flex-col gap-2 mb-2">
            <button
              onClick={() => {
                if (deck.id === 'ai-finance-2nd') {
                  // Switch to 1st call deck
                  window.location.hash = '#ai-finance';
                  window.location.reload();
                } else {
                  setShowAINavigation(!showAINavigation);
                }
              }}
              className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                deck.id === 'ai-finance'
                  ? 'bg-white text-gray-900 shadow-lg scale-105 font-bold'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 hover:scale-102 backdrop-blur-sm'
              }`}
            >
              1st Call
            </button>
            <button
              onClick={() => {
                if (deck.id === 'ai-finance') {
                  // Switch to 2nd call deck
                  window.location.hash = '#ai-finance-2nd';
                  window.location.reload();
                } else {
                  setShowAINavigation(!showAINavigation);
                }
              }}
              className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                deck.id === 'ai-finance-2nd'
                  ? 'bg-white text-gray-900 shadow-lg scale-105 font-bold'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 hover:scale-102 backdrop-blur-sm'
              }`}
            >
              2nd Call
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/30 mb-2"></div>

          {/* Current Deck Navigation - Always show for active deck */}
          {deck.slides.map((s, i) => (
            <button 
              key={i} 
              onClick={() => scrollTo(i)} 
              className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                active === i 
                  ? 'bg-white text-gray-900 shadow-lg scale-105 font-bold' 
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 hover:scale-102 backdrop-blur-sm'
              }`}
            >
              {s.key === 'QA' ? 'Q&A' : s.key}
            </button>
          ))}
        </nav>
      ) : (
        /* Regular navigation for other decks */
        <nav className="hidden sm:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 bg-white/10 backdrop-blur-md px-3 py-4 rounded-xl shadow-2xl border border-white/20 w-48">
          {deck.slides.map((s, i) => (
            <button 
              key={i} 
              onClick={() => scrollTo(i)} 
              className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                active === i 
                  ? 'bg-white text-gray-900 shadow-lg scale-105 font-bold' 
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30 hover:scale-102 backdrop-blur-sm'
              }`}
            >
              {s.key === 'QA' ? 'Q&A' : s.key}
            </button>
          ))}
        </nav>
      )}

      {/* Navigation Instructions - Desktop only */}
      <div className="hidden sm:block fixed bottom-4 right-4 z-30 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
        <p className="text-white/70 text-xs md:text-sm">
          Use ↑↓ arrow keys or click navigation
        </p>
      </div>

      {/* Static Footer - Mobile responsive */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 bg-white/10 backdrop-blur-md rounded-lg px-3 sm:px-4 py-2 border border-white/20">
        <p className="text-white/70 text-xs sm:text-sm">
          Prepared by {deck.author}
        </p>
      </div>
      
      {/* Ambient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.03)_95%)]" />
    </div>
  );
}; 