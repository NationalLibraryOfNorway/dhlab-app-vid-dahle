export type ModelType = 'llama' | 'anthropic';

export interface Card {
    id: string;
    record_no: string;  // Record number on the card (for multi-record cards)
    codes: string;
    tall_final: string;  // Classification description
    title: string;
    author: string;
    author_normalized: string;
    place: string;
    place_normalized: string;
    place_modernized: string;
    publication_year: string;
    year: string;
    year_end: string;
    edition: string;
    notes: string;
    model: ModelType;
    latitude: number | string;  // For future map visualization
    longitude: number | string;  // For future map visualization
}

