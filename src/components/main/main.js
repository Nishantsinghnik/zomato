import React from 'react'
import Dining from '../tabs/dining out/dining'
import Delivery from '../tabs/delivery/delivery'
import Night from '../tabs/night life/night'
import "./main.css"
const Main = () => {
  return (
    <div className='main'>
        <div className='tabs'>

      <div className='delivery-top'>
        <div className='delivery'> 
        <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
        alt='delivery-logo'
        className='delivery-img'/> 
        </div>
        Delivery
        </div>

        <div className='dining-top'> 
        <div className='dining'> 
            <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
            alt='Dining out'
            className='dining-img'/>
            
            </div> Dining Out
            </div>
            <div className='night-top'>
        <div className='night'>
             <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp" 
             alt='night-img'
             className='night-img'/>
             
              </div> Night Life
              </div>
       </div>
    <div ><Delivery/></div>
    <div ><Dining/></div>
    <div ><Night/></div>
    </div>
  )
}

  
    
export default Main