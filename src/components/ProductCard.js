import React, { useEffect, useState } from "react";
import { productList } from "../utils/constant";
import Product from "./Product";
import Skeleton from "./Skeleton";

const ProductCard = () => {
  // Local State Variable
  console.log("productList:", productList);
  const [listOfProduct, setListOfProduct] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
    const resData = await data.json();
    console.log(resData)
    setListOfProduct(resData)
    setFilteredProduct(resData)
  } 


  // if(listOfProduct.length === 0) {
  //   return <Skeleton/>
  // }


  return listOfProduct.length === 0 ? <Skeleton/> : (
    <div>
      <div style={{"margin-top": "10px"}}>
        <input type="text" onChange={(e) => setSearchText(e.target.value)}  value={searchText}/>
        <button onClick={() => {
          const filteredData = listOfProduct.filter((product) => {
            return product.title.toLowerCase().includes(searchText.toLowerCase())
          })
          setFilteredProduct(filteredData)
        }}>Search</button>
      </div>
      <button onClick={() => {

        const FilteredProduct = listOfProduct.filter(product => product.rating.rate >= 4)
        setListOfProduct(FilteredProduct)

      }} style={{"margin-top": "10px"}}>Top Rated product</button>
      <div className="product_card">
        {productList.length === 0 ? (
          <p>No products available</p>
        ) : (
          filteredProduct.map((product) => (
            <Product key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCard;
