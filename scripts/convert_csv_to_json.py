#!/usr/bin/env python3
"""
Convert Vid Dahle CSV data to JSON format for the React app.

This script reads the CSV file from the data directory and converts it to
the JSON format expected by the application.
"""

import pandas as pd
import json
import os

def convert_csv_to_json():
    """Convert CSV file to JSON format."""
    
    print("🚀 Vid Dahle CSV to JSON Converter")
    print("=" * 50)
    
    # Paths
    csv_path = "../data/Dahle fra b64 - Dahle_metadata_final (1).csv"
    output_dir = "../public/data"
    output_file = os.path.join(output_dir, "cards.json")
    
    # Check if CSV exists
    if not os.path.exists(csv_path):
        print(f"❌ Error: CSV file not found at {csv_path}")
        return
    
    print(f"📄 Reading CSV from: {csv_path}")
    
    # Read CSV
    df = pd.read_csv(csv_path)
    print(f"✅ Loaded {len(df)} records")
    
    # Display column names for verification
    print(f"\n📋 CSV Columns: {', '.join(df.columns.tolist())}")
    
    # Clean and transform data
    print("\n🔄 Transforming data...")
    
    # Replace NaN with empty strings
    df = df.fillna('')
    
    # Map CSV columns to JSON structure
    records = []
    for idx, row in df.iterrows():
        # Parse codes - split by comma if it's a string
        codes_value = row.get('codes', '')
        if isinstance(codes_value, str) and codes_value:
            codes = codes_value.split(',')
        else:
            codes = []
        
        # Determine model (you may need to adjust this logic)
        # For now, we'll default to 'llama' or you can add logic to determine it
        model = 'llama'  # Change this if you have a way to determine the model
        
        # Clean year values - remove .0 from floats
        year_val = row.get('year', '')
        if isinstance(year_val, float):
            year_val = str(int(year_val)) if not pd.isna(year_val) else ''
        else:
            year_val = str(year_val) if year_val else ''
        
        record = {
            "id": str(row.get('doc_id', '')).replace('OCR', ''),  # Remove OCR suffix
            "codes": codes,
            "title": str(row.get('title', '')),
            "author": str(row.get('author', '')),
            "author_normalized": str(row.get('norm_author', '')),
            "place": str(row.get('place', '')),
            "place_normalized": str(row.get('norm_place', '')),
            "place_modernized": str(row.get('modern_place', '')),
            "publication_year": year_val,
            "year": year_val,
            "year_end": year_val,  # Use same as year if no year_end
            "edition": str(row.get('edition', '')),
            "notes": str(row.get('Beskrivelse', '')),  # Use Beskrivelse as notes
            "model": model,
            # Optional: include lat/lon if needed
            "latitude": row.get('lat', ''),
            "longitude": row.get('lon', '')
        }
        records.append(record)
    
    print(f"✅ Transformed {len(records)} records")
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    print(f"\n📁 Creating output directory: {output_dir}")
    
    # Write to JSON file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(records, f, ensure_ascii=False, indent=2)
    
    print(f"✅ JSON file created: {output_file}")
    
    # Display sample record
    print("\n📊 Sample record (first entry):")
    print(json.dumps(records[0], indent=2, ensure_ascii=False))
    
    # Statistics
    print(f"\n📈 Statistics:")
    print(f"   Total records: {len(records)}")
    print(f"   File size: {os.path.getsize(output_file) / 1024:.2f} KB")
    
    # Count by model (if you add logic to determine model)
    model_counts = {}
    for record in records:
        model = record['model']
        model_counts[model] = model_counts.get(model, 0) + 1
    
    print(f"   Records by model:")
    for model, count in model_counts.items():
        print(f"     - {model}: {count}")
    
    print("\n" + "=" * 50)
    print("🎉 Conversion complete!")
    print("\nNext steps:")
    print("1. Review the generated JSON file")
    print("2. Run: npm install")
    print("3. Run: npm start")
    print("4. Test the app at http://localhost:3000")

if __name__ == "__main__":
    try:
        convert_csv_to_json()
    except Exception as e:
        print(f"\n❌ Error during conversion: {e}")
        import traceback
        traceback.print_exc()


