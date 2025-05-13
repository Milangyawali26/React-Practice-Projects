
import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer,  } from "./Reducer";
import faker from "faker";

// step 1:
const Cart = createContext();
faker.seed(99);
// createContext() creates a global store
// that can be accessed by any component.
// It   provides a Provider (which holds the data) and a
//       Consumer (which reads the data).

//  wrap the entire app with the provider
//  ie.  wrap the app with <Context> <App /> </Context>

// this means Context ko children lai " Cart.provider " le Wrap gareko
//   context ko children k ho ta ?
//  context ko children <App /> jho

const Context = ({ children }) => {
  //  form faker to make fake data
  const products = [...Array(30)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));



  //   step 2:
  //        Wrap children with Cart.Provider and pass the products as value
  //    return <Cart.Provider value={{products}}>{children}</Cart.Provider>;
  //             we are not going to do this way . instead we will use a hook
  //            Use Reducer

  // step 3:
  //    const [state, dispatch] = useReducer(reducer, initialArg, init?)
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  //  useReducer is the alternative for useState.

  // another reducer . which is created in the Reducer.jsx
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  //  send the state and dispatch to all over the app
  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};



// useContext(Cart) is a hook that allows you
// to consume the context you created earlier.
export const CartState = () => {
  return useContext(Cart);

  // In this case, Cart is the context object,
  // and by calling useContext(Cart),
  // you get access to the state and dispatch
  // that were passed in the value prop of Cart.Provider.
};


export default Context;

