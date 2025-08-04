# LWM Deck Solo - Claude Context

## Project Overview
This is an isolated workspace for the "Learn With Me" presentation deck, extracted from the main Alpha Decks project for focused development. The deck is designed for feedback and research insights presentation to Will Vu at Social Capital.

## Current Status
✅ **Working isolated environment** - Only LWM deck, no interference from other decks  
✅ **Clean builds** - Fast compilation without other deck overhead  
✅ **12-slide structure** - Complete presentation flow ready for content population
✅ **3 template types** - Title, Critique (3-column), Research (flow chart)
✅ **GitHub backup** - Repository at https://github.com/sojourner-alpha/lwm-deck

## Deck Structure
- **12 slides total** with structured content flow
- **3 template types**: Title slides, Critique analysis (3-column), Research methodology (flow chart)
- **Content areas**: Introduction, Critique Section, Premium Recommendations, Research Methodology, Applications
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

## Current LWM Deck Content (12 Slides)
1. **Title** (title template) - Learn With Me intro
2. **Scope** (title template) - The prompt being responded to
3. **Structure** (research template) - 7-step presentation flow overview
4. **Critique** (title template) - Section 1 introduction
5. **Media** (critique template) - 3-column analysis of media landscape research
6. **Drug Dev** (critique template) - 3-column analysis of drug development research
7. **Premium** (research template) - 5 universal recommendation categories
8. **Research** (title template) - Section 2 introduction
9. **Methodology** (research template) - 7-stage universal research approach
10. **China** (research template) - 7-step methodology application (broad topic)
11. **GLP-1s** (research template) - 7-step methodology application (technical topic)
12. **Summary** (title template) - Synthesis & next steps

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