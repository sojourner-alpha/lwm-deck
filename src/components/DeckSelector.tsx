import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { deckMetadata } from '../data/decks';

interface DeckSelectorProps {
  currentDeckId: string;
  onDeckChange: (deckId: string) => void;
}

export const DeckSelector: React.FC<DeckSelectorProps> = ({ currentDeckId, onDeckChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Filter out the 2nd call deck from main navigation
  const filteredDecks = deckMetadata.filter(deck => deck.id !== 'ai-finance-2nd');
  
  const currentDeck = filteredDecks.find(deck => deck.id === currentDeckId);

  return (
    <div className="relative">
      {/* Current Deck Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 hover:bg-white/20 transition-all duration-200 shadow-lg"
      >
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50 w-80"
          >
            <div className="py-2">
              {filteredDecks.map((deck) => (
                <button
                  key={deck.id}
                  onClick={() => {
                    onDeckChange(deck.id);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-white/20 transition-all duration-200 flex items-center space-x-3 ${
                    currentDeckId === deck.id ? 'bg-white/10' : ''
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    deck.category === 'Business Strategy' ? 'bg-blue-400' :
                    deck.category === 'Education' ? 'bg-green-400' :
                    deck.category === 'Real Estate Development' ? 'bg-purple-400' :
                    'bg-amber-400'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-medium text-sm truncate">{deck.title}</div>
                    <div className="text-white/60 text-xs truncate">{deck.description}</div>
                  </div>
                  {currentDeckId === deck.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 