import React from "react";
import { NumericFormat } from "react-number-format";
import clip from "text-clipper";

import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../basketSlice";

const Product = ({ id, title, image, description, price }) => {
  const dispatch = useDispatch();
  let str = description;

  const items = useSelector((state) => state.basketReducer.items);

  const item = {
    id: items.length + 1,
    title,
    image,
    price,
  };

  const addItemToBasket = () => {
    return dispatch(addToBasket(item));
  };

  return (
    <div className="text-xs w-1/5 bg-white m-2 p-4 flex flex-col items-center justify-between space-y-2">
      <p className="font-semibold text-sm">{title}</p>
      <img className="h-32" src={image} alt="" />
      <p>{clip(str, 80)}</p>
      <NumericFormat
        className="text-base font-bold"
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={addItemToBasket}
        className="bg-orange-300 mb-3 p-3 text-white font-w"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
