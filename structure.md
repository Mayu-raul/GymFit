Gym Landing Page — Project Structure

1. Project Overview

Build a modern, premium Gym / Fitness Landing Page using the provided UI components as the structural foundation.

The website should feel:

- Powerful
- Premium
- Athletic
- Modern
- High-energy
- Clean rather than overly flashy
- Mobile responsive
- Conversion-focused

Primary Theme

Color Palette

- Primary: Black
- Secondary: Orange
- Background: Black / near-black
- Text: White
- Muted text: Gray
- Accent: Bright orange
- Cards: Dark gray / charcoal
- Borders: Subtle gray/orange

Suggested colors:

--background: #050505
--surface: #111111
--surface-light: #1A1A1A
--primary: #FF6B00
--primary-hover: #FF7A1A
--text-primary: #FFFFFF
--text-secondary: #A3A3A3
--border: #292929

The orange should be used strategically for:

- CTA buttons
- Active navigation states
- Section highlights
- Icons
- Numbers/statistics
- Small decorative elements
- Hover states

Do not make the entire website orange.

---

2. Page Structure

The landing page should follow this order:

Landing Page
│
├── Navbar
│
├── Hero Section
│
├── About / Why Choose Us
│
├── Programs / Services
│
├── Training / Fitness Features
│
├── Statistics / Achievements
│
├── Testimonials
│
├── CTA Section
│
└── Footer

The page should behave as a single scrolling page.

---

3. Folder Structure

All reusable UI components must be placed inside a dedicated "components" folder.

Recommended structure:

src/
│
├── components/
│ │
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── About.tsx
│ ├── Programs.tsx
│ ├── FitnessFeatures.tsx
│ ├── Stats.tsx
│ ├── Testimonials.tsx
│ ├── CTA.tsx
│ └── Footer.tsx
│
├── app/
│ └── page.tsx
│
├── public/
│ └── images/
│ ├── hero/
│ ├── programs/
│ ├── trainers/
│ └── testimonials/
│
└── styles/
    └── globals.css

If using the Next.js App Router, the main page should primarily compose the components rather than contain all of the markup itself.

Example:

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <FitnessFeatures />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

---

4. Navbar Component

Component

Navbar.tsx

Purpose

Provide navigation across the landing page.

The supplied navbar component should be adapted from a generic SaaS navbar into a gym navigation bar.

Navigation

Use:

Home
About
Programs
Features
Testimonials
Contact

Navigation should scroll to sections instead of navigating to separate pages.

Example:

Home → #home
About → #about
Programs → #programs
Features → #features
Testimonials → #testimonials
Contact → #contact

Right Side

Include:

Log In
Join Now

"Join Now" should use the orange CTA styling.

Mobile

The existing hamburger menu behavior should be preserved.

On mobile:

Logo
        Menu Icon

-----------------

Home
About
Programs
Features
Testimonials
Contact

Join Now

The menu should close after selecting a navigation item.

Styling

Navbar:

- Black background
- Bottom subtle border
- White logo/text
- Orange hover state
- Orange "Join Now" button

The navbar should remain visually consistent with the black/orange gym identity.

---

5. Hero Section

Component

Hero.tsx

ID

<section id="home">

Purpose

Immediately communicate what the gym offers and provide a strong conversion CTA.

The existing hero component's structure can be reused:

Background Image
        ↓
Dark Overlay
        ↓
Announcement
        ↓
Headline
        ↓
Description
        ↓
CTA Buttons

Hero Image

Use a Pexels image featuring:

- Gym training
- Weight lifting
- Athlete
- Strength training
- High-energy workout

Avoid generic corporate fitness photographs.

The image should have enough dark/negative space so the white typography remains readable.

Suggested Content

Announcement:

YOUR STRONGER SELF STARTS HERE

Headline:

BUILD YOUR
STRONGEST SELF.

Highlight:

STRONGEST SELF

using the orange accent.

Description:

Train harder. Move better. Get stronger.
Expert coaching, structured programs and a community
built to help you become your best.

CTA

Primary:

Start Training

Secondary:

Explore Programs

Behavior

Start Training → #contact
Explore Programs → #programs

Visual Direction

The hero should feel bold.

Use:

- Large typography
- Heavy font weight
- High contrast
- Full-width image
- Dark overlay
- Orange accent
- Minimal unnecessary decoration

---

6. About Section

Component

About.tsx

ID

<section id="about">

The supplied "About our apps" component should be completely repurposed.

Do not keep the six SaaS feature descriptions.

Instead, use it to explain the gym's approach.

Heading

MORE THAN A GYM.
A BETTER WAY TO TRAIN.

Description

Explain that the gym combines:

- Strength training
- Cardio
- Nutrition
- Recovery
- Coaching
- Community

Feature Grid

Use six cards.

01 — Strength Training
Build strength, muscle and power with structured resistance training.

02 — Cardio
Improve endurance, conditioning and cardiovascular performance.

03 — Personalized Workouts
Training plans designed around your goals and current fitness level.

