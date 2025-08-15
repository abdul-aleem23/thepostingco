# Claude Code Configuration - ThePostingCo

## Project Overview
Hybrid street art/retro gaming themed marketing website for Berlin-focused flyer/sticker posting services.
**One flat rate: €99 for all businesses in Berlin.**

## 🎨 NEW DESIGN DIRECTION - Hybrid Aesthetic
Combining multiple unique design elements for maximum visual impact:

### Core Design Elements:
1. **ASCII Art Integration**
   - ASCII Header/Logo for brand identity
   - Terminal-style text elements
   - Code-block styled sections

2. **Street Art/Graffiti Elements**
   - Torn paper effects on sections
   - Spray paint textures as backgrounds
   - Minimal Berlin graffiti imagery (sparingly used)
   - Urban photography accents

3. **Retro Computer/Gaming**
   - 8-bit pixel fonts for headings
   - Glitch effects on hover/transitions
   - Scanline overlays on hero sections
   - Color cycling animations
   - Pixelated icons instead of emojis

## Tech Stack
- **Frontend**: React (JavaScript) with Vite
- **Styling**: TailwindCSS v4.1.11 (with @tailwindcss/vite plugin)
- **Animations**: Framer Motion + CSS animations for glitch effects
- **Internationalization**: Custom React Context for EN/DE translations
- **Forms**: Netlify Forms
- **Package Manager**: npm
- **Deployment**: Netlify

### New Dependencies Needed:
```bash
npm install framer-motion          # For advanced animations
npm install @fontsource/vt323      # Pixel/terminal font
npm install @fontsource/orbitron   # Futuristic font
```

## Current Setup Status
✅ Vite + React project created  
✅ TailwindCSS v4 installed and configured  
✅ All components created and functional
✅ Bilingual EN/DE system implemented
✅ Berlin-focused content and delivery rider network
⏳ Ready for design system overhaul

## Development Commands
```bash
# Development
npm run dev          # Start dev server (currently running on :5174)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # ESLint

# Dependencies to install
npm install framer-motion @fontsource/vt323 @fontsource/orbitron
```

## Current Project Structure
```
thePostingCo/
├── src/
│   ├── App.jsx                    # Main app with LanguageProvider
│   ├── main.jsx                   # React entry point
│   ├── index.css                  # TailwindCSS import
│   ├── App.css                    # Component styles
│   ├── components/                # All components implemented
│   │   ├── Navbar.jsx            # Nav with language toggle
│   │   ├── Hero.jsx              # Hero section with translations
│   │   ├── HowItWorks.jsx        # Steps + delivery rider network
│   │   ├── Pricing.jsx           # €99 pricing display
│   │   ├── ContactForm.jsx       # Berlin-focused form
│   │   └── Footer.jsx            # Footer with Berlin contact
│   ├── contexts/
│   │   └── LanguageContext.jsx   # EN/DE language management
│   ├── i18n/
│   │   └── translations.js       # All translations with Berlin focus
│   └── assets/
│       └── react.svg
├── public/
│   └── vite.svg
├── package.json                   # Dependencies configured
├── vite.config.js                 # Vite + TailwindCSS setup
├── eslint.config.js               # ESLint configuration
├── CLAUDE.md                      # This config file
└── index.html
```

## 🎨 Color Scheme Options & Selection

### **CHOSEN:** Option C - Berlin Underground 🏆
Perfect for Berlin-focused street posting service:
- **Primary**: `#E94560` (Crimson Red) - Bold, attention-grabbing
- **Secondary**: `#F2CC8F` (Warm Gold) - Premium, warm accent
- **Accent**: `#3D5A80` (Steel Blue) - Professional, tech touch
- **Background**: `#0D0208` (Deep Black) - Clean, modern
- **Text Primary**: `#FFFFFF` (Pure White) - Maximum readability
- **Text Secondary**: `#D1D5DB` (Light Gray) - Subtle hierarchy

### Alternative Options (Archived):

#### Option A - Neon Tokyo:
- Primary: `#FF0080` (Hot Pink), Secondary: `#00FFFF` (Electric Cyan), Accent: `#FFFF00` (Electric Yellow)

#### Option B - Cyberpunk Orange:
- Primary: `#FF6B00` (Vibrant Orange), Secondary: `#9D4EDD` (Purple), Accent: `#00F5FF` (Cyan)

#### Option D - Retro Synthwave:
- Primary: `#FF10F0` (Electric Magenta), Secondary: `#01DDDD` (Neon Teal), Accent: `#FFBD39` (Electric Amber)

