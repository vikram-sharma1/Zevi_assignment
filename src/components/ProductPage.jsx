import React from 'react'
import '../styles/ProductPage.css'
import { AiOutlineDown } from 'react-icons/ai';
import { useState } from 'react';
import Rating from '@mui/material/Rating'

const ProductPage = () => {

    const [brand, setBrand] = useState(true)
    const [price, setPrice] = useState(true)
    const [ratings, setRatings] = useState(true)

   

    const changeStatus1 = () => {
        if(brand == true){
            setBrand(false)
        }
        else{
            setBrand(true)
        }
        
    }
    const changeStatus2 = () => {
        if(price == true){
            setPrice(false)
        }
        else{
            setPrice(true)
        }
    }
    const changeStatus3 = () => {
        if(ratings == false){
            setRatings(true)
        }
        else{
            setRatings(false)
        }
    }

  return (
    <>
        <div id='mainBox'>
            <h1 className='postiontop'>Search Results</h1>
            <div className='allProductBox'>
                <div className='one'>
                    {/* Filter Box */}
                    <div className='brandBox'>
                        <div className='flexing'>
                            <h3>Brand</h3>
                            <h3><AiOutlineDown onClick={changeStatus1}/></h3>
                        </div>
                        <div className='Brandnames' style={{display : brand? "block" : "none"}}>
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor="">Mango</label>
                                <br />
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor="">H & M</label>
                                <br />
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor="">H & M</label>
                                <br />
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor="">H & M</label>
                        </div>
                    </div>
                    <div className='brandBox'>
                        <div className='flexing'>
                            <h3>Price Range</h3>
                            <h3><AiOutlineDown onClick={changeStatus2}/></h3>
                        </div>
                        <div className='Brandnames' style={{display : price? "block" : "none"}}>
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor="">Under 500</label>
                                <br />
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor="">1000 To 3000</label>
                        </div>
                    </div>
                    <div className='brandBox'>
                        <div className='flexing'>
                            <h3>Ratings</h3>
                            <h3><AiOutlineDown onClick={changeStatus3}/></h3>
                        </div>
                        <div className='Brandnames' style={{display : ratings? "block" : "none"}}>
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor=""><Rating name="read-only" value='5' readOnly /></label>
                                <br />
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor=""><Rating name="read-only" value='4' readOnly /></label>
                                <br />
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor=""><Rating name="read-only" value='3' readOnly /></label>
                                <br />
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor=""><Rating name="read-only" value='2' readOnly /></label>
                                <br />
                            <input type="checkbox" name="" id="" /> 
                            <label htmlFor=""><Rating name="read-only" value='1' readOnly /></label>
                        </div>
                    </div>


                </div>
                <div className='two'>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductPage