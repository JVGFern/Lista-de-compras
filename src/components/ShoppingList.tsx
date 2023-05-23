import React, { useRef, useEffect } from 'react';

interface ShoppingItem {
  name: string;
  quantity: number;
  bought: boolean;
}

interface ShoppingListProps {
  items: ShoppingItem[];
  onToggleBought: (index: number) => void;
  onDeleteItem: (index: number) => void;
}



const ShoppingList: React.FC<ShoppingListProps> = ({ items, onToggleBought, onDeleteItem }) => {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [items]);

  return (
    <div className="w-full max-w-2xl mx-auto max-w ">
      <ul className="bg-white rounded shadow-md overflow-auto max-h-96 w-full" ref={listRef}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-between px-4 py-3 border-b ${
              item.bought ? 'bg-gray-200' : ''
            }`}
          >
            <span className="flex-grow">{item.name}</span>
            <span className="text-gray-500">{item.quantity}</span>
            <div>
              <button
                className={`ml-5 px-4 py-2 rounded ${
                  item.bought ? 'bg-gray-400 text-gray-800' : 'bg-green-500 text-white'
                }`}
                onClick={() => onToggleBought(index)}
              >
                {item.bought ? 'Desmarcar' : 'Comprado'}
              </button>
              <button
                className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => onDeleteItem(index)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default ShoppingList;
