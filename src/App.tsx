import React, { useState } from 'react';
import { StrategyDeck, DeckSelector } from './components';
import { getDecksById } from './data/decks';

function App() {
  const [currentDeckId, setCurrentDeckId] = useState<string>('ai-finance');
  
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
          onDeckChange={setCurrentDeckId}
        />
      </div>

      {/* Main Deck */}
      <StrategyDeck key={currentDeckId} deck={currentDeck} />
    </div>
  );
}

export default App; 