# Slide Background Images

This directory contains background images for the Family Office Strategy Deck slides.

## Directory Structure

```
public/images/slides/
├── title/          # Title slide backgrounds
├── market/         # Market analysis slides
├── services/       # Service-related slides
├── strategy/       # Strategy and roadmap slides
├── governance/     # Governance and board slides
├── risks/          # Risk assessment slides
└── general/        # General business slides
```

## Naming Convention

Use descriptive names for easy identification:
- `boardroom-meeting.jpg` - Professional boardroom setting
- `financial-charts.jpg` - Charts and financial data
- `handshake-deal.jpg` - Business partnership imagery
- `city-skyline.jpg` - Corporate/urban backgrounds
- `luxury-office.jpg` - High-end office environments

## Recommended Image Specifications

- **Format**: JPG or PNG
- **Resolution**: 1920x1080 or higher (16:9 aspect ratio)
- **File Size**: Under 2MB for optimal loading
- **Style**: Professional, high-quality business imagery

## Usage

Images are referenced in the component using:
```typescript
const backgroundImage = `/images/slides/category/image-name.jpg`;
```

Drop your images into the appropriate category folders and they'll be automatically available for use in the presentation. 