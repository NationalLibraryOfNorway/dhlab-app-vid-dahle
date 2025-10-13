import { Card } from '../types/Card';

let cardsCache: Card[] = [];

export const cardService = {
    async getCards(): Promise<Card[]> {
        if (cardsCache.length > 0) {
            console.log('Using cached cards:', cardsCache.length);
            return cardsCache;
        }

        try {
            console.log('Fetching cards from JSON...');
            const response = await fetch(`${process.env.PUBLIC_URL}/data/cards.json`);
            if (!response.ok) {
                throw new Error('Failed to load cards data');
            }
            const data = await response.json();
            
            // Transform the data to match our Card interface
            cardsCache = data.map((item: any) => ({
                id: item.id.replace('OCR', ''), // Remove OCR from the ID
                model: item.model,
                codes: Array.isArray(item.codes) ? item.codes.join(', ') : item.codes,
                tall_final: item.tall_final || '',
                title: item.title,
                author: item.author,
                author_normalized: item.author_normalized,
                place: item.place,
                place_normalized: item.place_normalized,
                place_modernized: item.place_modernized,
                publication_year: item.publication_year,
                year: item.year,
                year_end: item.year_end,
                edition: item.edition,
                notes: item.notes,
                latitude: item.latitude || '',
                longitude: item.longitude || ''
            }));

            console.log('Loaded cards:', cardsCache.length);
            console.log('First card:', cardsCache[0]);
            return cardsCache;
        } catch (error) {
            console.error('Error loading cards:', error);
            return [];
        }
    },

    async searchCards(
        searchTerm: string,
        searchField: 'all' | 'title' | 'author' | 'place' | 'subject' = 'all',
        maxResults: number = 200
    ): Promise<Card[]> {
        console.log('Searching with term:', searchTerm, 'in field:', searchField);
        const cards = await this.getCards();
        
        if (!searchTerm) {
            console.log('No search term, returning first', maxResults, 'cards');
            return cards.slice(0, maxResults);
        }

        const term = searchTerm.toLowerCase();
        let filtered: Card[] = [];

        switch (searchField) {
            case 'title':
                filtered = cards.filter(card => 
                    card.title.toLowerCase().includes(term)
                );
                break;
            case 'author':
                filtered = cards.filter(card => 
                    card.author_normalized.toLowerCase().includes(term)
                );
                break;
            case 'place':
                filtered = cards.filter(card => 
                    card.place_modernized.toLowerCase().includes(term)
                );
                break;
            case 'subject':
                filtered = cards.filter(card => 
                    card.notes.toLowerCase().includes(term)
                );
                break;
            case 'all':
            default:
                filtered = cards.filter(card => 
                    card.title.toLowerCase().includes(term) ||
                    card.author_normalized.toLowerCase().includes(term) ||
                    card.place_modernized.toLowerCase().includes(term) ||
                    card.notes.toLowerCase().includes(term)
                );
                break;
        }

        console.log('Found matches:', filtered.length, '(limiting to', maxResults, ')');
        return filtered.slice(0, maxResults);
    },

    getCardImageUrl(cardId: string): string {
        // Use PUBLIC_URL to ensure correct path in all environments
        return `${process.env.PUBLIC_URL}/images/jpg_files/${cardId}OCR.jpg`;
    }
};

