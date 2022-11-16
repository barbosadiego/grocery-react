import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addItemToCart(item) {
    const cartItem = cart.find((obj) => obj.id === item.id);
    if (!cartItem) {
      setCart([...cart, item]);
      item.qty = 1;
    } else {
      const copyProducts = cart.map((obj) => {
        if (obj.id === item.id) {
          obj.qty += 1;
          return obj;
        } else {
          return obj;
        }
      });
      setCart(copyProducts);
    }
  }

  function removeItemToCart() {}

  function clearCart() {}

  return (
    <CartContext.Provider
      value={{ addItemToCart, removeItemToCart, clearCart, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};
