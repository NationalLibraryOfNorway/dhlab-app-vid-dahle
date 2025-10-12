#!/bin/bash

# Simple conversion script using uv (modern Python package manager)

echo "🚀 Vid Dahle CSV to JSON Conversion (using uv)"
echo "=============================================="
echo ""

cd "$(dirname "$0")"

echo "🔄 Running conversion with uv..."
echo ""

# Use uv to run the script with required dependencies
uv run --with pandas --with openpyxl convert_csv_to_json.py

if [ $? -eq 0 ]; then
    echo ""
    echo "=============================================="
    echo "✨ Success! Your cards.json is ready."
    echo ""
    echo "Next steps:"
    echo "  cd /Users/larsj/Documents/Github/dhlab-app-vid-dahle"
    echo "  npm install"
    echo "  npm start"
else
    echo ""
    echo "❌ Conversion failed. Check the error above."
    exit 1
fi

