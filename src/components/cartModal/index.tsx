import React from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-3 rounded-lg shadow-lg relative w-full max-w-2xl">
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" 
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;