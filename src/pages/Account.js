import { Route, Routes } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Address from "../components/Account/Address/Address";
import Order from "../components/Account/Order/Order";
import UserInfo from "../components/Account/Info/UserInfo";
import Noti from "../components/Account/Noti/Noti";
import OrderDetail from "../components/Account/Order/OrderDetail/OrderDetail";
import Wallet from "../components/Account/Wallet/Wallet";
import classes from "../components/Account/Account.module.css";
import ChangeAvatar from "../components/Account/AccountNav/ChangeAvatar";
import AccountNavigation from "../components/Account/AccountNav/AccountNavigation";
import GetUserProvider from "../assets/firebase-data/getUserAPI";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import AccNavBar from "./AccountNav/AccNavBar";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
function Account() {
    return (
        <GetUserProvider>
            <div className={classes.Info}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={6}>
                        <Grid className={classes.gridItem} item xs={3}>
                            <AccountNavigation />
                        </Grid>
                        <Grid className={classes.gridItem} item xs={9}>
                            <div className={classes.Content}>
                                <Routes>
                                    <Route path="/" element={<UserInfo />} />
                                    <Route
                                        path="/address"
                                        element={<Address />}
                                    />
                                    <Route
                                        path="/orders/"
                                        element={<Order />}
                                    />
                                    <Route path="/noti/" element={<Noti />} />
                                    <Route
                                        path="/orderdetail"
                                        element={<OrderDetail />}
                                    />
                                    <Route
                                        path="/changeavatar"
                                        element={<ChangeAvatar />}
                                    />
                                    <Route
                                        path="/wallet"
                                        element={<Wallet />}
                                    />
                                </Routes>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                {/* <AccountNavigation />
                <div className={classes.Content}>
                    <Routes>
                        <Route path="/" element={<UserInfo />} />
                        <Route path="/address" element={<Address />} />
                        <Route path="/orders/" element={<Order />} />
                        <Route path="/noti/" element={<Noti />} />
                        <Route path="/orderdetail" element={<OrderDetail />} />
                        <Route
                            path="/changeavatar"
                            element={<ChangeAvatar />}
                        />
                        <Route path="/wallet" element={<Wallet />} />
                    </Routes>
                </div> */}
            </div>
        </GetUserProvider>
    );
}
export default Account;
