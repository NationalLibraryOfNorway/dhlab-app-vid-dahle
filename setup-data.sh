#!/bin/bash

# Setup script for organizing data files for Vid Dahle Library Cards app
# This script moves/copies files from the old project to the correct locations

echo "🚀 Vid Dahle Library Cards - Data Setup Script"
echo "=============================================="
echo ""

# Set paths
OLD_PROJECT="/Users/larsj/Documents/Github/vid-dahle-react"
NEW_PROJECT="/Users/larsj/Documents/Github/dhlab-app-vid-dahle"

# Check if old project exists
if [ ! -d "$OLD_PROJECT" ]; then
    echo "❌ Error: Old project not found at $OLD_PROJECT"
    exit 1
fi

echo "✅ Found old project at $OLD_PROJECT"
echo ""

# Step 1: Move jpg_files to images directory
echo "📁 Step 1: Organizing image files..."
if [ -d "$NEW_PROJECT/public/jpg_files" ]; then
    if [ ! -d "$NEW_PROJECT/public/images/jpg_files" ]; then
        echo "   Moving jpg_files to images/jpg_files..."
        mv "$NEW_PROJECT/public/jpg_files" "$NEW_PROJECT/public/images/"
        echo "   ✅ Image files moved successfully"
    else
        echo "   ℹ️  Images already in correct location"
    fi
else
    echo "   ℹ️  jpg_files directory not found (may already be moved)"
fi
echo ""

# Step 2: Create data directory
echo "📁 Step 2: Creating data directory..."
mkdir -p "$NEW_PROJECT/public/data"
echo "   ✅ Data directory ready"
echo ""

# Step 3: Copy cards.json
echo "📄 Step 3: Copying cards.json..."
if [ -f "$OLD_PROJECT/public/data/cards.json" ]; then
    cp "$OLD_PROJECT/public/data/cards.json" "$NEW_PROJECT/public/data/"
    echo "   ✅ cards.json copied successfully"
    
    # Count entries in cards.json
    CARD_COUNT=$(grep -o '"id"' "$NEW_PROJECT/public/data/cards.json" | wc -l | tr -d ' ')
    echo "   📊 Found $CARD_COUNT cards in cards.json"
else
    echo "   ❌ Error: cards.json not found in old project"
    exit 1
fi
echo ""

# Step 4: Copy PWA icons (optional)
echo "🎨 Step 4: Copying PWA icons..."
if [ -f "$OLD_PROJECT/public/favicon.ico" ]; then
    cp "$OLD_PROJECT/public/favicon.ico" "$NEW_PROJECT/public/"
    echo "   ✅ favicon.ico copied"
else
    echo "   ⚠️  favicon.ico not found (optional)"
fi

if [ -f "$OLD_PROJECT/public/logo192.png" ]; then
    cp "$OLD_PROJECT/public/logo192.png" "$NEW_PROJECT/public/"
    echo "   ✅ logo192.png copied"
else
    echo "   ⚠️  logo192.png not found (optional)"
fi

if [ -f "$OLD_PROJECT/public/logo512.png" ]; then
    cp "$OLD_PROJECT/public/logo512.png" "$NEW_PROJECT/public/"
    echo "   ✅ logo512.png copied"
else
    echo "   ⚠️  logo512.png not found (optional)"
fi
echo ""

# Step 5: Verify setup
echo "🔍 Step 5: Verifying setup..."
echo ""

# Check cards.json
if [ -f "$NEW_PROJECT/public/data/cards.json" ]; then
    echo "   ✅ cards.json is in place"
else
    echo "   ❌ cards.json is missing!"
fi

# Check images
if [ -d "$NEW_PROJECT/public/images/jpg_files" ]; then
    IMAGE_COUNT=$(find "$NEW_PROJECT/public/images/jpg_files" -name "*.jpg" | wc -l | tr -d ' ')
    echo "   ✅ Image directory exists with $IMAGE_COUNT images"
else
    echo "   ❌ Image directory is missing!"
fi

echo ""
echo "=============================================="
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. cd $NEW_PROJECT"
echo "2. npm install"
echo "3. npm start"
echo ""
echo "Then visit http://localhost:3000 to test the app"
echo "=============================================="

