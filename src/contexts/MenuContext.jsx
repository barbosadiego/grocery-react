import { createContext, useState } from 'react';

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <MenuContext.Provider value={{ toggleMenu, showMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
