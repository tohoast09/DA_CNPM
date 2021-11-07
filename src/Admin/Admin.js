import React from 'react';
import './App.css';
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
    <>
      <Router>
        <NavbarAdmin />
        <Switch>
          <Route path='/admin' exact component={HomeAdmin} />
          <Route path='/admin/customer' exact component={Customers} />
          <Route path='/admin/customer/detail' component={CustomerDetail}/>
          <Route path='/admin/order' component={Order} />
          <Route path='/admin/team' component={Warehouse} />
          <Route path='/admin/support' component={Support} />
        </Switch> 
      </Router>
    </>
  );
}

export default Admin;
