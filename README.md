# Vid Dahle Library Card Search

A React Progressive Web Application (PWA) for searching and displaying digitized library cards from the Vid Dahle collection at the National Library of Norway.

## Features

- 🔍 **Smart Search** - Search library cards by author or title
- 🖼️ **Image Display** - View high-quality scans of original library cards
- 📊 **Rich Metadata** - Access detailed bibliographic information
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Progressive Web App** - Install and use offline
- 🎨 **Modern UI** - Beautiful gradient design with Bootstrap 5

## Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/NationalLibraryOfNorway/dhlab-app-vid-dahle.git
cd dhlab-app-vid-dahle

# Install dependencies
npm install
```

### Development

```bash
# Start development server (opens at http://localhost:3000)
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Deployment to GitHub Pages

This application is configured to deploy to GitHub Pages under the National Library of Norway organization.

### Initial Setup

1. Ensure the repository exists at `https://github.com/NationalLibraryOfNorway/dhlab-app-vid-dahle`
2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically)

### Deploy

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

The app will be available at: `https://nationallibraryofnorway.github.io/dhlab-app-vid-dahle`

### Deployment Notes

- The `homepage` field in `package.json` must match your GitHub Pages URL
- Static assets (images, data) must be in the `public/` directory
- The `gh-pages` branch is automatically managed - do not edit it manually

## Data Overview

**Important Note about Cards vs. Records:**
- The collection contains **4,144 unique physical card images**
- These cards catalog **4,507 individual book records**
- Some cards contain multiple books (e.g., different editions of the same work)
- Each record in the data references its corresponding card image via the card ID

This one-to-many relationship means you'll see the same card image displayed for multiple search results when that card catalogs more than one book.

## Data Setup

The application expects the following data structure:

```
public/
├── data/
│   └── cards.json          # Metadata for all library cards
└── images/
    └── jpg_files/
        ├── [cardId]OCR.jpg # Individual card images
        └── ...
```

### cards.json Format

```json
[
  {
    "id": "Doc2753",
    "codes": ["ST"],
    "title": "Book Title",
    "author": "Author Name",
    "author_normalized": "Normalized Author",
    "place": "Place Name",
    "place_normalized": "Normalized Place",
    "place_modernized": "Modern Place",
    "publication_year": "1923",
    "year": "1923",
    "year_end": "1923",
    "edition": "1st",
    "notes": "Additional notes"
  }
]
```

## Project Structure

```
dhlab-app-vid-dahle/
├── public/                 # Static files
│   ├── data/              # JSON data files
│   ├── images/            # Card images
│   ├── index.html         # HTML template
│   ├── manifest.json      # PWA manifest
│   └── robots.txt
├── src/
│   ├── components/        # React components
│   │   ├── CardDisplay.tsx
│   │   └── CardSearch.tsx
│   ├── services/          # Business logic
│   │   └── cardService.ts
│   ├── types/             # TypeScript definitions
│   │   └── Card.ts
│   ├── App.tsx            # Main app component
│   ├── App.css            # App styles
│   ├── index.tsx          # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── README.md             # This file
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Bootstrap 5** - UI components and styling
- **Create React App** - Build tooling
- **GitHub Pages** - Hosting

## Contributing

We welcome contributions from the community!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain existing code style
- Add tests for new features
- Update documentation as needed
- Keep commits focused and descriptive

## Troubleshooting

### Build Issues

If you encounter path length issues on Windows (ENAMETOOLONG):
- Move the project to a shorter path (e.g., `C:\vid-dahle`)
- Or use Windows Subsystem for Linux (WSL)

### Deployment Issues

If deployment fails:
1. Check GitHub Pages settings in repository
2. Verify the `homepage` URL in `package.json`
3. Ensure `gh-pages` npm package is installed
4. Check repository permissions

### Data Loading Issues

If cards don't load:
1. Verify `cards.json` exists in `public/data/`
2. Check browser console for errors
3. Ensure image files match the naming pattern: `[cardId]OCR.jpg`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- National Library of Norway (Nasjonalbiblioteket)
- Vid Dahle collection digitization team
- DH Lab contributors

## Contact

For questions or support, please open an issue on GitHub or contact the National Library of Norway DH Lab.
