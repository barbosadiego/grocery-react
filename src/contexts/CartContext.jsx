import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalSpend, setTotalSpend] = useState([]);

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

  function removeItemFromCart(id) {
    const copyCart = [...cart].filter((item) => item.id !== id);
    setCart(copyCart);
  }

  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    const localItens = JSON.parse(localStorage.getItem('grocery')) || [];
    setCart(localItens);
    console.log(localItens);
  }, []);

  useEffect(() => {
    localStorage.setItem('grocery', JSON.stringify(cart));
    // console.log('cart', cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart,
        clearCart,
        setTotalSpend,
        totalSpend,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
