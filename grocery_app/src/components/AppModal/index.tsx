import React from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const AppModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
    >
      <div 
        className="bg-white p-3 rounded-lg shadow-lg relative w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" 
          onClick={onClose}
        >
          <XMarkIcon className="h-10 w-10" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default AppModal;