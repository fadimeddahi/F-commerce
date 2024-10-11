import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Card from './Pages/Card';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <Router>
      <div className="font-sans"> {/* Apply Poppins font here */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          
          {/* Add banner props to these routes */}
          <Route path="/men" element={<ShopCategory category="men" banner={men_banner} />} />
          <Route path="/women" element={<ShopCategory category="women" banner={women_banner} />} />
          <Route path="/kids" element={<ShopCategory category="kid" banner={kid_banner} />} />
          
          <Route path="/product" element={<Product/>} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
