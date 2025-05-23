import React, { useEffect } from 'react';
import { Carousel as AntCarousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../ItemSlice/ItemSlice';
import Item from '../Item/Item';
import './Carousel.css';

function Carousel() {
    const items = useSelector(selectItems); 
    const dispatch = useDispatch();

    return (
        <div className="carousel-container">
            <AntCarousel autoplay autoplaySpeed={3000} >
                {items.map(item => (
                    <div key={item.id} className="carousel-item">
                        <Item 
                            titulo={item.titulo} 
                            descripcion={item.descripcion} 
                            precio={item.precio} 
                            imagen={item.imagen} 
                        />
                    </div>
                ))}
            </AntCarousel>
        </div>
    );
}

export default Carousel;