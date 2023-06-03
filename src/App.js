
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import { faker } from '@faker-js/faker';
import ProductList from './ProductList';


function App() {
 const products = [...Array(25)].map(()=>{
 return {
  id:faker.string.uuid(),
  Name:faker.commerce.product(),
  Price:faker.commerce.price(),
  image:faker.image.url()
 }
 })
 console.log(products);
  return (
  <>
  <BrowserRouter>
  <Header/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/cart' element={<Cart />}></Route>
</Routes>
<ProductList items={products} />
  </BrowserRouter>
  </>
  );
}

export default App;