04 — Nutrition Guidance
Practical nutrition guidance to support performance and body composition goals.

05 — Recovery
Mobility, stretching and recovery practices to keep you training consistently.

06 — Expert Coaching
Learn proper technique and train with experienced fitness professionals.

Visual Style

Cards should be:

- Dark surface
- Subtle border
- Orange icon
- White heading
- Gray description

On hover:

Card moves slightly upward
Orange accent appears
Border becomes more prominent

---

7. Programs Section

Component

Programs.tsx

ID

<section id="programs">

This section should showcase the actual training options offered by the gym.

Heading

TRAIN WITH PURPOSE.

Programs

Create a responsive card/grid layout.

Recommended programs:

Strength & Muscle
Build muscle and increase overall strength.

Fat Loss
Structured training focused on sustainable fat loss.

Functional Training
Improve mobility, balance, strength and everyday movement.

HIIT
Short, intense workouts designed to improve conditioning.

Personal Training
One-on-one coaching tailored to your goals.

Beginner Program
A structured starting point for people new to training.

Card Design

Each program should contain:

Image
Program Name
Short Description
Learn More →

Use Pexels images.

Images should represent the actual training style of each program.

---

8. Fitness Features Section

Component

FitnessFeatures.tsx

ID

<section id="features">

This section explains the complete fitness ecosystem rather than simply listing gym equipment.

Main Heading

EVERYTHING YOU NEED
TO GET RESULTS.

Features

Include:

Strength Zone
Free weights, machines and functional equipment.

Cardio Zone
Treadmills, bikes, rowing machines and conditioning equipment.

Personal Training
One-on-one guidance from experienced trainers.

Group Training
High-energy sessions designed around community and accountability.

Nutrition Support
Guidance to align your nutrition with your training goals.

Recovery & Mobility
Dedicated practices to improve movement and recovery.

Layout

Use a large feature layout:

┌───────────────────────┬───────────────┐
│ │ Strength │
│ ├───────────────┤
│ Large Gym Image │ Cardio │
│ ├───────────────┤
│ │ Personal │
│ │ Training │
└───────────────────────┴───────────────┘

On mobile, stack the content vertically.

---

9. Statistics Section

Component

Stats.tsx

Purpose

Create a visual credibility section.

Example structure:

10+
Years Experience

5,000+
Members Trained

20+
Expert Trainers

50+
Weekly Classes

Do not present fabricated statistics as real business claims.

If this is a demo project, either:

- Clearly use placeholder/demo numbers, or
- Replace them with actual gym data later.

Design

Use:

- Black background
- Large white numbers
- Orange numbers/accent
- Small uppercase labels

Example:

5K+
MEMBERS TRAINED

---

10. Testimonials Section

Component

Testimonials.tsx

ID

<section id="testimonials">

The supplied testimonial component can be reused structurally, but its content must be completely changed from students/music/dance.

Heading

REAL PEOPLE.
REAL RESULTS.

Description

See how our members are training harder,
building confidence and changing their relationship with fitness.

Testimonial Cards

Each card should contain:

★★★★★

"Quote about their experience with the gym."

Member Name
Training Goal

Examples of training goals:

Strength & Muscle
Fat Loss
Marathon Training
General Fitness
Functional Training

Important

Do not use fake testimonials as though they are genuine customer reviews.

For a demo website, use clearly fictional/demo names or replace the content with real testimonials once the gym has them.

Images

Use Pexels images for member portraits if necessary.

Avoid overly polished stock-photo portraits that look obviously artificial.

---

11. CTA Section

Component

CTA.tsx

ID

<section id="contact">

Purpose

Final conversion section.

The user should have a clear action after reaching the end of the website.

Heading

READY TO GET STRONGER?

Description

Stop waiting for the perfect time.
Start building the body and strength you've been working toward.

CTA

Primary:

Join the Gym

Secondary:

Book a Free Trial

Design

Use:

- Large background gym image
- Dark overlay
- Strong white typography
- Orange CTA
- Large spacing

---

12. Footer

Component

Footer.tsx

Purpose

Provide final navigation and contact information.

Structure

GYM LOGO

Train Hard.
Live Strong.

Quick Links
Home
About
Programs
Features
Testimonials

Programs
Strength
Fat Loss
HIIT
Personal Training

Contact
Phone
Email
Address

Social
Instagram
YouTube
Facebook

Footer Bottom

© 2026 Gym Name. All rights reserved.

---

13. Scrolling Behavior

The website should use smooth scrolling.

Global CSS:

html {
  scroll-behavior: smooth;
}

Navigation links should point to section IDs.

Example:

<a href="#about">About</a>
<a href="#programs">Programs</a>
<a href="#features">Features</a>
<a href="#testimonials">Testimonials</a>
<a href="#contact">Contact</a>

Each section must have a unique ID.

#home
#about
#programs
#features
#testimonials
#contact

The navbar should not navigate to separate pages for these sections.

---

