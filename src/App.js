
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Header from './Header';
import { faker } from '@faker-js/faker';
import ProductList from './ProductList';
import { useState } from 'react';
import { Provider } from './context/context';


function App() {
  const products = [...Array(25)].map(()=>{
    return {
     id:faker.string.uuid(),
     Name:faker.commerce.product(),
     Price:faker.commerce.price(),
     image:faker.image.urlLoremFlickr()
    }
    })
    const [productArr]=useState(products)
 
  return (
  <>
  <BrowserRouter>
  <Header/>
  <Provider>
<Routes>
  <Route path='/' element={<ProductList  items={productArr}/>}></Route>
  <Route path='/cart' element={<Cart  />}></Route>
</Routes>
</Provider>
  </BrowserRouter>
  </>
  );
}

export default App;
