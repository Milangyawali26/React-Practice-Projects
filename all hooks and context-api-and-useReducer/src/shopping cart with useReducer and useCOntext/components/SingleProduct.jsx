import React from "react";
import RatingStars from "./RatingStars";
import { CartState } from "../Context/Context";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <li className="max-w-xs  w-full list-none bg-amber-100 shadow-lg rounded-lg p-4 mb-4">
      <div className="flex flex-col items-center justify-center">
        {/* Product Image */}

        <img
          src="https://media.istockphoto.com/id/1426974319/photo/the-concept-of-zero-waste-and-recycling-top-view-of-eco-friendly-items-and-paper-packaging.webp?b=1&s=612x612&w=0&k=20&c=3j5WpElZUyJqlWTSH4gtjOZDxQEJaDau4aK0u0sU6_U="
          alt={product.name}
          className="w-full h-18 object-cover rounded-lg mb-4"
        />

        {/* Product Name */}
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>


        {/* Product Price */}
        <p className="text-xl text-gray-600">Price :  ${product.price.split('.')[0]}</p>

        {/* Product Stock */}
        <p className="text-lg text-gray-500">{product.inStock} in stock</p>
        <h5 className="text-sm font- semibold text-grey-800">
          {product.inStock !== 0 && product.fastDelivery
            ? "fast delivery"
            : " 4 days delivery"}
        </h5>
        <RatingStars  rating={product.rating} />
        <div className="text-xl pt-3">
        {cart.some((p) => p.id === product.id) ? (
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              })
            }
            className="border rounded-lg bg-red-500 px-3 py-1 hover:cursor-pointer hover:bg-amber-200 hover:shadow-2xl"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
            disabled={product.inStock === 0}
            className={`border rounded-lg  bg-blue-700 px-3 py-1 ${
              product.inStock === 0
                ? "cursor-not-allowed bg-gray-300"
                : "hover:cursor-pointer hover:bg-amber-200"
            }`}
          >
            {!product.inStock ? "Out of stock" : "Add to cart"}
          </button>
        )}
      </div>
      </div>
    </li>
  );
};

export default SingleProduct;
