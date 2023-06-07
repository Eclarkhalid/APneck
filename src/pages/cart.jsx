/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import pr1 from '../assets/images/products/f1.jpg'
import pr2 from '../assets/images/products/f2.jpg'
import { RiDeleteBack2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../components/products'
import { PRODUCTS1 } from '../components/products'
import { ShopContext } from '../components/shopcontext'
import CartItem from '../components/cartitem'
import { useNavigate } from 'react-router-dom'


const cart = (props) => {
    const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
      if (window.innerWidth < 576) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  
    window.addEventListener("resize", handleResize)
  
  return <>
  <section className="cart">
    <div className="container-xxl p-5">
        {totalAmount > 0 ?
        <div className="row">
        <div className='p-2 text-center'>
            <h2>Cart</h2>
            
        </div>
        <div className="col-12 col-md-5 text-center">
                <h5>Product</h5>
            </div>
            <div className="col-12 col-md-5 text-center">
                <h5>Details</h5>
            </div>

    <div className="p-3">
    {[...PRODUCTS, ...PRODUCTS1].map((product) => {
        if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
        }
        })}
        <div className='col-12 p-2 text-end'>
        <button onClick={() => clearCart()} id='clear-cart'> Clear Cart </button>
        </div>

        <hr />
        <div className="row">
      <div className="col-12 col-md-6 d-flex m-auto justify-content-center mt-4">
        <button onClick={() => navigate("/shop")}>
          {isMobile ? "Continue" : "Continue Shopping"}
        </button>
      </div>

      <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
        <div className="col-12">
          <div className="text-end">
            <h2 className="mb-3">
              <b>Total</b>
            </h2>
            <div className="align-items-center">
              <div>
                <p className="total-price align-items-center">
                  <b>${totalAmount}</b>
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-5"
            >
              {isMobile ? "Check Out" : "Proceed to Checkout"}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
        </div>
    :
    <div className="container-xxl">
        <div className="row">
            <div className="text-center p-5 mb-4">
                <h2>Your Cart Is Empty!!!</h2>
            </div>
        </div>
    </div>
    }
    </div>
  </section>
  </>;
}

export default cart