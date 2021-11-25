import React, { useRef, useEffect, useContext } from "react";
import ReactDOM from "react-dom"
import CartContext from "../../stores/CartContext";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });



export default function Paypal(props) {
    const CrtCtx=useContext(CartContext);
    console.log((CrtCtx.totalPay*0.000044).toFixed(1));
    const CreateOrder = (data, actions) =>{
        return actions.order.create(
            {
                intent: "CAPTURE",
                purchase_units: [
                    {
                    description: "pay for BkStore",
                    amount: {
                        currency_code: "USD",
                        value: (CrtCtx.totalPay*0.000044).toFixed(1),
                    },
                    },
                ],
                application_context: {
                    shipping_preference: "NO_SHIPPING"
                }    
            }
        );
    }

    const onApprove= async (data, actions)=>{
        try{
            const data_recv= await actions.order.capture();
            props.onSuccess();
        }
        catch(err){
            props.onError();
        }
    }

    return (
        <PayPalButton
        createOrder={(data, actions) => CreateOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    );
}

