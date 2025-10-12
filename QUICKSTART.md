# Quick Start Guide

Get your Vid Dahle Library Cards app running in 3 minutes! ⚡

## TL;DR

```bash
# 1. Run the data setup script
cd /Users/larsj/Documents/Github/dhlab-app-vid-dahle
./setup-data.sh

# 2. Install dependencies
npm install

# 3. Start the app
npm start

# 4. Open http://localhost:3000 in your browser
```

## Detailed Steps

### 1️⃣ Organize Data Files (Automated)

Run the included setup script:

```bash
cd /Users/larsj/Documents/Github/dhlab-app-vid-dahle
./setup-data.sh
```

This script will:
- ✅ Move image files to the correct location
- ✅ Copy cards.json from the old project
- ✅ Copy PWA icons
- ✅ Verify everything is in place

**Alternative (Manual)**:
```bash
# Move images
mv public/jpg_files public/images/

# Copy data
mkdir -p public/data
cp /Users/larsj/Documents/Github/vid-dahle-react/public/data/cards.json public/data/

# Copy icons (optional)
cp /Users/larsj/Documents/Github/vid-dahle-react/public/*.{ico,png} public/
```

### 2️⃣ Install Dependencies

```bash
npm install
```

Wait for all packages to install (~1-2 minutes).

### 3️⃣ Start Development Server

```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

### 4️⃣ Test the App

Try these searches:
- Search for an author name
- Search for a book title
- Toggle between "llama" and "anthropic" models
- Verify images load correctly

## Deploy to GitHub Pages

Once everything works locally:

### Create GitHub Repository

1. Visit: https://github.com/organizations/NationalLibraryOfNorway/repositories/new
2. Name: `dhlab-app-vid-dahle`
3. Create repository

### Push and Deploy

```bash
# Initialize git (if needed)
git init
git add .
git commit -m "Initial commit: Vid Dahle Library Cards PWA v0.2.0"

# Add remote
git remote add origin https://github.com/NationalLibraryOfNorway/dhlab-app-vid-dahle.git

# Push
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

Visit: `https://nationallibraryofnorway.github.io/dhlab-app-vid-dahle`

## Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### "cards.json not found"
```bash
# Run the setup script again
./setup-data.sh
```

### Images not loading
Check that images are in `public/images/jpg_files/`:
```bash
ls -la public/images/jpg_files/ | head
```

### Port 3000 already in use
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
PORT=3001 npm start
```

## What's Next?

📖 Read `PROJECT_SETUP.md` for detailed setup instructions
📋 Check `README.md` for full documentation  
📝 Review `logbook.md` for deployment tips
📊 See `CHANGELOG.md` for version history

## Need Help?

- Check the browser console for errors (F12)
- Review the terminal output for warnings
- Open an issue on GitHub
- Check existing documentation files

---

**Happy coding! 🚀**

