import React from "react";
import { Grid } from "@mui/material";
import CardCart from "./CardCart";
function CartList(props) {
    let element=props.list.map((item, index)=>{
        return <Grid item>
            <CardCart data={item} key={index}/>
        </Grid>
    })


    return (
        <Grid container direction='column' spacing={2}>
            {element}
        </Grid>
    )
}

export default CartList;