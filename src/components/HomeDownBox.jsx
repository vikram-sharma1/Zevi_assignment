import React from 'react'
import '../styles/HomeDownBox.css'
import img1 from '../images/latest 1.jpg'
import img2 from '../images/latest 2.jpeg'
import img3 from '../images/latest 3.jpg'
import img4 from '../images/latest 4.jpg'
import img5 from '../images/latest 5.jpg'

const HomeDownBox = () => {
  return (
    <>
        <p className='latestTrends'>Latest Trends</p>
        {/* <div> */}
            <div className='trendsBox'>
                <div>
                    <img src={img1} alt="" className='img1'/>
                    <p className='TrendsNames'>Latest Pants</p>
                </div>  
                <div>
                    <img src={img2} alt="" className='img1'/>
                    <p className='TrendsNames'>Cargo Pants</p>
                </div>  
                <div>
                    <img src={img3} alt="" className='img1'/>
                    <p className='TrendsNames'>Printed Shirt</p>
                </div>  
                <div>
                    <img src={img4} alt="" className='img1'/>
                    <p className='TrendsNames'>Half sleve Shirt</p>
                </div>  
                <div>
                    <img src={img5} alt="" className='img1'/>
                    <p className='TrendsNames'>Latest Shoes</p>
                </div>  
            </div>
        {/* </div> */}
        <p className='latestTrends'>Popular Suggestions</p>
        <ul className='list' type = "none">
            <li className='list1'>Striped shirt dress</li>
            <li className='list1'>Sation dress</li>
            <li className='list1'>Denim jumpsuit</li>
            <li className='list1'>Leather dresses</li>
            <li className='list1'>Solid tshirts</li>
        </ul>
    </>
  )
}

export default HomeDownBox