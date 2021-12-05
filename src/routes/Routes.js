import React from "react";

import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardPay from "../components/payment/CardPay";
import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import ProductViewModal from "../components/ProductViewModal";
import { useContext, useEffect } from "react";
import ProductData from "../assets/firebase-data/products";
import Authentication from "../pages/Authentication";
import PrivateRoute from "./PrivateRoute";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import Admin from "../Admin/Admin";
const ElementRoutes = () => {
    const ProductDataCtx = useContext(ProductData);
    useEffect(() => {
        ProductDataCtx.fetchData();
    }, []);
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    exact
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="main">
                                    <Home />
                                </div>
                            </div>
                            <Footer />
                            <ProductViewModal />
                        </>
                    }
                />
                <Route
                    path="/catalog"
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="main">
                                    <Catalog />
                                </div>
                            </div>
                            <Footer />
                            <ProductViewModal />
                        </>
                    }
                />
                <Route
                    path="/catalog/:slug"
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="main">
                                    <Product />
                                </div>
                            </div>
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <>
                            <Header />
                            <div className="container">
                                <div className="main">
                                    <Cart />
                                </div>
                            </div>
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/pay"
                    element={
                        <PrivateRoute
                            check_user={true}
                            check_admin={false}
                            route="/login"
                        >
                            <Header />
                            <div className="container">
                                <div className="main">
                                    <Payment />
                                </div>
                            </div>
                            <Footer />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <PrivateRoute
                            check_user={false}
                            check_admin={false}
                            route="/account"
                        >
                            <Authentication />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/account/*"
                    element={
                        <PrivateRoute
                            check_user={true}
                            check_admin={false}
                            route="/login"
                        >
                            <Header />
                            <div className="container">
                                <div className="main">
                                    <Account />
                                </div>
                            </div>
                            <Footer />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/admin/*"
                    element={
                        <PrivateRoute
                            check_user={true}
                            check_admin={true}
                            route="/login"
                        >
                            <Admin />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
};

export default ElementRoutes;
