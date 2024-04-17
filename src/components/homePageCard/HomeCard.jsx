import React from 'react'
import './styles.css'
import rightArrow from '../../assests/images/rightArrow.png'

function HomeCard(props) {
  return (
    <div className='cardContainer'> 
        <img src={props.cardImag} className='cardImag'/>

        <div className='cardText'>
            <div className='cardText1'>{props.cardText1}</div>
            <div className='cardText2'>{props.cardText2} salons available</div>
        </div>

        <div className='appointment'>
            <div>Make an appointment</div>
            
            <img src={rightArrow} alt='arrow' className='arrow'/>
            
        </div>
    </div>
  )
}

export default HomeCard ;