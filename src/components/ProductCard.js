import React from 'react'
import PropTypes from 'prop-types'
import Rating from '@mui/material/Rating';

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { set } from '../redux/product-modal/productModalSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

const ProductCard = props => {

    const dispatch = useDispatch()
    console.log(props.data);
    const getOldPrice= ()=>{
        if ('promotion' in props.data){
            return(
                    <span className="product-card__price__old">
                     <del>{numberWithCommas(props.data.price)}đ</del> 
                    </span>
            );
        }
        else return(<></>);
    }
    const getPrice = ()=>{
        if ('promotion' in props.data){
            return Number(props.data.price*(1-props.data.promotion/100)).toLocaleString();
        }
        else return Number(props.data.price).toLocaleString();
    }
    return (
        <div className="product-card">
            <Link to={`/catalog/${props.data.slug}`}>
                <div className="product-card__image">
                    <img src={props.data.image01} alt="" />
                    <img src={props.data.image02} alt="" />
                </div>
                <h3 className="product-card__name">{props.data.title}</h3>
                <h3 className="product-card__name"><Rating name="read-only" value={Number(props.data.totalPoint/props.data.totalReview).toFixed(1)} readOnly precision={0.5} /><span>({props.data.totalReview})</span></h3>

                <div className="product-card__price">
                     {getPrice()}đ
                    {getOldPrice()}
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"    
                    icon="bx bx-cart"
                    animate={true}
                    onClick={() => dispatch(set(props.data.slug))}
                >
                    chọn mua
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
