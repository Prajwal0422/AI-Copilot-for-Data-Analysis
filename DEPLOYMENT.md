# Deployment Guide

## Local Development
```bash
cd frontend
npm install
npm run dev
```
Access at: http://localhost:3000

## Production Build
```bash
npm run build
npm start
```

## Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Deployment Platforms

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Performance Tips
- Enable caching
- Optimize images
- Use CDN
- Enable compression
