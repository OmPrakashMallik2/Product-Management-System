import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className='bg-green-100'>
      < Nav />
      <div className='px-10 py-5'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/editproduct/:id' element={<EditProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
