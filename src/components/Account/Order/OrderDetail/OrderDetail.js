import React, { useState } from "react";
import order from "../Order.module.css";
import OrderDetailCard from "./OrderDetailCard";
import { useUserInfo } from "../../../../assets/firebase-data/getUserAPI";

function OrderDetail() {
    const { orderDetail } = useUserInfo();
    console.log("callOrderdetail: ", orderDetail);
    const getCost = (bookList) => {
        // var bookList = order.data.books;
        var i = 0;
        var res = 0;
        for (i = 0; i < bookList.length; i++) {
            res += bookList[i].price * bookList[i].quantity;
        }
        return res;
    };
    const getStatus=()=>{
        switch(orderDetail.data.status){
            case 'unconfirmed':
                return 'Đang xử lý';
            case 'complete':
                return 'Giao hàng thành công';
            case 'in transit':
                return 'Đang vận chuyển';
        }
    }
    return (
        <div className={order.OrderDetail}>
            <h1>
                Chi tiết đơn hàng #<span>{orderDetail.id}</span>
            </h1>
            <div className={`${order.MainContent} ${order.orderDetail}`}>
                <div className={order.orderInsideContent}>
                    <ul>
                        <li>
                            <div
                                className={`${order.sideInfo} ${order.orderAddress}`}
                            >
                                <span className={order.infoName}>
                                    {orderDetail.data.name}
                                </span>
                                <span className={order.infoAddress}>
                                    {orderDetail.data.location_detail}
                                    {", "}
                                    {orderDetail.data.location_3}
                                    {", "}
                                    {orderDetail.data.location_2}
                                    {", "}
                                    {orderDetail.data.location_1}
                                </span>
                                <span className={order.infoNumber}>
                                    Số điện thoại: {orderDetail.data.phone}
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${order.sideInfo} ${order.orderTransport}`}
                            >
                                <span className={order.transportName}>
                                    {"Thời gian đặt hàng: "}
                                    {orderDetail.data.createAt
                                        .toDate()
                                        .toLocaleDateString("pt-PT")}
                                </span>
                                <span className={order.transportTime}>
                                    {"Thời gian nhận hàng: "}
                                    {orderDetail.data.deliveryAt
                                        .toDate()
                                        .toLocaleDateString("pt-PT")}
                                </span>
                                <span className={order.transportStatus}>
                                    {"Trạng thái: "}
                                    {getStatus()}
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${order.sideInfo} ${order.orderPayment}`}
                            >
                                <span className={order.paymentName}>
                                    {"Hình thức thanh toán: "}
                                    {orderDetail.data.method}
                                </span>
                                <span className={order.paymentStatus}>
                                    Trạng thái: Thanh toán thành công
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className={order.lower}>
                        <div className={order.titlebar}>
                            <div className={order.orderProduct}>
                                <span>Sản phẩm</span>
                            </div>
                            <div className={order.unitPrice}>
                                <span>Đơn giá</span>
                            </div>
                            <div className={order.productQty}>
                                <span>Số lượng</span>
                            </div>
                            {/* <div className={order.productDiscount}>
                                <span>Giảm giá</span>
                            </div> */}
                            <div className={order.totalPrice}>
                                <span>Tạm tính</span>
                            </div>
                        </div>
                        {orderDetail.data.books.map((book) => {
                            console.log(book);
                            return <OrderDetailCard data={book}/>
                        })}
                    </div>

                    <div className={order.totalCalc}>
                        {/* <div className={order.field}>
                            <span className={order.totalField}>Tạm tính:</span>{" "}
                            <span className={order.totalValue}>100.000đ</span>
                        </div>
                        <div className={order.field}>
                            <span className={order.totalField}>Giảm giá:</span>{" "}
                            <span className={order.totalValue}>0đ</span>
                        </div> */}
                        {/* <div className={order.field}>
                            <span className={order.totalField}>
                                Phí vận chuyển:
                            </span>{" "}
                            <span className={order.totalValue}>25.000đ</span>
                        </div> */}
                        <div className={order.field}>
                            <span className={order.totalField}>Tổng cộng:</span>{" "}
                            <span
                                className={`${order.totalValue} ${order.totalCost}`}
                            >
                                {getCost(orderDetail.data.books).toLocaleString()}₫
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
