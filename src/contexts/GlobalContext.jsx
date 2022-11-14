import { createContext, useReducer } from 'react';

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

  return (
    <GlobalContext.Provider
      value={{ reducer, handleShopModal, handleAppActive, state }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
