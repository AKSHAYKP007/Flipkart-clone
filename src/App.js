import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProductFeed from './components/ProductFeed';

function App() {
  const [products,setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    
  },[]);

  return (
    <div className="app">
      {/*header*/}
      <Header/>
      <Navigation />
      {/* banner */}
      <Banner />
      {/* ProductFeed*/}
      <ProductFeed products={products}/>
      
    </div>
  );
}

export default App;
