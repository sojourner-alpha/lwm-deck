import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { deckMetadata } from '../../data/decks';

interface DeckSelectorProps {
  currentDeckId: string;
  onDeckChange: (deckId: string) => void;
}

export const DeckSelector: React.FC<DeckSelectorProps> = ({ currentDeckId, onDeckChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const currentDeck = deckMetadata.find(deck => deck.id === currentDeckId);

  return (
    <div className="relative">
      {/* Subtle "v" button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 hover:bg-white/10 transition-all duration-200 shadow-lg"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-lg shadow-2xl z-50 overflow-hidden w-80"
          >
            {deckMetadata.map((deck) => (
              <button
                key={deck.id}
                onClick={() => {
                  onDeckChange(deck.id);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left hover:bg-white/20 transition-all duration-200 border-b border-white/10 last:border-b-0 ${
                  deck.id === currentDeckId ? 'bg-white/20 font-medium' : ''
                }`}
              >
                <div className="text-white text-sm font-medium mb-1">
                  {deck.title}
                </div>
                <div className="text-white/70 text-xs">
                  {deck.description}
                </div>
                <div className="text-white/50 text-xs mt-1 uppercase tracking-wider font-bold">
                  {deck.category}
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}; 