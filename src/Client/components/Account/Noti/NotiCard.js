import React from 'react'
// import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import noti from './Noti.module.css'

function NotiCard(props) {
    return (
        <div className={noti.notiCard}>
            <div className={noti.notiDate}>{props.date}</div>
            <div className={noti.notiDescription}>{props.description}</div>
            <Button className={`${noti.readNoti} ${noti.btn}`}>Đánh dấu đã đọc</Button>
            <Button className={`${noti.delNoti} ${noti.btn}`}>Xóa</Button>
        </div>
        
    )
}
 
export default NotiCard
