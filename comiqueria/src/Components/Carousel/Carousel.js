import React from 'react';
import './Carousel.css'; 

function Carousel() {
  const items = [
    { id: 1, imageUrl: 'https://via.placeholder.com/400x300/FF0000', altText: 'Ítem 1', description: 'Descripción del ítem 1' },
    { id: 2, imageUrl: 'https://via.placeholder.com/400x300/00FF00', altText: 'Ítem 2', description: 'Descripción del ítem 2' },
    { id: 3, imageUrl: 'https://via.placeholder.com/400x300/0000FF', altText: 'Ítem 3', description: 'Descripción del ítem 3' },
  ];

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map(item => (
          <div key={item.id} className="carousel-item">
            <img src={item.imageUrl} alt={item.altText} />
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;