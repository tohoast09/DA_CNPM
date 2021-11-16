import { Route, Switch } from "react-router";
import AccountNavigation from "./AccountNav/AccountNavigation";
import AccNavBar from "./AccountNav/AccNavBar";
import Address from "./Address/Address";
import Order from "./Order/Order";
import UserInfo from "./Info/UserInfo";
import Noti from "./Noti/Noti";
import OrderDetail from "./Order/OrderDetail/OrderDetail";
import { Container, Row } from "reactstrap";
import classes from "./Account.module.css";
import ChangeAvatar from "./AccountNav/ChangeAvatar";
function Account() {
    return (
        <div className={classes.Info}>
            <Row>
                <AccountNavigation />
                <Container className={classes.Content}>
                    <Switch>
                        <Route path="/account" exact>
                            <UserInfo />
                        </Route>
                        <Route path="/account/address">
                            <Address />
                        </Route>
                        <Route path="/account/orders">
                            <Order />
                        </Route>
                        <Route path="/account/noti">
                            <Noti />
                        </Route>
                        <Route path="/account/orderdetail">
                            <OrderDetail />
                        </Route>
                        <Route path="/account/changeavatar">
                            <ChangeAvatar/>
                        </Route>
                    </Switch>
                </Container>
            </Row>
        </div>
    );
}
export default Account;
