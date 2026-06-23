# Workday with Gem — Website Build Plan

Personal brand site for a Bali-based VA & social media support freelancer.
Warm tropical aesthetic, blog-forward, service-led.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · MDX (blog) · Vercel
**Domain target:** workdaywithgem.com (or similar)
**Estimated total cost:** ~$15/year (domain only)

---

## Design Reference

Warm cream/beige palette, tropical lifestyle photography, handwritten accents,
seashell/palm leaf decorative elements, editorial blog cards.

| Token | Value |
|-------|-------|
| Background | `#FDF6EC` (warm cream) |
| Accent gold | `#D4A843` |
| Dark text | `#2C1A0E` (dark brown) |
| Sage green | `#6B7C5E` |
| Button fill | `#E8D5A3` |

**Fonts:**
- Headings: Playfair Display (serif)
- Body: Inter or DM Sans (sans-serif)
- Script accents: Dancing Script or Caveat

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, About intro, Services preview, CTA banner, Blog preview, Newsletter |
| About | `/about` | Full bio, personality facts sidebar, photo |
| Services | `/services` | 5 service cards with detail, CTA |
| Resources | `/resources` | Freebies / tools list |
| Blog | `/blog` | Grid of posts ("Workday Diaries") |
| Blog Post | `/blog/[slug]` | Individual MDX post |
| Contact | `/contact` | Contact form |

---

## Phases

---

### Phase 1 — Project Scaffold
**Goal:** Working Next.js app with correct config, fonts, colours, and folder structure.

- [ ] `npx create-next-app@latest workday-with-gem --typescript --tailwind --app --src-dir`
- [ ] Configure `tailwind.config.ts` — custom colours, fonts
- [ ] Install dependencies: `next-mdx-remote`, `gray-matter`, `@next/font`
- [ ] Set up Google Fonts (Playfair Display + DM Sans + Dancing Script)
- [ ] Create folder structure:
  ```
  src/
  ├── app/
  │   ├── layout.tsx          # Root layout with nav + footer
  │   ├── page.tsx            # Home
  │   ├── about/page.tsx
  │   ├── services/page.tsx
  │   ├── resources/page.tsx
  │   ├── blog/
  │   │   ├── page.tsx        # Blog index
  │   │   └── [slug]/page.tsx # Blog post
  │   └── contact/page.tsx
  ├── components/
  │   ├── layout/
  │   │   ├── Navbar.tsx
  │   │   ├── Footer.tsx
  │   │   └── TopBanner.tsx
  │   ├── home/
  │   │   ├── Hero.tsx
  │   │   ├── AboutSnippet.tsx
  │   │   ├── ServicesPreview.tsx
  │   │   ├── CTABanner.tsx
  │   │   ├── BlogPreview.tsx
  │   │   └── Newsletter.tsx
  │   ├── blog/
  │   │   ├── BlogCard.tsx
  │   │   └── PostContent.tsx
  │   └── ui/
  │       ├── Button.tsx
  │       └── SectionLabel.tsx
  ├── lib/
  │   └── mdx.ts              # Blog post loader
  └── content/
      └── blog/               # MDX post files
  ```
- [ ] Init git repo + push to GitHub
- [ ] Connect repo to Vercel (auto-deploy on push to main)

**Deliverable:** `npm run dev` shows a blank cream page with nav and footer.

---

### Phase 2 — Navigation & Layout Shell
**Goal:** Persistent nav, footer, and top announcement banner working across all pages.

- [ ] **TopBanner** — gold strip: "Bali workdays & real life — one coffee at a time. ♡"
- [ ] **Navbar** — logo left, links centre, "Let's work together" button right
  - Mobile: hamburger menu
  - Active link underline state
- [ ] **Footer** — logo, tagline, quick links columns, social icons (Instagram, TikTok, Pinterest, Email), "made with coffee & good intentions ♡"
- [ ] Responsive across mobile / tablet / desktop

**Deliverable:** Shell looks correct on all screen sizes.

---

### Phase 3 — Home Page
**Goal:** Full home page matching the mockup, section by section.

- [ ] **Hero** — large serif headline ("Freelance life. Real life. ♡"), subtext, two CTAs, hero photo (right), decorative sticky note, floating elements
- [ ] **About Snippet** — circular profile photo (left), "HI, I'M GEM!" label, 3-line identity statement, short bio paragraph, "More About Me" CTA, 4 fun-fact icons (right sidebar)
- [ ] **Services Preview** — 5 cards: General VA, Social Media Support, Content Creation, Project Management, Custom Support — icon + title + short description each
- [ ] **CTA Banner** — split: left "Let's work together!" card + right quote block with background beach photo
- [ ] **Blog Preview** ("From the Workday Diaries") — 4 most recent posts as cards with category badge + title + date
- [ ] **Newsletter** ("Straight to your inbox") — email input + "I'M IN!" button, short copy
- [ ] Decorative elements: seashells, palm leaves, starfish (SVG or PNG assets)

