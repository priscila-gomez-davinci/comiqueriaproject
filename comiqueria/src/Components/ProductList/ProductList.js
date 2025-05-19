import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectItems } from '../ItemSlice/ItemSlice';

const ProductList = () => {
    const items = useSelector(selectItems);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = items.filter(item =>
        item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="product-list">
            <h2>Listado de Productos</h2>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>{item.titulo} - ${item.precio}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;