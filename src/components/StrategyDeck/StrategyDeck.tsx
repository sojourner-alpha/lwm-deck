import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DeckConfig, Slide } from "../../types/deck";

interface StrategyDeckProps {
  deck: DeckConfig;
}

export const StrategyDeck: React.FC<StrategyDeckProps> = ({ deck }) => {
  const [active, setActive] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCritiqueSections, setExpandedCritiqueSections] = useState<{[slideKey: string]: {[section: string]: boolean}}>({});
  const containerRef = useRef<HTMLDivElement>(null);

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

  const renderTitleSlide = (slide: Slide) => (
    <motion.div 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl aspect-video mx-auto"
    >
      <div className="h-full bg-black/10 backdrop-blur-md rounded-3xl border border-gray-400/30 shadow-2xl overflow-hidden flex flex-col p-6 md:p-9">
        
        {/* TOP SECTION - Header or Spacer */}
        <div className="flex-shrink-0 h-1/4 pt-6">
          {slide.header && (
            <div className="text-center">
              <p className="text-lg md:text-xl text-purple-600 font-medium uppercase tracking-wide">{slide.header}</p>
            </div>
          )}
        </div>

        {/* MIDDLE SECTION - Title Area */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
          {slide.headlines?.map((line, idx) => (
            <h1 key={idx} className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold drop-shadow-lg mb-4">
              {line}
            </h1>
          ))}
          <div className="w-32 h-px mx-auto mb-4 bg-gray-400/60" />
          <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
            {slide.subtitle}
          </h2>
          
          {/* Subtext for non-first slides */}
          {slide.subtext && (
            <div className="mt-16 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
              {slide.subtext.map((text, idx) => (
                <p key={idx} className="font-normal">{text}</p>
              ))}
            </div>
          )}
        </div>

        {/* BOTTOM SECTION - Footer Area */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center text-center h-1/4 px-8 pb-6">
          <h3 className="text-base md:text-lg text-gray-500 font-medium max-w-2xl leading-relaxed">
            {slide.footer || slide.author}
          </h3>
        </div>

      </div>
    </motion.div>
  );

  const renderCritiqueSlide = (slide: Slide) => {
    const toggleSection = (section: string) => {
      setExpandedCritiqueSections(prev => ({
        ...prev,
        [slide.key]: {
          ...prev[slide.key],
          [section]: !prev[slide.key]?.[section]
        }
      }));
    };

    const CritiqueColumn = ({ 
      type, 
      title, 
      items, 
      bgColor, 
      textColor, 
      icon 
    }: { 
      type: string;
      title: string; 
      items?: string[]; 
      bgColor: string; 
      textColor: string; 
      icon: string;
    }) => {
      const isExpanded = expandedCritiqueSections[slide.key]?.[type] || false;
      
      return (
        <div className="bg-white/60 p-6 border-r border-gray-400/20 last:border-r-0 h-[500px] flex flex-col">
          {/* Small title button */}
          <div className={`flex items-center justify-center ${isExpanded ? 'mb-4' : 'h-full'}`}>
            <button
              onClick={() => toggleSection(type)}
              className="px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <h3 className={`text-lg font-bold ${textColor} text-center`}>
                {icon} {title}
              </h3>
            </button>
          </div>
          
          {/* Content area */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-1 bg-gray-50/80 rounded-lg p-4 overflow-y-auto"
              >
                <div className="space-y-4">
                  {items?.map((item, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl aspect-video mx-auto"
      >
        <div className="h-full bg-black/10 backdrop-blur-md rounded-3xl border border-gray-400/30 shadow-2xl overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="flex-shrink-0 bg-white/50 border-b border-gray-400/30 px-8 py-6">
            <h2 className="text-2xl md:text-3xl text-gray-800 font-bold text-center mb-2">
              {slide.title}
            </h2>
            <p className="text-gray-600 text-center mb-4">{slide.subtitle}</p>
            {slide.sourceLink && (
              <p className="text-sm text-gray-500 text-center">
                Source: {slide.sourceLink}
              </p>
            )}
          </div>

          {/* Three-column content */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-0">
            
            <CritiqueColumn
              type="positive"
              title="Positive"
              items={slide.critiqueContent?.positive}
              bgColor="bg-green-100/80"
              textColor="text-green-800"
              icon="✓"
            />

            <CritiqueColumn
              type="constructive"
              title="Constructive"
              items={slide.critiqueContent?.constructive}
              bgColor="bg-yellow-100/80"
              textColor="text-yellow-800"
              icon="⚡"
            />

            <CritiqueColumn
              type="gaps"
              title="Gaps"
              items={slide.critiqueContent?.gaps}
              bgColor="bg-red-100/80"
              textColor="text-red-800"
              icon="⚠"
            />
            
          </div>
        </div>
      </motion.div>
    );
  };

  const renderResearchSlide = (slide: Slide) => (
    <motion.div 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6 }}
      className="w-full max-w-6xl aspect-video mx-auto"
    >
      <div className="h-full bg-black/10 backdrop-blur-md rounded-3xl border border-gray-400/30 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex-shrink-0 bg-white/50 border-b border-gray-400/30 px-8 py-6">
          <h2 className="text-2xl md:text-3xl text-gray-800 font-bold text-center mb-2">
            {slide.title}
          </h2>
          <p className="text-gray-600 text-center">{slide.subtitle}</p>
        </div>

        {/* Flow chart content */}
        <div className="flex-1 p-8 flex items-center justify-center">
          {slide.key === 'Structure' ? (
            // Special horizontal layout ONLY for Structure slide
            <div className="flex items-center justify-between w-full max-w-6xl gap-4">
            
            {/* Column 1: Introduction */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-white/60 rounded-lg p-5 border border-gray-300/50 w-full text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <p className="text-gray-800 text-base font-medium">Introduction</p>
                </div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Column 2: Critique */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-purple-100/80 rounded-lg p-4 border border-purple-300/50 w-full mb-2">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <p className="text-purple-800 text-base font-bold uppercase tracking-wide">CRITIQUE</p>
                </div>
              </div>
              <div className="space-y-2 w-full">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-400 text-white rounded-full flex items-center justify-center text-xs">→</div>
                  <div className="bg-white/40 rounded p-2 border border-gray-300/30 flex-1">
                    <p className="text-gray-700 text-sm">Media Landscape</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-400 text-white rounded-full flex items-center justify-center text-xs">→</div>
                  <div className="bg-white/40 rounded p-2 border border-gray-300/30 flex-1">
                    <p className="text-gray-700 text-sm">Drug Development</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-400 text-white rounded-full flex items-center justify-center text-xs">→</div>
                  <div className="bg-white/40 rounded p-2 border border-gray-300/30 flex-1">
                    <p className="text-gray-700 text-sm">Premium Recommendations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Column 3: Research */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-purple-100/80 rounded-lg p-4 border border-purple-300/50 w-full mb-2">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <p className="text-purple-800 text-base font-bold uppercase tracking-wide">RESEARCH</p>
                </div>
              </div>
              <div className="space-y-2 w-full">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-400 text-white rounded-full flex items-center justify-center text-xs">→</div>
                  <div className="bg-white/40 rounded p-2 border border-gray-300/30 flex-1">
                    <p className="text-gray-700 text-sm">Universal Framework</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-400 text-white rounded-full flex items-center justify-center text-xs">→</div>
                  <div className="bg-white/40 rounded p-2 border border-gray-300/30 flex-1">
                    <p className="text-gray-700 text-sm">China Application</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-400 text-white rounded-full flex items-center justify-center text-xs">→</div>
                  <div className="bg-white/40 rounded p-2 border border-gray-300/30 flex-1">
                    <p className="text-gray-700 text-sm">GLP-1 Application</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow 3 */}
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Column 4: Synthesis */}
            <div className="flex flex-col items-center flex-1">
              <div className="bg-white/60 rounded-lg p-5 border border-gray-300/50 w-full text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    4
                  </div>
                  <p className="text-gray-800 text-base font-medium">Synthesis</p>
                </div>
              </div>
            </div>

            </div>
          ) : (
            // Original vertical layout for all other research slides
            <div className="space-y-4 w-full">
              {slide.researchSteps?.map((step, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-1 bg-white/60 rounded-lg p-4 border border-gray-300/50">
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                      {step}
                    </p>
                  </div>
                  
                  {/* Arrow (except for last item) */}
                  {idx < (slide.researchSteps?.length || 0) - 1 && (
                    <div className="flex-shrink-0 text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  const renderSlideContent = (slide: Slide, index: number) => {
    switch (slide.template) {
      case 'critique':
        return renderCritiqueSlide(slide);
      case 'research':
        return renderResearchSlide(slide);
      case 'title':
      default:
        return renderTitleSlide(slide);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Static Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${deck.slideImages.title})` }}
      />
      
      {/* Static Overlay - LWM specific light grey background */}
      <div className="fixed inset-0 bg-gray-100/90" />
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50/80 via-gray-100/70 to-gray-200/80" />

      {/* Mobile Header */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-md border-b border-white/20">
        <div className="flex flex-col space-y-2 p-3">
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
          <div className="text-center">
            <h1 className="text-white font-bold text-sm leading-tight">{deck.title}</h1>
          </div>
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
                  {s.key}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="snap-y snap-mandatory h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 relative z-10">
        {deck.slides.map((slide, i) => (
          <section 
            key={i} 
            className="snap-start flex items-center justify-center h-screen relative px-4 sm:px-0 pt-32 sm:pt-0 sm:pl-64 sm:pr-8"
            data-slide-index={i}
            data-slide-key={slide.key}
          >
            {renderSlideContent(slide, i)}
          </section>
        ))}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 bg-gray-800/20 border border-gray-600/30 backdrop-blur-md px-3 py-4 rounded-xl shadow-2xl w-48">
        {deck.slides.map((s, i) => (
          <button 
            key={i} 
            onClick={() => scrollTo(i)} 
            className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              active === i 
                ? 'bg-gray-800 text-white shadow-lg scale-105 font-bold'
                : 'bg-gray-700/30 text-gray-700 border border-gray-600/40 hover:bg-gray-700/40 hover:scale-102 backdrop-blur-sm'
            }`}
          >
            {s.key}
          </button>
        ))}
      </nav>

      {/* Navigation Instructions - Desktop only */}
      <div className="hidden sm:block fixed bottom-4 right-4 z-30 bg-gray-800/20 border border-gray-600/30 backdrop-blur-md rounded-lg px-4 py-2">
        <p className="text-xs md:text-sm text-gray-600">
          Use ↑↓ arrow keys or click navigation
        </p>
      </div>

      {/* Static Footer */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 bg-gray-800/20 border border-gray-600/30 backdrop-blur-md rounded-lg px-3 sm:px-4 py-2">
        <p className="text-xs sm:text-sm text-gray-600">
          Prepared by {deck.author}
        </p>
      </div>
      
    </div>
  );
};