import { createSlice } from '@reduxjs/toolkit';

  const hardcodedItems = [
    { id: 1, titulo: 'Ítem 1', descripcion: 'Descripción del ítem 1', precio: 10, imagen: 'https://picsum.photos/400/300?random=1' },
    { id: 2, titulo: 'Ítem 2', descripcion: 'Descripción del ítem 2', precio: 20, imagen: 'https://picsum.photos/400/300?random=2' },
    { id: 3, titulo: 'Ítem 3', descripcion: 'Descripción del ítem 3', precio: 30, imagen: 'https://picsum.photos/400/300?random=3' },
  ];

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        items: hardcodedItems, 
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        
    },
});

export const { addItem } = itemSlice.actions;
export const selectItems = (state) => state.items.items;

export default itemSlice.reducer;