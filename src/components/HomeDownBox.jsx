import React from 'react'
import '../styles/HomeDownBox.css'
import img1 from '../images/latest 1.jpg'
import img2 from '../images/latest 2.jpeg'
import img3 from '../images/latest 3.jpg'
import img4 from '../images/latest 4.jpg'
import img5 from '../images/latest 5.jpg'
import {useNavigate} from 'react-router-dom'
const HomeDownBox = () => {

    const navigate = useNavigate()

    const changePage = () => {
        console.log('yes')
        navigate('/productPage')
    }

  return (
    <>
        <p className='latestTrends'>Latest Trends</p>
        {/* <div> */}
            <div className='trendsBox'>
                <div className='cursor' onClick={changePage}>
                    <img src={img1} alt="" className='img1'/>
                    <p className='TrendsNames'>Latest Pants</p>
                </div>  
                <div className='cursor'  onClick={changePage}>
                    <img src={img2} alt="" className='img1'/>
                    <p className='TrendsNames'>Cargo Pants</p>
                </div>  
                <div className='cursor'  onClick={changePage} >
                    <img src={img3} alt="" className='img1'/>
                    <p className='TrendsNames'>Printed Shirt</p>
                </div>  
                <div className='cursor'  onClick={changePage}>
                    <img src={img4} alt="" className='img1'/>
                    <p className='TrendsNames'>Half sleve Shirt</p>
                </div>  
                <div className='cursor'  onClick={changePage}>
                    <img src={img5} alt="" className='img1'/>
                    <p className='TrendsNames'>Latest Shoes</p>
                </div>  
            </div>
        {/* </div> */}
        <p className='latestTrends'>Popular Suggestions</p>
        <ul className='list' type = "none">
            <li className='list1 cursor'  onClick={changePage}>Striped shirt dress</li>
            <li className='list1 cursor' onClick={changePage}>Sation dress</li>
            <li className='list1 cursor' onClick={changePage}>Denim jumpsuit</li>
            <li className='list1 cursor' onClick={changePage}>Leather dresses</li>
            <li className='list1 cursor' onClick={changePage}>Solid tshirts</li>
        </ul>
    </>
  )
}

export default HomeDownBox