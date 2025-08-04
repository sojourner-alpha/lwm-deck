# LWM Deck Solo - Claude Context

## Project Overview
This is an isolated workspace for the "Learn With Me" presentation deck, extracted from the main Alpha Decks project for focused development. The deck is designed for feedback and research insights presentation to Will Vu at Social Capital.

## Current Status
✅ **Working isolated environment** - Only LWM deck, no interference from other decks  
✅ **Clean builds** - Fast compilation without other deck overhead  
✅ **Basic functionality** - Deck loads and displays slide content  

## Deck Structure
- **10 slides total** in the LWM deck
- **Content areas**: Review & Critique, Research Methodology, Strategic Framework
- **Target audience**: Social Capital (Will Vu)
- **Purpose**: Strategic feedback and research methodology presentation

## Key Files
- `src/data/decks/learnWithMe.ts` - LWM deck configuration and slide content
- `src/App.tsx` - Simplified to load only LWM deck by default
- `src/components/StrategyDeck/StrategyDeck.tsx` - Main presentation component
- `src/components/StrategyDeck/SpecialElements.tsx` - Custom slide layouts (currently minimal)

## Recent Changes Made
1. **Isolated from main project** - Copied and streamlined to LWM-only
2. **Removed deck selector** - Single deck environment
3. **Fixed build issues** - Restored react-scripts after audit fix broke it
4. **Disabled special elements** - LWM slides show normal content instead of broken custom layouts

## Current LWM Deck Content
The deck includes:
1. Title slide
2. Scope of Activity  
3. Section 1: Review & Critique (section title)
4. Media Landscape Analysis
5. Media Landscape Value Add
6. Drug Development Analysis  
7. Drug Development Value Add
8. Section 2: Research Methodology (section title)
9. China Market Research Methodology
10. GLP-1 Market Research Methodology

## Known Issues & Cleanup Needed
- **Code cleanup**: Still contains unused imports and components from other decks
- **Special elements**: LWM special layouts were removed to fix build errors
- **Styling**: May need LWM-specific styling improvements
- **Performance**: Could optimize by removing unused code

## Development Commands
```bash
npm start    # Start development server
npm run build # Build for production
npm test     # Run tests
```

## Next Steps for Development
1. Clean up unused code and imports
2. Implement proper LWM-specific slide layouts if needed
3. Refine content and styling
4. Test all slide transitions and functionality
5. Optimize for presentation delivery

## Architecture Notes
- React 18 with TypeScript
- Framer Motion for animations
- Tailwind CSS for styling
- Hash-based routing (simplified for single deck)
- Component-based slide rendering

This isolated environment allows focused development on the LWM deck without worrying about breaking other presentation decks.