import React, { useContext, useEffect, useState } from 'react'
import Helmet from '../components/Helmet'
import { Grid } from '@mui/material'
import InforCart from '../components/cart/InforCart'
import CartContext from '../stores/CartContext'
import { useUserContext } from '../stores/AppState'
import CartList from '../components/cart/CartList'
import { useUserInfo } from '../assets/firebase-data/getUserAPI'
import EmptyCart from './EmptyCart'
function Cart(props) {
    const {user}=useUserContext();
    const CrtCtx=useContext(CartContext);
    if(CrtCtx.totalBook===0){
     return (
         <EmptyCart/>
     )
 }
    return (
           <Grid container spacing={10}>
               <Grid item xs={8}>
                    <CartList list={CrtCtx.cart}/>
               </Grid>
               <Grid item xs={4}>
                   <InforCart pay={true}/>
                </Grid>
           </Grid>
      )
}


export default Cart