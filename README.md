# Alpha Decks

A sophisticated React TypeScript presentation system for creating interactive, animated business presentation decks. Built for professional consulting and advisory use cases with rich visualizations and mobile-responsive design.

## 🎯 Features

### Interactive Presentations
- **Multiple Deck Support**: Switch between different presentation topics seamlessly
- **Special Elements**: Interactive charts, persona cards, data visualizations, and custom layouts
- **Keyboard Navigation**: Navigate with arrow keys for smooth presentation flow
- **Hash-based Routing**: Direct links to specific decks via URL fragments
- **Collapsible Navigation**: Efficient deck switching with minimal UI footprint

### Advanced UI Components
- **Animated Transitions**: Smooth slide transitions with Framer Motion
- **Professional Styling**: Backdrop blur effects, gradients, and modern glass-morphism design
- **Interactive Elements**: Toggleable content, modal overlays, and hover effects
- **Brand Integration**: Professional logo placement and deck-specific styling
- **Responsive Design**: Optimized for desktop presentation mode

### Content Management
- **Flexible Slide Structure**: Support for bullets, subtext, headlines, and custom layouts
- **Image Management**: Organized background images with category-based structure
- **Extensible Data Model**: Easy to add new decks and slide types
- **Special Slide Types**: Custom visualizations for specific content types

## 🚀 Current Decks

### 1. Family Office Practice
**Business Strategy Presentation**
- Market landscape analysis with interactive growth charts
- Service offering breakdown with Odgers Berndtson branding
- Risk assessment and competitive positioning
- Professional styling with custom visual elements

### 2. AI 101 for Financial Professionals (1st Call)
**Educational Presentation for Axxcess Wealth Management**
- Interactive AI model comparison matrix
- Baseball card-style persona presentations (The Synthesist, Analyst, Ideator, Tutor, Coder)
- Tool recommendation workflow with clickable links
- RACE framework visualization with detailed examples
- S-curve adoption graphics with market positioning
- Comprehensive resource library and next steps

### 3. AI Implementation Strategy (2nd Call)
**Strategic Follow-up for Axxcess Wealth Management**
- Pain-point synthesis from initial consultation
- Interactive Q&A framework with Mike/Kevin toggle
- AI value-add opportunities with detailed implementation scenarios
- Clean, professional layout with AWM branding
- Strategic roadmap and next steps

### 4. Lederle Farms Development
**Real Estate & Hospitality Investment Proposal**
- Comprehensive business proposal with financial modeling
- Five-phase development strategy with interactive visualizations
- Market analysis and competitive positioning
- Revenue projections and investment thesis
- Sustainable technology integration roadmap

## 🛠️ Technology Stack

- **React 18** with TypeScript for type safety and modern development
- **Tailwind CSS** with custom animations and responsive design
- **Framer Motion** for smooth transitions and interactive animations
- **Create React App** build system with optimized production builds
- **Hash-based routing** for direct deck access

## 📁 Project Structure

```
alpha-decks/
├── public/
│   ├── images/
│   │   ├── slides/              # Background images by category
│   │   ├── AWM-logo.png         # AI deck branding
│   │   ├── foundationmodels.png # AI model comparison chart
│   │   └── [tool-logos]/        # AI tool logos (GPT, Claude, etc.)
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── DeckSelector.tsx     # Minimalist deck switching
│   │   └── StrategyDeck/        # Main presentation component
│   │       ├── StrategyDeck.tsx # Core presentation logic & responsive layouts
│   │       └── SpecialElements.tsx # Interactive charts & visualizations
│   ├── data/
│   │   └── decks/               # Deck configurations
│   │       ├── aiFinance.ts     # AI education decks (1st & 2nd call)
│   │       ├── familyOffice.ts  # Business strategy deck
│   │       ├── lederleFarms.ts  # Real estate development deck
│   │       └── index.ts         # Deck registry & metadata
│   ├── types/
│   │   ├── deck.ts              # Deck and slide interfaces
│   │   └── index.ts             # Global types
│   ├── utils/
│   │   └── pdfExport.ts         # PDF generation utilities
│   ├── App.tsx                  # Main application with routing
│   ├── index.tsx                # Entry point
│   └── index.css                # Global styles with Tailwind
├── package.json
├── tailwind.config.js           # Custom Tailwind configuration
├── tsconfig.json
└── README.md
```

