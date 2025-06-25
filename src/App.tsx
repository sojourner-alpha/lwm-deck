import React, { useState, useEffect } from 'react';
import { StrategyDeck, DeckSelector } from './components';
import { getDecksById } from './data/decks';

function App() {
  const [currentDeckId, setCurrentDeckId] = useState<string>('ai-finance');
  
  // Handle URL hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the #
      if (hash && ['family-office', 'ai-finance', 'ai-finance-2nd', 'lederle-farms'].includes(hash)) {
        setCurrentDeckId(hash);
      }
    };

    // Set initial deck from URL hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL when deck changes
  const handleDeckChange = (deckId: string) => {
    setCurrentDeckId(deckId);
    window.location.hash = deckId;
  };
  
  const currentDeck = getDecksById(currentDeckId);

  if (!currentDeck) {
    return (
      <div className="App flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Deck Not Found</h1>
          <p>The requested deck could not be loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Deck Selector - Fixed at middle-top */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <DeckSelector
          currentDeckId={currentDeckId}
          onDeckChange={handleDeckChange}
        />
      </div>

      {/* Main Deck */}
      <StrategyDeck key={currentDeckId} deck={currentDeck} />
    </div>
  );
}

export default App; 