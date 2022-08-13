import React from 'react'
import '../styles/HomePage.css'
import { FiSearch } from 'react-icons/fi';

const HomePage = () => {
  return (
    <>
        <div className='homeBackground'>
            <div className='searchBox'>
                <input type="text" className='input'/>
                <FiSearch id='searchLogo'/>
            </div>
        </div>  
    </>
  )
}

export default HomePage