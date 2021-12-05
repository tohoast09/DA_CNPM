import React from 'react'
import { ClipLoader } from 'react-spinners'
import style from './Loading.module.css'
export default function Loading(props) {
    return (
        <div className={style.loading}>
        <ClipLoader color="#4A90E2" loading={props.loading} size={50} />
        </div>
    )
}
