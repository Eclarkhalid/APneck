/* eslint-disable no-unused-vars */
import React from 'react'
import Moreproduct from './moreproduct';
import pr5 from '../assets/images/products/f5.jpg'
import pr6 from '../assets/images/products/f6.jpg'
import pr7 from '../assets/images/products/f7.jpg'
import pr8 from '../assets/images/products/f8.jpg'
import Newsletter from './newsletter';


const product = (props) => {
  return <>
  <section className="product-wrapper p-5">
    <div className="container-xxl">
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <div className="col-6 P-4">
                    <div className='p-5 d-flex align-items-center justify-content-center'>
                    <img src={props.image} alt="" className='img-fluid mb-2 w-50'/>
                    </div>
                    <div className="row small-img p-5">
                        <div className="col-md-3">
                        <img src={props.smallimage1} alt="" className='img-fluid small-img mb-2'/>
                        </div>

                        <div className="col-md-3">
                        <img src={props.smallimage2} alt="" className='img-fluid small-img mb-2'/>
                        </div>

                        <div className="col-md-3">
                        <img src={props.smallimage3} alt="" className='img-fluid small-img mb-2'/>
                        </div>

                        <div className="col-md-3">
                        <img src={props.smallimage4} alt="" className='img-fluid small-img mb-2'/>
                        </div>
                    </div>
                </div>

                <div className="col-6 d-flex  justify-content-center flex-column">
                    <div className="product-details p-5">
                    <div className='mb-4'>
                        <h2>{props.title}</h2>
                    </div>

                    <div className='mb-4'>
                        <p>${props.price}&nbsp; <strike className = 'text-danger'>200$</strike></p>
                    </div>
                    <div className='mb-5 row'>
                        <div className='col-md-6'>
                        <select name="select" id="optios">
                            <option value="0">Select Size</option>
                            <option value="1">Small</option>
                            <option value="2">Medium</option>
                            <option value="3">Large</option>
                            <option value="4">Xl</option>
                            <option value="5">XXL</option>
                        </select>
                        </div>
                        <div className='col-md-6'>
                        <input type="number"  />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <button id='button-link'>Add to cart</button>
                    </div>
                    <div className='mb-4'>
                        <p>{props.description}</p>
                        <p>{props.description}</p>
                        <p>{props.description}</p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  </section>

  <Moreproduct 
  image1={pr5} image2={pr6} image3={pr7} image4={pr8}
  />

  <Newsletter />
  </>;
}

export default product