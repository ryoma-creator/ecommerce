import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';


const App = () => {

  // mock data for text
  const mockItem = {
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    category: "men's clothing",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    amount: 1, 
  };

  return (
    <div className='overflow-hidden'>
      <BrowserRouter>

        <Header />
        <Sidebar />
        
        <Routes>
          <Route path='/' element={<Home />} />
           {/* / に対応するルートは、パラメータを必要としないため、特にid指定する必要はありません。 */}
          <Route path='/product/:id' element=
          {<ProductDetails />} />
        </Routes>

        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
