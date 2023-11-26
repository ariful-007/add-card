import React from 'react';

const AddCart = ({count}) => {
  const {images,title,description,price} = count
  return (
    <div className=' col-lg-12 mt-3'>
      <div className=' border rounded p-3 mb-3'>
      <img src={images[0]} style={{height:'150px'}} alt="" />
      <h6>Model : {title}</h6>
      <h6>Description : {description}</h6>
      <h6>Price :  {price}</h6>
      </div>
    </div>
  );
};

export default AddCart;