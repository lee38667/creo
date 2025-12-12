# Deployment Guide - Creo Media Website

## Prerequisites
- Node.js 18+
- npm or yarn package manager
- Git for version control
- Vercel account (recommended) or other hosting provider

## Local Development Setup

### 1. Clone Repository
```bash
cd creo
git clone <repository-url> website
cd website
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Update with your values:
```
NEXT_PUBLIC_API_URL=<your-api-url>
NEXT_PUBLIC_SITE_URL=<your-site-url>
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000`

## Building for Production

### 1. Create Production Build
```bash
npm run build
# or
yarn build
```

### 2. Test Production Build Locally
```bash
npm run start
# or
yarn start
```

### 3. Check for Build Errors
```bash
npm run type-check
npm run lint
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Select "Next.js" framework

2. **Configure Environment**
   - Add environment variables in Vercel dashboard
   - Set production domain

3. **Deploy**
   - Vercel will auto-deploy on push to main branch
   - Custom domain configuration in project settings

### Option 2: Self-Hosted (VPS/Server)

1. **Install Node.js & npm**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd website
   npm install
   npm run build
   ```

3. **Use Process Manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "creo-website" -- start
   pm2 startup
   pm2 save
   ```

4. **Setup Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL Certificate (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot certonly --nginx -d yourdomain.com
   ```

### Option 3: Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine

   WORKDIR /app

   COPY package*.json ./
   RUN npm ci

   COPY . .
   RUN npm run build

   EXPOSE 3000

   CMD ["npm", "start"]
   ```

2. **Build Docker Image**
   ```bash
   docker build -t creo-website:latest .
   ```

3. **Run Container**
   ```bash
   docker run -p 3000:3000 creo-website:latest
   ```

## Post-Deployment Checklist

### Performance Verification
- [ ] Lighthouse score > 95
- [ ] Core Web Vitals within thresholds
- [ ] Page load time < 2.5s
- [ ] Images properly optimized

### SEO Verification
- [ ] Meta tags present and correct
- [ ] Structured data valid
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configured
- [ ] Google Search Console submitted
- [ ] Google Analytics working

### Functionality Testing
- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Links work properly
- [ ] Mobile responsive
- [ ] Navigation works
- [ ] Animations smooth

### Security Verification
- [ ] HTTPS working
- [ ] Security headers set
- [ ] No mixed content
- [ ] No console errors
- [ ] API endpoints secure

### Analytics Setup
- [ ] Google Analytics installed
- [ ] Form tracking enabled
- [ ] CTA tracking configured
- [ ] User journey tracking

## Monitoring & Maintenance

### Error Tracking
- Configure error monitoring (Sentry, etc.)
- Set up email alerts for critical errors
- Monitor API responses

### Performance Monitoring
- Set up uptime monitoring
- Configure performance alerts
- Regular audit of Lighthouse scores

### Content Updates
- Regular blog/case study updates
- Portfolio refresh schedule
- Testimonial updates
- Team updates

### Backup Strategy
- Daily database backups
- Code repository backups
- Media file backups
- Configuration backups

## Rollback Procedure

If deployment fails:

```bash
# On Vercel: Click "Rollback" in deployment history

# On self-hosted:
git revert <commit-hash>
git push
npm run build
pm2 reload creo-website
```

## Scaling Considerations

- **CDN:** Configure CloudFlare for edge caching
- **Caching:** Set up Redis for session/API caching
- **Database:** Consider PostgreSQL for future growth
- **Load Balancing:** Use Nginx/HAProxy if needed
- **Auto-scaling:** Enable Vercel auto-scaling

## Domain & DNS

### DNS Records Needed
```
A Record: @ -> your-server-ip
CNAME: www -> @ (or your-vercel-domain)
TXT Record: (Google/verification records)
```

### SSL/TLS
- Enable auto-renewal
- Monitor certificate expiration
- Configure HSTS header

## Performance Optimization Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Implement WebP/AVIF formats
   - Set proper sizes attribute

2. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-based splitting

3. **Caching**
   - Set proper cache headers
   - Implement service workers
   - Use CDN caching

4. **Monitoring**
   - Regular Lighthouse audits
   - Real User Monitoring (RUM)
   - Synthetic monitoring

## Support & Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Port Already in Use**
```bash
# Use different port
PORT=3001 npm start
```

**Environment Variables Not Loading**
- Verify `.env.local` exists
- Check for typos in variable names
- Restart development server

### Getting Help
- Check `README.md` for docs
- Review GitHub issues
- Contact development team

---

**Last Updated:** December 2025  
**Version:** 1.0
