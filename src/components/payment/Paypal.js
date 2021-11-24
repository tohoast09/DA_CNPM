import React, { useRef, useEffect, useContext } from "react";
import CartContext from '../../stores/CartContext';
import classes from './Pay.module.css'



export default function Paypal(props) {
    const CrtCtx=useContext(CartContext);

    const paypal = useRef();
    useEffect(() => {
    window.paypal
        .Buttons({
        createOrder: (data, actions, err) => {
            return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
                {
                description: "pay for BkStore",
                amount: {
                    currency_code: "USD",
                    value: CrtCtx.totalPay*0.000044,
                },
                },
            ],
            application_context: {
                shipping_preference: "NO_SHIPPING"
            }

            });
        },
        onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log("Success"+order);
        },
        onError: (err) => {
            console.log(err);
        },
        })
        .render(paypal.current);
    }, []);

    return (
    <div className={classes.mt}>
        <div ref={paypal}></div>
    </div>
    );
}
