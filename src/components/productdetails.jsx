/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ShopContext } from './shopcontext';
import { PRODUCTS, PRODUCTS1 } from './products';

const ProductDetails = () => {
  const { selectedProduct, closeProductDetails, addToCart, cartItems, removeToCart, updateCartItemCount } = useContext(ShopContext);

  // Set selectedProduct to 0
  const productId = selectedProduct || 0;
  
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find((p) => p.id === productId);
  
  if (!product) {
    return null;
  }
  const cartItemAmount = cartItems[product.id];

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="card p-5 m-auto">
            <img src={product.image} alt="" className="card-img-top img-fluid p-2" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card p-3 m-auto">
            <div className="card-body">
              <h5 className="card-title">{product.brand}</h5>
              <h3 className="card-text">{product.name}</h3>
              <p className="card-text">
                <span className="text-danger fs-4 me-2">{product.price}$</span>
                <strike>{product.price * 2}$</strike>
              </p>
              <p className="card-text">{product.description}</p>
              <p className="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>


              <div className="d-flex align-items-center mb-3 col-6">
                <button className="btn btn-outline-secondary me-2" onClick={() => addToCart(product.id)}>+</button>
                <input className="form-control text-center" type="number" value={cartItems[product.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)} />
                <button className="btn btn-outline-secondary ms-2" onClick={() => removeToCart(product.id)}>-</button>
              </div>

              <div className="d-flex justify-content-center">
              <button
                onClick={() => {
                  addToCart(product.id);
                  event.target.classList.toggle("red");
                }}
                id='button-link'
               className="myButton"
              >
                Add To Cart
                {cartItemAmount > 0 && ` (${cartItemAmount})`}
              </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="d-flex justify-content-center flex-column align-items-center">
            <h2 className="text-center mb-2">More products of the same</h2>
            <p className="mb-2">We have more products, visit the shop to get amazing deals from us!!</p>
            </div>
            <div className="d-none d-md-block">
              <div className="row mb-3">
                <div className="col-6 col-md-4 col-lg-8 mx-auto">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {PRODUCTS.slice(3, 7).map((product) => (
                      <div key={product.id} className="col">
                        <div className="card h-100">
                          <img src={product.image} className="card-img-top" alt="..." />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-6 col-md-4 col-lg-8 mx-auto">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {PRODUCTS1.slice(2, 6).map((product) => (
                      <div key={product.id} className="col">
                        <div className="card h-100">
                          <img src={product.image} className="card-img-top" alt="..." />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;