# Python Setup for CSV Conversion

## Quick Setup (Recommended)

Run these commands in your terminal:

```bash
# Navigate to the scripts directory
cd /Users/larsj/Documents/Github/dhlab-app-vid-dahle/scripts

# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install pandas
pip install pandas openpyxl

# Run the conversion script
python convert_csv_to_json.py

# When done, deactivate the virtual environment
deactivate
```

## Alternative: Use system Python

If the above doesn't work, try:

```bash
cd /Users/larsj/Documents/Github/dhlab-app-vid-dahle/scripts

# Install pandas for your user
pip3 install --user pandas openpyxl

# Run the script
python3 convert_csv_to_json.py
```

## Troubleshooting

### "python3: command not found"
Install Python from https://www.python.org/downloads/

### "pip: command not found"
```bash
python3 -m ensurepip --upgrade
```

### Permission errors
Add `--user` flag:
```bash
pip3 install --user pandas openpyxl
```

## What the script does

1. Reads your new CSV file from `../data/Dahle fra b64 - Dahle_metadata_final (1).csv`
2. Converts it to JSON format
3. Saves to `../public/data/cards.json`
4. Shows statistics and a sample record

