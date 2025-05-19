import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Item = ({ titulo, descripcion, precio, imagen }) => {
    return (
        <Card hoverable style={{ display: 'flex', alignItems: 'center' }}>
            <img alt={titulo} src={imagen} style={{ width: '30%', height: 'auto', marginRight: '16px' }} />
            <div style={{ flex: 1 }}>
                <Meta title={titulo} description={descripcion} />
                <div>{`Precio: $${precio}`}</div>
            </div>
        </Card>
    );
};

export default Item;