14. Typography

The typography should communicate strength and premium fitness branding.

Recommended Font Pairing

Use:

Heading:
Bebas Neue

or

Oswald

Body:

Inter

Typography Hierarchy

Hero:

text-5xl
sm:text-6xl
md:text-7xl
lg:text-8xl

Section headings:

text-4xl
md:text-5xl

Body:

text-base
md:text-lg

Heading Style

Gym headings should generally use:

font-bold
uppercase
tracking-tight

Orange should be used to highlight important words.

Example:

BUILD YOUR
<span class="text-orange-500">STRONGEST SELF.</span>

Avoid using too many different fonts.

---

15. Image Strategy

Use Pexels for the photography.

Do not use random image sources from the original components.

Image Categories

Hero:

athlete lifting weights
dark gym
strength training

Programs:

weight training
running
HIIT
functional fitness
personal trainer
beginner gym training

Features:

modern gym interior
free weights
cardio equipment
trainer coaching

Testimonials:

fitness portrait
athlete portrait
gym member

Image Treatment

Most images should use:

object-cover

and appropriate:

aspect-ratio

Use dark overlays where text appears over an image.

---

16. Responsive Design

The website must work across:

Mobile
Tablet
Desktop
Large Desktop

Mobile

Prioritize:

- Hamburger navigation
- Single-column layouts
- Large readable typography
- Full-width CTA buttons where appropriate
- Stacked cards
- Reduced decorative elements

Tablet

Use:

2-column grids

where appropriate.

Desktop

Use:

3-column
4-column
split layouts

depending on the section.

---

17. Component Responsibilities

Each component should have a single responsibility.

Navbar
→ Navigation and mobile menu

Hero
→ First impression + primary CTA

About
→ Gym philosophy + core fitness benefits

Programs
→ Training programs

FitnessFeatures
→ Gym facilities/services/ecosystem

Stats
→ Credibility metrics

Testimonials
→ Member experiences

CTA
→ Final conversion

Footer
→ Contact + secondary navigation

Avoid putting the entire landing page into one component.

---

18. Design Rules

DO

- Use black as the dominant color.
- Use orange as the accent.
- Use high-contrast typography.
- Use large athletic imagery.
- Keep sections visually distinct.
- Use consistent spacing.
- Use subtle animations.
- Make CTAs obvious.
- Keep the design responsive.
- Use reusable components.

DON'T

- Use the original purple/teal testimonial theme.
- Keep SaaS copy from the supplied components.
- Use excessive gradients.
- Use too many colors.
- Make every element orange.
- Use random animations everywhere.
- Overload the page with cards.
- Use fake statistics/testimonials as real claims.

---

19. Animation Guidelines

Animations should support the design rather than distract from it.

Recommended:

Fade-in on section entry
Slight card translate on hover
Image scale on hover
Button transition
Navbar menu animation

Avoid:

Constant spinning
Excessive bouncing
Large text movement
Animations that interfere with reading

Respect reduced-motion preferences:

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
    scroll-behavior: auto;
    transition-duration: 0.01ms;
  }
}

---

20. Final Page Flow

The final experience should feel like:

┌──────────────────────────────┐
│ NAVBAR │
├──────────────────────────────┤
│ │
│ HERO │
│ "BUILD YOUR │
│ STRONGEST SELF." │
│ │
│ [START TRAINING] │
│ │
├──────────────────────────────┤
│ │
│ ABOUT THE GYM │
│ │
│ Strength | Cardio | Diet │
│ Coaching | Recovery | etc. │
│ │
├──────────────────────────────┤
│ │
│ PROGRAMS │
│ │
│ Strength | Fat Loss | HIIT │
│ Personal Training | etc. │
│ │
├──────────────────────────────┤
│ │
│ FITNESS FEATURES │
│ │
│ Gym + Training + │
│ Coaching Ecosystem │
│ │
├──────────────────────────────┤
│ │
│ STATS │
│ │
│ 5K+ 20+ 10+ 50+ │
│ │
├──────────────────────────────┤
│ │
│ TESTIMONIALS │
│ │
│ "REAL PEOPLE. REAL │
│ RESULTS." │
│ │
├──────────────────────────────┤
│ │
│ CTA │
│ │
│ READY TO GET STRONGER? │
│ [JOIN NOW] │
│ │
├──────────────────────────────┤
│ FOOTER │
└──────────────────────────────┘

---

21. Implementation Priority

Build the page in this order:

Phase 1 — Foundation

Global styles
Fonts
Color system
Navbar

Phase 2 — Main Visual Sections

Hero
About
Programs

Phase 3 — Supporting Sections

FitnessFeatures
Stats
Testimonials

Phase 4 — Conversion

CTA
Footer

Phase 5 — Polish

Responsive behavior
Smooth scrolling
Hover states
Animations
Accessibility
Image optimization
Final spacing adjustments

The objective is to make the website look like a real premium fitness brand, not like several unrelated Tailwind component-library examples pasted onto one pag