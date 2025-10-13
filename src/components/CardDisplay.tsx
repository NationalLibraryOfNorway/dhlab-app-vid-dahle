import React from 'react';
import { Card } from '../types/Card';
import { cardService } from '../services/cardService';

interface CardDisplayProps {
    card: Card;
}

export const CardDisplay: React.FC<CardDisplayProps> = ({ card }) => {
    const imageUrl = cardService.getCardImageUrl(card.id);

    return (
        <div className="card h-100">
            <div className="row g-0 h-100">
                <div className="col-md-6">
                    <img
                        src={imageUrl}
                        alt={`Card ${card.id}`}
                        className="img-fluid h-100 object-fit-contain"
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{card.title}</h5>
                        <div className="mt-3">
                            {card.author_normalized && (
                                <p className="card-text mb-2">
                                    <strong>Author:</strong> {card.author_normalized}
                                </p>
                            )}
                            {card.place_modernized && (
                                <p className="card-text mb-2">
                                    <strong>Place:</strong> {card.place_modernized}
                                </p>
                            )}
                            {card.year && (
                                <p className="card-text mb-2">
                                    <strong>Year:</strong> {card.year}
                                    {card.edition && <span> ({card.edition})</span>}
                                </p>
                            )}
                            {card.codes && (
                                <p className="card-text mb-2">
                                    <strong>Subject:</strong> <span className="badge bg-secondary">{card.codes}</span>
                                </p>
                            )}
                            {card.notes && (
                                <p className="card-text mb-2 text-muted">
                                    <small>{card.notes}</small>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

