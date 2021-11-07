import {useContext, useState} from "react";
import Backdrop from "../modal/Backdrop";
import Modal from "../modal/Modal";
import CartContext from "../../stores/cart-context";
import classes from './BookforCart.module.css'
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
function BookforCart(props){

    const CrtCtx=useContext(CartContext);
    const [isModalOpen, setModal]=useState(false);

    function onRemove(){
        setModal(true);
    }

    function onHandleClickModal(){
        setModal(false);
    }

    function onHandelRemove(){
        setModal(false);
        CrtCtx.removeCart(props.data.id);
    }
    
    function onHandleChange(event){
        console.log(event.target.value);
        if(event.target.value>=1){
            CrtCtx.changeQuantity(props.data.id, Number(event.target.value));
        }
    }

    function onIncrease(){
        CrtCtx.changeQuantity(props.data.id, props.data.quantity+1);
    }

    function onDecrease(){
        if(props.data.quantity>1){
            CrtCtx.changeQuantity(props.data.id, props.data.quantity-1);
        }

    }
    function showPrice(){
        return Number(props.data.price)*(1-Number(props.data.promotion)/100)*props.data.quantity;
    }

    function show_promotion(){
        console.log(props.data.promotion);
        if (Number(props.data.promotion)!==0){
            return(
            <div>
            <p id={classes.promotion}>
                -{props.data.promotion}%
            </p>
            </div>
            )
        }
        else{
            return(
                <div>
                <p id={classes.promotion}>
                </p>
                </div>
            )
        }

    }

    return (
        <div>
            <div className={`${classes.card} ${classes.flex_row}`}>
                <div className={`${classes.bookforcart} ${classes.flex_row}`}>
                <Link to={"/detail="+props.data.id}>
                <button>
                { 'img' in props.data ?
                <img src={props.data.img} alt={props.data.name}/>
                : <img />
                }
                </button>
                </Link>                    
                <div>
                        <p>
                            {props.data.name}
                        </p>
                        <p>
                            {props.data.price}<u>đ</u>
                        </p>
                        <p id={classes.promotion}>
                            {show_promotion()}
                        </p>
                    </div>
                </div>
                <div className={`${classes.changequanti} ${classes.flex_row}`}>
                    <div className={classes.price_cart}>
                        {showPrice()}<u>đ</u>
                    </div>
                    <div className={`${classes.changequan} ${classes.flex_row}`}>
                        <button className={classes.input_dec} onClick={onDecrease}>
                            <i className='fas fa-minus'></i>
                        </button>
                        <input type='number'
                                // min='1'
                                value={props.data.quantity}
                                onChange={onHandleChange}
                        >
                        </input> 
                        <button className={classes.input_inc} onClick={onIncrease}>
                            <i className='fas fa-plus'></i>
                        </button>
                    </div>
                    <div className={classes.delete_book}>
                        <button onClick={onRemove}>
                        <i className='fas fa-trash' ></i>
                        </button>
                    </div>
                </div>
            {isModalOpen&&<Modal onClickNo={onHandleClickModal} onClickYes={onHandelRemove}/>}
            {isModalOpen&&<Backdrop onClickBackdrop={onHandleClickModal}/>}
            </div>
        </div>
    )
}

export default BookforCart