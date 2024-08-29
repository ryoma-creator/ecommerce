import React, { useState, createContext, useEffect } from 'react';
//  create context
export const SidebarContext = createContext()

const SidebarProvider = ({children}) => {
// sidebar state
const [isOpen, setIsOpen] = useState(false);

// 初期rendering時に localStorage から状態を取得
useEffect(() => {
  const savedState = localStorage.getItem('sidebarOpen');
  if (savedState) {
    setIsOpen(savedState === 'true');
  }
}, []);
// 状態が変わるたびに localStorage に保存
useEffect(() => {
  localStorage.setItem('sidebarOpen', isOpen);
}, [isOpen]);


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