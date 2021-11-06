import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Order.module.css'

function OrderCard(props) {
    return (
        <div className={classes.OrderCard}>
            <div className={classes.orderId}>{props.id}</div>
            <div className={classes.orderDate}>{props.date}</div>
            <div className={classes.orderDescription}>{props.description}<Link>Chi tiết</Link></div>
            <div className={classes.orderPrice}>{props.price}</div>
            <div className={classes.orderStatus}>{props.status}</div>
        </div>
        
    )
}
 
export default OrderCard
