import { DeckConfig, DeckMetadata } from '../../types/deck';
import { familyOfficeDeck } from './familyOffice';
import { aiFinanceDeck, aiFinance2ndCallDeck } from './aiFinance';
import { lederleFarmsDeck } from './lederleFarms';

const decks: DeckConfig[] = [
  familyOfficeDeck,
  aiFinanceDeck,
  aiFinance2ndCallDeck,
  lederleFarmsDeck
];

export const deckMetadata: DeckMetadata[] = [
  {
    id: 'family-office',
    title: 'Family Office Practice',
    description: 'Strategic business proposal',
    category: 'Business Strategy',
    thumbnail: '/images/thumbnails/family-office.jpg'
  },
  {
    id: 'ai-finance',
    title: 'Axxcess Wealth Management',
    description: 'Applications of AI',
    category: 'Education',
    thumbnail: '/images/thumbnails/ai-finance.jpg'
  },
  {
    id: 'ai-finance-2nd',
    title: 'AI Implementation Strategy',
    description: 'Follow-up discussion and strategic roadmap',
    category: 'Strategy',
    thumbnail: '/images/thumbnails/ai-finance.jpg'
  },
  {
    id: 'lederle-farms',
    title: 'Lederle Farms Development',
    description: 'Sustainable real estate & hospitality venture',
    category: 'Real Estate Development',
    thumbnail: '/images/thumbnails/lederle-farms.jpg'
  }
];

export const getDecksById = (id: string): DeckConfig | undefined => {
  return decks.find(deck => deck.id === id);
};

export const getAllDecks = (): DeckConfig[] => {
  return decks;
};

export { familyOfficeDeck, aiFinanceDeck, aiFinance2ndCallDeck, lederleFarmsDeck }; 