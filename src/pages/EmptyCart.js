import { ClassNames } from '@emotion/react'
import React from 'react'
import logo from '../assets/images/emptycart.jpg'
import classes from './EmptyCart.module.css'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router'
export default function EmptyCart() {
    const naviagte=useNavigate();
    return (
        <>
        <div className={classes.empty}>
            <img src={logo}/>
        </div>
        <div className={classes.empty}>
        <Typography variant="h5" gutterBottom>
        Bạn chưa có món hàng nào trong giỏ, hãy tiếp tục khám phá nhé
        </Typography>
        </div>

        <div className={classes.empty}>
            <Button variant="contained" onClick={()=> naviagte('/')}>Tiếp tục mua hàng</Button>
        </div>
        </>
    )
}
