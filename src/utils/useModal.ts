import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen, // estado
    setIsOpen, // modificador
  };
};

// Esto de arriba no es JSX
