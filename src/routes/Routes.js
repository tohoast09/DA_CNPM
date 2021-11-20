import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Catalog from '../pages/Catalog';
import Home from '../pages/Home';
// import Cart from '../pages/Cart'
// import Product from '../pages/Product'
// ??????????????????
const ElementRoutes = () => {
    return (
        <Routes>
            <Route path='/' exact element={
                <>
                <Header/>
                <div className='container'>
                    <div className='main'>
                    <Home />
                    </div>
                </div>
                <Footer/>
                </>
            }/>
            {/* <Route path='/catalog/:slug' component={Home}/> */}
            <Route path='/catalog' element={
                <>
                <Header/>
                <div className='container'>
                    <div className='main'>
                    <Catalog />
                    </div>
                </div>
                <Footer/>
                </>
            }/>
            <Route path='/cart' element={
                <>
                <Header/>
                <div className='container'>
                    <div className='main'>
                    <Home />
                    </div>
                </div>
                <Footer/>
                </>
            }/>
        </Routes>
    );
}

export default ElementRoutes