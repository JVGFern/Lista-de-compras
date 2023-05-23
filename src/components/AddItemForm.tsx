import React, { useState } from 'react';
import Modal from './Modal';

interface AddItemFormProps {
  onAddItem: (name: string, quantity: number) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [error, setError] = useState('');

  const handleAddItem = () => {
    const parsedQuantity = parseInt(itemQuantity, 10);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      setError('A quantidade deve ser um número inteiro positivo.');
      return;
    }

    if (itemName.length > 35) {
      setError('O nome do item ultrapassou o limite de 20 caracteres.');
      return;
    }

    onAddItem(itemName, parsedQuantity);
    setItemName('');
    setItemQuantity('');
  };

  const handleCloseModal = () => {
    setError('');
  };

  return (
    <div className="mb-4">
      <input
        className="mr-2 p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Nome do item"
        maxLength={35}
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        className="mr-2 p-2 border border-gray-300 rounded"
        type="number"
        placeholder="Quantidade"
        minLength={1}
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded"
        onClick={handleAddItem}
      >
        Adicionar
      </button>
      {error && (
        <Modal onClose={handleCloseModal}>
          <p className="text-red-500">{error}</p>
        </Modal>
      )}
    </div>
  );
};

export default AddItemForm;
