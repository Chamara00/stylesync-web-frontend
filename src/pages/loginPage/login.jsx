// Register.js
import React, { useState } from 'react';
import '../registerPage/register.css';
import google from '../../assests/images/google.png';
import apple from '../../assests/images/apple.png';
import facebook from '../../assests/images/facebook.png';
import Button from '../../components/Button';
import axios from 'axios';


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Form validation
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    setErrors(errors);

    
    axios.get(`http://localhost:8000/users`)
    .then(response => {
      console.log(response.data)
      console.log(formData)

      response.data.map(user =>{
        if(user.username=== formData.username && user.password===formData.password){
          console.log("login success")
        //actions after succesfull login
        }
       
      })
      
    })
    .catch(error => {
      console.error('Login failed:', error);
      // Handle login failure
    });
  
  };

  return (
    <div className='registration flex flex-col items-center justify-center h-screen'>

      <div className='title text-center mb-24'>
        <h1 className="text  text-fontMain text-new font-semibold leading-10  ">Login to StyleSync</h1>
      </div>
    
      <div className='form-section'>
      <form onSubmit={handleLogin} className='form mt-8 '>
          <div className='form-group '>
            <div className='one mb-3'>
              <div className='for-lable'>
                <label htmlFor='username'>Username</label>
                <div className='for-inputs'>
                  <input
                    type='text'
                    id='username'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    className='border-b-2 border-black focus:border-gray-500 outline-none mb-3 w-full mt-2'
                    required
                  />
                  {errors.username && <p className="error-text">{errors.username}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className='form-group'>
            <div className='three mt-3'>
              <div className='for-lable'>
                <label htmlFor='password'>Enter Password</label>
                <div className='for-inputs'>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className='border-b-2 border-black focus:border-gray-500 outline-none mb-3 w-full mt-2'
                    required
                  />
                  {errors.password && <p className="error-text">{errors.password}</p>}
                </div>
              </div>
            </div>
          </div>
          <Button type='submit' className=' button mt-6 w-full  '> Sign In </Button>
        </form>
        
        
        <div className='vertical-line  h-full  '>
        <div className="line mb-2"></div>
          <div className="or font-semibold text-fontMain text-xl  ">OR</div>
          <div className="line mt-2"></div>
        </div>

       
        <div className='continue-options '>
            <div className='continue-content '>

            <div className='option-box flex mb-10'>
                <div className='icon '>
                    <img src={google} alt="" className='image  w-6 h-6 mr-4 ' />
                </div>
                <div className='icon-content'><p>Continue with Google</p></div>

            </div>
            <div className='option-box flex mt-10 mb-10'>
                <div className='icon'><img src={apple} alt="" className='image w-6 h-6 mr-4' /></div>
                <div className='icon-content'><p>Continue with Apple</p></div>

            </div>
            <div className='option-box flex mb-10'>
                <div className='icon'><img src={facebook} alt="" className='image  w-6 h-6 mr-4' /></div>
                <div className='icon-content'><p>Continue with Facebook</p></div>

            </div>
            </div>
            
        </div>
       
      </div>


      <div className='content mt-24 text-center'>
        <div className='login-option mb-4 '>
          <p className='pb-2 tracking-normal font-semibold'>Don’t Have An Account?  <a href="register" className=' hover:cursor-pointer'>Create Account</a></p>
          <p className=' bottom-text tracking-normal'>Secure Login with reCAPTCHA subject to Google</p> 
         <div className='flex justify-center gap-1'>
         <p className=' bottom-text underline hover:cursor-pointer'>Terms </p>
         <p className=' bottom-text '> & </p>
         <p className=' bottom-text underline hover:cursor-pointer'>Privacy</p>
          </div> 
        </div>


        
      </div>
      
    </div>
  );
}

export default Login;
