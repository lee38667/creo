# Creo Media Website

A modern, high-performance Next.js website for Creo Media, a premium digital creative services agency.

## 🎯 Features

- **Modern Design**: Built with Next.js 14, React 18, and Tailwind CSS
- **Brand Compliance**: Strict adherence to Creo Media brand guidelines and color palette
- **Responsive**: Mobile-first, fully responsive design
- **Interactive**: Smooth animations with Framer Motion
- **Performance**: Optimized images, code splitting, and lazy loading
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels
- **SEO Ready**: Structured data, meta tags, and Open Graph optimization
- **Type Safe**: Full TypeScript support for better developer experience

## 📋 Pages

- **Home** (`/`) - Hero, services showcase, portfolio preview, testimonials
- **Services** (`/services`) - Detailed service offerings with process
- **Portfolio** (`/portfolio`) - Filterable project showcase
- **About** (`/about`) - Company story, values, team, testimonials
- **Contact** (`/contact`) - Contact form, business information, social links

## 🎨 Design System

### Brand Colors
- **Primary**: #b08968 (warm brown/tan)
- **Secondary**: #99975a (olive green)
- **Accent**: #c9b997 (light tan)
- **Dark**: #0d0d0d (near black)
- **Light**: #f5f5f3 (off-white)

### Typography
- **Display**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Responsive sizing** for all breakpoints

### Components
- `Header` - Navigation with mobile menu
- `Footer` - Comprehensive footer with links
- `Hero` - Large hero sections
- `ServiceCard` - Service feature cards
- `PortfolioCard` - Project showcase cards
- `TestimonialCard` - Client testimonial cards

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── PortfolioCard.tsx
│   ├── TestimonialCard.tsx
│   └── index.ts          # Barrel export
├── config/               # Configuration files
│   └── brand.ts          # Brand constants
├── types/                # TypeScript type definitions
│   └── index.ts
└── styles/              # Global styles
    └── globals.css      # Tailwind + custom utilities
```

## 🎬 Animations

- **Fade-in** effects on page load
- **Scroll animations** for cards and sections
- **Hover effects** on interactive elements
- **Smooth transitions** on all state changes
- **Parallax-like effects** with Framer Motion

## 📊 Performance Optimizations

- Image lazy loading
- Code splitting
- CSS minification
- JavaScript compression
- Optimized font loading
- Static generation where possible
- Next.js Image component for optimization

## ♿ Accessibility

- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Alt text for images
- Focus states on buttons
- Screen reader friendly

## 🔍 SEO

- Meta tags for all pages
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Robots.txt configured
- Mobile-first indexing
- Fast Core Web Vitals

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## 🛠️ Development

### Code Quality Tools
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

### Scripts
```bash
npm run dev         # Development server
npm run build       # Production build
npm start          # Start production server
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run type-check # Check TypeScript
```

## 📝 Brand Guidelines Compliance

This website strictly follows the Creo Media brand guidelines:

- ✅ Correct color palette usage
- ✅ Typography hierarchy
- ✅ Brand voice and tone
- ✅ Logo placement and sizing
- ✅ Whitespace and layout principles
- ✅ Animation and interaction patterns
- ✅ Accessibility standards
- ✅ Performance benchmarks

## 🔐 Security

- HTTPS ready
- Security headers configured
- XSS protection
- CSRF tokens ready
- Content Security Policy ready

## 📄 License

© 2025 Creo Media. All rights reserved.

## 👥 Support

For questions or support, contact: hello@creomedia.com
