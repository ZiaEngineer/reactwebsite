import logo from './logo.svg';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar'
import Services from './Services';
import Contact from './Contact';
import About from './About';
import Page404 from './404';
import Footer from './Footer';
const App = () => {
    return ( 
      <>
      
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<Page404/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
    <Footer/>
    </>
    )
}
export default App;