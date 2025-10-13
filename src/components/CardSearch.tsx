import React, { useState } from 'react';
import { Card } from '../types/Card';
import { cardService } from '../services/cardService';
import { CardDisplay } from './CardDisplay';

export const CardSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchField, setSearchField] = useState<'all' | 'title' | 'author' | 'place' | 'subject'>('all');
    const [cards, setCards] = useState<Card[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        try {
            const results = await cardService.searchCards(searchTerm, searchField, 200);
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
        <>
            <div className="app-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-2 text-center">
                            <img 
                                src={`${process.env.PUBLIC_URL}/images/db-kort.jpg`} 
                                alt="Card Catalogue" 
                                className="catalogue-image img-fluid"
                            />
                        </div>
                        <div className="col-md-7 text-center">
                            <h1 className="display-4">Lars Dahle's Book Collection</h1>
                            <p className="lead">Explore the catalogue of Dahle's Library</p>
                        </div>
                        <div className="col-md-3 d-flex justify-content-end align-items-center">
                            <div className="logos-container flex-column">
                                <img 
                                    src={`${process.env.PUBLIC_URL}/images/vid-logo.png`} 
                                    alt="VID Logo" 
                                    className="logo-img mb-3"
                                />
                                <img 
                                    src={`${process.env.PUBLIC_URL}/images/nb-logo.png`} 
                                    alt="National Library of Norway Logo" 
                                    className="logo-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid py-4">
            
            <div className="row mb-4 justify-content-center">
                <div className="col-md-10">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <label className="form-label">Search in:</label>
                            <select
                                value={searchField}
                                onChange={(e) => setSearchField(e.target.value as any)}
                                className="form-select form-select-lg"
                            >
                                <option value="all">All fields</option>
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="place">Place</option>
                                <option value="subject">Subject</option>
                            </select>
                        </div>
                        <div className="col-md-9">
                            <label className="form-label">
                                Search {searchField === 'all' ? 'the collection' : searchField}:
                            </label>
                            <div className="input-group input-group-lg">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder={
                                        searchField === 'all' ? 'Search title, author, place, or subject...' :
                                        searchField === 'title' ? 'Enter book title...' :
                                        searchField === 'author' ? 'Enter author name...' :
                                        searchField === 'place' ? 'Enter publication place...' :
                                        'Enter subject or classification...'
                                    }
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
                </div>
            </div>

            <div className="bg-white bg-opacity-75 p-4 rounded">
                {cards.length > 0 ? (
                    <div>
                        <div className="mb-3 fw-bold">
                            Showing {cards.length} result{cards.length !== 1 ? 's' : ''}
                            {cards.length === 200 && <span className="text-muted ms-2">(limited to 200 results)</span>}
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
                        {isLoading ? 'Loading...' : 'No matching cards found. Try a different search term or field.'}
                    </div>
                )}
            </div>
            </div>
        </>
    );
};

