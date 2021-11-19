import OrderCard from "./OrderCard";
// import "./Order.css";
import order from './Order.module.css';
import style from '../Account.module.css';
import OrderDetail from "./OrderDetail/OrderDetail";

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
        <div className={order.UserOrder}>
            <h1>Đơn hàng của tôi</h1>
            <div className={`${style.MainContent} ${order.order}`}>
                <div className={style.orderInsideContent}>
                    <div className={order.OrderList}>
                        <div className={`${order.orderCard} ${order.bar}`}>
                            <div className={order.orderId}><span>Mã đơn</span></div>
                            <div className={order.orderDate}><span>Ngày đặt</span></div>
                            <div className={`${order.orderDescription} ${order.bar}`}><span>Mô tả</span></div>
                            <div className={order.orderPrice}><span>Giá</span></div>
                            <div className={order.orderStatus}><span>Trạng thái</span></div>
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
            {/* <OrderDetail/> */}
        </div>
    );
}
export default Order;