**Deliverable:** Home page visually matches the mockup.

---

### Phase 4 — Inner Pages
**Goal:** All nav pages built and populated with placeholder content.

- [ ] **About page** — full bio, personality sidebar ("Bali Based VA", facts list), more photos
- [ ] **Services page** — expanded service cards with more detail, pricing section (optional), CTA
- [ ] **Resources page** — list of favourite tools / freebies grid
- [ ] **Contact page** — contact form (name, email, message), Formspree or Web3Forms integration (free), thank-you state

**Deliverable:** All pages accessible and styled.

---

### Phase 5 — Blog System
**Goal:** Fully functional blog from MDX files, no external CMS needed.

- [ ] `lib/mdx.ts` — reads `/content/blog/*.mdx`, parses frontmatter (title, date, category, excerpt, coverImage, slug)
- [ ] Blog index page — filterable by category, sorted by date, 4-column card grid
- [ ] Blog post page — MDX rendered with custom component mappings (headings, blockquotes, images)
- [ ] Category badges: LIFE / TIPS / BTS / BALI
- [ ] Write 3–4 sample posts to populate (based on mockup titles):
  - "A Day in My Life as a VA & Mom in Bali"
  - "5 Tools I Can't Live Without as a Freelancer"
  - "How I Stay Organised (Most of the Time)"
  - "Bali Cafe Guide: My Favourite Work Spots"
- [ ] SEO metadata per post (Open Graph, Twitter card)

**Deliverable:** Blog lists posts, clicking opens a styled post.

---

### Phase 6 — SEO & Performance
**Goal:** Site is search-engine ready and fast.

- [ ] `layout.tsx` root metadata (title, description, OG image)
- [ ] Per-page metadata exports
- [ ] `sitemap.ts` — auto-generated sitemap including blog posts
- [ ] `robots.txt`
- [ ] Next.js Image component on all photos (auto WebP, lazy load)
- [ ] Favicon + `apple-touch-icon`
- [ ] Google Analytics or Plausible (privacy-friendly, free tier)

**Deliverable:** Lighthouse score 90+ on performance and SEO.

---

### Phase 7 — Domain & Go Live
**Goal:** Custom domain live with SSL, email forwarding set up.

- [ ] Buy domain (recommended: Namecheap or Cloudflare Registrar ~$15/yr)
  - Suggested: `workdaywithgem.com`
- [ ] Add domain in Vercel dashboard → DNS records
- [ ] Set up email forwarding: `hello@workdaywithgem.com` → Gem's Gmail
  - Free option: Cloudflare Email Routing
- [ ] Update contact form action URL to new domain
- [ ] Final QA across Chrome / Safari / mobile
- [ ] Submit to Google Search Console

**Deliverable:** Site live at custom domain, email forwarding working.

---

### Phase 8 — Newsletter Integration (Post-Launch)
**Goal:** Email signups actually captured and managed.

- [ ] Sign up for Kit (ConvertKit) — free up to 10,000 subs
- [ ] Create a form / embed code
- [ ] Replace placeholder newsletter section with live Kit embed
- [ ] Set up welcome email sequence (optional)

**Deliverable:** Signups land in Kit, welcome email sends automatically.

---

## Recommended Build Order

```
Phase 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8
  Scaffold   Shell   Home   Pages   Blog   SEO   Launch   Email
```

Phases 1–5 can be done locally before touching any paid services.
Domain (Phase 7) is the only spend needed to go live.

---

## Assets Needed from Gem

Before Phase 3 can be finalised:

- [ ] High-res lifestyle photos (working, Bali cafe, with family)
- [ ] Headshot / profile photo (for About snippet + About page)
- [ ] Logo (the `wg` monogram + "workday with gem" wordmark)
- [ ] Actual bio copy
- [ ] Services descriptions (real copy, not placeholder)
- [ ] First blog posts (or give to Claude to draft)

---

## Folder Structure (top-level)

```
workday-with-gem/
├── PLAN.md                 ← this file
├── src/
├── public/
│   ├── images/
│   └── fonts/
├── content/
│   └── blog/
├── package.json
├── tailwind.config.ts
├── next.config.js
└── .env.local
```
