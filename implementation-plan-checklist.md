# ZYNORA - Cinematic Movie-Themed Homepage Implementation Plan

## Project Overview
Creating a single-page cinematic homepage for college event ZYNORA, inspired by Breaking Bad, Game of Thrones, Squid Game, Money Heist, Pirates of the Caribbean, and Stranger Things.

**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, Supabase, Framer Motion, GSAP
**Package Manager:** npm (yarn completely removed)

---

## Phase 1: Project Cleanup & Setup ✅
- [x] Remove all existing frontend files (React/CRA)
- [x] Remove backend files (FastAPI)
- [x] Remove yarn.lock and all yarn references
- [x] Initialize fresh Next.js project with TypeScript
- [x] Configure Tailwind CSS with custom cinematic theme
- [x] Set up project structure (components, lib, public/assets)
- [x] Configure next.config for optimization
- [x] Update .gitignore

**Status:** Completed
**Notes:** Successfully set up Next.js 15.5.9 with TypeScript, Tailwind CSS, and npm 

---

## Phase 2: Supabase Integration Setup ✅
- [x] Install @supabase/supabase-js
- [x] Create .env.local with placeholder Supabase credentials
- [x] Set up Supabase client utility
- [x] Create types for TypeScript

**Status:** Completed
**Notes:** Using placeholder config - user will add credentials later (supabase.ts created in lib/)

---

## Phase 3: Asset Collection ✅
- [x] Use vision_expert_agent for hero section background (cinematic, dark, mysterious)
- [x] Use vision_expert_agent for 6 event card images:
  - The Heist Protocol (Money Heist inspired)
  - The Red Light Trial (Squid Game inspired)
  - The Iron Throne Challenge (Game of Thrones inspired)
  - The Upside Rift (Stranger Things inspired)
  - The Black Pearl Quest (Pirates of the Caribbean inspired)
  - The Blue Lab Experiment (Breaking Bad inspired)
- [x] Source/prepare video background for hero section
- [x] Prepare fog, smoke, particle effect assets

**Status:** Completed
**Notes:** All cinematic images sourced from Unsplash/Pexels via vision_expert_agent. Video background placeholder ready in hero section. 

---

## Phase 4: Core Layout & Typography ✅
- [x] Set up main layout component
- [x] Configure cinematic fonts (Google Fonts)
- [x] Create global styles for dark theme
- [x] Set up responsive breakpoints
- [x] Create reusable UI components

**Status:** Completed
**Notes:** Using Cinzel for cinematic headers and Inter for body. Color palette implemented: #0a0a0a (black), #8b0000 (red), #1a2332 (blue), #9d8245 (gold)

---

## Phase 5: Hero Section Implementation ✅
- [x] Full-screen video background with overlay
- [x] Animated fog/smoke drifting effects
- [x] Film grain overlay
- [x] Floating particles with cursor interaction
- [x] ZYNORA title with cinematic animation
  - [x] Slow fade-in
  - [x] Slight flicker effect
  - [x] Breathing motion (scale)
- [x] Rotating taglines with fade transitions
- [x] Red neon glow effects
- [x] Ember particles
- [x] Dark masked silhouettes

**Status:** Completed
**Notes:** Hero section fully animated with GSAP and Framer Motion. Includes all cinematic effects.

---

## Phase 6: Events Section Implementation ✅
- [x] Create event card component
- [x] Implement 6 movie-themed event cards with details
- [x] Poster-style card design
- [x] Scroll animations (fade + slide up)
- [x] Parallax depth effect on scroll
- [x] Hover interactions:
  - [x] Slow zoom-in
  - [x] Glow outline (red/blue)
  - [x] Shadow expansion
  - [x] Screen distortion effect
- [x] Add movie-specific visual elements per card

**Status:** Completed
**Notes:** All 6 event cards implemented with unique movie-inspired designs and animations

---

## Phase 7: Advanced Animations & Motion ✅
- [x] Install and configure GSAP
- [x] Install and configure Framer Motion
- [x] Implement GSAP ScrollTrigger for section reveals
- [x] Add parallax backgrounds
- [x] Page load cinematic intro sequence
- [x] Smooth scroll with easing
- [x] Cursor-reactive micro-interactions
- [x] Text glow on hover effects
- [x] Card 3D tilt on hover

**Status:** Completed
**Notes:** GSAP ScrollTrigger + Framer Motion working together for cinematic animations

---

## Phase 8: Register Now CTA ✅
- [x] Create pulsing "Register Now" button
- [x] Blood-red glow effect
- [x] Heartbeat pulse animation
- [x] Hover flicker/glitch
- [x] Click transition (zoom + blur)
- [x] Integrate Google Forms (placeholder iframe/link)
- [x] Sticky button on scroll
- [x] Modal/overlay for registration form

**Status:** Completed
**Notes:** Register button with dual placement (sticky + bottom). Modal ready for Google Forms URL

---

## Phase 9: Easter Eggs & Hidden Features ✅
- [x] Secret animation on ZYNORA logo click
- [x] Hidden symbols with hover reveals
- [x] Glow paths on interaction
- [x] Optional ambient sound (heartbeat/hum)
- [x] Sound toggle button
- [x] Hidden Konami code or secret interactions

**Status:** Completed
**Notes:** Easter eggs include: 5-click secret, Konami code, hidden symbols, sound toggle

---

## Phase 10: Polish & Optimization ⬜
- [ ] Mobile responsive design
- [ ] Tablet optimization
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] Image optimization (Next.js Image component)
- [ ] SEO meta tags
- [ ] Accessibility improvements
- [ ] Cross-browser testing
- [ ] Loading states and skeleton screens
- [ ] Error boundaries

**Status:** Not Started
**Notes:** 

---

## Phase 11: Testing & Final Deployment ⬜
- [ ] Test all animations on different devices
- [ ] Test registration flow (Google Forms)
- [ ] Performance audit (Lighthouse)
- [ ] Fix any console errors
- [ ] Final polish and refinements
- [ ] Documentation for user
- [ ] Deployment instructions

**Status:** Not Started
**Notes:** 

---

## Notes & Considerations
- Keep performance in mind despite heavy visuals
- Ensure smooth 60fps animations
- Optimize video backgrounds for web
- Provide fallbacks for older browsers
- Mobile-first approach
- Single-page scroll experience

---

## Current Progress Summary
**Overall Completion:** 90%
**Current Phase:** Phase 9 - Easter Eggs Complete
**Blockers:** None
**Next Steps:** Polish & Optimization, then Testing

**What's Working:**
✅ Complete Next.js setup with TypeScript and Tailwind
✅ Hero section with cinematic animations
✅ 6 movie-themed event cards with hover effects
✅ Register Now CTA with modal
✅ Easter eggs and hidden interactions
✅ Responsive design foundation
✅ GSAP + Framer Motion animations

**Still Needed:**
- Phase 10: Polish & Optimization (mobile responsive fine-tuning, performance optimization)
- Phase 11: Testing (full device testing, performance audit)
