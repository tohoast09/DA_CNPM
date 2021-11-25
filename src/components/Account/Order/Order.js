import OrderCard from "./OrderCard";
// import "./Order.css";
import order from "./Order.module.css";
import style from "../Account.module.css";
import { useUserInfo } from "../../../context/getUserAPI";
// import OrderDetail from "./OrderDetail/OrderDetail";

// const DUMMY_DATA = [
//     {
//         id: "123456789",
//         date: "01/01/2021",
//         description: "Some description.",
//         price: "200000đ", //tổng giá
//         status: "Hoàn thành",
//         className: "orderItem",
//         payment: "Paypal",
//         book: [{id:1, quantity:2, book_price:1234, img:'link'},{id:2, quantity:4, book_price:15000, img:'link'}]
//     },
//     {
//         id: "123456789",
//         date: "01/01/2021",
//         description: "Some description.",
//         price: "200000đ",
//         status: "Hoàn thành",
//         className: "orderItem",
//     },
//     {
//         id: "123456789",
//         date: "01/01/2021",
//         description: "Some description.",
//         price: "200000đ",
//         status: "Hoàn thành",
//         className: "orderItem",
//     },
// ];

function Order() {
    const { orders } = useUserInfo();
    const getDescription = (order) => {
        const firstbook = order.data.books[0].bookName;
        const numberleft = order.data.books.length - 1;
        if (numberleft)
            return firstbook + " và " + numberleft + " sản phẩm khác";
        else return firstbook;
    };
    const getCost = (order) => {
        var bookList = order.data.books;
        var i = 0;
        var res = 0;
        for (i = 0; i < bookList.length; i++) {
            res += bookList[i].price * bookList[i].quantity;
        }
        return res;
    };
    // const convertDateTime = (timeStamp) => {
    //     return timeStamp.toDate().toLocaleDateString("pt-PT");
    // };
    return (
        <div className={order.UserOrder}>
            <h1>Đơn hàng của tôi</h1>
            <div className={`${style.MainContent} ${order.order}`}>
                <div className={style.orderInsideContent}>
                    <div className={order.orderList}>
                        <div className={`${order.orderCard} ${order.bar}`}>
                            <div className={order.orderId}>
                                <span>Mã đơn</span>
                            </div>
                            <div className={order.orderDate}>
                                <span>Ngày đặt</span>
                            </div>
                            <div
                                className={`${order.orderDescription} ${order.bar}`}
                            >
                                <span>Mô tả</span>
                            </div>
                            <div className={order.orderPrice}>
                                <span>Giá</span>
                            </div>
                            <div className={order.orderStatus}>
                                <span>Trạng thái</span>
                            </div>
                        </div>

                        {orders.map((order) => {
                            return (
                                <OrderCard
                                    key={order.id}
                                    id={order.id}
                                    date={order.data.createAt.toDate().toLocaleDateString("pt-PT")}
                                    description={getDescription(order)}
                                    cost={getCost(order)}
                                    status={order.data.status}
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
