import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CartContext from "../../stores/CartContext";
import { useState, useContext } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import "./CardCart.module.css"


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CrtCtx=useContext(CartContext);
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
  

function onRemove(){
  setModal(false);
  CrtCtx.removeCart(props.data.id);
}

function onHandleChange(event){
    console.log(event.target.value);
    if(event.target.value>=1){
        CrtCtx.changeQuantity(props.data.id, Number(event.target.value));
    }
}

function onIncrease(){
    CrtCtx.changeQuantity(props.data.id, props.data.quantity+1);
}

function onDecrease(){
    if(props.data.quantity>1){
        CrtCtx.changeQuantity(props.data.id, props.data.quantity-1);
    }

}



export default function CardCart(props) {
  return (
    <Paper sx={{ p: 2, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Grid container spacing={2} justifyContent="flex-start">
            <Grid item xs={4}>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt={props.data.name} src={props.data.img01}/>
              </ButtonBase>
            </Grid>

            <Grid item xs={8}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" fontWeight="500">
                    {props.data.name}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {props.data.price}<u>đ</u>
                  </Typography>
                  <p style={{
                          color: "white",
                          width: "fit-content",
                          background: "orange",
                          fontWeight: "300",
                  }}>
                    {show_promotion()}
                    </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">
            {showPrice()}<u>đ</u>
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={2} justifyContent='space-around'>
            <Grid item>
              <Stack spacing={0} direction="row" alignItems="center">
                <IndeterminateCheckBoxIcon
                  color="primary"
                  fontSize="large"
                  sx={{ cursor: "pointer" }}
                  onClick={onDecrease}
                />
                <input
                  type="number"
                  style={{
                    width: "40px",
                    height: "24px",
                    textAlign:"center",
                    border: "none",
                    outline: "none"
                  }}
                  value={props.data.quantity}
                  onChange={onHandleChange}
                ></input>

                <AddBoxIcon
                  color="primary"
                  fontSize="large"
                  sx={{ cursor: "pointer" }}
                  onClick={onIncrease}
                />
              </Stack>
            </Grid>
            <Grid item>
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClickOpen}>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


      {/*Backdropppppppppp 
      */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Xóa giỏ hàng"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Sản phẩm này sẽ được xóa khỏi giỏ hàng của bạn. Bạn có chắc chắn muốn xóa?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Không đồng ý</Button>
          <Button onClick={onRemove}>Đồng ý</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
