import React from "react";

import ProductContainer from "../App1/components/ProductContainer";
import { CartState } from "../App1/Context/Context";
import SideBar from "../App1/components/FilterSideBar";

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
  // the state dis structured here is nothing but data
  console.log(" state passed by cartState ", products);

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };

  return (
    <div className="h-[85vh] flex flex-row">

      {/* Sidebar with dynamic display based on screen size */}
      <SideBar />

      <div className="flex-1 overflow-y-auto">
        <ProductContainer products={transformProducts()} />
      </div>

      
    </div>
  );
};

export default Home;
