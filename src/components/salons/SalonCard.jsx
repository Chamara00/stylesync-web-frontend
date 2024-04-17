import React from "react";
import "../salons/salonCard.css";

function Card(props) {
  return (
    <div className="cardContainer ">
      <div className="Saloncontent ">
      <img src={props.salonImg} alt="" className="salonImg  " />
      <div className="content   ">
        <div className="salonName">{props.salonName}</div>
        <div className="salonDescription">{props.salonDescription}</div>
          
      </div> 
      <div className="details">
        <div className="salonAddress">
          {props.salonAddress}
        </div>
      </div>
      </div>
      
         
          
          
         
          
       
      </div>
    
  );
}

export default Card;
