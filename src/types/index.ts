// Global type definitions
export interface User {
  id: string;
  name: string;
  email: string;
}

// Add more types as needed
export type Theme = 'light' | 'dark';

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// Family Office Strategy Deck types
export interface Slide {
  key: string;
  headlines?: string[];
  subtitle?: string;
  author?: string;
  title?: string;
  bullets?: string[];
}

export interface StrategyDeckProps {
  slides?: Slide[];
  autoPlay?: boolean;
  showNavigation?: boolean;
}

// Re-export deck types
export * from './deck'; 