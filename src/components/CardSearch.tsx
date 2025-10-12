import React, { useState } from 'react';
import { Card } from '../types/Card';
import { cardService } from '../services/cardService';
import { CardDisplay } from './CardDisplay';

export const CardSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cards, setCards] = useState<Card[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        try {
            const results = await cardService.searchCards(searchTerm);
            setCards(results);
        } catch (error) {
            console.error('Error searching cards:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="container-fluid py-4">
            <div className="text-center mb-4">
                <h1 className="display-4">Vid Dahle Library Cards</h1>
                <p className="lead">Search and explore digitized library cards from the National Library of Norway</p>
            </div>
            
            <div className="row mb-4 justify-content-center">
                <div className="col-md-8">
                    <label className="form-label">Search by author or title:</label>
                    <div className="input-group input-group-lg">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Enter author name or book title..."
                            className="form-control"
                        />
                        <button
                            onClick={handleSearch}
                            disabled={isLoading}
                            className="btn btn-primary px-5"
                        >
                            {isLoading ? 'Searching...' : 'Search'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white bg-opacity-75 p-4 rounded">
                {cards.length > 0 ? (
                    <div>
                        <div className="mb-3 fw-bold">
                            Showing {cards.length} result{cards.length !== 1 ? 's' : ''}
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {cards.map((card) => (
                                <div key={card.id} className="col">
                                    <CardDisplay card={card} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-muted">
                        {isLoading ? 'Loading...' : 'No matching cards found. Try searching for an author or title.'}
                    </div>
                )}
            </div>
        </div>
    );
};

