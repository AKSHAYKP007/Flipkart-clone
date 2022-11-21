import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromBasket, addToBasket } from "../basketSlice";

const CheckoutProduct = ({ id, title, image, price }) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.basketReducer.items);

  const product = {
    id: items.length + 1,
    title,
    image,
    price,
    total: 1,
  };

  const addItemToBasket = () => {
    return dispatch(addToBasket(product));
  };
  const removeFromBasket = () => {
    return dispatch(deleteFromBasket({ id }));
  };

  return (
    <div className="bg-white border-b p-6">
      <div className="flex">
        <img className="h-28 w-28" src={image} alt="" />
        <div className="m-3">
          <p className="mb-5">{title}</p>
          <NumericFormat
            className="font-bold"
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
      </div>

      <div className="flex m-2">
        <button
          className=" mr-6 bg-orange-300 p-2 text-white "
          onClick={addItemToBasket}
        >
          {" "}
          Add to cart{" "}
        </button>
        <button
          className=" mr-6 bg-orange-300 p-2 text-white"
          onClick={removeFromBasket}
        >
          {" "}
          Remove from cart{" "}
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
