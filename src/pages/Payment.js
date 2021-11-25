import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardPay from '../components/payment/CardPay';
import InforCart from '../components/cart/InforCart';
import GetUserProvider from '../assets/firebase-data/getUserAPI';
import CartContext from '../stores/CartContext';
import logo from '../assets/images/emptycart.jpg'
import EmptyCart from './EmptyCart';

function Payment(){
    const CrtCtx=React.useContext(CartContext);
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        fontSize: "30px",
      }));

    if(CrtCtx.totalBook===0){
        return (
            <EmptyCart/>
        )
    }
    return (
        <GetUserProvider>
        <Grid container spacing={8}>
        <Grid item xs={8}>
            <Item>
            <CardPay/>
            </Item>
        </Grid>
        <Grid item xs={4}>
            <InforCart pay={false}/>
        </Grid>
        </Grid>
        </GetUserProvider>
    )
}

export default Payment
