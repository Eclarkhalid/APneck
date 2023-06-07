/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { Link } from 'react-router-dom';

import ReactStars from "react-rating-stars-component";
import { PRODUCTS } from './products';
import { PRODUCTS1 } from './products';
import { ShopContext } from './shopcontext'
import Prod from './prod';


const shopitems = () => {

  return <>
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
  {[...PRODUCTS, ...PRODUCTS1].map((product) => (
    <Prod key={product.id} data={product} />
  ))}
  
        </div>
  </>
}

export default shopitems