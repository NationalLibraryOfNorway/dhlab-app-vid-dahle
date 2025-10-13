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

---

## [2025-10-12 Evening] - Complete Rebuild, CSV Conversion, and Successful Deployment

### Actions Taken
- ✅ **Built complete React PWA from scratch**
  - React 19 + TypeScript + Bootstrap 5
  - Removed model selector for simplified UI
  - Created all component files (CardSearch, CardDisplay)
  - Set up services (cardService) and types
  - Added PWA configuration (manifest.json, service worker)
  - Implemented beautiful gradient design

- ✅ **Converted new CSV data to JSON**
  - Used `uv` package manager with pandas
  - Converted 4,507 library card records from CSV
  - Successfully generated `cards.json` (2.2 MB)
  - Organized 4,144 card images to `public/images/jpg_files/`

- ✅ **Git setup and initial commit**
  - Initialized git repository
  - Created comprehensive .gitignore
  - Committed all files with detailed message
  - Pushed to existing NationalLibraryOfNorway/dhlab-app-vid-dahle repo

- ✅ **Local testing successful**
  - Ran `npm install` - all dependencies installed
  - Ran `npm start` - app compiled and runs perfectly at localhost:3000
  - Verified search functionality works
  - Confirmed images load correctly
  - Tested card display and metadata

- ✅ **Deployed to GitHub Pages**
  - Set repository visibility to PUBLIC (required for GitHub Pages)
  - Ran `npm run deploy` - successful build and deployment
  - Configured GitHub Pages settings
  - App now live at: https://nationallibraryofnorway.github.io/dhlab-app-vid-dahle/

### Key Findings
- **Cards vs Records**: 4,144 unique card images catalog 4,507 book records
  - Some cards contain multiple books (different editions, etc.)
  - One-to-many relationship between cards and records
  - Tracked via `doc_id` (card) and `record_no` (position on card)

### Configuration Details
- Homepage URL: https://nationallibraryofnorway.github.io/dhlab-app-vid-dahle
- Repository: Public (required for GitHub Pages)
- Deployment branch: gh-pages (auto-generated)
- Build size: 62.13 KB JS, 32.27 KB CSS (gzipped)

### Next Steps for Tomorrow
1. **Update top banner text**
   - Add collaboration credit: "Den Vitenskaplige Høyskolen" (VID)
   - Add "Nasjonalbiblioteket" credit
   - Review and finalize banner messaging

2. **Improve card layout**
   - Review card display component
   - Adjust spacing/styling as needed
   - Optimize metadata presentation

3. **Documentation updates**
   - Finalize collaboration details
   - Update any remaining text

### October 13, 2025 - Classification Numbers and Geo-coordinates Added

- ✅ **Enhanced data conversion**
  - Added `tall_final` field to capture classification numbers (internal library system)
  - Included `latitude` and `longitude` for all records with place data
  - Cleaned number formatting: removed `.0` suffix from both years and classification numbers
  - Regenerated `cards.json` with complete metadata (4,507 records, 2.3 MB)

- ✅ **Updated TypeScript interfaces**
  - Added `tall_final: string` to Card interface
  - Added `latitude` and `longitude` fields for future map visualization
  - Updated cardService to map new fields from JSON

- ✅ **Improved card display**
  - Changed "Subject" to "Classification" for clarity
  - Now displays both classification code (badge) and number when available
  - Example: `[ST] 20` or `[HO] 92`
  - Authentic to source: empty fields indicate original card had no classification

- ✅ **Data integrity maintained**
  - Classification numbers shown only when present on original cards
  - Users can see where data is missing, maintaining fidelity to source material
  - Geo-coordinates stored for future map tab (not yet displayed)

- ✅ **Committed and pushed**
  - Commit: e9d079e "Add classification numbers and geo-coordinates for future map visualization"
  - All changes deployed to repository

### Status
- ✅ App is live and functional
- ✅ All 4,507 records searchable
- ✅ All 4,144 images accessible
- ✅ PWA installable
- ✅ Classification system fully integrated
- 🚧 Map visualization (data ready, tab pending)
- 🔄 UI refinements pending (banner, card layout) 