import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import Cart Icon
import { CartState } from "../App1/Context/Context";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <>
      <div className= "  bg-gray-700">
        <nav className="max-w-[1200px] mx-auto h-[15vh]  flex justify-between items-center px-4 md:px-10">
          {/* Logo / Shopping Cart */}
          <div className=" md:text-4xl text-white hover:bg-amber-100 rounded hover:text-gray-700 px-4 py-1  text-2xl">
            <NavLink to="/" className=" font-semibold">
              Shopping Cart
            </NavLink>
          </div>

          {/* Search Bar */}
          <div className="">
            <input
              className="w-full md:max-w-md border bg-amber-100 px-3 py-2 border-gray-300 rounded-lg focus:outline-none"
              placeholder="Search a product..."
              type='search'
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </div>

          {/* Cart Icon with Badge */}
      <Link to={'/cart'}>
      <div
           className="relative hover:cursor-pointer  hover:text-gray-700 text-amber-100  hover:bg-amber-100 rounded-lg px-4 py-1">
            <FaShoppingCart className="text-4xl " />
            {/* Badge (if you want to show item count) */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length} {/* Change this dynamically based on cart items */}
            </span>
          </div>
      </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
