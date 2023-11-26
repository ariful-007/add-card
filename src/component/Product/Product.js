import React from 'react';

const Product = ({product,hendelAddToCart}) => {
  const {images,title,price,description} = product
  
  return (
    <div className=' col-lg-4 mb-4'>
      <div className=' border rounded p-3'>
      <img src={images[0]} style={{height:'150px'}} alt="" />
      <h6>Title : {title}</h6>
      <h6>Description : {description}</h6>
      <h3>Price :  {price}</h3>
      <button onClick={()=>hendelAddToCart(product)} className='btn btn-danger w-100'>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;