import React from "react";
import chef from "./Chef.module.css";
import { useState } from "react";
import {doc, getDocs, collection, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "../../connectFB";
// import axios from "axios";
// import Button from "@mui/material/Button";
function OrderStatePopup(props) {
    const _id = localStorage.getItem("currentOrder");
    const [state, setState] = useState("Pending");
    const [timeDone, setTimeDone] = useState("");
    // const [refund, setRefund] = useState(props.customer.money);
    const [statusButton, setstatusButton] = useState("");
    const [confirmPopup, setconfirmPopup] = useState(false);

    function confirmPopupHandler(status) {
        setState(status);
        if (status === "Done") setstatusButton("Hoàn thành");
        else if (status === "Canceled") setstatusButton("Hủy đơn");
        else if (status === "Doing") setstatusButton("Nhận đơn");
        setconfirmPopup(true);
    }

    function confirmUpdateTimeDone() {
        setTimeDone(Date());
    }
    // function confirmUpdateRefund(total) {
    //     setRefund(total);
    // }

    const onConfirmHandler = async (status) => { 
        await setconfirmPopup(false); 
        // await update();
        // await props.onChooseState(status);
        setState(status);
        const orderRef = doc(db, "users/"+props.cusID+"/orders/"+props.id); 
        if (statusButton === "Hoàn thành") { 
            updateDoc(orderRef, {status: "complete"});
        }
        else if (statusButton === "Nhận đơn") {
            updateDoc(orderRef, {status: "preparing"});
        } else if (statusButton === "Hủy đơn") {
            deleteDoc(orderRef);
        }
        
    };
    function onCancelHandler() {
        setconfirmPopup(false);
    }
    function ConfirmState(props) {
        return (
            <div className={chef.ConfirmState}>
                <span className={chef.confirmTitle}>
                    Xác nhận "{props.status}"
                </span>
                <button
                    onClick={props.onConfirm}
                    className={chef.confirmStateButton}
                >
                    Xác nhận
                </button>
                <button
                    onClick={props.onCancel}
                    className={chef.cancelStateButton}
                >
                    Hủy
                </button>
            </div>
        );
    }
    return (
        <div className={chef.orderStatePopup}>
            {props.level === 2 && (
                <button
                    onClick={() => confirmPopupHandler("Doing")}
                    className={chef.acceptOrder}
                >
                    Đang vận chuyển
                </button>
            )}

            {props.level===1 && (
                <button
                    onClick={() => {
                        confirmPopupHandler("Done");
                        confirmUpdateTimeDone();
                    }}
                    className={chef.finishOrder}
                >
                    Giao hàng thành công
                </button>
            )}

            {props.level===0 && (
                <button
                    className={chef.finishOrder}
                >
                    Đơn hoàn thành
                </button>
            )}
            
            {(props.level===1||
                props.level===2) && (
                <button
                    onClick={() => {
                         confirmPopupHandler("Canceled");
                    //     confirmUpdateRefund(refund + props.total);
                    }}
                    className={chef.cancelOrder}
                >
                    Hủy đơn
                </button>
            )}
            {confirmPopup && (
                <ConfirmState
                    status={statusButton}
                    onConfirm={onConfirmHandler}
                    onCancel={onCancelHandler}
                />
            )}
        </div>
    );
}

export default OrderStatePopup;