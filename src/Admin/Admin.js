import React from 'react';
import './App.css';
import Navbar from './components/NavbarAdmin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomeAdmin';
import Customers from './pages/Customer';
import Order from './pages/order';
import Support from './pages/support';
import Warehouse from './pages/warehouse';
import HomeAdmin from './pages/HomeAdmin';
/*
import CustomerDetail from './pages/Customer-detail';
function App() { 
  return (
    <CustomerDetail/>
  );
}
/*/
function Admin() {
  return (
    <>

          <Route path='/admin' exact>
            <Navbar/>
            <HomeAdmin/>
            </Route>
            <Route path='/admin/customer' >
            <Navbar/>
            <Customers/>
            </Route>
            <Route path='/admin/order' >
            <Navbar/>
            <Order/>
            </Route>
            <Route path='/admin/team' >
            <Navbar/>
            <Warehouse/>
            </Route>
            <Route path='/admin/support' exact>
            <Navbar/>
            <Support/>
            </Route>

    </>
  );
}

export default Admin;