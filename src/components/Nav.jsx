import React from 'react';
import Button from './Button';
import Search from './Search';
import flag from '../assests/images/flag.png';
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useNavigate} from 'react-router-dom';


function Nav() {
  const navigate = useNavigate();
  
  

   const handleLogin = ()=>{
    navigate('/login')
   }

  const handleRegister = ()=>{
    navigate('register')
  }

  return (
    <div className='flex justify-between items-center p-5 bg-backgroundOne w-full ' style={{position:"fixed ",zIndex:'999',height:'100px'}}>
     
      {/* Left Side */}
      <div className='flex items-center ml-8'>
        <div className=' logo text-3xl font-semibold text-fontMain '>StyleSync</div>
      </div>

    

      {/* Right Side */}
      <div className='flex items-center gap-8  mr-6'>
      <div className='flex items-center mr-20 gap-12 text-lg '><div className='text-xl'>
          <a href='#'className='hover:curser-pointer hover:opacity-75 transition-opacity duration-100 font-normal'>LKR</a>
        </div >
        <div className=''>
          <a href='#'className='flagimg hover:opacity-75 transition-opacity duration-100'><img src={flag} alt="" className='h-8 w-8'/></a>
        </div>
        <div className=''>
        <a href='#'className='flagimg hover:opacity-75 transition-opacity duration-100'><IoIosHelpCircleOutline  className='w-8 h-8'style={{ color: '#FDFDFD' }}/></a>
        </div>
        </div>
       
      
          
        <div className='text-xl cursor-pointer hover:underline  mr-2 ml-2'onClick={handleLogin} >Login</div>
        <div className='register-button' onClick={handleRegister}><Button className="text-lg text-white px-4 py-2 rounded-base hover:bg-gray-700  ml-4" onClick={handleRegister}>Register</Button></div> 

        
      </div>
      </div>
    
  );
}

export default Nav;
