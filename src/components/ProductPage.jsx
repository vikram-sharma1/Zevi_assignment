import React, { useEffect } from 'react'
import '../styles/ProductPage.css'
import { AiOutlineDown } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
import { useState } from 'react';
import Rating from '@mui/material/Rating'
import axios from 'axios';

const ProductPage = () => {

    const [brand, setBrand] = useState(true)
    const [price, setPrice] = useState(true)
    const [ratings, setRatings] = useState(true)
    const [data, setData] = useState([])


    const [wish, setWish] = useState(true)
    const [id, setId] = useState()
    const [array, setArray] = useState([])


   
    
    useEffect(()=>{
        FetchData()
    },[])




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

    const FetchData = () => {
        axios.get(`https://fake-ecommerce-server.herokuapp.com/products`).then((res)=>{
            // console.log(res.data)
            setData(res.data)
            
        }).catch((err)=>{
             console.log('err:', err)

        })
    }


    const handleBrandChange = (e) => {
        // console.log(e.target.checked, e.target.id)

        if(e.target.id == 'mens'){
            if(e.target.checked){
                const mens_filter = data.filter((el) => el.category === "men's clothing")
                setData([...mens_filter])
            }
            else{
                FetchData()
            }
        }
        else if(e.target.id == 'womens'){
            if(e.target.checked ){
                const womens_filter = data.filter((el) => el.category === "women's clothing")
                setData([...womens_filter])
            }
            else{
                FetchData()
            }
        }
        else if(e.target.id == 'bags'){
            if(e.target.checked ){
                const bags_filter = data.filter((el) => el.category === "bags")
                setData([...bags_filter])
            }
            else{
                FetchData()
            }
        }
        else if(e.target.id == 'jewellery'){
            if(e.target.checked ){
                const jewellery_filter = data.filter((el) => el.category === "jewelery")
                setData([...jewellery_filter])
            }
            else{
                FetchData()
            }
        }
        else if(e.target.id == 'electronics'){
            if(e.target.checked ){
                const electronics_filter = data.filter((el) => el.category === "electronics")
                setData([...electronics_filter])
            }
            else{
                FetchData()
            }
        }

    }

    const handlePriceChange = (e) => {
    
        if(e.target.id == 'under500'){
            if(e.target.checked){
                const under500 = data.filter((el) => el.price < 500)
                setData([...under500])
            }
            else{
                FetchData()
            }
        }
        else if(e.target.id == 'above500'){
            if(e.target.checked){
                const above500 = data.filter((el) => el.price > 500)
                setData([...above500])
            }
            else{
                FetchData()
            }
        }


    }

    const handleRatingChange = (e) => {
        console.log('e:', e)
        if(e.target.id == 'five'){
            console.log('five')
            if(e.target.checked){
                const five = data.filter((el) => el.rating.rate == 5 )
                setData([...five])
            }
            else{
                FetchData()
            }
        }
        else if(e.target.id == 'four'){
            if(e.target.checked){
                const four = data.filter((el) => el.rating.rate == 4 )
                setData([...four])
            }
            else{
                FetchData()
            }
        }
        else if(e.target.id == 'three'){
            if(e.target.checked){
                const three = data.filter((el) => el.rating.rate == 3 )
                setData([...three])
            }
            else{
                FetchData()
            }
        }
        else if(e.target.id == 'two'){
            if(e.target.checked){
                const two = data.filter((el) => el.rating.rate == 2 )
                setData([...two])
            }
            else{
                FetchData()
            }
        }
        else if(e.target.id == 'one'){
            if(e.target.checked){
                const one = data.filter((el) => el.rating.rate == 1 )
                setData([...one])
            }
            else{
                FetchData()
            }
        }
    }

    

    const handleWishList = (i) => {

        setArray([...array,id])

            if(wish == false){
                setWish(true)
            }
            else{
                setWish(false)
            }
            setId(i)

        
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
                            <input type="checkbox" name="mens" id="mens" onChange={handleBrandChange} /> 
                            <label htmlFor="">Men's</label>
                                <br />
                            <input type="checkbox" name="womens" id="womens" onChange={handleBrandChange} /> 
                            <label htmlFor="">Women's</label>
                                <br />
                            <input type="checkbox" name="bags" id="bags" onChange={handleBrandChange} /> 
                            <label htmlFor="">Bags</label>
                                <br />
                            <input type="checkbox" name="jewellery" id="jewellery" onChange={handleBrandChange} /> 
                            <label htmlFor="">Jewellery</label>
                                <br />
                            <input type="checkbox" name="electronics" id="electronics" onChange={handleBrandChange} /> 
                            <label htmlFor="">Electronics</label>
                        </div>
                    </div>
                    <div className='brandBox'>
                        <div className='flexing'>
                            <h3>Price Range</h3>
                            <h3><AiOutlineDown onClick={changeStatus2}/></h3>
                        </div>
                        <div className='Brandnames' style={{display : price? "block" : "none"}}>
                            <input type="checkbox" name="under500" id="under500" onChange={handlePriceChange} /> 
                            <label htmlFor="">Under 500</label>
                                <br />
                            <input type="checkbox" name="above500" id="above500" onChange={handlePriceChange} /> 
                            <label htmlFor="">1000 To 3000</label>
                        </div>
                    </div>
                    <div className='brandBox'>
                        <div className='flexing'>
                            <h3>Ratings</h3>
                            <h3><AiOutlineDown onClick={changeStatus3}/></h3>
                        </div>
                        <div className='Brandnames' style={{display : ratings? "block" : "none"}}>
                            <input type="checkbox" name=""id='five' readOnly onChange={handleRatingChange}  /> 
                            <label htmlFor=""><Rating name="read-only" value='5'/></label>
                                <br />
                            <input type="checkbox" name="" id='four'  readOnly onChange={handleRatingChange} /> 
                            <label htmlFor=""><Rating name="read-only" value='4'/></label>
                                <br />
                            <input type="checkbox" name="" id='three' readOnly onChange={handleRatingChange} /> 
                            <label htmlFor=""><Rating name="read-only" value='3'  /></label>
                                <br />
                            <input type="checkbox" name="" id='two' readOnly onChange={handleRatingChange} /> 
                            <label htmlFor=""><Rating name="read-only" value='2'  /></label>
                                <br />
                            <input type="checkbox" name="" id='one' readOnly onChange={handleRatingChange} /> 
                            <label htmlFor=""><Rating name="read-only" value='1'  /></label>
                        </div>
                    </div>
                </div>
                <div className='two'>
                    {data.map((el)=>{
                        return(
                            <div key={el.id}>
                                <AiTwotoneHeart className={wish && array.includes(el.id) ? `wishlistLogo red` : `wishlistLogo`}  onClick={()=>handleWishList(el.id)}/>
                                <img src={el.image} alt="" className='productImg' />
                                <p className='view'>View Product</p>
                                <div className='postion'>
                                <h4>{el.title}</h4>
                                <p>Rs. {el.price}</p>
                                <p><Rating name="half-rating-read" defaultValue={el.rating.rate} precision={0.5} readOnly /> ({el.rating.count})</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductPage