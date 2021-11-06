import OrderCard from "./AddressCard";
import "./Noti.css";

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

function Noti() {
    return (
        <div className="UserNoti">
            <h1>Thông báo</h1>
            <div className="MainContent">
                <div className="notiInsideContent">
                    <div className="orderList">
                        {/* <div className="orderCard">
                            <div className="orderId">Mã đơn</div>
                            <div className="orderDate">Ngày đặt</div>
                            <div className="orderDescription bar">Mô tả</div>
                            <div className="orderPrice">Giá</div>
                            <div className="orderStatus">Trạng thái</div>
                        </div> */}

                        {DUMMY_DATA.map((order) => {
                            return (
                                <OrderCard
                                    // id={order.id}
                                    date={order.date}
                                    description={order.description}
                                    // price={order.price}
                                    // status={order.status}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Noti;
