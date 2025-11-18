# Deployment Guide for DKS Liberia Website

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Vercel account (free tier is sufficient)

## Local Development Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

1. Build the project:
```bash
npm run build
```

2. Test the production build locally:
```bash
npm start
```

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository.

2. Go to [vercel.com](https://vercel.com) and sign in.

3. Click "New Project" and import your repository.

4. Vercel will automatically detect Next.js and configure the project.

5. Click "Deploy" and your site will be live!

## Environment Variables

Currently, no environment variables are required. However, when you integrate with a backend, you may need to add:

- `NEXT_PUBLIC_API_URL` - Backend API URL
- `DATABASE_URL` - Database connection string
- `EMAIL_API_KEY` - Email service API key

Add these in the Vercel project settings under "Environment Variables".

## Custom Domain Setup

1. In your Vercel project dashboard, go to "Settings" > "Domains".

2. Add your domain: `dksliberia.org`

3. Follow Vercel's instructions to configure DNS records.

## Backend Integration Points

The following areas include placeholder comments for backend integration:

1. **API Routes:**
   - `/pages/api/posts.ts` - Fetch posts from database/CMS
   - `/pages/api/contact.ts` - Store contact form submissions and send emails

2. **Data Sources:**
   - `/data/posts.json` - Replace with API calls
   - `/data/programs.json` - Replace with API calls
   - `/data/impact.json` - Replace with API calls
   - `/data/team.json` - Replace with API calls
   - `/data/partners.json` - Replace with API calls

3. **Contact Page:**
   - Newsletter subscription - Integrate with Mailchimp, SendGrid, etc.
   - Book a Meeting button - Replace with actual booking page URL
   - Google Maps embed - Replace with actual location coordinates

## Performance Optimization

- Images are optimized using Next.js Image component
- Static generation (SSG) is used for all pages
- Pages revalidate every hour (3600 seconds)
- Consider implementing ISR (Incremental Static Regeneration) for dynamic content

## SEO Optimization

- All pages include proper meta tags
- Open Graph tags for social media sharing
- Semantic HTML structure
- Alt text for all images
- Sitemap and robots.txt (can be added later)

## Monitoring

- Set up Vercel Analytics for performance monitoring
- Configure error tracking (e.g., Sentry)
- Monitor Core Web Vitals

## Support

For issues or questions, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Documentation: https://vercel.com/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs

