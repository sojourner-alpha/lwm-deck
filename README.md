# Alpha Decks

A sophisticated React TypeScript presentation system for creating interactive, animated business presentation decks. Built for professional consulting and advisory use cases with rich visualizations and mobile-responsive design.

## 🎯 Features

### Interactive Presentations
- **Multiple Deck Support**: Switch between different presentation topics
- **Special Elements**: Interactive charts, persona cards, and data visualizations
- **Keyboard Navigation**: Navigate with arrow keys for smooth presentation flow
- **Mobile Responsive**: Optimized layouts for both desktop and mobile viewing

### Advanced UI Components
- **Animated Transitions**: Smooth slide transitions with Framer Motion
- **Professional Styling**: Backdrop blur effects, gradients, and modern design
- **Interactive Elements**: Toggleable content, pop-out charts, and hover effects
- **Brand Integration**: Professional logo placement and custom styling

### Content Management
- **Flexible Slide Structure**: Support for bullets, subtext, headlines, and custom layouts
- **Image Management**: Organized background images with category-based structure
- **Extensible Data Model**: Easy to add new decks and slide types

## 🚀 Current Decks

### 1. Family Office Practice
**Business Strategy Presentation**
- Market landscape analysis with interactive growth charts
- Service offering breakdown
- Risk assessment and competitive positioning
- Professional Odgers Berndtson branding

### 2. AI 101 for Financial Professionals
**Educational Presentation**
- Interactive AI model comparison table
- Baseball card-style persona presentations
- Tool recommendation workflow
- RACE framework visualization
- S-curve adoption graphics

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** with custom animations
- **Framer Motion** for smooth transitions
- **Create React App** build system
- **Mobile-first responsive design**

## 📁 Project Structure

```
alpha-decks/
├── public/
│   ├── images/
│   │   ├── slides/              # Categorized background images
│   │   │   ├── AWM-logo.png         # AI deck branding
│   │   │   └── OG-logo.png          # Family Office branding
│   │   └── [tool-logos]         # AI tool logos
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── DeckSelector/        # Deck switching component
│   │   └── StrategyDeck/        # Main presentation component
│   │       ├── StrategyDeck.tsx # Core presentation logic
│   │       └── SpecialElements.tsx # Interactive elements
│   ├── data/
│   │   └── decks/               # Deck configurations
│   │       ├── aiFinance.ts     # AI education deck
│   │       ├── familyOffice.ts  # Business strategy deck
│   │       └── index.ts         # Deck registry
│   ├── types/
│   │   ├── deck.ts              # Deck and slide interfaces
│   │   └── index.ts             # Global types
│   ├── App.tsx                  # Main application
│   ├── index.tsx                # Entry point
│   └── index.css                # Global styles
├── package.json
├── tailwind.config.js           # Custom Tailwind configuration
├── tsconfig.json
└── README.md
```

## 🎨 Design Features

### Mobile Optimization
- **3:4 Aspect Ratio Cards**: Optimized for mobile viewing
- **Collapsible Navigation**: Mobile-friendly menu system
- **Touch-Friendly Controls**: Responsive buttons and interactions
- **Adaptive Typography**: Scalable text for different screen sizes

### Desktop Experience
- **Immersive Full-Screen**: Cinematic presentation mode
- **Side Navigation**: Fixed navigation for quick slide jumping
- **Keyboard Shortcuts**: Professional presentation controls
- **Multi-Modal Content**: Charts, tables, and interactive elements

### Visual Effects
- **Backdrop Blur**: Modern glass-morphism effects
- **Custom Animations**: Slide-up, fade-in, and scale transitions
- **Professional Gradients**: Subtle overlays and accents
- **Responsive Images**: High-quality backgrounds with fallbacks

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sojourner-alpha/decks.git
   cd decks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view in browser

### Available Scripts

- **`npm start`** - Development server with hot reload
- **`npm build`** - Production build optimized for deployment
- **`npm test`** - Run test suite
- **`npm run eject`** - Eject from Create React App (irreversible)

## 📊 Adding New Decks

1. **Create deck configuration** in `src/data/decks/`
2. **Add slide images** to `public/images/slides/`
3. **Register deck** in `src/data/decks/index.ts`
4. **Add deck metadata** for selector dropdown

### Example Deck Structure
```typescript
export const myDeck: DeckConfig = {
  id: 'my-deck',
  title: 'My Presentation',
  subtitle: 'Subtitle Here',
  author: 'Author Name',
  description: 'Deck description',
  slideImages: {
    title: '/images/slides/my-title.png',
    // ... category mappings
  },
  slides: [
    {
      key: 'Title',
      category: 'title',
      headlines: ['My Title'],
      subtitle: 'My Subtitle'
    },
    // ... more slides
  ]
};
```

## 🎮 Navigation Controls

### Desktop
- **Arrow Keys**: Navigate between slides
- **Click Navigation**: Use side panel for quick jumping
- **Mouse Wheel**: Scroll through presentation

### Mobile
- **Touch Gestures**: Swipe to navigate
- **Menu Button**: Access full slide navigation
- **Tap Controls**: Interactive elements and buttons

## 🔧 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Customize component styles in individual files

### Content
- Edit deck configurations in `src/data/decks/`
- Replace images in `public/images/`
- Modify special elements in `SpecialElements.tsx`

### Features
- Add new slide categories in `src/types/deck.ts`
- Extend special elements for custom interactions
- Integrate additional animation libraries

## 📱 Browser Support

- **Modern browsers** with ES6+ support
- **Mobile Safari** (iOS 12+)
- **Chrome Mobile** (Android 8+)
- **Desktop browsers** (Chrome, Firefox, Safari, Edge)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 🎯 Roadmap

- [ ] Add export to PDF functionality
- [ ] Implement presenter notes
- [ ] Add slide transitions customization
- [ ] Create deck template system
- [ ] Add collaborative editing features
- [ ] Implement analytics tracking 