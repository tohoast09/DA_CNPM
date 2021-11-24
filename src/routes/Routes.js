import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardPay from '../components/payment/CardPay';
import Catalog from '../pages/Catalog';
import Home from '../pages/Home';
import Payment from '../pages/Payment';
import Product from '../pages/Product';
import AuthenModal from '../components/authen/AuthenModal'
import { UserContextProvider } from '../components/authen/userContext';
import ProductViewModal from "../components/ProductViewModal";
import { useContext,useEffect } from 'react';
import ProductData from '../assets/firebase-data/products';

const ElementRoutes = () => {
    const ProductDataCtx = useContext(ProductData)
    useEffect(() => {
        ProductDataCtx.fetchData();
    }, [])
    return (
        <>
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
                <ProductViewModal/>
                </>
            }/>
            <Route path='/catalog' element={
                <>
                <Header/>
                <div className='container'>
                    <div className='main'>
                    <Catalog />
                    </div>
                </div>
                <Footer/>
                <ProductViewModal/>
                </>
            }/>
            <Route path='/catalog/:slug' element={
                <>
                <Header/>
                <div className='container'>
                    <div className='main'>
                    <Product />
                    </div>
                </div>
                <Footer/>
                </>            
            } />
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
            <Route path='/pay' element={
                <>
                <Header/>
                <div className='container'>
                    <div className='main'>
                    <Payment />
                    </div>
                </div>
                <Footer/>
                </>
            }/>
        </Routes>
        <UserContextProvider>
            <AuthenModal />
        </UserContextProvider>
        </>
    );
}

export default ElementRoutes