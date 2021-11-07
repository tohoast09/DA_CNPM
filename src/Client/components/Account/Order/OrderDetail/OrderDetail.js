import React from "react";
import order from "../Order.module.css";
import OrderDetailCard from "./OrderDetailCard";

function OrderDetail() {
    return (
        <div className={order.OrderDetail}>
            <h1>Chi tiết đơn hàng #</h1>
            <div className={`${order.MainContent} ${order.orderDetail}`}>
                <div className={order.orderInsideContent}>
                    <ul>
                        <li>
                            <div
                                className={`${order.sideInfo} ${order.orderAddress}`}
                            >
                                <span className={order.infoName}>
                                    Nguyễn Văn A
                                </span>
                                <span className={order.infoAddress}>
                                    KTX khu A, Đông Hòa, Dĩ An, Bình Dương
                                </span>
                                <span className={order.infoNumber}>
                                    0987654321
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${order.sideInfo} ${order.orderTransport}`}
                            >
                                <span className={order.transportName}>
                                    Đơn vị vận chuyển: Giao hàng nhanh
                                </span>
                                <span className={order.transportTime}>
                                    Thời gian nhận: 01/01/2021
                                </span>
                                <span className={order.transportStatus}>
                                    Giao hàng thành công
                                </span>
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${order.sideInfo} ${order.orderPayment}`}
                            >
                                <span className={order.paymentName}>
                                    Thanh toán qua Ví MoMo
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
                            <div className={order.productDiscount}>
                                <span>Giảm giá</span>
                            </div>
                            <div className={order.totalPrice}>
                                <span>Tạm tính</span>
                            </div>
                        </div>

                        <OrderDetailCard />
                    </div>

                    <div className={order.totalCalc}>
                        <div className={order.field}>
                            <span className={order.totalField}>Tạm tính:</span>{" "}
                            <span className={order.totalValue}>100.000đ</span>
                        </div>
                        <div className={order.field}>
                            <span className={order.totalField}>Giảm giá:</span>{" "}
                            <span className={order.totalValue}>0đ</span>
                        </div>
                        <div className={order.field}>
                            <span className={order.totalField}>
                                Phí vận chuyển:
                            </span>{" "}
                            <span className={order.totalValue}>25.000đ</span>
                        </div>
                        <div className={order.field}>
                            <span className={order.totalField}>Tổng cộng:</span>{" "}
                            <span
                                className={`${order.totalValue} ${order.totalCost}`}
                            >
                                125.000đ
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
