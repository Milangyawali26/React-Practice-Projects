import React from 'react'
import { CartState } from '../App1/Context/Context';
import SingleProduct from './SingleProduct';

const ProductContainer = ({products}) => {

      return (
        <>
          <div className="text-2xl min-h-[85vh] px-4 py-3 bg-amber-300 gap-4 text-black grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => {
              return (
               <SingleProduct product={product} key={product.id} />
              );
            })}
          </div>
        </>
      );
}

export default ProductContainer
