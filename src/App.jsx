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
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
           {/* / に対応するルートは、パラメータを必要としないため、特にid指定する必要はありません。 */}
          <Route path='/product/:id' element=
          {<ProductDetails />} />
        </Routes>
        
        <Sidebar />
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
