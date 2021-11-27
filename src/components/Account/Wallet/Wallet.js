import React, { useState } from "react";
import wallet from "./Wallet.module.css";
import Button from "@mui/material/Button";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";
import AddMoney from "./AddMoney";
function Wallet() {
    const {userInfo}=useUserInfo();
    const balance=userInfo.wallet;
    console.log(balance);
    const [add, setAdd]=useState(false);
    const addMoney = ()=>{
        setAdd(true);
    }
    const onFinish=()=>{
        setAdd(false);
    }
    return (
        <div className={wallet.Userwallet}>
            <h1>Ví BK</h1>
            <div className={wallet.MainContent}>
                <div className={wallet.walletInsideContent}>
                    <AccountBalanceWalletOutlinedIcon className={wallet.icon} />
                    <span>Số dư tài khoản</span>
                    <span className={wallet.balance}>{Number(balance).toLocaleString()}₫</span>
                </div>
                <Button
                    className={wallet.button}
                    variant="contained"
                    size="large"
                    onClick={addMoney}
                >
                    Nạp tiền
                </Button>
                {add&&<AddMoney finish={onFinish}/>}
            </div>
        </div>
    );
}

export default Wallet;
