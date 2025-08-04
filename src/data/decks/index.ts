import { DeckConfig, DeckMetadata } from '../../types/deck';
import { learnWithMeDeck } from './learnWithMe';

const decks: DeckConfig[] = [
  learnWithMeDeck
];

export const deckMetadata: DeckMetadata[] = [
  {
    id: 'lwm',
    title: 'Learn With Me',
    description: 'Feedback & Research Insights for Social Capital',
    category: 'Strategic Analysis',
    thumbnail: '/images/thumbnails/lwm.jpg'
  }
];

export const getDecksById = (id: string): DeckConfig | undefined => {
  return decks.find(deck => deck.id === id);
};

export const getAllDecks = (): DeckConfig[] => {
  return decks;
};

export { learnWithMeDeck };