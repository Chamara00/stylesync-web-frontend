import React from 'react';
import Button from './Button';
import './style.css'
import Search from './Search';
import { useNavigate } from 'react-router-dom';
function Navbar() {
   
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/login')
   }
   const handleRegister = ()=>{
    navigate('register')
  }
  const scrollToService=()=>{
    const serviceSection = document.getElementById('service');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const scrollToFaqs = () => {
    const faqsSection = document.getElementById('faqs');
    if (faqsSection) {
      faqsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='nav  flex bg-trnsparent justify-between items-center tracking-wider p-5 fixed z-999  '>
      {/* Left Side */}
      <div className='flex items-center ml-6 '>
        <div className=' logo text-3xl font-semibold text-fontMain '>StyleSync</div>
      </div>

      {/* Middle */}
      <div className=' flex justify-center gap-16'>
        <div className='text-xl '>
          <a href='#'className='hover:underline' >Home</a>
        </div>
        <div className='text-xl'>
          <a href='#'className='hover:underline'onClick={scrollToService}>Services</a>
        </div>
        <div className='text-xl'>
          <a href='#'className='hover:underline'>Articles</a>
        </div>
        <div className='text-xl'>
          <a href='#'className='hover:underline'onClick={scrollToFaqs}>FAQs</a>
        </div>
        <div className='text-xl'>
          <a href='#'className='hover:underline'>Contact us</a>
        </div>
      </div>

      {/* Right Side */}
      <div className=' flex items-center gap-10 mr-6'>
       
        <Search  className='mr-2 '/>
          
        <div className='text-xl cursor-pointer hover:underline  mr-2 ml-2' onClick={handleLogin}>Login</div>
       <div onClick={handleRegister}><Button className="text-lg  px-4 py-2 rounded-base hover:bg-gray-700 ml-2">Register</Button></div> 
      </div>
      </div>
    
  );
}

export default Navbar;
