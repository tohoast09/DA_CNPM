import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import CardPay from './CardPay';
import { styled } from '@mui/material/styles';
import InfoCart from '../cart/InfoCart';

function Payment(){
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(4),
        color: theme.palette.text.secondary,
      }));
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 20}}>
        <Grid item xs={7}>
            <Item>
            <CardPay/>
            </Item>
        </Grid>
        <Grid item xs={5}>
            <InfoCart/>
        </Grid>
        </Grid>
    )
}

export default Payment
