# LWM Deck Solo - Claude Context

## Project Overview
This is an isolated workspace for the "Learn With Me" presentation deck, extracted from the main Alpha Decks project for focused development. The deck is designed for feedback and research insights presentation to Will Vu at Social Capital.

## Current Status
✅ **Production-ready presentation** - Complete 12-slide deck with polished UI/UX  
✅ **Interactive critique sections** - Expandable 3-column analysis with dynamic content  
✅ **Professional styling** - Purple branding, glass-morphism effects, responsive design  
✅ **Multi-template system** - Title, Critique, Research, and Premium slide types  
✅ **GitHub repository** - Version controlled at https://github.com/sojourner-alpha/lwm-deck  
✅ **Recording completed** - User walkthrough video created for presentation delivery

## Final Deck Structure
- **12 slides total** with strategic narrative flow
- **4 template types**: Title, Interactive Critique (3-column), Research Methodology, Premium Matrix
- **Interactive features**: Expandable critique sections, smooth animations, keyboard navigation
- **Professional branding**: Purple color scheme, static header, aligned tooltips
- **Target audience**: Will Vu, GM @ Learn With Me (Social Capital)
- **Purpose**: Research Associate application demonstrating analytical and methodological skills

## Key Files
- `src/data/decks/learnWithMe.ts` - LWM deck configuration and slide content
- `src/App.tsx` - Simplified to load only LWM deck by default
- `src/components/StrategyDeck/StrategyDeck.tsx` - Main presentation component
- `src/components/StrategyDeck/SpecialElements.tsx` - Custom slide layouts (currently minimal)

## Major Improvements Completed
1. **UI Standardization** - All slides now use consistent max-w-6xl aspect-video sizing
2. **Interactive Critique System** - Expandable sections with titles that expand to show full content
3. **Professional Styling** - Purple branding, glass-morphism effects, responsive design
4. **Content Population** - All 12 slides populated with comprehensive research and analysis
5. **Navigation Enhancements** - Keyboard support, mobile menu, smooth animations
6. **Static Header** - "Learn With Me | Research Associate | Curt Lederle" branding
7. **Aligned Layout** - Slides and footer tooltips properly positioned for visual balance

## Final Slide Content (Production Ready)
1. **Title** - Professional intro with purple accent application text
2. **Scope** - Clear presentation objectives and response overview  
3. **Structure** - 4-column horizontal workflow with visual hierarchy
4. **Critique Section** - Professional section divider with branding
5. **Media Landscape** - Interactive 3-column critique with source links
6. **Drug Development** - Interactive 3-column critique with source links
7. **Premium Recommendations** - 4-category value-add matrix with applications
8. **Research Section** - Methodology section introduction
9. **Universal Methodology** - 7-stage systematic research framework
10. **China Application** - Methodology applied to broad geopolitical topic
11. **GLP-1 Application** - Methodology applied to technical pharmaceutical topic  
12. **Summary** - Key competencies and Research Associate positioning

## Production Quality Features
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Interactive Elements** - Critique sections expand/collapse with smooth animations
- **Professional Navigation** - Side panel, keyboard shortcuts, mobile hamburger menu
- **Brand Consistency** - Purple color scheme throughout with proper typography
- **Performance Optimized** - Fast loading, smooth transitions, efficient rendering

## Development Commands
```bash
npm start    # Start development server
npm run build # Build for production
npm test     # Run tests
```

## Technical Architecture
- **React 18** with TypeScript for type safety and modern features
- **Framer Motion** for smooth animations and page transitions
- **Tailwind CSS** with custom configurations for professional styling
- **Hash-based routing** for simple navigation without complex routing
- **Component-based architecture** with template system for different slide types
- **HTML2Canvas & jsPDF** integration for PDF export functionality
- **Responsive design** with mobile-first approach

## Deployment Ready
- **Production build** optimized and tested
- **GitHub repository** with complete version history
- **Clean codebase** with TypeScript safety and proper component organization  
- **Professional presentation** suitable for high-stakes business meetings
- **Recording completed** for asynchronous presentation delivery

This presentation system represents a sophisticated, purpose-built solution that effectively demonstrates research capabilities, critical analysis skills, and systematic methodology - core competencies for the Research Associate position at Social Capital.