import React from "react";
import { useSelector } from "react-redux";

import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const items = useSelector((state) => state.basketReducer.items);

  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-3/5">
          <h1 className="bg-white m-2 font-semibold text-lg p-2">
            {items.length === 0
              ? "Your shopping cart is empty"
              : "Shopping basket"}
          </h1>
          <div className="m-3">
            {items.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  item={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
        <div className="bg-white w-1/4 h-1/2 m-2">
          <h1 className="border-b p-2">PRICE DETAILS</h1>
          <p className="p-2">Total Amount : 0</p>
        </div>
      </div>
    </>
  );
};

export default Checkout;
