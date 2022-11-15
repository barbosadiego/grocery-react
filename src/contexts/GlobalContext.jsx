import { createContext, useReducer } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isShopModalActive: false,
    isAppActive: false,
    shopCart: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case 'SHOPMODAL':
        return {
          ...state,
          isShopModalActive: !state.isShopModalActive,
        };
      case 'APPACTIVE':
        return {
          ...state,
          isAppActive: !state.isAppActive,
        };
      case 'DISABLE':
        return {
          ...state,
          isShopModalActive: false,
          isAppActive: false,
        };
      case 'ADDITEM':
        return {
          ...state,
          shopCart: [...state.shopCart, action.payload],
        };
      default:
        return state;
    }
  }

  function handleShopModal() {
    dispatch({ type: 'SHOPMODAL' });
  }

  function handleAppActive() {
    dispatch({ type: 'APPACTIVE' });
  }

  function disable() {
    dispatch({ type: 'DISABLE' });
  }

  function addItemToCart(item) {
    dispatch({ type: 'ADDITEM', payload: item });
  }

  return (
    <GlobalContext.Provider
      value={{
        handleShopModal,
        handleAppActive,
        disable,
        addItemToCart,
        state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
