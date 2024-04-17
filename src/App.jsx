import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/registerPage/Register';
import Home from './pages/homePage/Home';
import Login from './pages/loginPage/login';
import Nav from './components/Nav';
import Service from './pages/servicesPage/Service';
import HairService from './pages/hairServices/HairService';

import './App.css'
import Appointment from './pages/booking/Appointment';



function App() {
  return (
  
     <Router>
 
       <Routes>
        <Route path='/' Component={Home} /> 
        <Route path='/register' Component={Register}/>
        <Route path='/login' Component={Login}/>
      </Routes>
      
      <Nav />
      <Routes>
        
        <Route path='/service' Component={Service}/>
        <Route path='/hairservice' Component={HairService}/>
        
        <Route path="/salon/:salonName" Component={Appointment} />
        
        

       
       
        
        
      </Routes>
     
       

      

     </Router>
   
  );
}


export default App;