## 🎨 Design Features

### Desktop Experience
- **Immersive Full-Screen**: Cinematic presentation mode optimized for large screens
- **Side Navigation**: Fixed navigation with deck-specific controls (AI Finance has 1st/2nd call toggle)
- **Keyboard Shortcuts**: Professional presentation controls (arrow keys)
- **Multi-Modal Content**: Interactive charts, data tables, and visual elements
- **Brand-Specific Layouts**: Deck-specific sizing and styling (2nd call deck uses larger format)

### Visual Effects
- **Backdrop Blur**: Modern glass-morphism effects throughout
- **Custom Animations**: Slide-up, fade-in, scale, and rotation transitions
- **Professional Gradients**: Subtle overlays and accent colors
- **Interactive Elements**: Modal overlays, toggleable content, hover states
- **Responsive Images**: High-quality backgrounds with category mapping

### Special Elements
- **AI Finance Decks**: Model comparison matrix, persona cards, tool workflows, RACE examples
- **Family Office**: Interactive market growth charts with Odgers styling
- **Lederle Farms**: Development timeline, financial projections, phase visualizations

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd alpha-decks
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

1. **Create deck configuration** in `src/data/decks/newDeck.ts`
2. **Add slide images** to `public/images/slides/`
3. **Register deck** in `src/data/decks/index.ts`
4. **Add deck metadata** for selector dropdown
5. **Implement special elements** if needed in `SpecialElements.tsx`

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
    category: '/images/slides/category-bg.jpg'
  },
  slides: [
    {
      key: 'Title',
      category: 'title',
      headlines: ['My Title'],
      subtitle: 'My Subtitle',
      footer: 'Footer text'
    },
    {
      key: 'Content',
      category: 'strategy',
      title: 'Content Slide',
      bullets: ['Point 1', 'Point 2'],
      subtext: ['Additional context']
    }
  ]
};
```

## 🎮 Navigation Controls

### Desktop
- **Arrow Keys**: Navigate between slides smoothly
- **Click Navigation**: Use side panel for quick slide jumping
- **Deck Switching**: Minimalist dropdown selector at top center
- **Special Controls**: AI Finance decks have 1st/2nd call toggle buttons

### URL Navigation
- **Direct Access**: `#family-office`, `#ai-finance`, `#ai-finance-2nd`, `#lederle-farms`
- **Bookmarkable**: Hash-based routing allows direct linking to specific decks

## 🔧 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Customize component styles with Tailwind classes

### Content
- Edit deck configurations in `src/data/decks/`
- Replace images in `public/images/`
- Modify special elements in `SpecialElements.tsx`

### Features
- Add new slide categories in `src/types/deck.ts`
- Extend special elements for custom interactions
- Integrate additional animation libraries

## 🌟 Recent Updates

### AI Finance Enhancements
- **2nd Call Deck**: Complete strategic follow-up presentation
- **Interactive Q&A**: Toggle between Mike and Kevin question sets
- **Pain-Point Synthesis**: Visual categorization of consultation findings
- **Clean Branding**: Logo without background, "Prepared for Axxcess Wealth Management"

### Navigation Improvements
- **Minimalist Selector**: Arrow-only button with expanded dropdown
- **Deck-Specific Navigation**: AI Finance shows 1st/2nd call toggle
- **Hash Routing**: Direct URL access to specific decks

### Visual Polish
- **Consistent Layouts**: Unified design patterns across all decks
- **Professional Typography**: Improved text sizing and hierarchy
- **Interactive Elements**: Enhanced hover states and transitions

## 📱 Browser Support

- **Modern browsers** with ES6+ support
- **Desktop browsers** (Chrome, Firefox, Safari, Edge)
- **Optimized for presentation mode** on large screens

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 🎯 Roadmap

- [x] Multi-deck support with hash routing
- [x] AI Finance 2nd call deck with interactive elements
- [x] Minimalist navigation system
- [x] Professional branding integration
- [ ] Enhanced Lederle Farms visualizations
- [ ] PDF export functionality
- [ ] Presenter notes and speaker view
- [ ] Slide transitions customization
- [ ] Analytics and usage tracking 