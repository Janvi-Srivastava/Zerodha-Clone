import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-toastify/ReactToastify.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import AboutPage from './landing_page/about/AboutPage';
import Navbar from './landing_page/Navbar';
import Footer from "./landing_page/Footer"
import NotFoundPage from './landing_page/NotFound';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/Support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    
 
);

