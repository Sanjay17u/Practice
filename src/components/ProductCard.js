import React, { useEffect, useState } from "react";
import { productList } from "../utils/constant";
import Product from "./Product";

const ProductCard = () => {
  // Local State Variable
  console.log("productList:", productList);
  const [listOfProduct, setListOfProduct] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
    const resData = await data.json();
    console.log(resData)
    setListOfProduct(resData)
  } 

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
