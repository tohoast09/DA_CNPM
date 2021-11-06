import OrderCard from "./OrderCard";
// import "./Order.css";
import classes from './Order.module.css';
import style from '../Account.module.css';

const DUMMY_DATA = [
    {
        id: "123456789",
        date: "01/01/2021",
        description: "Some description.",
        price: "200000đ",
        status: "Hoàn thành",
        className: "orderItem",
    },
    {
        id: "123456789",
        date: "01/01/2021",
        description: "Some description.",
        price: "200000đ",
        status: "Hoàn thành",
        className: "orderItem",
    },
    {
        id: "123456789",
        date: "01/01/2021",
        description: "Some description.",
        price: "200000đ",
        status: "Hoàn thành",
        className: "orderItem",
    },
];

function Order() {
    return (
        <div className={style.UserInfo}>
            <h1>Đơn hàng của tôi</h1>
            <div className={style.MainContent}>
                <div className={style.InsideContent}>
                    <div className={classes.OrderList}>
                        <div className={classes.OrderCard}>
                            <div className={classes.orderId}>Mã đơn</div>
                            <div className={classes.orderDate}>Ngày đặt</div>
                            <div className={`${classes.orderDescription} ${classes.bar}`}>Mô tả</div>
                            <div className={classes.orderPrice}>Giá</div>
                            <div className={classes.orderStatus}>Trạng thái</div>
                        </div>

                        {DUMMY_DATA.map((order) => {
                            return (
                                <OrderCard
                                    id={order.id}
                                    date={order.date}
                                    description={order.description}
                                    price={order.price}
                                    status={order.status}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Order;
