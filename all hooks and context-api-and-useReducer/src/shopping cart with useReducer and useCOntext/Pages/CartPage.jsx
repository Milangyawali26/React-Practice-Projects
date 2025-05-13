import React, { useEffect, useState } from "react";
import { CartState } from "../App1/Context/Context";

const CartPage = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);


  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart]);

  return (
    <>
      <div className="h-[85vh] flex flex-row w-full">
        {/* Cart Items List */}
        <div className="w-3/5 md:w-4/5 p-4">
          <ul className="bg-white shadow-md rounded-lg p-4">
            {cart.length > 0 ? (
              cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b p-3"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src="https://media.istockphoto.com/id/1426974319/photo/the-concept-of-zero-waste-and-recycling-top-view-of-eco-friendly-items-and-paper-packaging.webp?b=1&s=612x612&w=0&k=20&c=3j5WpElZUyJqlWTSH4gtjOZDxQEJaDau4aK0u0sU6_U="
                      alt={item.name}
                      className="w-12 h-12 rounded-md"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">${item.price} x {item.qty}</p>
                    </div>
                  </div>

                  {/* Dropdown for Quantity */}
                <div  >
                <span className="pr-3">Quantity</span>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: { id: item.id, qty: Number(e.target.value) },
                      })
                    }
                    className="border rounded px-2 py-1 text-gray-700"
                  > 
                    {[...Array(item.inStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>

                  <span className="font-bold text-blue-600"> <strong className="text-xl font-medium text-black">Price : </strong>
                    ${Number(item.price) * item.qty}
                  </span>
                   {/* Remove from Cart Button */}
  <button
    onClick={() =>
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: item,
      })
    }
    className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
  >
    Remove
  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            )}
          </ul>
        </div>

        {/* Billing Summary */}
        <div className="bg-blue-600 w-2/5 md:w-1/5 p-4 shadow-md text-white flex flex-col gap-5 ">
        
          <span className="block font-semibold">Subtotal: ({cart.length}) items</span>
     
          <span className="block text-lg font-bold">Total: ${total}</span>
        </div>
      </div>
    </>
  );
};

export default CartPage;
