import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import { useContext } from 'react';
import CartContext from '../../stores/CartContext';


export default function InforCart() {
  const CrtCtx=useContext(CartContext);
  return (
    <Paper sx={{ p: 4, flexGrow: 1 }}>      
    <Stack spacing={2}  divider={<Divider orientation="horizontal" flexItem />}>
      <Stack spacing={2}>
        <Stack direction='row' spacing={5} alignItems='center' justifyContent='space-between'>
      <Typography variant="h6" >
        Tổng sản phẩm:
      </Typography>      
      <Typography variant="h6" fontWeight='600'>
        {CrtCtx.totalBook}<u>đ</u>
      </Typography>            
      </Stack>
      <Stack direction='row' spacing={16} alignItems='center' justifyContent='space-between'>
      <Typography variant="h6">
        Tổng tiền:
      </Typography>      
      <Typography variant="h6" fontWeight='600'>
        {CrtCtx.totalPrice}<u>đ</u>
      </Typography>            
      </Stack>       
      <Stack direction='row' spacing={16} alignItems='center' justifyContent='space-between'>
      <Typography variant="h6">
      Giảm khuyến mãi
      </Typography>      
      <Typography variant="h6" fontWeight='600'>
       {CrtCtx.totalPromotion}<u>đ</u>
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
        {CrtCtx.totalPay}<u>đ</u>
      </Typography>     
      </Stack>
      <Button  size="large" variant='contained'>Thanh toán</Button>
      <Button size="large" variant='contained'>Tiếp tục mua hàng</Button>

      </Stack> 
      </Stack>
    </Paper>
  );
}   
