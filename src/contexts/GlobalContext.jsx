import { createContext, useReducer, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isShopModalActive: false,
    isAppActive: false,
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

  return (
    <GlobalContext.Provider
      value={{
        handleShopModal,
        handleAppActive,
        disable,
        state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
