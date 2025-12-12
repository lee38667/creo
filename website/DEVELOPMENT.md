# Development Guide - Creo Media Website

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

## Project Overview

This is a fully functional, production-ready Next.js website for Creo Media, a premium digital creative services agency. The site strictly follows brand guidelines and includes all core pages, components, and features.

## File Structure Explained

### `/src/app` - Pages & Routing
- `page.tsx` - Home page
- `layout.tsx` - Root layout with metadata
- `not-found.tsx` - 404 error page
- `/services` - Services showcase page
- `/portfolio` - Portfolio with filtering
- `/about` - Company information
- `/contact` - Contact form page

### `/src/components` - Reusable UI Components
- `Header.tsx` - Navigation header with mobile menu
- `Footer.tsx` - Multi-column footer
- `Hero.tsx` - Large banner section
- `ServiceCard.tsx` - Service feature cards
- `PortfolioCard.tsx` - Project showcase cards
- `TestimonialCard.tsx` - Client testimonial cards
- `index.ts` - Component barrel export

### `/src/config` - Configuration
- `brand.ts` - Brand colors, services, portfolio, testimonials, navigation

### `/src/types` - TypeScript Types
- `index.ts` - Interface definitions

### `/src/lib` - Utility Functions
- `utils.ts` - Helper functions (slugify, validation, etc.)

### `/src/styles` - Global Styles
- `globals.css` - Tailwind + custom brand utilities

## Key Design Patterns

### 1. Brand Color Usage
```tsx
// Primary (warm brown) - for CTAs and highlights
className="bg-primary-700 hover:bg-primary-800"

// Secondary (olive) - for supporting elements
className="text-secondary-700"

// Dark (near black) - for text
className="text-dark-900"

// Light (off-white) - for backgrounds
className="bg-light"
```

### 2. Component with Animations
```tsx
'use client';
import { motion } from 'framer-motion';

export function ServiceCard({ title, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-8 bg-white rounded-xl hover:shadow-lg"
    >
      {/* content */}
    </motion.div>
  );
}
```

### 3. Form Handling
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  // ...
});

const handleChange = (e) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  // API call here
};
```

## Common Development Tasks

### Adding a New Page

1. **Create page directory and file**
   ```bash
   mkdir -p src/app/new-page
   touch src/app/new-page/page.tsx
   ```

2. **Add page component**
   ```tsx
   'use client';
   import { Hero } from '@/components/Hero';

   export default function NewPage() {
     return (
       <>
         <Hero 
           subtitle="Section"
           title="Page Title"
           description="Description..."
         />
         {/* More sections */}
       </>
     );
   }
   ```

### Adding a New Component

1. **Create component file**
   ```bash
   touch src/components/NewComponent.tsx
   ```

2. **Build component**
   ```tsx
   'use client';
   import { motion } from 'framer-motion';

   interface Props {
     // Define props
   }

   export function NewComponent({ /* props */ }: Props) {
     return (
       <motion.div /* animation props */>
         {/* JSX */}
       </motion.div>
     );
   }
   ```

3. **Export from barrel file**
   ```tsx
   // src/components/index.ts
   export { NewComponent } from './NewComponent';
   ```

### Updating Brand Colors

1. **Edit Tailwind config**
   ```js
   // tailwind.config.js
   colors: {
     primary: {
       700: '#b08968', // Update here
     }
   }
   ```

2. **Use new color**
   ```tsx
   className="bg-primary-700"
   ```

### Adding Form Validation

```tsx
import { isValidEmail, isValidPhone } from '@/lib/utils';

const handleSubmit = (e) => {
  if (!isValidEmail(email)) {
    // Show error
    return;
  }
  // Continue
};
```

## Performance Tips

### 1. Image Optimization
- Use Next.js Image component when possible
- Lazy load images with `loading="lazy"`
- Provide `width` and `height` props

### 2. Code Splitting
- Use dynamic imports for heavy components
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/Heavy'),
  { loading: () => <div>Loading...</div> }
);
```

### 3. Caching
- Set proper cache headers in Next.js config
- Cache static assets
- Use ISR (Incremental Static Regeneration) for semi-dynamic content

### 4. Monitoring
- Run regular Lighthouse audits
- Monitor Core Web Vitals
- Check bundle size with `next/bundle-analyzer`

## Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Forms validate and submit
- [ ] Links work (internal and external)
- [ ] Mobile responsive (test at 375px, 768px, 1440px)
- [ ] Navigation works on mobile
- [ ] Animations run smoothly
- [ ] No console errors
- [ ] SEO meta tags present
- [ ] Accessibility: Tab through pages
- [ ] Print styles work

### Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Chrome
- Mobile Safari

## Accessibility (A11y)

### Checklist
- [ ] All images have alt text
- [ ] Buttons have proper aria-labels
- [ ] Form labels associated with inputs
- [ ] Color contrast > 4.5:1
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Semantic HTML used
- [ ] No keyboard traps

## SEO Best Practices

### Meta Tags
- [ ] Page title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD)

### Content
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Keywords naturally included
- [ ] Internal links present
- [ ] External links to authority sites
- [ ] Unique content on each page

## Environment Variables

Create `.env.local` with:
```
NEXT_PUBLIC_API_URL=https://api.creomedia.com
NEXT_PUBLIC_SITE_URL=https://creomedia.com
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

## Debugging

### Common Issues & Solutions

**Build fails**
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules
npm install

# Try building again
npm run build
```

**Port 3000 in use**
```bash
# Use different port
PORT=3001 npm run dev
```

**TypeScript errors**
```bash
# Check types
npm run type-check

# Fix automatically if possible
npm run lint -- --fix
```

**Images not loading**
- Check image path is correct
- Verify external images in `next.config.ts`
- Check image `src` prop

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/new-feature

# Create pull request on GitHub
# After review, merge to main
```

## Code Style

### ESLint & Prettier
```bash
# Run linter
npm run lint

# Format code
npm run format

# Check types
npm run type-check
```

### Naming Conventions
- **Components:** PascalCase (e.g., `ServiceCard`)
- **Functions:** camelCase (e.g., `handleSubmit`)
- **Constants:** UPPER_SNAKE_CASE (e.g., `BRAND_COLORS`)
- **Files:** kebab-case (e.g., `service-card.tsx`)

## Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

Quick deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Support & Questions

- Check PRD.md for requirements
- Check README.md for overview
- Review DEPLOYMENT.md for deployment
- Check component comments for usage
- Refer to inspiration sites in PRD for design patterns

---

**Happy Coding! 🚀**
