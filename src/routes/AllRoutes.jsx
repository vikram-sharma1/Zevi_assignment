import React from 'react'
import HomePage from '../components/HomePage'
import {Routes, Route } from "react-router-dom";
import ProductPage from '../components/ProductPage';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/productPage' element={<ProductPage/>} />
    </Routes>
  )
}

export default AllRoutes