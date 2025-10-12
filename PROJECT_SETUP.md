# Project Setup Guide

## 🎉 What We've Built

A complete React PWA application from scratch! Here's what's included:

### Core Application Files
- ✅ `package.json` - Dependencies and scripts
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `.gitignore` - Version control exclusions
- ✅ `LICENSE` - MIT License

### Source Code (`/src/`)
- ✅ `App.tsx` - Main application component
- ✅ `index.tsx` - Application entry point
- ✅ `App.css` - Application styling with gradient theme
- ✅ `index.css` - Global styles
- ✅ `components/CardSearch.tsx` - Search interface component
- ✅ `components/CardDisplay.tsx` - Card display component
- ✅ `services/cardService.ts` - Data fetching and search logic
- ✅ `types/Card.ts` - TypeScript type definitions
- ✅ `App.test.tsx` - Basic test setup
- ✅ `setupTests.ts` - Test configuration
- ✅ `reportWebVitals.ts` - Performance monitoring

### Public Assets (`/public/`)
- ✅ `index.html` - HTML template
- ✅ `manifest.json` - PWA manifest
- ✅ `robots.txt` - Search engine configuration
- ✅ `service-worker.js` - PWA service worker placeholder

### Documentation
- ✅ `README.md` - Comprehensive project documentation
- ✅ `CHANGELOG.md` - Version history
- ✅ `logbook.md` - Deployment troubleshooting guide
- ✅ `PROJECT_SETUP.md` - This file

## ⚠️ Required Setup Steps

### 1. Organize Data Files

Your image files are currently in `/public/jpg_files/` but the app expects them in `/public/images/jpg_files/`.

**Option A: Move the directory (Recommended)**
```bash
cd /Users/larsj/Documents/Github/dhlab-app-vid-dahle/public
mv jpg_files images/
```

**Option B: Update the code**
Edit `src/services/cardService.ts` line 68 to:
```typescript
return `${process.env.PUBLIC_URL}/jpg_files/${cardId}OCR.jpg`;
```

### 2. Copy Cards Data

You need to copy the `cards.json` file from the old project:

```bash
# Create data directory if it doesn't exist
mkdir -p /Users/larsj/Documents/Github/dhlab-app-vid-dahle/public/data

# Copy cards.json from old project
cp /Users/larsj/Documents/Github/vid-dahle-react/public/data/cards.json \
   /Users/larsj/Documents/Github/dhlab-app-vid-dahle/public/data/
```

### 3. Add PWA Icons (Optional but Recommended)

You'll need these image files in `/public/`:
- `favicon.ico` - Browser favicon
- `logo192.png` - PWA icon (192x192)
- `logo512.png` - PWA icon (512x512)

You can copy these from the old project:
```bash
cd /Users/larsj/Documents/Github/vid-dahle-react/public
cp favicon.ico logo192.png logo512.png \
   /Users/larsj/Documents/Github/dhlab-app-vid-dahle/public/
```

Or use the `vid-logo-app.png` that's already in the project root.

### 4. Install Dependencies

```bash
cd /Users/larsj/Documents/Github/dhlab-app-vid-dahle
npm install
```

This will install:
- React 19
- TypeScript
- Bootstrap 5
- Testing libraries
- gh-pages deployment tool
- All other dependencies

### 5. Test Locally

```bash
# Start development server
npm start

# In another terminal, run tests
npm test

# Build for production (test)
npm run build
```

Visit `http://localhost:3000` and verify:
- [ ] App loads without errors
- [ ] Search interface displays
- [ ] Search functionality works
- [ ] Cards display with images
- [ ] Images load correctly
- [ ] Metadata displays properly

## 🚀 Deployment to GitHub

### Step 1: Create Repository on GitHub

1. Go to: https://github.com/organizations/NationalLibraryOfNorway/repositories/new
2. Repository name: `dhlab-app-vid-dahle`
3. Description: "Search and explore digitized library cards from the Vid Dahle collection"
4. Visibility: Choose based on your needs (Public recommended for GitHub Pages)
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Push Code to GitHub

```bash
cd /Users/larsj/Documents/Github/dhlab-app-vid-dahle

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Vid Dahle Library Cards PWA v0.2.0"

# Add remote (replace with your actual URL)
git remote add origin https://github.com/NationalLibraryOfNorway/dhlab-app-vid-dahle.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository settings
2. Click on "Pages" in the left sidebar
3. Source: "Deploy from a branch"
4. Branch: Select `gh-pages` (will be created by deployment)
5. Save

### Step 4: Deploy

```bash
npm run deploy
```

This will:
- Build the production version
- Create/update the `gh-pages` branch
- Push to GitHub

Wait a few minutes, then visit:
`https://nationallibraryofnorway.github.io/dhlab-app-vid-dahle`

## 📁 Expected Final Structure

```
dhlab-app-vid-dahle/
├── public/
│   ├── data/
│   │   └── cards.json              ⚠️ NEEDS TO BE COPIED
│   ├── images/
│   │   └── jpg_files/              ⚠️ NEEDS TO BE MOVED HERE
│   │       └── [4144 jpg files]
│   ├── favicon.ico                 ⚠️ OPTIONAL: COPY FROM OLD PROJECT
│   ├── logo192.png                 ⚠️ OPTIONAL: COPY FROM OLD PROJECT
│   ├── logo512.png                 ⚠️ OPTIONAL: COPY FROM OLD PROJECT
│   ├── index.html                  ✅ READY
│   ├── manifest.json               ✅ READY
│   ├── robots.txt                  ✅ READY
│   └── service-worker.js           ✅ READY
├── src/                            ✅ ALL READY
├── package.json                    ✅ READY
├── tsconfig.json                   ✅ READY
└── README.md                       ✅ READY
```

## 🔧 Troubleshooting

### "cards.json not found" Error
- Verify file exists at: `/public/data/cards.json`
- Check browser console for exact error
- Verify file is not empty

### Images Not Loading
- Confirm images are in: `/public/images/jpg_files/`
- Check image names match pattern: `[cardId]OCR.jpg`
- Verify PUBLIC_URL is set correctly

### Build Errors
- Delete `node_modules` and run `npm install` again
- Check Node.js version (must be 16+)
- Clear npm cache: `npm cache clean --force`

### Deployment Fails
- Verify GitHub repository exists
- Check you have write permissions
- Ensure `homepage` in package.json is correct
- Try: `rm -rf node_modules package-lock.json && npm install`

## 📞 Support

- Check `README.md` for full documentation
- Check `logbook.md` for deployment troubleshooting
- Check `CHANGELOG.md` for version history
- Open GitHub issue for bugs or questions

## ✨ Features

Once set up, your app will have:
- 🔍 Full-text search by author and title
- 🤖 Toggle between Llama and Anthropic OCR models
- 🖼️ High-quality card images
- 📊 Detailed bibliographic metadata
- 📱 Mobile-responsive design
- ⚡ PWA capabilities (install, offline support)
- 🎨 Beautiful gradient UI

## 🎯 Next Steps

1. ✅ Move/organize data files (Step 1 & 2 above)
2. ✅ Install dependencies (`npm install`)
3. ✅ Test locally (`npm start`)
4. ✅ Create GitHub repository
5. ✅ Push code to GitHub
6. ✅ Deploy (`npm run deploy`)
7. 🎉 Share the URL with your team!

Good luck! 🚀

