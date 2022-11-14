import { Route, Routes } from 'react-router-dom';
import { MenuProvider } from './contexts/MenuContext';
import { useContext } from 'react';
import { GlobalContext } from './contexts/GlobalContext';

import Header from './components/header/Header';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

import './App.scss';
import Footer from './components/footer/Footer';
import ShopModal from './components/shopmodal/ShopModal';

const App = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className={`app ${state.isAppActive ? 'active' : ''}`}>
      <MenuProvider>
        <Header />
      </MenuProvider>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <ShopModal />
    </div>
  );
};

export default App;
