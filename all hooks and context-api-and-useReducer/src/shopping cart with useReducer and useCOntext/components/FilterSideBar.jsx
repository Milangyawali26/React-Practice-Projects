import React from "react";
import RatingStars from "./RatingStars";
import Cart, { CartState } from "../Context/Context";

const SideBar = () => {
  const {
    productDispatch,
    productState: { byStock, byFastDelivery, sort, byRating  },
  } = CartState();
  return (
    <div className="bg-amber-200 w-2/5 md:w-1/5 p-4">
      <div className="filter-section">
        <span className="font-semibold">Filter Products</span>

        {/* Sort Order */}
        <div className="my-4">
          <span className="font-medium">Sort by:</span>
          <div className="flex flex-col">
            <div>
              <input
                className="hover:cursor-pointer size-5.5"
                type="radio"
                name="sortOrder"
                checked={sort === "lowToHigh"}
                onChange={() => productDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })}
              />
              <label className="ml-2">Ascending</label>
            </div>
            <div>
              <input
                className="hover:cursor-pointer size-5.5"
                type="radio"
                name="sortOrder"
                checked={sort === "highToLow"}
                onChange={() => productDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })}
              />
              <label className="ml-2">Descending</label>
            </div>
          </div>
        </div>

        {/* Include Out of Stock */}
        <div className="my-2">
          <input
            className="size-5.5"
            type="checkbox"
            checked={byStock}
            onChange={() => productDispatch({ type: "FILTER_BY_STOCK" })}
          />
          <label className="ml-2">Include Out of Stock</label>
        </div>

        {/* Include Fast Delivery */}
        <div className="my-2">
          <input
            className="size-5.5"
            type="checkbox"
            checked={byFastDelivery}
            onChange={() => productDispatch({ type: "FILTER_BY_DELIVERY" })}
          />
          <label className="ml-2">Fast Delivery Only</label>
        </div>

        {/* Rating Filter */}
        <div className="my-2">
          <label style={{ paddingRight: 10 }}>Rating: </label>
          <RatingStars
            rating={byRating}
            onClick={(i) => productDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })}
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* Clear Filters Button */}
        <div className="my-2">
          <button
            onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
