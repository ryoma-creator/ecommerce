import React, { useState, createContext } from 'react';
//  create context
export const SidebarContext = createContext()

const SidebarProvider = ({children}) => {
// sidebar state
const [isOpen, setIsOpen] = useState(false);

const handleClose = () => {
  setIsOpen(false);
};

// I will delete this context file if its only just for single useState.

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen,
     handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;