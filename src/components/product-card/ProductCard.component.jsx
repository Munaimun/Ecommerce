/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cartAction";
import { selectCartItems } from "../../store/cart/cartSelector";

import Button from "../Button/Button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    // group allows to apply styles to child elements when the parent is hovered.
    <div className="m-auto relative group bg-white sm:w-72 border rounded-xl shadow-lg p-6 mb-6">
      <img src={imageUrl} alt={name} className="w-52 sm:w-full h-72" />

      <div className="absolute sm:top-48 left-0 right-0 bottom-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          className="group relative min-h-[50px] w-40 overflow-hidden border border-black bg-black text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-gray-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-gray-500 after:duration-500 hover:bg-gray-600 hover:text-white hover:before:h-full hover:after:h-full"
          onClick={addProductToCart}
        >
          <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-gray-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-gray-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
          <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
            Add to Cart
          </span>
        </Button>
      </div>

      <div className="flex justify-between">
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
