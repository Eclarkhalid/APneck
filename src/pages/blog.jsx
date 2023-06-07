/* eslint-disable no-unused-vars */
import React from 'react'
import b1 from '../assets/images/blog/b1.jpg'
import b6 from '../assets/images/blog/b6.jpg'
import b2 from '../assets/images/blog/b2.jpg'
import b3 from '../assets/images/blog/b3.jpg'
import b4 from '../assets/images/blog/b4.jpg'
import b5 from '../assets/images/blog/b5.jpg'
import b7 from '../assets/images/blog/b7.jpg'

const blog = () => {
  return <>
  <section className="blog-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12">
          <div className="shop-details text-center align-items-center">
            <h1 className="text-white">#Read More</h1>
            <p className='text-white fs-3'>Get to know what our trusted customers say...</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="blogs p-5">
    <div className="container-xxl container">
      <div className="row">
        <div className="d-flex flex-column align-items-center">
          <h1 className='mb-3'>Explore more in our library</h1>
          <p className='mb-4'>Why we have trending Outfits Everywhere</p>
        </div>
        <div className="col-12 p-5">
          <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b1} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Marvel Clein</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              </div>
           
             </div>
          </div>
        </div>
        <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b3} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Tristian Ann</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b4} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Phillip Omosh</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={b2} alt="" className='img-fluid rounded-start' />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />. Doloribus maxime consequatur, ipsam architecto incidunt volup <br />tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.</p>
                      <p className="card-text"><small className="text-body-secondary">Last Updated now</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>
  </>;
}

export default blog