#!/bin/bash

# Automated script to set up Python environment and run CSV conversion

echo "🚀 Vid Dahle CSV Conversion - Automated Setup"
echo "=============================================="
echo ""

# Navigate to scripts directory
cd "$(dirname "$0")"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python3 -m venv venv
    
    if [ $? -ne 0 ]; then
        echo "❌ Error creating virtual environment"
        echo "Trying alternative method..."
        
        # Try installing pandas globally
        echo "📦 Installing pandas with pip3..."
        pip3 install --user pandas openpyxl
        
        if [ $? -ne 0 ]; then
            echo "❌ Could not install pandas"
            echo ""
            echo "Please manually install pandas:"
            echo "  pip3 install --user pandas"
            exit 1
        fi
        
        # Run script without venv
        echo ""
        echo "🔄 Running conversion script..."
        python3 convert_csv_to_json.py
        exit 0
    fi
    
    echo "✅ Virtual environment created"
fi

# Activate virtual environment
echo "🔌 Activating virtual environment..."
source venv/bin/activate

# Install or upgrade pandas
echo "📦 Installing/upgrading pandas..."
pip install --upgrade pandas openpyxl

if [ $? -ne 0 ]; then
    echo "❌ Error installing pandas"
    deactivate
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Run the conversion script
echo "🔄 Running conversion script..."
echo ""
python convert_csv_to_json.py

# Store exit code
EXIT_CODE=$?

# Deactivate virtual environment
deactivate

if [ $EXIT_CODE -eq 0 ]; then
    echo ""
    echo "=============================================="
    echo "✨ All done! Your cards.json is ready."
    echo ""
    echo "Next steps:"
    echo "  1. cd /Users/larsj/Documents/Github/dhlab-app-vid-dahle"
    echo "  2. npm install"
    echo "  3. npm start"
else
    echo ""
    echo "❌ Conversion failed. Check the error messages above."
    exit 1
fi