## Key Components & Features
1. **ASCII Header**: Large terminal-style logo
2. **Hero**: Glitch effects + scanline overlays
3. **HowItWorks**: Torn paper sections + pixel icons
4. **Pricing**: €99 with spray paint texture background
5. **ContactForm**: Terminal-style form with Berlin focus
6. **Footer**: 8-bit pixel styling
7. **DeliveryNetwork**: Street art aesthetic highlighting community

## Implementation Progress
1. ✅ Setup Vite + React + TailwindCSS
2. ✅ Created all component structure
3. ✅ Implemented bilingual EN/DE system
4. ✅ Berlin-focused content and delivery rider network
5. ✅ Implemented hybrid design system (ASCII, street art, retro)
6. ✅ Applied Berlin U-Bahn color scheme (#F0CA00)
7. ✅ Implemented clean glass effect across all components
8. ✅ Updated ContactForm and Footer with modern styling
9. ✅ **COMPLETED**: Mobile-first responsive design
10. ✅ **COMPLETED**: Fixed ASCII art horizontal overflow with aggressive responsive scaling
11. ✅ **COMPLETED**: Mobile landscape padding adjustments for all components
12. ✅ **COMPLETED**: Fixed Vite base path for Netlify deployment
13. ✅ **COMPLETED**: Project cleanup - removed unnecessary files, updated README
14. ✅ **COMPLETED**: Added CLAUDE.md to .gitignore for GitHub repo cleanup
15. ✅ **COMPLETED**: Successfully deployed to Netlify
16. ⏳ Implement form submission feedback (success/error messages)
17. ⏳ Change default language to English
18. ⏳ Final testing and optimization

## 🎨 Final Design System - Clean Glass + Berlin U-Bahn
Perfect for video backgrounds and mobile devices:

### **Glass Effect Components:**
- **Background**: `bg-white/10 backdrop-blur-md`
- **Borders**: Berlin U-Bahn yellow (`#F0CA00`)
- **Typography**: Cyber (headings) + Pixel (body) fonts
- **Animations**: Smooth Framer Motion transitions

### **Mobile Optimization - COMPLETED:**
1. ✅ **ASCII Logo**: Responsive sizing using clamp(0.5rem, 2vw, 1.2rem)
2. ✅ **Navigation**: Hamburger menu with smooth animations
3. ✅ **Typography**: Fluid text sizing with clamp functions throughout
4. ✅ **Touch Targets**: 44px minimum for all buttons/links
5. ✅ **Performance**: Optimized animations and touch interactions
6. ✅ **Layout**: Single column on mobile, responsive grids on desktop

### **Key Mobile Features Implemented:**
- **Navbar**: Mobile hamburger menu with smooth transform animations
- **Hero**: Responsive ASCII logo with overflow protection and CTA button with proper touch targets
- **ASCII Logo**: Aggressive responsive scaling (0.85x on mobile, 0.75x on small, 0.65x on tiny screens)
- **HowItWorks**: Single column card layout on mobile, 3-column on desktop
- **Pricing**: Responsive padding and typography scaling
- **ContactForm**: Single column form fields on mobile, 2-column on desktop
- **Footer**: Compact mobile layout with responsive typography
- **All Components**: Consistent min-h-[44px] for touch targets
- **Global Overflow Prevention**: CSS overflow-x: hidden on html/body elements

## Berlin Focus Elements
- **Location**: All content specifically mentions Berlin districts
- **Contact**: .berlin domain, +49 German phone
- **Target Areas**: Mitte, Kreuzberg, Prenzlauer Berg, etc.
- **Community**: Delivery rider network collaboration
- **Language**: German default, English secondary
- **Currency**: Euros (€99) instead of pounds

## Form Fields (Bilingual)
- Business Name, Contact Name, Email, Phone
- Business Type (dropdown with German/English options)
- Target Berlin Areas (replaces postcodes)
- Additional Notes (textarea with localized placeholders)

## Deployment & Forms
### Netlify Deployment
- ✅ Successfully deployed to Netlify via GitHub integration
- ✅ Automatic builds on git push
- ✅ Custom domain support available
- ✅ Fixed Vite base path configuration for proper asset loading

### Netlify Forms Integration
**How it works:**
- Contact form has `netlify="true"` and `name="contact"` attributes
- Form submissions are automatically captured by Netlify
- **Submissions location**: Netlify Dashboard → Site → Forms tab
- **Email notifications**: Can be configured in Site Settings → Forms → Form notifications
- **Spam protection**: Built-in honeypot and reCAPTCHA options available

**Form data includes:**
- Business Name, Contact Name, Email, Phone
- Business Type (Restaurant, Retail, Services, etc.)
- Target Berlin Areas (Mitte, Kreuzberg, etc.)
- Additional Notes

**To access submissions:**
1. Go to your Netlify site dashboard
2. Click "Forms" in the left sidebar
3. View all submissions with timestamps and data
4. Set up email forwarding for instant notifications