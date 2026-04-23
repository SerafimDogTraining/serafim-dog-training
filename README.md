# Serafim Dog Training

Premium dog training website for [serafimdogtraining.com](https://www.serafimdogtraining.com). Built with Next.js 16, Tailwind CSS v4, and Stripe.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Payments:** Stripe Checkout
- **Blog:** MDX files with gray-matter + marked
- **Deploy:** Vercel

---

## Getting Started

### 1. Clone and install

```bash
git clone <your-repo>
cd serafim-dog-training
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in the values in `.env.local`:

| Variable | Description |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key (from Stripe Dashboard → Developers → API Keys) |
| `STRIPE_PRICE_SERVICE_DOG` | Price ID for Service Dog Program |
| `STRIPE_PRICE_BEHAVIORAL` | Price ID for Behavioral Correction |
| `STRIPE_PRICE_HANDLER` | Price ID for Handler Program (paid in full) |
| `STRIPE_PRICE_HANDLER_PLAN` | Price ID for Handler Program (payment plan) |
| `NEXT_PUBLIC_SITE_URL` | Your production URL (e.g. `https://www.serafimdogtraining.com`) |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly embed URL |
| `NEXT_PUBLIC_SKOOL_URL` | Your Skool community URL |

### 3. Run dev server

```bash
npm run dev
```

---

## Project Structure

```
/app                     # Next.js App Router pages
  /page.tsx              # Homepage (sales page)
  /about/                # About Arthur page
  /programs/
    /service-dog/        # Service Dog Program page
    /behavioral-correction/
    /handler/            # The Handler Program
  /blog/                 # Blog index
  /blog/[slug]/          # Individual blog post
  /book-a-consult/       # Calendly embed page
  /community/            # Skool community link page
  /api/checkout/         # Stripe checkout API route

/components
  Header.tsx             # Fixed nav with Programs dropdown
  Footer.tsx             # Site footer
  HeroSection.tsx        # Video hero (client component)
  CheckoutButton.tsx     # Stripe checkout trigger (client component)

/lib
  blog.ts                # Blog utilities (read MDX files)

/content/blog/           # Blog posts (MDX files)
```

---

## Adding Blog Posts

Create a `.mdx` file in `/content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2025-06-01"
excerpt: "A short description shown in the blog index."
coverImage: "/images/blog/my-post-cover.jpg"
---

Your post content in Markdown here.
```

The post will automatically appear in the blog index and get its own page at `/blog/your-filename`.

---

## Stripe Setup

### 1. Create products in Stripe

Go to [Stripe Dashboard](https://dashboard.stripe.com) → Products → Add Product.

Create one product per program:
- **Service Dog Program** — one-time payment, $1,499 starting price
- **Behavioral Correction** — one-time payment, $997
- **The Handler Program** — one-time payment, $3,000
- **The Handler Program (Payment Plan)** — $3,500

After creating each product, copy the **Price ID** (starts with `price_`).

### 2. Add Price IDs to .env.local

```
STRIPE_PRICE_SERVICE_DOG=price_xxxxx
STRIPE_PRICE_BEHAVIORAL=price_xxxxx
STRIPE_PRICE_HANDLER=price_xxxxx
STRIPE_PRICE_HANDLER_PLAN=price_xxxxx
```

### 3. Test with Stripe test keys

Use `STRIPE_SECRET_KEY=sk_test_...` for local testing. Stripe's test card: `4242 4242 4242 4242`.

---

## Replacing Placeholder Content

### Hero Video
Drop your video file at `/public/videos/hero.mp4`. The `HeroSection` component will automatically pick it up. A dark green gradient shows as a fallback if no video is present.

### Photos
Replace placeholder blocks with `<Image>` components:
- Arthur's photo: `/public/images/arthur.jpg` — update `app/about/page.tsx` and `app/page.tsx`
- Blog cover images: reference the path in MDX frontmatter

### Calendly URL
Set `NEXT_PUBLIC_CALENDLY_URL` in your `.env.local`.

### Skool URL
Set `NEXT_PUBLIC_SKOOL_URL` in your `.env.local`.

---

## Deploying to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial deploy"
git push
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Framework: Next.js (auto-detected)
4. Add all environment variables from `.env.example`
5. Deploy

### 3. Add custom domain

In Vercel → Settings → Domains → add `serafimdogtraining.com` and `www.serafimdogtraining.com`.

---

## SEO

- Meta tags and Open Graph on every page via Next.js `metadata` API
- Local Business JSON-LD schema on homepage
- Article schema on blog posts
- Auto-generated `sitemap.xml` at `/sitemap.xml`
- `robots.txt` at `/robots.txt`
- Dynamic OG image via `app/opengraph-image.tsx`

---

## Customization Notes

- **Colors:** Defined in `/app/globals.css` under `@theme`. Change `--color-forest`, `--color-gold`, etc. to update the entire site.
- **Fonts:** `Cormorant Garamond` (headings) and `Inter` (body) — loaded via `next/font/google` in `app/layout.tsx`.
- **Nav links:** Update `components/Header.tsx` and `components/Footer.tsx`.
