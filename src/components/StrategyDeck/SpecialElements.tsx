import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide } from '../../types/deck';
import { downloadCurrentDeck } from '../../utils/pdfExport';

interface SpecialElementsProps {
  slide: Slide;
  deckId: string;
  deck?: any;
  // Subtext visibility props
  showIntroDetails?: boolean;
  showAboutDetails?: boolean;
  showObjectivesDetails?: boolean;
  setShowIntroDetails?: (show: boolean) => void;
  setShowAboutDetails?: (show: boolean) => void;
  setShowObjectivesDetails?: (show: boolean) => void;
}

export const SpecialElements: React.FC<SpecialElementsProps> = ({ 
  slide, 
  deckId,
  deck,
  showIntroDetails = false,
  showAboutDetails = false,
  showObjectivesDetails = false,
  setShowIntroDetails = () => {},
  setShowAboutDetails = () => {},
  setShowObjectivesDetails = () => {}
}) => {
  const [showPlayersMatrix, setShowPlayersMatrix] = useState(false);
  const [showPromptingExamples, setShowPromptingExamples] = useState(false);
  const [activeQuestionsTab, setActiveQuestionsTab] = useState<'mike' | 'kevin'>('mike');
  
  // Lederle Farms deck special elements
  if (deckId === 'lederle-farms') {
    // Title slide - Dynamic image collage
    if (slide.key === 'Title') {
      return (
        <div className="absolute inset-0 overflow-hidden">
          {/* Dynamic Image Collage */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-2 p-4">
            {/* Phase 1 - Large feature */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="col-span-4 row-span-3 rounded-xl overflow-hidden shadow-2xl border-2 border-white/30"
            >
              <img 
                src="/images/phase1.png" 
                alt="Phase 1 - Foundation" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Phase 2 - Medium right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="col-span-3 row-span-2 col-start-9 row-start-1 rounded-lg overflow-hidden shadow-xl border border-white/20"
            >
              <img 
                src="/images/phase2.png" 
                alt="Phase 2 - Expansion" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Phase 3 - Medium center-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="col-span-3 row-span-2 col-start-6 row-start-3 rounded-lg overflow-hidden shadow-xl border border-white/20"
            >
              <img 
                src="/images/phase3.png" 
                alt="Phase 3 - Premium" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Phase 4 - Small bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="col-span-2 row-span-2 col-start-2 row-start-6 rounded-lg overflow-hidden shadow-lg border border-white/20"
            >
              <img 
                src="/images/phase4.png" 
                alt="Phase 4 - Energy" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Phase 5 - Small bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="col-span-2 row-span-2 col-start-10 row-start-6 rounded-lg overflow-hidden shadow-lg border border-white/20"
            >
              <img 
                src="/images/phase5.png" 
                alt="Phase 5 - Technology" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating development phases labels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="col-span-6 row-span-2 col-start-4 row-start-7 flex items-center justify-center"
            >
              <div className="bg-black/60 backdrop-blur-md rounded-xl border border-white/30 p-4 text-center">
                <p className="text-white/90 text-sm font-medium">
                  Five-Phase Development Strategy
                </p>
                <p className="text-white/70 text-xs mt-1">
                  Foundation → Expansion → Premium → Energy → Technology
                </p>
              </div>
            </motion.div>
          </div>

          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none"></div>
        </div>
      );
    }

    // Phase 1 slide - Enhanced with image and improved layout
    if (slide.key === 'Phase 1') {
      return (
        <div className="w-full h-full flex items-center justify-center p-6">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-4 shadow-xl flex overflow-hidden"
            >
              {/* Left Side - Image */}
              <div className="w-2/5 pr-4 flex-shrink-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="rounded-lg overflow-hidden border border-white/20 shadow-xl"
                  style={{ aspectRatio: '3/4', maxHeight: '52.5vh' }}
                >
                  <img 
                    src="/images/phase1.png" 
                    alt="Phase 1 - Foundation & Quick Wins" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Right Side - Content */}
              <div className="w-3/5 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  {/* Phase Header */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 bg-blue-500/80 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">Phase 1</h3>
                        <p className="text-white/80 text-base">Foundation & Quick Wins</p>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-green-400 font-bold text-base">$250K</p>
                        <p className="text-white/70 text-xs">Investment</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-blue-400 font-bold text-base">6-9 months</p>
                        <p className="text-white/70 text-xs">Timeline</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-purple-400 font-bold text-base">$2K-4K</p>
                        <p className="text-white/70 text-xs">Monthly Revenue</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div className="space-y-3">
                    {[
                      { icon: '🏞️', title: 'Land Acquisition', desc: 'Strategic site selection with development potential' },
                      { icon: '🚐', title: 'Airstream Deployment', desc: 'Premium short-term rental for immediate revenue' },
                      { icon: '🏗️', title: 'Infrastructure Development', desc: 'Essential utilities and access roads' },
                      { icon: '📋', title: 'Permitting & Planning', desc: 'Secure approvals for subsequent phases' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                        className="flex items-start space-x-3 bg-black/20 rounded-lg p-3 border border-white/10"
                      >
                        <div className="text-xl flex-shrink-0">{item.icon}</div>
                        <div className="min-w-0">
                          <h4 className="text-white font-semibold text-base">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Phase 2 slide - Enhanced with image and improved layout
    if (slide.key === 'Phase 2') {
      return (
        <div className="w-full h-full flex items-center justify-center p-6">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-4 shadow-xl flex overflow-hidden"
            >
              {/* Left Side - Content */}
              <div className="w-3/5 flex flex-col justify-center pr-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  {/* Phase Header */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 bg-green-500/80 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">Phase 2</h3>
                        <p className="text-white/80 text-base">Hospitality Expansion</p>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-green-400 font-bold text-base">$350K</p>
                        <p className="text-white/70 text-xs">Investment</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-blue-400 font-bold text-base">12 months</p>
                        <p className="text-white/70 text-xs">Timeline</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-purple-400 font-bold text-base">$8K-15K</p>
                        <p className="text-white/70 text-xs">Monthly Revenue</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div className="space-y-3">
                    {[
                      { icon: '🛁', title: 'Bathhouse & Spa', desc: 'Shared amenity facility enhancing guest experience' },
                      { icon: '🏗️', title: 'Foundation Preparation', desc: 'Three engineered foundations with full utilities' },
                      { icon: '⛺', title: 'Yurt Deployment', desc: 'Three luxury yurt accommodations (4x capacity)' },
                      { icon: '🌿', title: 'Landscape Enhancement', desc: 'Curated outdoor spaces and recreational areas' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                        className="flex items-start space-x-3 bg-black/20 rounded-lg p-3 border border-white/10"
                      >
                        <div className="text-xl flex-shrink-0">{item.icon}</div>
                        <div className="min-w-0">
                          <h4 className="text-white font-semibold text-base">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Image */}
              <div className="w-2/5 flex-shrink-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="rounded-lg overflow-hidden border border-white/20 shadow-xl"
                  style={{ aspectRatio: '3/4', maxHeight: '52.5vh' }}
                >
                  <img 
                    src="/images/phase2.png" 
                    alt="Phase 2 - Hospitality Expansion" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Phase 3 slide - Enhanced with image and improved layout
    if (slide.key === 'Phase 3') {
      return (
        <div className="w-full h-full flex items-center justify-center p-6">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-4 shadow-xl flex overflow-hidden"
            >
              {/* Left Side - Image */}
              <div className="w-2/5 pr-4 flex-shrink-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="rounded-lg overflow-hidden border border-white/20 shadow-xl"
                  style={{ aspectRatio: '3/4', maxHeight: '52.5vh' }}
                >
                  <img 
                    src="/images/phase3.png" 
                    alt="Phase 3 - Premium Development" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Right Side - Content */}
              <div className="w-3/5 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  {/* Phase Header */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 bg-purple-500/80 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">Phase 3</h3>
                        <p className="text-white/80 text-base">Premium Development</p>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-green-400 font-bold text-base">$700K</p>
                        <p className="text-white/70 text-xs">Investment</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-blue-400 font-bold text-base">18 months</p>
                        <p className="text-white/70 text-xs">Timeline</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-purple-400 font-bold text-base">$20K-35K</p>
                        <p className="text-white/70 text-xs">Monthly Revenue</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div className="space-y-3">
                    {[
                      { icon: '🏘️', title: 'Cabin Construction', desc: 'Three custom tiny house cabins on foundations' },
                      { icon: '🏛️', title: 'Central Lodge', desc: 'Main gathering space with commercial kitchen' },
                      { icon: '🏊', title: 'Premium Amenities', desc: 'Pool, expanded spa, and recreational infrastructure' },
                      { icon: '🌺', title: 'Landscape Maturation', desc: 'Full buildout of gardens and trail systems' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                        className="flex items-start space-x-3 bg-black/20 rounded-lg p-3 border border-white/10"
                      >
                        <div className="text-xl flex-shrink-0">{item.icon}</div>
                        <div className="min-w-0">
                          <h4 className="text-white font-semibold text-base">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Phase 4 slide - Enhanced with image and improved layout
    if (slide.key === 'Phase 4') {
      return (
        <div className="w-full h-full flex items-center justify-center p-6">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-4 shadow-xl flex overflow-hidden"
            >
              {/* Left Side - Content */}
              <div className="w-3/5 flex flex-col justify-center pr-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  {/* Phase Header */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 bg-amber-500/80 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">Phase 4</h3>
                        <p className="text-white/80 text-base">Energy Infrastructure</p>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-green-400 font-bold text-base">$1.5M</p>
                        <p className="text-white/70 text-xs">Investment</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-blue-400 font-bold text-base">12 months</p>
                        <p className="text-white/70 text-xs">Timeline</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-purple-400 font-bold text-base">$15K-25K</p>
                        <p className="text-white/70 text-xs">Monthly Revenue</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div className="space-y-3">
                    {[
                      { icon: '☀️', title: 'Solar Farm Development', desc: '1-2MW solar installation for energy independence' },
                      { icon: '🔌', title: 'Grid Integration', desc: 'Net metering and power purchase agreements' },
                      { icon: '🔋', title: 'Energy Storage', desc: 'Battery systems for load balancing and backup' },
                      { icon: '🧠', title: 'Smart Grid Integration', desc: 'Advanced monitoring and optimization systems' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                        className="flex items-start space-x-3 bg-black/20 rounded-lg p-3 border border-white/10"
                      >
                        <div className="text-xl flex-shrink-0">{item.icon}</div>
                        <div className="min-w-0">
                          <h4 className="text-white font-semibold text-base">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Image */}
              <div className="w-2/5 flex-shrink-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="rounded-lg overflow-hidden border border-white/20 shadow-xl"
                  style={{ aspectRatio: '3/4', maxHeight: '52.5vh' }}
                >
                  <img 
                    src="/images/phase4.png" 
                    alt="Phase 4 - Energy Infrastructure" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Phase 5 slide - Enhanced with image and improved layout
    if (slide.key === 'Phase 5') {
      return (
        <div className="w-full h-full flex items-center justify-center p-6">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-4 shadow-xl flex overflow-hidden"
            >
              {/* Left Side - Image */}
              <div className="w-2/5 pr-4 flex-shrink-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="rounded-lg overflow-hidden border border-white/20 shadow-xl"
                  style={{ aspectRatio: '3/4', maxHeight: '52.5vh' }}
                >
                  <img 
                    src="/images/phase5.png" 
                    alt="Phase 5 - Technology Innovation" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Right Side - Content */}
              <div className="w-3/5 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-4"
                >
                  {/* Phase Header */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-10 h-10 bg-red-500/80 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">5</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">Phase 5</h3>
                        <p className="text-white/80 text-base">Technology Innovation</p>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-green-400 font-bold text-base">$500K-1M</p>
                        <p className="text-white/70 text-xs">Investment</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-blue-400 font-bold text-base">12-24 months</p>
                        <p className="text-white/70 text-xs">Timeline</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 text-center border border-white/20">
                        <p className="text-purple-400 font-bold text-base">$10K-20K</p>
                        <p className="text-white/70 text-xs">Monthly Revenue</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div className="space-y-3">
                    {[
                      { icon: '💻', title: 'Micro Data Center', desc: 'Edge computing facility leveraging renewable energy' },
                      { icon: '🔬', title: 'Proof of Concept', desc: 'Demonstrate viability of distributed computing' },
                      { icon: '🤝', title: 'Strategic Partnerships', desc: 'Collaborate with cloud and edge computing companies' },
                      { icon: '🤖', title: 'AI Integration', desc: 'AI-powered property management and optimization' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
                        className="flex items-start space-x-3 bg-black/20 rounded-lg p-3 border border-white/10"
                      >
                        <div className="text-xl flex-shrink-0">{item.icon}</div>
                        <div className="min-w-0">
                          <h4 className="text-white font-semibold text-base">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Market Analysis slide - Comprehensive hospitality market overview
    if (slide.key === 'Market Analysis') {
      return (
        <div className="w-full h-full flex items-center justify-center p-2">
          <div className="w-full max-w-6xl h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-4 shadow-xl h-full flex flex-col"
            >
              {/* Main Grid Layout - Fixed heights and better spacing */}
              <div className="grid grid-cols-12 gap-4 flex-1 min-h-0">
                
                {/* Left Column - Market Size & Growth */}
                <div className="col-span-4 flex flex-col space-y-3 h-full">
                  {/* Market Size Hero */}
                  <div className="bg-black/40 rounded-lg p-4 border border-white/20 h-32 flex-shrink-0">
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="w-12 h-12 bg-blue-500/80 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-xl">📊</span>
                      </div>
                      <h4 className="text-white font-bold text-base mb-1">$87B Global Market</h4>
                      <p className="text-white/80 text-sm">Short-term rental industry</p>
                      <p className="text-green-400 text-sm font-bold">+15% CAGR</p>
                    </div>
                  </div>

                  {/* Rural/Glamping Segment */}
                  <div className="bg-black/40 rounded-lg p-4 border border-white/20 h-28 flex-shrink-0">
                    <div className="text-center h-full flex flex-col justify-center">
                      <h4 className="text-white font-bold text-base mb-1">Rural Hospitality</h4>
                      <p className="text-white/80 text-sm">Fastest growing segment</p>
                      <p className="text-amber-400 text-sm font-bold">25% CAGR</p>
                      <p className="text-white/70 text-xs">Glamping & unique stays</p>
                    </div>
                  </div>

                  {/* Revenue Potential */}
                  <div className="bg-black/40 rounded-lg p-4 border border-white/20 flex-1 min-h-0">
                    <div className="text-center h-full flex flex-col justify-center">
                      <h4 className="text-white font-bold text-base mb-2">Revenue Potential</h4>
                      <div className="space-y-1 text-sm">
                        <p className="text-white/80">Avg nightly: <span className="text-green-400 font-bold">$200-450</span></p>
                        <p className="text-white/80">Peak occupancy: <span className="text-green-400 font-bold">85%</span></p>
                        <p className="text-white/80">Annual RevPAR: <span className="text-green-400 font-bold">$45K+</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Column - Target Demographics & Demand Drivers */}
                <div className="col-span-4 flex flex-col space-y-3 h-full">
                  {/* Target Demographics */}
                  <div className="bg-black/40 rounded-lg p-3 border border-white/20 h-52 flex-shrink-0">
                    <div className="text-center mb-2">
                      <div className="w-10 h-10 bg-green-500/80 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-white font-bold text-lg">👥</span>
                      </div>
                      <h4 className="text-white font-bold text-sm">Target Demographics</h4>
                    </div>
                    <div className="space-y-2 text-xs px-3">
                      <div className="flex justify-between">
                        <span className="text-white/80">Millennials (25-40)</span>
                        <span className="text-green-400 font-bold">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Gen X (40-55)</span>
                        <span className="text-green-400 font-bold">35%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">HHI $75K+</span>
                        <span className="text-green-400 font-bold">78%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Remote workers</span>
                        <span className="text-green-400 font-bold">62%</span>
                      </div>
                    </div>
                  </div>

                  {/* Demand Drivers */}
                  <div className="bg-black/40 rounded-lg p-3 border border-white/20 flex-1 min-h-0">
                    <div className="text-center mb-3">
                      <h4 className="text-white font-bold text-sm">Key Demand Drivers</h4>
                    </div>
                    <div className="space-y-3 text-sm pl-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-400">🌱</span>
                        <span className="text-white/80">Sustainable tourism growth</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-green-400">💻</span>
                        <span className="text-white/80">Remote work flexibility</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-purple-400">✨</span>
                        <span className="text-white/80">Experience-focused travel</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-amber-400">🏞️</span>
                        <span className="text-white/80">Nature-based wellness</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Competitive Landscape & Location Advantage */}
                <div className="col-span-4 flex flex-col space-y-3 h-full">
                  {/* Competitive Landscape */}
                  <div className="bg-black/40 rounded-lg p-3 border border-white/20 h-52 flex-shrink-0">
                    <div className="text-center mb-2">
                      <div className="w-10 h-10 bg-purple-500/80 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-white font-bold text-lg">🎯</span>
                      </div>
                      <h4 className="text-white font-bold text-sm">Competitive Position</h4>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-white/10 rounded p-2">
                        <p className="text-white/80 font-medium text-xs">Direct Competitors:</p>
                        <p className="text-white/70 text-xs">Limited luxury rural options within 100mi</p>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <p className="text-white/80 font-medium text-xs">Our Differentiators:</p>
                        <p className="text-white/70 text-xs">Integrated energy + tech + hospitality</p>
                      </div>
                    </div>
                  </div>

                  {/* Location Advantage */}
                  <div className="bg-black/40 rounded-lg p-3 border border-white/20 flex-1 min-h-0">
                    <div className="text-center mb-3">
                      <h4 className="text-white font-bold text-sm">Location Advantage</h4>
                    </div>
                    <div className="space-y-2 text-sm pl-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-400">🏙️</span>
                        <span className="text-white/80">2hr from major metro</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-green-400">🛣️</span>
                        <span className="text-white/80">Highway accessibility</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-purple-400">🌲</span>
                        <span className="text-white/80">Natural amenities</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-amber-400">⚡</span>
                        <span className="text-white/80">Grid connectivity</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-red-400">🏛️</span>
                        <span className="text-white/80">Favorable zoning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Summary Bar - Fixed at bottom */}
              <div className="mt-3 bg-black/50 rounded-lg p-3 border border-white/20 flex-shrink-0">
                <div className="text-center">
                  <p className="text-white font-bold text-sm mb-1">Market Opportunity Summary</p>
                  <p className="text-white/80 text-xs leading-relaxed">
                    <span className="text-green-400 font-bold">$87B global market</span> with 
                    <span className="text-blue-400 font-bold"> 25% rural growth</span> • 
                    <span className="text-purple-400 font-bold"> Limited local competition</span> • 
                    <span className="text-amber-400 font-bold"> Unique integrated model</span> • 
                    <span className="text-red-400 font-bold"> Strong location fundamentals</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Development Plan slide - Visual phase overview
    if (slide.key === 'Development Plan') {
      return (
        <div className="w-full h-full flex items-center justify-center p-2">
          <div className="w-full max-w-6xl h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-4 shadow-xl h-full flex flex-col"
            >
              <h3 className="text-white font-bold text-xl mb-4 tracking-wide text-center">
                DEVELOPMENT ROADMAP
              </h3>
              
              {/* Phase Cards Grid */}
              <div className="grid grid-cols-5 gap-3 flex-1">
                {[
                  { 
                    phase: 'Phase 1', 
                    title: 'Foundation & Quick Wins', 
                    investment: '$250K', 
                    timeline: '6-9 months', 
                    color: 'bg-blue-500/80',
                    imagePlaceholder: 'phase1.png'
                  },
                  { 
                    phase: 'Phase 2', 
                    title: 'Hospitality Expansion', 
                    investment: '$350K', 
                    timeline: '12 months', 
                    color: 'bg-green-500/80',
                    imagePlaceholder: 'phase2.png'
                  },
                  { 
                    phase: 'Phase 3', 
                    title: 'Premium Development', 
                    investment: '$700K', 
                    timeline: '18 months', 
                    color: 'bg-purple-500/80',
                    imagePlaceholder: 'phase3.png'
                  },
                  { 
                    phase: 'Phase 4', 
                    title: 'Energy Infrastructure', 
                    investment: '$1.5M', 
                    timeline: '12 months', 
                    color: 'bg-amber-500/80',
                    imagePlaceholder: 'phase4.png'
                  },
                  { 
                    phase: 'Phase 5', 
                    title: 'Technology Innovation', 
                    investment: '$500K-1M', 
                    timeline: '12-24 months', 
                    color: 'bg-red-500/80',
                    imagePlaceholder: 'phase5.png'
                  }
                ].map((phase, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="flex flex-col h-full"
                  >
                    {/* Image Container - 3:4 Ratio */}
                    <div className="aspect-[3/4] bg-black/40 rounded-lg border border-white/20 mb-3 overflow-hidden relative">
                      <img 
                        src={`/images/${phase.imagePlaceholder}`}
                        alt={`${phase.phase} - ${phase.title}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          const img = e.currentTarget;
                          img.style.display = 'none';
                          const fallback = img.parentElement?.querySelector('.fallback-placeholder') as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="fallback-placeholder absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                        <div className="text-center">
                          <div className={`w-8 h-8 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                            <span className="text-white font-bold text-sm">{idx + 1}</span>
                          </div>
                          <p className="text-white/60 text-xs">
                            {phase.imagePlaceholder}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phase Info Card */}
                    <div className="bg-black/40 rounded-lg p-4 border border-white/20 flex-1">
                      <div className="text-center">
                        <div className="text-white font-bold text-base mb-2">{phase.phase}</div>
                        <div className="text-white/80 text-sm mb-3 leading-tight">{phase.title}</div>
                        <div className="space-y-1">
                          <div className="text-green-400 font-bold text-sm">{phase.investment}</div>
                          <div className="text-white/60 text-sm">{phase.timeline}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Timeline Connection Line */}
              <div className="relative mt-4">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/30"></div>
                <div className="grid grid-cols-5 gap-3">
                  {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="flex justify-center">
                      <div className="w-3 h-3 bg-white/50 rounded-full relative -top-1"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-3 text-center">
                <p className="text-white/60 text-base">Total Investment: $3.3M-3.8M | Timeline: 6-8 years</p>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Financial Model slide - Revenue projections
    if (slide.key === 'Financial Model') {
      return (
        <div className="w-full h-full flex items-center justify-center p-2">
          <div className="w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-3 shadow-xl"
            >
              <h3 className="text-white font-bold text-sm mb-3 tracking-wide text-center">
                FINANCIAL PROJECTIONS
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Revenue Growth Chart */}
                <div className="bg-black/30 rounded-lg p-3 border border-white/20">
                  <h4 className="text-white font-bold text-xs mb-2 text-center">Monthly Revenue Growth</h4>
                  <div className="relative h-24">
                    <svg className="w-full h-full" viewBox="0 0 300 120">
                      {/* Grid */}
                      <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                        {[30, 60, 90].map(y => (
                          <line key={y} x1="30" y1={y} x2="270" y2={y} />
                        ))}
                      </g>
                      
                      {/* Revenue curve */}
                      <path
                        d="M 30 110 Q 70 105 90 95 Q 130 80 150 70 Q 190 55 210 45 Q 240 35 270 25"
                        stroke="rgba(34, 197, 94, 0.9)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                      
                      {/* Data points */}
                      {[[30, 110], [90, 95], [150, 70], [210, 45], [270, 25]].map(([x, y], idx) => (
                        <circle key={idx} cx={x} cy={y} r="2" fill="rgba(34, 197, 94, 0.9)" />
                      ))}
                    </svg>
                    
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-white/60 text-xs -ml-6">
                      <span>$50K</span>
                      <span>$30K</span>
                      <span>$10K</span>
                      <span>$0</span>
                    </div>
                  </div>
                  
                  {/* X-axis labels */}
                  <div className="flex justify-between text-white/60 text-xs mt-1 px-3">
                    <span>Y1</span>
                    <span>Y2</span>
                    <span>Y3</span>
                    <span>Y4</span>
                    <span>Y5</span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-2">
                  {[
                    { metric: 'Target IRR', value: '25%+', icon: '📊', color: 'bg-blue-500/80' },
                    { metric: 'Peak Monthly Revenue', value: '$45K', icon: '💰', color: 'bg-green-500/80' },
                    { metric: 'Total Investment', value: '$4.2M', icon: '💸', color: 'bg-purple-500/80' },
                    { metric: 'Break-even', value: 'Month 18', icon: '⚖️', color: 'bg-amber-500/80' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      className="bg-black/30 rounded-lg p-2 border border-white/20 flex items-center space-x-2"
                    >
                      <div className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white text-xs">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-xs">{item.metric}</div>
                        <div className="text-white/70 text-xs">{item.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    // Timeline slide - Detailed project timeline
    if (slide.key === 'Timeline') {
      return (
        <div className="w-full h-full flex items-center justify-center p-2">
          <div className="w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-3 shadow-xl"
            >
              <h3 className="text-white font-bold text-sm mb-3 tracking-wide text-center">
                PROJECT TIMELINE & MILESTONES
              </h3>
              
              <div className="space-y-2">
                {[
                  { year: 'Year 1', phases: ['Phase 1: Foundation', 'Phase 2: Expansion'], milestones: ['Land acquired', 'Airstream deployed', 'Yurts operational'], revenue: '$2K-15K/mo' },
                  { year: 'Year 2-3', phases: ['Phase 3: Premium Development'], milestones: ['Cabins constructed', 'Lodge completed', 'Premium positioning'], revenue: '$20K-35K/mo' },
                  { year: 'Year 4', phases: ['Phase 4: Energy Infrastructure'], milestones: ['Solar farm operational', 'Grid integration', 'Energy independence'], revenue: '$35K-60K/mo' },
                  { year: 'Year 5-7', phases: ['Phase 5: Technology Innovation'], milestones: ['Data center deployed', 'Tech partnerships', 'Full automation'], revenue: '$45K-80K/mo' }
                ].map((period, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="bg-black/30 rounded-lg p-2 border border-white/20"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
                      <div className="text-center md:text-left">
                        <div className="text-white font-bold text-xs">{period.year}</div>
                      </div>
                      <div>
                        <div className="text-white/80 text-xs space-y-0.5">
                          {period.phases.map((phase, pidx) => (
                            <div key={pidx} className="bg-white/10 rounded px-1.5 py-0.5 text-xs">{phase}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-white/70 text-xs space-y-0.5">
                          {period.milestones.map((milestone, midx) => (
                            <div key={midx}>• {milestone}</div>
                          ))}
                        </div>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="text-green-400 font-bold text-xs">{period.revenue}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      );
    }
  }

  // Family Office Market Chart Pop-out
  if (deckId === 'family-office' && slide.key === 'Market') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:block absolute -right-40 top-1/2 -translate-y-1/2 w-64 z-40"
      >
        <div className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 p-6 shadow-2xl relative overflow-hidden">
          {/* Odgers-inspired geometric accent - top right gap */}
          <div className="absolute top-0 right-0 w-6 h-6 bg-black/20 rounded-bl-lg border-l border-b border-white/20"></div>
          
          {/* Chart Title */}
          <h3 className="text-white font-bold text-sm mb-4 tracking-wide">
            FAMILY OFFICE AUM GROWTH
          </h3>
          
          {/* Chart Container with Odgers-inspired grid */}
          <div className="relative h-40 mb-4">
            {/* Grid Background with intentional gaps */}
            <div className="absolute inset-0 opacity-20">
              {/* Horizontal grid lines with gaps */}
              {[20, 40, 60, 80].map((top, idx) => (
                <div key={idx} className="absolute w-full h-px bg-white/30 flex" style={{top: `${top}%`}}>
                  <div className="flex-1 bg-white/30 h-px"></div>
                  <div className="w-8 h-px"></div>
                  <div className="flex-1 bg-white/30 h-px"></div>
                </div>
              ))}
              {/* Vertical grid lines with gaps */}
              {[20, 40, 60, 80].map((left, idx) => (
                <div key={idx} className="absolute h-full w-px bg-white/30 flex flex-col" style={{left: `${left}%`}}>
                  <div className="flex-1 bg-white/30 w-px"></div>
                  {idx === 2 && <div className="h-6 w-px"></div>}
                  <div className="flex-1 bg-white/30 w-px"></div>
                </div>
              ))}
            </div>
            
            {/* Chart Line - Growth trajectory */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 160">
              <path
                d="M 20 140 Q 80 120 100 100 T 160 85 Q 200 75 240 60 T 280 45"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="drop-shadow-sm"
              />
              {/* Data points with Odgers-inspired squares */}
              {[[20, 140], [75, 110], [130, 85], [185, 70], [240, 55], [280, 45]].map(([x, y], idx) => (
                <g key={idx}>
                  {idx !== 2 ? (
                    // Normal squares
                    <rect x={x-3} y={y-3} width="6" height="6" fill="white" className="drop-shadow-sm" />
                  ) : (
                    // Gap square (Odgers style) - missing corner
                    <g>
                      <rect x={x-3} y={y-3} width="6" height="6" fill="white" className="drop-shadow-sm" />
                      <rect x={x+1} y={y-3} width="2" height="2" fill="transparent" />
                    </g>
                  )}
                </g>
              ))}
            </svg>
            
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-white/70 text-xs -ml-8">
              <span>$12T</span>
              <span>$9T</span>
              <span>$6T</span>
              <span>$3T</span>
              <span>$0T</span>
            </div>
          </div>
          
          {/* X-Axis Labels */}
          <div className="flex justify-between text-white/70 text-xs mb-4 px-2">
            <span>2020</span>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
            <span>2024</span>
            <span>2025</span>
          </div>
          
          {/* Key/Legend with Odgers-inspired design */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/20 p-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-sm relative">
                  <div className="absolute top-0 right-0 w-1 h-1 bg-transparent"></div>
                </div>
                <span className="text-white/80 text-xs font-medium">Assets Under Management</span>
              </div>
            </div>
            <p className="text-white/60 text-xs mt-2 leading-tight">
              Projected growth trajectory through 2030
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // AI Finance deck special elements
  if (deckId === 'ai-finance' || deckId === 'ai-finance-2nd') {
    // 2nd Call deck special slides
    if (deckId === 'ai-finance-2nd') {
      // Takeaways slide - Pain-Point Synthesis
      if (slide.key === 'Takeaways') {
        return (
          <div className="w-full h-full flex items-center justify-center p-2">
            <div className="w-full max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-3 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {/* Left Column */}
                  <div className="space-y-2">
                    {[
                      {
                        title: 'Compliance Bottleneck',
                        icon: '⚠️',
                        color: 'bg-red-500/80',
                        description: 'Weekly newsletter drafted Monday often clears compliance only by Thursday, killing timeliness and engagement'
                      },
                      {
                        title: 'Advisor Bandwidth',
                        icon: '👥',
                        color: 'bg-orange-500/80',
                        description: 'Kevin has ±100 households; even basic position updates don\'t reach all clients consistently'
                      },
                      {
                        title: 'Marketing Workflow',
                        icon: '📝',
                        color: 'bg-blue-500/80',
                        description: 'Mariah already uses AI copy tools; proven appetite for automated, compliance-ready content'
                      }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                        className="bg-black/30 rounded-lg p-2 border border-white/20"
                      >
                        <div className="flex items-start space-x-2">
                          <div className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-xs">{item.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                            <div className="text-white/80 text-xs leading-relaxed">{item.description}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-2">
                    {[
                      {
                        title: 'Research Silo',
                        icon: '🔬',
                        color: 'bg-purple-500/80',
                        description: 'Jeff prefers auditable data sources; would back AI only if raw data lineage stays intact'
                      },
                      {
                        title: 'Strategic Extrapolation',
                        icon: '📈',
                        color: 'bg-green-500/80',
                        description: 'x100-advisors, $6B platform means Kevin pilot could scale advisor productivity firm-wide'
                      }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                        className="bg-black/30 rounded-lg p-2 border border-white/20"
                      >
                        <div className="flex items-start space-x-2">
                          <div className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-xs">{item.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                            <div className="text-white/80 text-xs leading-relaxed">{item.description}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Key Insight Box */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-2 border border-amber-300/30"
                    >
                      <div className="text-amber-300 font-bold text-xs mb-1">KEY INSIGHT:</div>
                      <div className="text-white/80 text-xs leading-relaxed">
                        <strong>Proven AI adoption</strong> (Mariah's tools) + <strong>scale opportunity</strong> (100 advisors) + 
                        <strong>compliance requirements</strong> (Jeff's standards) = Perfect pilot environment for enterprise AI implementation.
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      }

      // Questions slide - Split between Mike and Kevin
      if (slide.key === 'Questions') {
        const mikeQuestions: Array<{ category: string; question: string }> = [
          { category: 'Platform Vision', question: 'How do you see AI redefining the TAMP/UMA model you\'ve built over the next 3-5 years?' },
          { category: 'Data Architecture', question: 'What client-level and market data sets are currently unified across advisors—and where are the biggest gaps?' },
          { category: 'Compliance Posture', question: 'Which portions of marketing-review and trade-surveillance workflows are most manual today?' },
          { category: 'Resource Mandate', question: 'If we piloted an AI reporting engine for Kevin\'s book, what internal dev/support resources could you commit?' },
          { category: 'Commercial Structure', question: 'Would you be open to an internal hire leading a center-of-excellence on AI deployment and use?' },
          { category: 'Success Metrics', question: 'Which KPIs—advisor productivity, client acquisition cost, NPS, basis-point fee retention—matter most for an AI rollout?' }
        ];

        const kevinQuestions: Array<{ category: string; question: string }> = [
          { category: 'Client-base Profile', question: 'What percentage of your 100 households would value more data-driven, visually rich reporting?' },
          { category: 'Pain Points Today', question: 'Where do you lose the most time—prep for review meetings, investment research, or compliance?' },
          { category: 'Pilot Appetite', question: 'Which of the ideas above would you trial in Q3 with minimal disruption?' },
          { category: 'Tech Environment', question: 'What CRM/portfolio accounting tools do you and Jeff already use (e.g., Orion, Black Diamond)?' },
          { category: 'Cross-sell Leverage', question: 'If the pilot works, how comfortable are you championing the solution to peer advisors?' }
        ];

        const activeQuestions = activeQuestionsTab === 'mike' ? mikeQuestions : kevinQuestions;

        return (
          <div className="w-full h-full flex items-center justify-center p-2">
            <div className="w-full max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-3 shadow-xl"
              >
                {/* Tab Buttons */}
                <div className="flex justify-center mb-3">
                  <div className="flex gap-3">
                    <button
                      onClick={() => setActiveQuestionsTab('mike')}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                        activeQuestionsTab === 'mike'
                          ? 'bg-blue-500/80 text-white shadow-lg scale-105'
                          : 'bg-white/20 text-white/70 border border-white/30 hover:bg-white/30 hover:text-white'
                      }`}
                    >
                      Mike
                    </button>
                    <button
                      onClick={() => setActiveQuestionsTab('kevin')}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                        activeQuestionsTab === 'kevin'
                          ? 'bg-green-500/80 text-white shadow-lg scale-105'
                          : 'bg-white/20 text-white/70 border border-white/30 hover:bg-white/30 hover:text-white'
                      }`}
                    >
                      Kevin
                    </button>
                  </div>
                </div>

                {/* Questions Grid - Using same structure as Ideas slide */}
                <motion.div
                  key={activeQuestionsTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-3"
                >
                  {activeQuestions.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="bg-black/30 rounded-lg p-2 border border-white/20"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="flex-1">
                          <div className={`${activeQuestionsTab === 'mike' ? 'text-blue-300' : 'text-green-300'} font-bold text-sm mb-1`}>{item.category}</div>
                          <div className="text-white/80 text-xs leading-relaxed">{item.question}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        );
      }

      // Ideas slide - AI Value-Add Opportunities
      if (slide.key === 'Ideas') {
        return (
          <div className="w-full h-full flex items-center justify-center p-2">
            <div className="w-full max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-3 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {/* Left Column */}
                  <div className="space-y-2">
                    {[
                      {
                        title: 'Advisor & Client Communications',
                        icon: '📧',
                        color: 'bg-blue-500/80',
                        description: 'Auto-draft quarterly letters and ad-hoc market notes personalized to each client household. Integrate with Compliance for real-time lexicon checks before dissemination.'
                      },
                      {
                        title: 'Research Accelerator',
                        icon: '📊',
                        color: 'bg-green-500/80',
                        description: 'LLM pipeline that ingests earnings calls, macro releases and alternative data; outputs 1-page heat-maps advisors can brand. Semantic search across existing sleeve strategy documents.'
                      },
                      {
                        title: 'Portfolio Intelligence Dashboard',
                        icon: '📈',
                        color: 'bg-purple-500/80',
                        description: 'Natural-language query of risk stats ("Explain my factor tilts vs S&P 500") feeding directly from Axxcess\' UMA holdings feed. Alert layer that flags drawdowns or style-drift anomalies.'
                      }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                        className="bg-black/30 rounded-lg p-2 border border-white/20"
                      >
                        <div className="flex items-start space-x-2">
                          <div className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-xs">{item.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                            <div className="text-white/80 text-xs leading-relaxed">{item.description}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-2">
                    {[
                      {
                        title: 'Advisor On-Boarding & Training',
                        icon: '🎓',
                        color: 'bg-amber-500/80',
                        description: 'Chatbot tutor for new advisors on platform procedures, eliminating LMS friction. Document-QA on ADV, IPS templates, alternative-investment subscription docs.'
                      },
                      {
                        title: 'Operational Efficiencies',
                        icon: '⚙️',
                        color: 'bg-red-500/80',
                        description: 'Automated prep of Form ADV client disclosure updates. NLP extraction of K-1s, capital calls, private-market docs for the alts team.'
                      }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                        className="bg-black/30 rounded-lg p-2 border border-white/20"
                      >
                        <div className="flex items-start space-x-2">
                          <div className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-xs">{item.icon}</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                            <div className="text-white/80 text-xs leading-relaxed">{item.description}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Sample Scenario Box */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-2 border border-cyan-300/30"
                    >
                      <div className="text-cyan-300 font-bold text-xs mb-1">SAMPLE SCENARIO:</div>
                      <div className="text-white/80 text-xs leading-relaxed">
                        <strong>Friday 4PM:</strong> S&P 500 weekly move, Nvidia news, 2-year Treasury change, Bitcoin price → 
                        <strong>Monday 8AM:</strong> 250-word market note, compliance-checked, auto-distributed to 100 households with personalized portfolio references.
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      }
    }

    // Original AI Finance deck elements (1st call)
    if (deckId === 'ai-finance') {
      // Intro slide toggle
      if (slide.key === 'Introductions') {
        return (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
            <button
              onClick={() => setShowIntroDetails(!showIntroDetails)}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-white/20 transition-all duration-200 shadow-lg"
            >
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/80 text-sm font-medium">
                {showIntroDetails ? 'Hide Details' : 'Show Details'}
              </span>
            </button>
          </div>
        );
      }

      // About slide toggle
      if (slide.key === 'About') {
        return (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
            <button
              onClick={() => setShowAboutDetails(!showAboutDetails)}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-white/20 transition-all duration-200 shadow-lg"
            >
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-white/80 text-sm font-medium">
                {showAboutDetails ? 'Hide Background' : 'Show Background'}
              </span>
            </button>
          </div>
        );
      }

      // Objectives slide toggle
      if (slide.key === 'Objectives') {
        return (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
            <button
              onClick={() => setShowObjectivesDetails(!showObjectivesDetails)}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-white/20 transition-all duration-200 shadow-lg"
            >
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-white/80 text-sm font-medium">
                {showObjectivesDetails ? 'Hide Goals' : 'Show Goals'}
              </span>
            </button>
          </div>
        );
      }

      // Simple progression visual for Landscape slide
      if (slide.key === 'Landscape') {
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center z-40"
          >
            <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-4 shadow-xl">
              <div className="flex items-center justify-center space-x-2 text-white text-xs sm:text-sm">
                <span className="bg-blue-500/80 px-2 py-1 rounded">ML</span>
                <span>→</span>
                <span className="bg-purple-500/80 px-2 py-1 rounded">Neural Networks</span>
                <span>→</span>
                <span className="bg-red-500/80 px-2 py-1 rounded">LLMs</span>
                <span>→</span>
                <span className="bg-green-500/80 px-2 py-1 rounded">RLHF</span>
                <span>→</span>
                <span className="bg-amber-500/80 px-2 py-1 rounded">Reasoning</span>
              </div>
            </div>
          </motion.div>
        );
      }

      // Key Players Matrix - Button and Modal
      if (slide.key === 'Players') {
        return (
          <>
            {/* "+" Button at lower left corner */}
            <div className="absolute bottom-4 left-4 z-30">
              <button
                onClick={() => setShowPlayersMatrix(true)}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-7 h-7 flex items-center justify-center hover:bg-white/20 transition-all duration-200 shadow-lg"
              >
                <svg className="w-3.5 h-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
              {showPlayersMatrix && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
                  onClick={() => setShowPlayersMatrix(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 p-6 shadow-2xl max-w-4xl w-11/12 mx-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setShowPlayersMatrix(false)}
                      className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <h3 className="text-white font-bold text-lg mb-4 tracking-wide text-center pr-8">
                      COMPETITIVE MATRIX
                    </h3>
                    
                    {/* Foundation Models Image Display */}
                    <div className="flex justify-center">
                      <img 
                        src="/images/foundationmodels.png" 
                        alt="Foundation Models Competitive Matrix"
                        className="max-w-full max-h-[105vh] object-contain rounded-lg shadow-2xl"
                      />
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-white/60 text-sm">Foundation models competitive landscape and positioning</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        );
      }

      // RACE Formula Breakdown
      if (slide.key === 'Prompting') {
        return (
          <>
            <div className="w-full flex items-center justify-center h-full">
              <div className="w-full max-w-4xl flex items-center gap-4">
                {/* RACE Formula Chart - Left Side - More compact for AI deck */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-shrink-0 w-64"
                >
                  <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-4 shadow-xl">
                    <h3 className="text-white font-bold text-xs mb-3 tracking-wide text-center">
                      RACE FORMULA BREAKDOWN
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { letter: 'R', word: 'ROLE', desc: 'Act as CFA analyst', color: 'bg-red-500' },
                        { letter: 'A', word: 'AMBITION', desc: 'PhD-level analysis', color: 'bg-amber-500' },
                        { letter: 'C', word: 'CONTEXT', desc: 'Client constraints', color: 'bg-cyan-500' },
                        { letter: 'E', word: 'EXPECTED', desc: 'Output format', color: 'bg-emerald-500' }
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, rotateY: 90 }}
                          whileInView={{ opacity: 1, rotateY: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                          className="bg-black/30 rounded-lg p-2 border border-white/20 text-center"
                        >
                          <div className={`w-6 h-6 ${item.color} rounded-full flex items-center justify-center mx-auto mb-1`}>
                            <span className="text-white font-bold text-xs">{item.letter}</span>
                          </div>
                          <div className="text-white font-medium text-xs mb-1">{item.word}</div>
                          <div className="text-white/60 text-xs leading-tight">{item.desc}</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-3 text-center">
                      <p className="text-white/60 text-xs">Structured prompting methodology</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bullet Points - Right Side - Adjusted for smaller slide */}
                <div className="flex-1">
                  <ul className="list-disc space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base leading-relaxed text-white text-left w-full ml-6 sm:ml-8">
                    {slide.bullets?.map((b, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                        className="font-medium drop-shadow-sm"
                      >
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Examples Button at bottom center - Adjusted position */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30">
              <button
                onClick={() => setShowPromptingExamples(true)}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center space-x-2 hover:bg-white/20 transition-all duration-200 shadow-lg"
              >
                <svg className="w-3 h-3 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-white/80 text-xs font-medium">Examples</span>
              </button>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
              {showPromptingExamples && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/70 backdrop-blur-md z-[99999] flex items-center justify-center"
                  style={{ zIndex: 99999 }}
                  onClick={() => setShowPromptingExamples(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl relative"
                    style={{ 
                      zIndex: 99999,
                      width: 'min(95vw, 1200px)',
                      maxHeight: 'min(90vh, 800px)',
                      margin: 'auto',
                      padding: '1rem',
                      overflow: 'auto'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setShowPromptingExamples(false)}
                      className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors z-10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    {/* Prompt Examples Table */}
                    <div className="bg-black/50 rounded-xl border border-white/30 overflow-hidden">
                      {/* Table Header */}
                      <div className="bg-black/70 px-3 py-2 border-b border-white/30">
                        <div className="grid grid-cols-10 gap-2 text-white font-bold text-xs">
                          <div className="col-span-2">USE CASE</div>
                          <div className="col-span-2 text-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1">
                              <span className="text-white font-bold text-xs">R</span>
                            </div>
                            <span>ROLE</span>
                          </div>
                          <div className="col-span-2 text-center">
                            <div className="w-3 h-3 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-1">
                              <span className="text-white font-bold text-xs">A</span>
                            </div>
                            <span>AMBITION</span>
                          </div>
                          <div className="col-span-2 text-center">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-1">
                              <span className="text-white font-bold text-xs">C</span>
                            </div>
                            <span>CONTEXT</span>
                          </div>
                          <div className="col-span-2 text-center">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-1">
                              <span className="text-white font-bold text-xs">E</span>
                            </div>
                            <span>EXPECTED</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Table Body */}
                      <div className="divide-y divide-white/20">
                        {[
                          {
                            persona: 'The Synthesist',
                            icon: '🎙️',
                            color: 'bg-blue-500/80',
                            role: 'Act as an executive assistant',
                            ambition: 'Transform voice recordings into structured executive briefs',
                            context: 'Daily commute recordings contain market observations and strategic thoughts',
                            expected: 'Bullet-pointed brief with key insights, action items, and follow-ups'
                          },
                          {
                            persona: 'The Analyst',
                            icon: '📊',
                            color: 'bg-green-500/80',
                            role: 'Act as a senior financial analyst',
                            ambition: 'Conduct comprehensive research 10x faster than traditional methods',
                            context: 'Need to analyze multiple companies across sectors with primary source validation',
                            expected: 'Research report with sources, key metrics, and investment thesis'
                          },
                          {
                            persona: 'The Ideator',
                            icon: '💡',
                            color: 'bg-purple-500/80',
                            role: 'Act as a strategic consultant',
                            ambition: 'Generate innovative cross-domain solutions and connections',
                            context: 'Looking for non-obvious opportunities by connecting disparate industries',
                            expected: 'Structured brainstorm with ranked ideas and implementation pathways'
                          },
                          {
                            persona: 'The Tutor',
                            icon: '🎓',
                            color: 'bg-amber-500/80',
                            role: 'Act as a finance professor and practitioner',
                            ambition: 'Provide expert-level education on complex financial concepts',
                            context: 'Need to understand liquidity strategies and FX hedging for client portfolio',
                            expected: 'Step-by-step explanation with real-world examples and best practices'
                          },
                          {
                            persona: 'The Coder',
                            icon: '💻',
                            color: 'bg-red-500/80',
                            role: 'Act as a quantitative developer',
                            ambition: 'Create live financial tools with real-time data integration',
                            context: 'Need to build charts and analysis tools using financial APIs',
                            expected: 'Working code with API connections, error handling, and documentation'
                          }
                        ].map((example, idx) => (
                          <div key={idx} className="px-3 py-2 hover:bg-white/10 transition-colors">
                            <div className="grid grid-cols-10 gap-2 text-xs">
                              {/* Use Case */}
                              <div className="col-span-2 flex items-center">
                                <div className="flex items-center space-x-1.5">
                                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">
                                    {example.icon}
                                  </div>
                                  <div className={`${example.color} rounded px-1.5 py-0.5`}>
                                    <span className="text-white font-bold text-sm">{example.persona}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Role */}
                              <div className="col-span-2 text-white/90 leading-tight flex items-center">
                                {example.role}
                              </div>
                              
                              {/* Ambition */}
                              <div className="col-span-2 text-white/90 leading-tight flex items-center">
                                {example.ambition}
                              </div>
                              
                              {/* Context */}
                              <div className="col-span-2 text-white/90 leading-tight flex items-center">
                                {example.context}
                              </div>
                              
                              {/* Expected */}
                              <div className="col-span-2 text-white/90 leading-tight flex items-center">
                                {example.expected}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-white/60 text-sm">RACE framework applied to each AI persona use case</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        );
      }

      // S-Curve Visualization for Vision slide
      if (slide.key === 'Vision') {
        return (
          <div className="w-full flex items-center justify-center h-full">
            <div className="w-full max-w-5xl flex items-center justify-center">
              {/* Enhanced S-Curve Chart - Compact for AI deck */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full max-w-4xl"
              >
                <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-3 shadow-xl">
                  <h3 className="text-white font-bold text-sm mb-2 tracking-wide text-center">
                    THE AGENTIC REVOLUTION
                  </h3>
                  
                  {/* Chart and Key - Horizontal Layout - More compact */}
                  <div className="flex items-start gap-4 h-56">
                    {/* S-Curve Chart - Left - Compressed */}
                    <div className="relative h-full flex-1">
                      <svg className="w-full h-full" viewBox="0 0 400 240">
                        {/* Grid - Cleaner */}
                        <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                          {[60, 100, 140, 180].map(y => (
                            <line key={y} x1="50" y1={y} x2="350" y2={y} />
                          ))}
                          {[100, 150, 200, 250, 300].map(x => (
                            <line key={x} x1={x} y1="60" x2={x} y2="180" />
                          ))}
                        </g>
                        
                        {/* S-Curve - Compressed */}
                        <path
                          d="M 50 180 Q 100 170 125 155 Q 150 135 175 115 Q 200 95 225 85 Q 250 75 350 70"
                          stroke="rgba(34, 197, 94, 0.9)"
                          strokeWidth="5"
                          fill="none"
                          strokeLinecap="round"
                        />
                        
                        {/* AI Takeover Points - Compressed */}
                        <circle cx="110" cy="165" r="7" fill="rgba(239, 68, 68, 0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
                        <circle cx="158" cy="135" r="7" fill="rgba(168, 85, 247, 0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
                        <circle cx="206" cy="105" r="7" fill="rgba(34, 197, 94, 0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
                        <circle cx="268" cy="80" r="7" fill="rgba(59, 130, 246, 0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
                        
                        {/* Axis Labels - Smaller */}
                        <text x="200" y="210" textAnchor="middle" className="fill-white text-sm font-medium">Time →</text>
                        <text x="25" y="120" textAnchor="middle" className="fill-white text-sm font-medium" transform="rotate(-90 25 120)">Adoption →</text>
                        
                        {/* "You Are Here" marker - Smaller */}
                        <text x="110" y="40" textAnchor="middle" className="fill-white text-sm font-bold">You Are Here</text>
                        <line x1="110" y1="48" x2="110" y2="155" stroke="rgba(255,255,255,0.9)" strokeWidth="2" markerEnd="url(#arrowhead)" />
                        
                        {/* Arrow marker definition - Smaller */}
                        <defs>
                          <marker id="arrowhead" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                            <polygon points="0 0, 7 2.5, 0 5" fill="rgba(255,255,255,0.9)" />
                          </marker>
                        </defs>
                      </svg>
                    </div>
                    
                    {/* AI Takeover Categories - Right Side Key - More compact */}
                    <div className="w-56 h-full flex flex-col justify-center space-y-1.5">
                      <div className="bg-black/30 rounded-lg p-2 border border-white/10">
                        <div className="flex items-center gap-2 mb-0.5">
                          <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                          <span className="text-white font-semibold text-xs leading-tight whitespace-nowrap">Already Taken Over</span>
                        </div>
                        <p className="text-white/70 text-xs leading-tight">Search, Translation, Writing</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 border border-white/10">
                        <div className="flex items-center gap-2 mb-0.5">
                          <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                          <span className="text-white font-semibold text-xs leading-tight whitespace-nowrap">Disrupting Now</span>
                        </div>
                        <p className="text-white/70 text-xs leading-tight">Trading, Research, Service</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 border border-white/10">
                        <div className="flex items-center gap-2 mb-0.5">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-white font-semibold text-xs leading-tight whitespace-nowrap">Emerging Applications</span>
                        </div>
                        <p className="text-white/70 text-xs leading-tight">Portfolio Management, M&A</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-2 border border-white/10">
                        <div className="flex items-center gap-2 mb-0.5">
                          <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-white font-semibold text-xs leading-tight whitespace-nowrap">Future Automation</span>
                        </div>
                        <p className="text-white/70 text-xs leading-tight">Full Autonomous Operations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      }

      // Enhanced Resources & Next Steps
      if (slide.key === 'Resources') {
        return (
          <div className="w-full flex items-center justify-center h-full py-4">
            <div className="w-full max-w-6xl flex items-center gap-8 lg:gap-12">
              {/* Resources Grid - Left Side - More Compact */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-shrink-0 w-64 lg:w-72"
              >
                <div className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 p-2.5 lg:p-3 shadow-2xl">
                  <h3 className="text-white font-bold text-xs lg:text-sm mb-2 tracking-wide text-center">
                    LEARNING RESOURCES
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-1.5">
                    {/* Podcasts */}
                    <motion.div
                      initial={{ opacity: 0, rotateY: 90 }}
                      whileInView={{ opacity: 1, rotateY: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="bg-black/30 rounded-lg p-1.5 border border-white/20 text-center hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-white font-bold text-xs">🎧</span>
                      </div>
                      <div className="text-white font-medium text-xs mb-1">PODCASTS</div>
                      <div className="text-white/60 text-xs leading-tight">
                        • Invest Like the Best<br/>
                        • Acquired<br/>
                        • The Knowledge Project
                      </div>
                    </motion.div>

                    {/* Books */}
                    <motion.div
                      initial={{ opacity: 0, rotateY: 90 }}
                      whileInView={{ opacity: 1, rotateY: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="bg-black/30 rounded-lg p-1.5 border border-white/20 text-center hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-white font-bold text-xs">📚</span>
                      </div>
                      <div className="text-white font-medium text-xs mb-1">BOOKS</div>
                      <div className="text-white/60 text-xs leading-tight">
                        • Co-Intelligence<br/>
                        • The Coming Wave<br/>
                        • Situational Awareness
                      </div>
                    </motion.div>

                    {/* Articles */}
                    <motion.div
                      initial={{ opacity: 0, rotateY: 90 }}
                      whileInView={{ opacity: 1, rotateY: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="bg-black/30 rounded-lg p-1.5 border border-white/20 text-center hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-white font-bold text-xs">📄</span>
                      </div>
                      <div className="text-white font-medium text-xs mb-1">ARTICLES</div>
                      <div className="text-white/60 text-xs leading-tight">
                        • AI & The Future of Work<br/>
                        • Goldman AI Report<br/>
                        • McKinsey AI Index
                      </div>
                    </motion.div>

                    {/* X Handles */}
                    <motion.div
                      initial={{ opacity: 0, rotateY: 90 }}
                      whileInView={{ opacity: 1, rotateY: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="bg-black/30 rounded-lg p-1.5 border border-white/20 text-center hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-white font-bold text-xs">𝕏</span>
                      </div>
                      <div className="text-white font-medium text-xs mb-1">FOLLOW</div>
                      <div className="text-white/60 text-xs leading-tight">
                        • @sama<br/>
                        • @karpathy<br/>
                        • @emollick
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="mt-2 text-center">
                    <p className="text-white/60 text-xs">Click any category for full resource list</p>
                  </div>
                </div>
              </motion.div>

              {/* Next Steps - Right Side - Increased Spacing */}
              <div className="flex-1">
                <ul className="space-y-3 lg:space-y-4 text-sm lg:text-base xl:text-lg leading-relaxed text-white w-full ml-6 lg:ml-10">
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-medium drop-shadow-sm flex items-start"
                  >
                    <span className="text-blue-400 mr-4 text-lg lg:text-xl flex-shrink-0">📖</span>
                    <span>Curated reading list with implementation guides and case studies.</span>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="font-medium drop-shadow-sm flex items-start"
                  >
                    <span className="text-green-400 mr-4 text-lg lg:text-xl flex-shrink-0">📧</span>
                    <span>Weekly Sojourn Insight newsletter: AI trends, tools, and financial applications.</span>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="font-medium drop-shadow-sm flex items-start"
                  >
                    <span className="text-purple-400 mr-4 text-lg lg:text-xl flex-shrink-0">🛠️</span>
                    <span>Full-day workshop: Hands-on AI implementation for your specific workflows.</span>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="font-medium drop-shadow-sm flex items-start"
                  >
                    <span className="text-amber-400 mr-4 text-lg lg:text-xl flex-shrink-0">📱</span>
                    <span>Contact: curt@sojourninsight.com | QR code for instant connection.</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        );
      }

      // Enhanced Q&A / Wrap
      if (slide.key === 'QA') {
        return (
          <div className="w-full flex items-center justify-center h-full py-4">
            <div className="w-full max-w-6xl flex items-center gap-8 lg:gap-12">
              {/* Interactive Q&A Prompt - Left Side - More Compact */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex-shrink-0 w-64 lg:w-72"
              >
                <div className="bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 p-2.5 lg:p-3 shadow-2xl">
                  <h3 className="text-white font-bold text-xs lg:text-sm mb-2 tracking-wide text-center">
                    DISCUSSION STARTER
                  </h3>
                  
                  {/* Central Question - More Compact */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-2 mb-2 border border-purple-300/30">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-white font-bold text-sm">?</span>
                      </div>
                      <p className="text-white font-bold text-xs leading-tight">
                        "What's the first workflow you'll automate?"
                      </p>
                    </div>
                  </div>

                  {/* Workflow Categories - More Compact */}
                  <div className="space-y-1">
                    {[
                      { category: 'Research & Analysis', icon: '📊', color: 'bg-blue-500/80' },
                      { category: 'Client Communication', icon: '💬', color: 'bg-green-500/80' },
                      { category: 'Report Generation', icon: '📄', color: 'bg-amber-500/80' },
                      { category: 'Market Monitoring', icon: '📈', color: 'bg-red-500/80' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                        className="bg-black/30 rounded-lg p-1 border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 ${item.color} rounded-full flex items-center justify-center`}>
                            <span className="text-xs">{item.icon}</span>
                          </div>
                          <span className="text-white text-xs font-medium">{item.category}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-2 text-center">
                    <p className="text-white/60 text-xs">Interactive discussion prompts</p>
                  </div>
                </div>
              </motion.div>

              {/* Session Wrap-up - Right Side - Increased Spacing */}
              <div className="flex-1">
                <ul className="space-y-3 lg:space-y-4 text-sm lg:text-base xl:text-lg leading-relaxed text-white w-full ml-6 lg:ml-10">
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-medium drop-shadow-sm flex items-start"
                  >
                    <span className="text-purple-400 mr-4 text-lg lg:text-xl flex-shrink-0">💭</span>
                    <span>Open floor: Share your biggest AI opportunity or concern.</span>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="font-medium drop-shadow-sm flex items-start"
                  >
                    <span className="text-amber-400 mr-4 text-lg lg:text-xl flex-shrink-0">⏰</span>
                    <span>10-minute buffer for deep-dive questions and follow-up planning.</span>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="font-medium drop-shadow-sm flex items-start"
                  >
                    <span className="text-green-400 mr-4 text-lg lg:text-xl flex-shrink-0">📝</span>
                    <span>Live documentation: All questions captured for detailed follow-up.</span>
                  </motion.li>
                </ul>
                
                {/* PDF Download Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-6 lg:mt-8 ml-6 lg:ml-10"
                >
                  <button
                    onClick={() => deck && downloadCurrentDeck(deck)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
                    data-pdf-download
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download Presentation PDF</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        );
      }

      // Enhanced AI Model Classification based on four dimensions of openness
      if (slide.key === 'Models') {
        return (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full flex justify-center h-full"
            >
              <div className="bg-white/15 backdrop-blur-md rounded-xl border border-white/30 p-3 shadow-xl max-w-5xl w-full h-full max-h-full overflow-hidden flex flex-col">
                {/* Header: Four Dimensions - More compact */}
                <div className="mb-2 text-center flex-shrink-0">
                  {/* Classification explanation at top */}
                  <div className="mb-2 text-center">
                    <p className="text-white/80 text-xs leading-tight">
                      <span className="font-semibold">Classification based on:</span> Access to weights, architecture transparency, training data availability, and licensing restrictions.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-1 text-xs text-white/80 mb-2">
                    <div className="bg-black/30 rounded p-1.5">
                      <div className="font-semibold text-gray-300 text-xs">Weights</div>
                      <div className="text-xs">Parameters</div>
                    </div>
                    <div className="bg-black/30 rounded p-1.5">
                      <div className="font-semibold text-gray-315 text-xs">Architecture</div>
                      <div className="text-xs">Code/algorithms</div>
                    </div>
                    <div className="bg-black/30 rounded p-1.5">
                      <div className="font-semibold text-gray-330 text-xs">Training Data</div>
                      <div className="text-xs">Dataset sources</div>
                    </div>
                    <div className="bg-black/30 rounded p-1.5">
                      <div className="font-semibold text-gray-345 text-xs">Licensing</div>
                      <div className="text-xs">Commercial use</div>
                    </div>
                  </div>
                </div>

                {/* Main content - flex-1 to fill available space */}
                <div className="grid grid-cols-3 gap-2 text-white flex-1 min-h-0">
                  {/* 🔓 Fully Open Models */}
                  <div className="text-center flex flex-col">
                    <div className="bg-green-500/80 rounded-lg p-1.5 mb-1.5 flex-shrink-0">
                      <h4 className="font-bold text-xs mb-0.5">🔓 FULLY OPEN</h4>
                      <p className="text-xs opacity-90">All 4 dimensions open</p>
                    </div>
                    <div className="space-y-1 text-xs flex-1">
                      <div className="bg-black/30 rounded p-1.5">
                        <div className="font-semibold text-green-300 text-xs">Mistral 7B</div>
                        <div className="text-xs opacity-80">✅ Weights + Architecture + Data + Apache 2.0</div>
                      </div>
                      <div className="bg-black/30 rounded p-1.5">
                        <div className="font-semibold text-green-300 text-xs">Pythia (EleutherAI)</div>
                        <div className="text-xs opacity-80">✅ Full research stack + Permissive license</div>
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-green-300 font-medium flex-shrink-0">
                      Best for: Research, transparency
                    </div>
                  </div>

                  {/* 🟠 Hybrid/Semi-Open Models */}
                  <div className="text-center flex flex-col">
                    <div className="bg-amber-500/80 rounded-lg p-1.5 mb-1.5 flex-shrink-0">
                      <h4 className="font-bold text-xs mb-0.5">🟠 HYBRID/SEMI-OPEN</h4>
                      <p className="text-xs opacity-90">Some dimensions open</p>
                    </div>
                    <div className="space-y-1 text-xs flex-1">
                      <div className="bg-black/30 rounded p-1.5">
                        <div className="font-semibold text-amber-300 text-xs">Meta LLaMA 3.1</div>
                        <div className="text-xs opacity-80">✅ Weights + Architecture ❌ Data + License</div>
                      </div>
                      <div className="bg-black/30 rounded p-1.5">
                        <div className="font-semibold text-amber-300 text-xs">Google Gemma</div>
                        <div className="text-xs opacity-80">✅ Weights + Code ❌ Undisclosed data</div>
                      </div>
                      <div className="bg-black/30 rounded p-1.5">
                        <div className="font-semibold text-amber-300 text-xs">DeepSeek R1</div>
                        <div className="text-xs opacity-80">✅ Weights + MIT ❌ Synthetic datasets</div>
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-amber-300 font-medium flex-shrink-0">
                      Best for: Education, controlled deployments
                    </div>
                  </div>

                  {/* 🔒 Closed Models */}
                  <div className="text-center flex flex-col">
                    <div className="bg-red-500/80 rounded-lg p-1.5 mb-1.5 flex-shrink-0">
                      <h4 className="font-bold text-xs mb-0.5">🔒 CLOSED/PROPRIETARY</h4>
                      <p className="text-xs opacity-90">Black box systems</p>
                    </div>
                    <div className="space-y-1 text-xs flex-1">
                      <div className="bg-black/30 rounded p-1.5">
                        <div className="font-semibold text-red-300 text-xs">OpenAI GPT-4o</div>
                        <div className="text-xs opacity-80">❌ All closed ✅ Heavy engineering</div>
                      </div>
                      <div className="bg-black/30 rounded p-1.5">
                        <div className="font-semibold text-red-300 text-xs">Anthropic Claude</div>
                        <div className="text-xs opacity-80">❌ Proprietary ✅ Performance optimized</div>
                      </div>
                      <div className="bg-black/30 rounded p-1.5">
                        <div className="font-semibold text-red-300 text-xs">Google Gemini</div>
                        <div className="text-xs opacity-80">❌ Closed system ✅ Production ready</div>
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-red-300 font-medium flex-shrink-0">
                      Best for: Production, reliability
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        );
      }
    }
  }

  return null;
}; 