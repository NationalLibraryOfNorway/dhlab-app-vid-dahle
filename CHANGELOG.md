# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-10-12

### Added
- Complete project rebuild from scratch
- React 19 with TypeScript setup
- Bootstrap 5 integration for modern UI
- Progressive Web App (PWA) configuration
- Card search functionality by author/title
- Card display component with images and metadata
- Comprehensive README with deployment instructions
- GitHub Pages deployment configuration for NationalLibraryOfNorway organization
- .gitignore file for proper version control
- Test setup with React Testing Library
- Web vitals monitoring
- Responsive two-column card layout
- Beautiful gradient design
- Python CSV to JSON conversion script using `uv`
- Automated setup scripts for data organization
- Converted 4,507 library card records from new CSV scan

### Changed
- Updated package.json with all necessary dependencies
- Improved homepage URL for NationalLibraryOfNorway organization
- Enhanced search functionality with better empty state messages
- Better error handling in card service
- Removed model selector (single dataset only)
- Simplified search UI with larger input field and integrated button
- Improved search bar layout with centered design

### Fixed
- Proper static asset loading with PUBLIC_URL
- Image path handling for GitHub Pages deployment
- TypeScript type definitions for all components

## [0.1.0] - Previous Version

### Issues Encountered
- Windows path length issues (ENAMETOOLONG) during deployment
- Static asset path problems
- Build and deployment challenges

### Learned
- Need for shorter paths on Windows systems
- Importance of proper PUBLIC_URL configuration
- GitHub Pages deployment best practices

