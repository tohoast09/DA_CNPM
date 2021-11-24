import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import { Grid } from '@mui/material'
import InforCart from '../components/cart/InforCart'
import productData from '../assets/fake-data/products'


function Cart(props) {



    return (
        <Helmet title="Giỏ hàng">
           <Grid container spacing={3}>
               <Grid item xs={7}>
                    <CartList list={}/>
               </Grid>
               <Grid item xs={5}>
                   <InforCart/>
                </Grid>
           </Grid>
        </Helmet>
    )
}


export default Cart