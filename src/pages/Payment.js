import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardPay from '../components/payment/CardPay';
import InforCart from '../components/cart/InforCart';

function Payment(){
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
        fontSize: "30px",
      }));
    return (
        <Grid container spacing={5}>
        <Grid item xs={7}>
            <Item>
            <CardPay/>
            </Item>
        </Grid>
        </Grid>
    )
}

export default Payment
