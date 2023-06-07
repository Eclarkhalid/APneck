/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext} from 'react'
import { ShopContext } from './shopcontext'
import { RiDeleteBack2Line } from 'react-icons/ri'
const cartitem = (props) => {

    const {id, name, price, image, brand} = props.data;
    const { addToCart, cartItems, removeToCart, updateCartItemCount, itemPrice} = useContext(ShopContext);
    const itemsInStock = id === 0 ? Math.ceil((id + 2.5) * 102 / 2) : Math.ceil((id * 102.5) / 2);
  return <>


<div className="container card my-3">
      <div className="row g-3">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <div className="cart-item-image m-auto">
              <img src={image} className="card-img-top img-fluid" alt="..." />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3">
            <h2>{name}</h2>
            <p className="cart-item-id">Product Brand: <b className='text-center mb-1'>{brand}</b></p>
            <p className="cart-item-id">Product Price: <b className='text-center mb-1'>${price}</b></p>
            <p className="cart-item-id">Product Number: <b className='text-center mb-3'>{id}</b></p>
            <p className="cart-item-id">Items in Stock: <b className='text-danger'>{itemsInStock}</b></p>
          </div>
          <div className="p-3 d-flex justify-content-between align-items-center">
            <div className="count-handler">
              <button className="btn btn-outline-secondary" onClick={() => addToCart(id)}>+</button>
              <input className='text-danger fs-4 form-control' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
              <button className="btn btn-outline-secondary" onClick={() => removeToCart(id)}>-</button>
            </div>
            <button className="btn btn-outline-danger" onClick={() => removeToCart(id)}>
              <RiDeleteBack2Line />
            </button>
          </div>
          <div className="p-3">
            <input type="text" className="form-control" id="coupon" placeholder="Enter coupon code..." />
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default cartitem