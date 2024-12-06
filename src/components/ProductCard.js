import React from "react";
import { productList } from '../utils/constant'; 
import Product from "./Product";

const ProductCard = () => {
  console.log("productList:", productList);

  return (
    <div className="product_card">
      {productList.length === 0 ? (
        <p>No products available</p>
      ) : (
        productList.map((product) => (
          <Product key={product.id} product={product} /> 
        ))
      )}
    </div>
  );
};

export default ProductCard;
