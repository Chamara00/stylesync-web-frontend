import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SalonCard from '../../components/salons/SalonCard';
import card1img from '../../assests/images/card1img.png'


const Appointment = () => {
    
    const { salonName  } = useParams();
    

    return (
        <div className="salon-page ">
           
            <div className="navigation  ">
                <Link to="/">Home</Link> {'>'} <Link to="/hairservice">Hair Service</Link> {'>'} {salonName}
            </div>

            
            <div className="salon-info mt-10">

            <SalonCard salonImg={card1img} salonName={salonName} salonDescription={'description about salon '}  salonAddress={'hghuhihkh'} 
                              
                              
                             
                        />   
                    
                    
                        
             
            </div>

         
            <div className="selection-boxes">
               
            </div>
        </div>
    );
}

export default Appointment;
