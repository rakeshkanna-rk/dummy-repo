# ZYNORA - Cinematic Movie-Themed Homepage Implementation Plan

## Project Overview
Creating a single-page cinematic homepage for college event ZYNORA, inspired by Breaking Bad, Game of Thrones, Squid Game, Money Heist, Pirates of the Caribbean, and Stranger Things.

**Tech Stack:** Next.js 14+, TypeScript, Tailwind CSS, Supabase, Framer Motion, GSAP
**Package Manager:** npm (yarn completely removed)

---

## Phase 1: Project Cleanup & Setup ⬜
- [ ] Remove all existing frontend files (React/CRA)
- [ ] Remove backend files (FastAPI)
- [ ] Remove yarn.lock and all yarn references
- [ ] Initialize fresh Next.js project with TypeScript
- [ ] Configure Tailwind CSS with custom cinematic theme
- [ ] Set up project structure (components, lib, public/assets)
- [ ] Configure next.config for optimization
- [ ] Update .gitignore

**Status:** Not Started
**Notes:** 

---

## Phase 2: Supabase Integration Setup ⬜
- [ ] Install @supabase/supabase-js
- [ ] Create .env.local with placeholder Supabase credentials
- [ ] Set up Supabase client utility
- [ ] Create types for TypeScript

**Status:** Not Started
**Notes:** Using placeholder config - user will add credentials later

---

## Phase 3: Asset Collection ⬜
- [ ] Use vision_expert_agent for hero section background (cinematic, dark, mysterious)
- [ ] Use vision_expert_agent for 6 event card images:
  - The Heist Protocol (Money Heist inspired)
  - The Red Light Trial (Squid Game inspired)
  - The Iron Throne Challenge (Game of Thrones inspired)
  - The Upside Rift (Stranger Things inspired)
  - The Black Pearl Quest (Pirates of the Caribbean inspired)
  - The Blue Lab Experiment (Breaking Bad inspired)
- [ ] Source/prepare video background for hero section
- [ ] Prepare fog, smoke, particle effect assets

**Status:** Not Started
**Notes:** 

---

## Phase 4: Core Layout & Typography ⬜
- [ ] Set up main layout component
- [ ] Configure cinematic fonts (Google Fonts)
- [ ] Create global styles for dark theme
- [ ] Set up responsive breakpoints
- [ ] Create reusable UI components

**Status:** Not Started
**Notes:** Color palette: black, deep red, dark blue, muted gold

---

## Phase 5: Hero Section Implementation ⬜
- [ ] Full-screen video background with overlay
- [ ] Animated fog/smoke drifting effects
- [ ] Film grain overlay
- [ ] Floating particles with cursor interaction
- [ ] ZYNORA title with cinematic animation
  - [ ] Slow fade-in
  - [ ] Slight flicker effect
  - [ ] Breathing motion (scale)
- [ ] Rotating taglines with fade transitions
- [ ] Red neon glow effects
- [ ] Ember particles
- [ ] Dark masked silhouettes

**Status:** Not Started
**Notes:** Should feel like a movie intro

---

## Phase 6: Events Section Implementation ⬜
- [ ] Create event card component
- [ ] Implement 6 movie-themed event cards with details
- [ ] Poster-style card design
- [ ] Scroll animations (fade + slide up)
- [ ] Parallax depth effect on scroll
- [ ] Hover interactions:
  - [ ] Slow zoom-in
  - [ ] Glow outline (red/blue)
  - [ ] Shadow expansion
  - [ ] Screen distortion effect
- [ ] Add movie-specific visual elements per card

**Status:** Not Started
**Notes:** Cards should look like cinematic movie posters

---

## Phase 7: Advanced Animations & Motion ⬜
- [ ] Install and configure GSAP
- [ ] Install and configure Framer Motion
- [ ] Implement GSAP ScrollTrigger for section reveals
- [ ] Add parallax backgrounds
- [ ] Page load cinematic intro sequence
- [ ] Smooth scroll with easing
- [ ] Cursor-reactive micro-interactions
- [ ] Text glow on hover effects
- [ ] Card 3D tilt on hover

**Status:** Not Started
**Notes:** Everything should move subtly - nothing static

---

## Phase 8: Register Now CTA ⬜
- [ ] Create pulsing "Register Now" button
- [ ] Blood-red glow effect
- [ ] Heartbeat pulse animation
- [ ] Hover flicker/glitch
- [ ] Click transition (zoom + blur)
- [ ] Integrate Google Forms (placeholder iframe/link)
- [ ] Sticky button on scroll
- [ ] Modal/overlay for registration form

**Status:** Not Started
**Notes:** User's teammate wants Google Forms integration

---

## Phase 9: Easter Eggs & Hidden Features ⬜
- [ ] Secret animation on ZYNORA logo click
- [ ] Hidden symbols with hover reveals
- [ ] Glow paths on interaction
- [ ] Optional ambient sound (heartbeat/hum)
- [ ] Sound toggle button
- [ ] Hidden Konami code or secret interactions

**Status:** Not Started
**Notes:** Should be subtle and discoverable

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
**Overall Completion:** 0%
**Current Phase:** Not Started
**Blockers:** None
**Next Steps:** Begin Phase 1 - Project Cleanup & Setup
