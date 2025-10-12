# Deployment & Troubleshooting Logbook

## [2025-10-12] - Complete Rebuild

### Actions Taken
- **Complete project rebuild from scratch** - Started fresh to avoid legacy issues
- Created new React 19 + TypeScript setup with Create React App
- Configured for NationalLibraryOfNorway GitHub organization
- Set up proper project structure:
  - `/src/components/` - React components (CardSearch, CardDisplay)
  - `/src/services/` - Business logic (cardService)
  - `/src/types/` - TypeScript definitions
  - `/public/data/` - JSON data files
  - `/public/images/` - Card images
- Implemented Bootstrap 5 for styling with custom gradient theme
- Added PWA support with manifest.json
- Created comprehensive README with deployment instructions
- Set up GitHub Pages deployment with `gh-pages` package
- Added proper TypeScript configuration
- Implemented caching in cardService for better performance

### Configuration
- **Homepage URL**: `https://nationallibraryofnorway.github.io/dhlab-app-vid-dahle`
- **Node Version**: 16+ required
- **React Version**: 19.1.0
- **TypeScript Version**: 4.9.5
- **Bootstrap Version**: 5.3.6

### Key Improvements Over Previous Version
1. ✅ Cleaner project structure
2. ✅ Better TypeScript integration
3. ✅ Modern React 19 features
4. ✅ Comprehensive documentation
5. ✅ Proper organization setup (NationalLibraryOfNorway)
6. ✅ Enhanced UI with gradient design
7. ✅ Better error handling
8. ✅ Improved search experience with empty states

### Next Steps for Deployment

1. **Transfer to NationalLibraryOfNorway GitHub**:
   - Create repository at: `https://github.com/NationalLibraryOfNorway/dhlab-app-vid-dahle`
   - Push code to main branch
   - Configure GitHub Pages in repository settings

2. **Initial Setup**:
   ```bash
   cd /Users/larsj/Documents/Github/dhlab-app-vid-dahle
   npm install
   npm test  # Verify everything works
   npm run build  # Test production build
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```
   This will:
   - Build the production version
   - Create/update `gh-pages` branch
   - Deploy to GitHub Pages

4. **Verify Deployment**:
   - Visit: `https://nationallibraryofnorway.github.io/dhlab-app-vid-dahle`
   - Test search functionality
   - Verify images load correctly
   - Check that cards.json is accessible

### Troubleshooting Reference

#### Windows Path Length Issues (from previous version)
- **Problem**: `ENAMETOOLONG` error during deployment
- **Solution**: Move project to shorter path (e.g., `C:\vid-dahle`) or use WSL

#### Static Asset Loading Issues
- **Problem**: Images/data not loading after deployment
- **Solution**: Ensure all paths use `process.env.PUBLIC_URL` prefix
- **Verify**: Check Network tab in browser DevTools

#### Deployment Permission Issues
- **Problem**: Cannot push to gh-pages branch
- **Solution**: Check GitHub repository permissions
- **Required**: Write access to repository

### Data Requirements

The app expects this structure:
```
public/
├── data/
│   └── cards.json (metadata for all cards)
└── images/
    └── jpg_files/
        └── [cardId]OCR.jpg (e.g., VID-MDA-20210602-4-0001OCR.jpg)
```

### Testing Checklist Before Deployment

- [ ] Run `npm install` successfully
- [ ] Run `npm test` - all tests pass
- [ ] Run `npm start` - app works locally
- [ ] Run `npm run build` - production build succeeds
- [ ] Verify cards.json exists in public/data/
- [ ] Verify images exist in public/images/jpg_files/
- [ ] Check homepage URL in package.json matches GitHub Pages URL
- [ ] Ensure gh-pages package is installed

### Contact & Support

For issues or questions:
- Open GitHub issue
- Contact National Library of Norway DH Lab
- Check README.md for troubleshooting section 