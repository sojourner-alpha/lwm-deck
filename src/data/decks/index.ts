import { DeckConfig, DeckMetadata } from '../../types/deck';
import { familyOfficeDeck } from './familyOffice';
import { aiFinanceDeck } from './aiFinance';

export const availableDecks: Record<string, DeckConfig> = {
  'family-office': familyOfficeDeck,
  'ai-finance': aiFinanceDeck
};

export const deckMetadata: DeckMetadata[] = [
  {
    id: 'family-office',
    title: 'Family Office Practice',
    description: 'Strategic business proposal for family office practice',
    category: 'Business Strategy',
    thumbnail: '/images/thumbnails/family-office.jpg'
  },
  {
    id: 'ai-finance',
    title: 'AI 101 for Financial Professionals',
    description: 'Understanding AI applications in finance',
    category: 'Education',
    thumbnail: '/images/thumbnails/ai-finance.jpg'
  }
];

export const getDecksById = (id: string): DeckConfig | undefined => {
  return availableDecks[id];
};

export { familyOfficeDeck, aiFinanceDeck }; 