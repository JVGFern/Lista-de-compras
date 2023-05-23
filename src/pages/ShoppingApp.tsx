import React, { useState } from 'react';
import AddItemForm from '../components/AddItemForm';
import ShoppingList from '../components/ShoppingList';
import gifFile from '../assets/gif/te.gif';

interface ShoppingItem {
  name: string;
  quantity: number;
  bought: boolean;
}

const ShoppingApp: React.FC = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  const handleAddItem = (name: string, quantity: number) => {
    const newItem: ShoppingItem = {
      name: name,
      quantity: quantity,
      bought: false,
    };

    setItems([...items, newItem]);
  };

  const handleToggleBought = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].bought = !updatedItems[index].bought;
    setItems(updatedItems);
  };

  const handleDeleteItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="flex items-center mb-4">
        <img src={gifFile} alt="GIF" className="w-10 h-10 mr-2" />
        <h1 className="text-2xl font-bold text-purple-500">Lista de Compras</h1>
      </div>
      <AddItemForm onAddItem={handleAddItem} />
      <ShoppingList
        items={items}
        onToggleBought={handleToggleBought}
        onDeleteItem={handleDeleteItem}
      />
      <footer className="text-gray-500 text-sm mt-4">
        Made by João Vittor💜
      </footer>
    </div>
  );
};

export default ShoppingApp;
