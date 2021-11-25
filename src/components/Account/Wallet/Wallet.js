import React from "react";
import wallet from "./Wallet.module.css";
import Button from "@mui/material/Button";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

function Wallet() {
    const tempBalance = 1000000;
    return (
        <div className={wallet.Userwallet}>
            <h1>Ví BK</h1>
            <div className={wallet.MainContent}>
                <div className={wallet.walletInsideContent}>
                    <AccountBalanceWalletOutlinedIcon className={wallet.icon} />
                    <span>Số dư tài khoản</span>
                    <span className={wallet.balance}>₫{tempBalance}</span>
                </div>
                <Button
                    className={wallet.button}
                    variant="contained"
                    size="large"
                >
                    Nạp tiền
                </Button>
            </div>
        </div>
    );
}

export default Wallet;
