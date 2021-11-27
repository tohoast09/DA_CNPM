import * as React from 'react';
import Button from '@mui/material/Button';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import style from './Pay.module.css';
import { useUserInfo } from '../../assets/firebase-data/getUserAPI';
import CartContext from '../../stores/CartContext';
export default function BKWallet(props) {
  const {payByWallet}=useUserInfo();
  const CrtCtx=React.useContext(CartContext);
  const pay = async ()=>{
    try{
      await payByWallet(Number(CrtCtx.totalPay));
      props.onSuccess();
    }
    catch (err){
      if (err==='Not enough money'){
        props.onErrorNotEnough();
      }
      else{
        props.onError();
      }
    }
  }
  return (
    <div className={style.paypal}>
    <Button variant="contained" disableElevation size="large" startIcon={<AccountBalanceWalletIcon/>} onClick={pay}>
      Ví BK
    </Button>
    </div>
  );
}