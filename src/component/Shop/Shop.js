import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import AddCart from '../AddCart/AddCart';

const Shop = () => {
  const [products , setProduct] = useState([])
  const [addProduct, setAddProduct] = useState([])

  useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data =>setProduct(data))
  })

  const hendelAddToCart = (data) =>{
    const newData = [...addProduct,data]
    setAddProduct(newData)

  }

  return (
    <div className=" container-fluid">
        <div className='row'>
          <div className=' col-lg-8'>
            <h1 className=' bg-danger mt-3 text-white'>All Product</h1>
            <div className="row">
              {
              products.map(product => <Product hendelAddToCart={hendelAddToCart} product={product}  key={product.id}></Product>)
              }
            </div>
          </div>
          <div className=' col-lg-4'>
            <h1 className=' bg-secondary mt-3 text-white'>Add Card</h1>
              <div className="row">
                {
                  addProduct.map(count => <AddCart count={count}></AddCart>)
                }
              </div>
          </div>
        </div>
    </div>
  );
};

export default Shop;