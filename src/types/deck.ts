export interface Slide {
  key: string;
  category: keyof typeof slideImageCategories;
  headlines?: string[];
  subtitle?: string;
  author?: string;
  title?: string;
  bullets?: string[];
  subtext?: string[];
  footer?: string;
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