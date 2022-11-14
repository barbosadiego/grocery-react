import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import './ShopModal.scss';

export default function ShopModal() {
  const { state } = useContext(GlobalContext);

  return (
    <div className={`shop-modal ${state.isShopModalActive ? 'active' : ''}`}>
      shop modal
    </div>
  );
}
