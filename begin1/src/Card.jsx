import React from 'react';
import InfoCard from './infoCard';

const cards = [
    { idx: 1, title: "Props in React", content: "Props pass data from one component to another", author: "Alice" },
    { idx: 2, title: "Props in React", content: "Composition makes your component more reusable", author: "Charlie" },
    { idx: 3, content: "Composition makes your component more reusable" },
];

const Card = () => {
    return (
        <>
            {cards.map((card) => (
                <Infocard
                    key={card.id}
                    title={card.title}
                    author={card.author}
                />
            ))}
        </>
    );
};

export default Card;