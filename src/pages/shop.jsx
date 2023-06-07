/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Shopitems from '../components/shopitems';
import Newsletter from '../components/newsletter';
import Hero from '../components/hero'

const shop = () => {
  return <>
   <section className="shop-banner p-5">
  <div className="container-xxl">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 col-lg-6 text-center">
        <div className="shop-details">
          <h1 className="text-white"><b className="title-green">#100%</b> Off On All Products</h1>
          <p className="text-white fs-5">Make your orders we will deliver..</p>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="featured-products p-5">
    <div className="container-xxl">
      <div className="row">
        <Shopitems />
      </div>
    </div>
  </section>

  <section className="pagination p-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 align-items-center justify-content-center">
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <Hero />

  <Newsletter />
  </>;
}

export default shop