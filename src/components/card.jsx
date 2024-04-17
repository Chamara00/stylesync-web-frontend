import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card(props){
  return (
    <Link to={`/service/${props.serviceName}`} className="card-container">
        <div className="content p-2">
        
            <img src={props.cardImg} alt=""  className="cardImg " />
            
        
            <div>

              <div className="cardTitle pt-2">{props.cardTitle}</div>
                <div className="pl-1 pt-2">
                    <div className="flex gap-1 pt-1"> 
                            <img src={props.cardImgLoc} alt=""  className="cardImgLoc w-3 h-3 " />
                            <div className="description1 text-small ">{props.description1}</div>
                    </div>
                    
                    <div className="description2 text-small pl-4">{props.description2}</div> 

                    <div className="flex gap-1 pt-1 ">
                            <img src={props.cardImgStar} alt=""  className="cardImgStar w-3 h-3" />    
                            <div className="description3">{props.description3}</div>
                    </div>  

                    <div className="flex gap-1 pt-1">
                            <img src={props.cardImgPencil} alt=""  className="cardImgPencil w-3 h-3" />    
                            <div className="description4">{props.description4}</div>
                    </div>  
                    <div className="description5">{props.description5}</div> 



                    

                </div>

             
            
            </div>
        
      
        
        </div>
     
    </Link>
  );
};

export default Card;