import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import { useContext } from 'react';
import CartContext from '../../stores/CartContext';
import { useNavigate } from 'react-router';
import { useUserContext } from '../../stores/AppState';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InforCart(props) {
  let navigate=useNavigate();
  const CrtCtx=useContext(CartContext);
  const {user}=useUserContext();
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };
  const onPayment = ()=>{
    if(user===null){
      setOpen(true);
    }
    else{
      navigate('/pay');
    }
  }



  return (
    <Paper sx={{ p: 4, flexGrow: 1 }}>      
    <Stack spacing={2}  divider={<Divider orientation="horizontal" flexItem />}>
      <Stack spacing={2}>
        <Stack direction='row' spacing={5} alignItems='center' justifyContent='space-between'>
      <Typography variant="h6" >
        Tổng sản phẩm:
      </Typography>      
      <Typography variant="h6" fontWeight='600'>
        {CrtCtx.totalBook}
      </Typography>            
      </Stack>
      <Stack direction='row' spacing={16} alignItems='center' justifyContent='space-between'>
      <Typography variant="h6">
        Tổng tiền:
      </Typography>      
      <Typography variant="h6" fontWeight='600'>
        {CrtCtx.totalPrice.toLocaleString()}<u>đ</u>
      </Typography>            
      </Stack>       
      <Stack direction='row' spacing={16} alignItems='center' justifyContent='space-between'>
      <Typography variant="h6">
      Giảm khuyến mãi
      </Typography>      
      <Typography variant="h6" fontWeight='600'>
       {CrtCtx.totalPromotion.toLocaleString()}<u>đ</u>
      </Typography>            
      </Stack>  
      <Stack direction='row' spacing={16} alignItems='center' justifyContent='space-between'>
      <Typography variant="h6">
      Phí giao hàng:
      </Typography>      
      <Typography variant="h6" fontWeight='600'>
        0<u>đ</u>
      </Typography>            
      </Stack>  
      </Stack>
      <Stack spacing={4}>
      <Stack direction='row' spacing={16} alignItems='center' justifyContent='space-between'>
      <Typography variant="h5" fontWeight="600">
      Thành tiền:
      </Typography>      
      <Typography variant="h4" sx={{color: "#4267b2"}} fontWeight='600'>
        {CrtCtx.totalPay.toLocaleString()}<u>đ</u>
      </Typography>     
      </Stack>
      {props.pay&&<Button  size="large" variant='contained' onClick={onPayment}>Thanh toán</Button>}
      <Button size="large" variant='contained' onClick={()=>{navigate('/catalog')}}>Tiếp tục mua hàng</Button>

      </Stack> 
      </Stack>

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
            Bạn cần đăng nhập để thanh toán
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Không đồng ý</Button>
          <Button onClick={()=>navigate('/login')}>Đồng ý</Button>
        </DialogActions>
      </Dialog>


    </Paper>
  );
}   
