import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Order.module.css'

function OrderCard(props) {
    return (
        <div className={classes.orderCard}>
            <div className={classes.orderId}><span>{props.id}</span></div>
            <div className={classes.orderDate}><span>{props.date}</span></div>
            <div className={classes.orderDescription}><span>{props.description}</span><Link to='/account/orderdetail'>Chi tiết</Link></div>
            <div className={classes.orderPrice}><span>{props.price}</span></div>
            <div className={classes.orderStatus}><span>{props.status}</span></div>
        </div>
        
    )
}
 
export default OrderCard
