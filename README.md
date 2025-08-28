# WESPVRIJ Website

Professional wasp control services website built with Next.js 15 and Sanity CMS.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Sanity CMS** for content management
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Responsive design** for all devices
- **SEO optimized** with dynamic metadata
- **Dynamic location pages** 
- **Contact form** with submission tracking

## 🔧 Technologies

- Next.js 15 (App Router)
- TypeScript
- Sanity CMS
- Tailwind CSS
- shadcn/ui
- Lucide React Icons

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── [slug]/          # Dynamic location pages
│   │   ├── studio/          # Embedded Sanity Studio
│   │   ├── globals.css      # Global styles
│   │   └── page.tsx         # Homepage
│   ├── components/          # Reusable components
│   └── lib/                # Utility functions
├── sanity/
│   ├── schemaTypes/        # Content schemas
│   ├── lib/                # Sanity utilities
│   └── structure.ts        # Studio structure
└── public/                 # Static assets
```

## 🛠️ Development Setup

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd wespvrij-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment variables:**
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID="6vd5j5gs"
   NEXT_PUBLIC_SANITY_DATASET="production"
   NEXT_PUBLIC_SANITY_API_VERSION="2025-08-28"
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Access the application:**
   - Website: http://localhost:3000
   - Sanity Studio: http://localhost:3000/studio

## 🌐 Content Management

### Sanity Studio Access

- **Local Studio**: http://localhost:3000/studio
- **Hosted Studio**: https://wespvrij.sanity.studio/

### Content Types

- **Site Settings**: Global website configuration
- **Homepage Content**: All homepage sections
- **Services**: Service offerings and pricing
- **Locations**: Location-specific content
- **Testimonials**: Customer reviews
- **Contact Submissions**: Form submission tracking

## 🚀 Deployment

### Vercel Deployment

1. **Connect to GitHub**: Push code to GitHub repository
2. **Import to Vercel**: Connect your GitHub repository
3. **Environment Variables**: Add the Sanity configuration:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=6vd5j5gs
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-08-28
   ```
4. **Deploy**: Vercel will automatically build and deploy

### Build Commands

```bash
# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📝 Content Editing

All website content can be edited through the Sanity Studio:

1. **Homepage**: Hero section, features, problem info, process steps
2. **Services**: Service details, pricing, features
3. **Locations**: Location-specific content and SEO
4. **Testimonials**: Customer reviews and ratings
5. **Site Settings**: Company info, contact details, branding

## 🔧 Technical Notes

- Dynamic routes for location pages using `[slug]/page.tsx`
- GROQ queries for efficient data fetching
- TypeScript types generated from Sanity schemas
- Image optimization with Next.js Image component
- Responsive design with Tailwind CSS
- SEO optimization with dynamic metadata

## 📞 Support

For technical support or questions about the website, contact the development team.

---

**Built with ❤️ for WESPVRIJ - Professional Wespenbestrijding**
