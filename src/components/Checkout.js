import React from "react";
import { useSelector } from "react-redux";
import { NumericFormat } from "react-number-format";
import Header from "./Header";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const items = useSelector((state) => state.basketReducer.items);
  var sum = 0;
  items.map((item) => {
    return (sum = sum + item.price);
  });

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
        <div
          className={` bg-white w-1/4 h-1/2 mt-2 ${
            items.length === 0 && "hidden"
          }`}
        >
          <h1 className="border-b py-3 px-5 text-slate-500 font-semibold">
            PRICE DETAILS
          </h1>
          <div className="mx-5">
            <div className="flex my-5 justify-between">
              <div>Price </div>
              <NumericFormat
                value={sum}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
            <div className="flex justify-between my-5">
              <div> Discount </div> <div className="text-green-500"> - 0 </div>
            </div>
            <div className="flex my-5 justify-between">
              <div>Delivery charges </div>{" "}
              <div className="text-green-500"> FREE </div>
            </div>
            <div className="flex my-5 justify-between font-semibold border-t py-2">
              <div>Total amount </div>
              <NumericFormat
                value={sum}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
