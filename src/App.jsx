/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import About from './pages/about'
import Shop from './pages/shop'
import Contact from './pages/contact'
import Login from './pages/login'
import Signup from './pages/signup'
import Forgotpasword from './pages/forgotpasword'
import Cart from './pages/cart'
import Checkout from './pages/checkout'
import Blog from './pages/blog'
import './App.css'
import ShopContext from './components/shopcontext'
import Details from './pages/details'
import LazyLoad from 'react-lazyload';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <>
      <ShopContext>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route
                index
                element={
                  <LazyLoad height={200} offset={100}>
                    <Home />
                  </LazyLoad>
                }
              />
              <Route
                path='shop'
                element={
                  <LazyLoad height={200} offset={100}>
                    <Shop />
                  </LazyLoad>
                }
              />
              <Route
                path='blog'
                element={
                  <LazyLoad height={200} offset={100}>
                    <Blog />
                  </LazyLoad>
                }
              />
              <Route
                path='about'
                element={
                  <LazyLoad height={200} offset={100}>
                    <About />
                  </LazyLoad>
                }
              />
              <Route
                path='contact'
                element={
                  <LazyLoad height={200} offset={100}>
                    <Contact />
                  </LazyLoad>
                }
              />
              <Route
                path='login'
                element={
                  <LazyLoad height={200} offset={100}>
                    <Login />
                  </LazyLoad>
                }
              />
              <Route
                path='signup'
                element={
                  <LazyLoad height={200} offset={100}>
                    <Signup />
                  </LazyLoad>
                }
              />
              <Route
                path='forgotpasword'
                element={
                  <LazyLoad height={200} offset={100}>
                    <Forgotpasword />
                  </LazyLoad>
                }
              />
              <Route
                path='cart'
                element={
                  <LazyLoad height={200} offset={100}>
                    <Cart />
                  </LazyLoad>
                }
              />
              <Route
                path='checkout'
                element={
                  <LazyLoad height={200} offset={100}>
                    <Checkout />
                  </LazyLoad>
                }
              />
              <Route
                path='details'
                element={
                  <LazyLoad height={200} offset={100}>
                    <Details />
                  </LazyLoad>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContext>
    </>
  );
}

export default App;
