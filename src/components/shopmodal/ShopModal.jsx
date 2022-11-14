import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import './ShopModal.scss';

export default function ShopModal() {
  const { state, handleShopModal, handleAppActive } = useContext(GlobalContext);

  function handleClose() {
    handleAppActive();
    handleShopModal();
  }

  return (
    <div className={`shop-modal ${state.isShopModalActive ? 'active' : ''}`}>
      <button className="close btn" onClick={handleClose}>
        X
      </button>
      <div className="content">
        {state.shopCart.map((item, index) => (
          <div className="item" key={index}>
            <img
              className="img"
              src={item.thumbnail}
              alt={item.title}
              width={50}
              height={50}
            />
            <p className="title">{item.title}</p>
          </div>
        ))}
        {state.shopCart.length === 0 && (
          <p className="empty">No items in cart</p>
        )}
      </div>
    </div>
  );
}
