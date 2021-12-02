import React from 'react';
import './App.css';
import './bootstrap/css/bootstrapcustom.css';
import NavbarAdmin from './components/NavbarAdmin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customers from './pages/Customer';
import Order from './pages/order';
import Support from './pages/support';
import Warehouse from './pages/warehouse';
import HomeAdmin from './pages/HomeAdmin';
import CustomerDetail from './pages/Customer-detail';

function Admin() {
  return ( 
    <div className='bootstrapiso'>
        <Routes>
          <Route path='/' element={
            <>
            <NavbarAdmin/>
            <HomeAdmin/>
            </>
          }/>
          <Route path='/customer' element={
            <>
            <NavbarAdmin/>
            <Customers/>
            </>
          }/>
          <Route path='/customer/detail' element={
            <>
            <CustomerDetail/>
            </>
          }/>
          <Route path='/order' element={
            <>
                        <NavbarAdmin/>
            <Order/>
            </>
          }/>

          <Route path='/warehouse' element={
            <>
                        <NavbarAdmin/>
            <Warehouse/>
            </>
          }/>
          <Route path='/admin/support' element={
            <>
                        <NavbarAdmin/>
            <Support/>
            </>
          }/>
        </Routes>
    </div>
  );
}

export default Admin;