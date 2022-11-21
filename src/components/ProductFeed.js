import React from "react";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductFeed;
