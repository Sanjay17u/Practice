import React from "react";

const Product = ({ product }) => {
  console.log("Product received as prop:", product); 
  
  const { image, title, rating, price } = product || {}; 

  return (
    <div className="product">
      <img className="product_image" src={image || 'default-image.jpg'} alt={title} />
      <h1>{title || 'No title available'}</h1>
      <p>Rating: {rating ? rating.rate : 'N/A'}</p>
      <p>Price: {price || 'N/A'}</p>
    </div>
  );
};

export default Product;



export const HOF = (Product) => {
  return (props) => {
    return(
      <>
        <div>
          <span>Best Seller</span>
          <Product {...props}/>
        </div>
      </>
    )
  }
}
