import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Admin from './pages/Admin'
import Customer from './pages/Customer'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Invoice from './pages/Invoice'
import Payment from './pages/Payment'
import Quote from './pages/Quote';
//import { Login } from './pages/Login';
import { useState } from 'react';
import { Register } from './pages/Register';

const App = () => {

  return (
    <div>  
    <BrowserRouter>
      
        <Routes>
          {/* <Route path='/' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/> */}
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      
    </BrowserRouter>
    </div>
  );
};

export default App;