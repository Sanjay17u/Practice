import React, { useState } from "react";
import { productList } from "../utils/constant";
import Product from "./Product";

const ProductCard = () => {
  // Local State Variable
  console.log("productList:", productList);
  const [listOfProduct, setListOfProduct] = useState(productList)


  return (
    <div>
      <button onClick={() => {

        const FilteredProduct = listOfProduct.filter(product => product.rating.rate >= 4)
        setListOfProduct(FilteredProduct)

      }} className={{"margin-top": "10px"}}>Top Rated product</button>
      <div className="product_card">
        {productList.length === 0 ? (
          <p>No products available</p>
        ) : (
          listOfProduct.map((product) => (
            <Product key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCard;
