import React from 'react';
import './App.css';
import './bootstrap/css/bootstrapcustom.css';
import NavbarAdmin from './components/NavbarAdmin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Customers from './pages/Customer';
import Order from './pages/order';
import Support from './pages/support';
import Warehouse from './pages/warehouse';
import HomeAdmin from './pages/HomeAdmin';
import CustomerDetail from './pages/Customer-detail';

function Admin() {
  return ( 
    <div className='bootstrapiso'>
        <Switch>
          <Route path='/admin' exact>
            <NavbarAdmin/>
            <HomeAdmin/>
          </Route>
          <Route path='/admin/customer' exact>
            <NavbarAdmin/>
            <Customers/>
          </Route>
          <Route path='/admin/customer/detail'>
            <CustomerDetail/>
          </Route>
          <Route path='/admin/order' >
            <NavbarAdmin/>
            <Order/>
          </Route>
          <Route path='/admin/team' >
            <NavbarAdmin/>
            <Warehouse/>
          </Route>
          <Route path='/admin/support' exact>
            <NavbarAdmin/>
            <Support/>
          </Route>
        </Switch>
    </div>
  );
}

export default Admin;