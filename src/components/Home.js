import React from 'react'

import Banner from './Banner';
import Header from './Header';
import Navigation from './Navigation';
import ProductFeed from './ProductFeed';

const Home = ({products}) => {
  return (
    <div>
      {/*header*/}
      <Header />
      <Navigation />
      {/* banner */}
      <Banner />
      {/* ProductFeed*/}
      <ProductFeed products={products}/>
    </div>
  )
}

export default Home