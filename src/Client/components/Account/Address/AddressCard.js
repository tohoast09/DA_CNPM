import React from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from 'reactstrap'

function AddressCard(props) {
    return (
        <div className='addressCard'>
            <div className='addressName'>{props.name}</div>
            <div className='addressLocation'>{props.location_detail}<p>, xã </p></div>
            <div className='addressLocation'>{props.location_1}<p>, huyện </p></div>
            <div className='addressLocation'>{props.location_2}<p>, tỉnh </p></div>
            <div className='addressLocation'>{props.location_3}<p>, SĐT </p></div>
            <div className='addressNumber'>{props.number}</div>
        </div>
        
    )
}
 
export default AddressCard
