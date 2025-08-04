export interface Slide {
  key: string;
  category: keyof typeof slideImageCategories;
  template?: 'title' | 'critique' | 'research' | 'premium';
  header?: string;
  headlines?: string[];
  subtitle?: string;
  author?: string;
  title?: string;
  bullets?: string[];
  subtext?: string[];
  footer?: string;
  sourceLink?: string;
  critiqueContent?: {
    positive?: string[];
    constructive?: string[];
    gaps?: string[];
  };
  researchSteps?: string[];
  premiumRecommendations?: {
    category: string;
    media: string[];
    drugDev: string[];
  }[];
}

export interface DeckConfig {
  id: string;
  title: string;
  subtitle?: string;
  author?: string;
  description: string;
  slides: Slide[];
  slideImages: Record<string, string>;
  brandColor?: string;
  accentColor?: string;
}

export interface DeckMetadata {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  category: string;
}

// Available slide image categories
export const slideImageCategories = {
  title: 'title',
  market: 'market',
  services: 'services',
  strategy: 'strategy',
  governance: 'governance',
  risks: 'risks',
  general: 'general',
  technology: 'technology',
  ai: 'ai',
  finance: 'finance',
  education: 'education'
} as const; 