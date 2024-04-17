// Register.js
import React, { useState } from 'react';
import './register.css';
import google from '../../assests/images/google.png';
import apple from '../../assests/images/apple.png';
import facebook from '../../assests/images/facebook.png';
import Button from '../../components/Button';
import axios from 'axios';


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!/[0-9]/.test(formData.password)) {
      errors.password = 'Password must contain at least one number';
    } else if (!/[^a-zA-Z0-9]/.test(formData.password)) {
      errors.password = 'Password must contain at least one symbol';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);

    

    if (Object.keys(errors).length === 0) {
      
      axios.post('http://localhost:8000/users', formData)
        .then(response => {
          console.log('Registration successful:', response.data);
          // actions after successful registration
        })
        .catch(error => {
          console.error('Registration failed:', error);
          // Handle registration failure
        });
    }

  };

  return (
    <div className='registration flex flex-col items-center justify-center h-screen'>
      <div className='title text-center mb-24'>
        <h1 className="text  text-fontMain text-new font-semibold leading-10  ">Register to StyleSync</h1>
      </div>
    
      <div className='form-section'>
        <form onSubmit={handleSubmit} className='form  '>
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
                <label htmlFor='password'>Password</label>
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
                  {errors.password && <p className="error-text" style={{ color: 'red', fontSize: '0.8rem' }}>{errors.password}</p>}
                </div>
              </div>
            </div>
          </div>

          <div className='form-group'>
            <div className='two mt-3 mb-3'>
              <div className='for-lable'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <div className='for-inputs'> 
                  <input
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className='border-b-2 border-black focus:border-gray-500 outline-none mb-3 w-full mt-2'
                    required
                  />
                  {errors.confirmPassword && <p className="error-text" style={{ color: 'red', fontSize: '0.8rem' }}>{errors.confirmPassword}</p>}
                </div>
              </div>
            </div>
          </div>
       
          <Button type='submit' className=' button mt-6 w-full  '> Sign Up </Button>
        </form>
        
        <div className='vertical-line  h-full  '>
          <div className="line mb-2"></div>
          <div className="or font-semibold text-fontMain text-xl   ">OR</div>
          <div className="line mt-2"></div>
        </div>

       
        <div className='continue-options '>
          <div className='continue-content'>
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
          <p className='pb-2 tracking-normal font-semibold'>Already Have An Account? <a href="login " className=' hover:cursor-pointer'>Login</a></p>
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

export default Register;
