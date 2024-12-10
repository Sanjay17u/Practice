import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import {useParams} from 'react-router'

const ProductDetails = () => {

    const [singleProduct, setSingleProduct] = useState(null)
    const {productId} = useParams()
    useEffect(() => {
        fetchData()
        console.log(singleProduct);
        
    }, [])

    const fetchData = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const resData = await data.json()
        setSingleProduct(resData)
    }


  return singleProduct === null ? <Skeleton/> : (
    <>
      <div className="product">
        <img
          className="product_image"
          src={singleProduct.image || "default-image.jpg"}
        />
        <h1>{singleProduct.title || "No title available"}</h1>
        <p>Rating: {singleProduct.rating ? singleProduct.rating.rate : "N/A"}</p>
        <p>Description: {singleProduct.description || "N/A"}</p>
        <p>Price: {singleProduct.price || "N/A"}</p>
      </div>
    </>
  );
};

export default ProductDetails;
