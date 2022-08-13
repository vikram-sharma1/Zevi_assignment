import React from 'react'
import '../styles/HomePage.css'
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import HomeDownBox from './HomeDownBox';

const HomePage = () => {

    const [status, setStatus] = useState(false)

    const changeStatusTrue = () => {
        setStatus(true)
    }
    const changeStatusFalse = () => {
       
        if(status == true){
            setStatus(false)
        }
       
    }


  return (
    <>
        <div className='homeBackground' onClick={changeStatusFalse}>
            <div className='searchBox'>
                <input type="text" className='input' onClick={changeStatusTrue}/>
                <FiSearch id='searchLogo'/>
            </div>
            <div className='downBox' style={{display : status? "block" : "none"}}>
                <HomeDownBox/>
            </div>
        </div>  
        
    </>
  )
}

export default HomePage