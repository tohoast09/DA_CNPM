import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import CartContext from '../stores/CartContext'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
// import { withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux'

// import { addItem } from '../redux/shopping-cart/cartItemsSlide'
import { remove } from '../redux/product-modal/productModalSlice'

import numberWithCommas from '../utils/numberWithCommas'
import { Navigate, useNavigate } from 'react-router';
import Stack from "@mui/material/Stack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
const ProductView = props => {

    const dispatch = useDispatch()
    const navigate=useNavigate();
    let product = props.product

    if (product === undefined) product = {
        title: "",
        price: '',
        image01: null,
        image02: null,
        categorySlug: "",
        colors: [],
        slug: "",
        size: [],
        description: ""
    }

    
    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setDescriptionExpand] = useState(false)

    const CrtCtx=useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    function onHandleChange(event){
        if(Number(event.target.value>0)){
            setQuantity(Number(event.target.value));
        }
    }
    
    function onIncrease(){
        setQuantity(prev=>{return prev+1});
    }
    
    function onDecrease(){
        if(quantity>1){
            setQuantity(prev=>{return prev-1});
        }
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)

    }, [product])


    const addToCart = () => {
        let newBook={
            name: product.title,
            img: product.image01,
            id: product.slug,
            price: product.price,
            quantity: quantity,
            promotion: ('promotion' in product)? product.promotion : 0,
        }
        CrtCtx.addToCart(newBook);
    }

    // const goToCart = () => {
    //     if (check()) {
    //         let newItem = {
    //             slug: product.slug,
    //             color: color,
    //             size: size,
    //             price: product.price,
    //             quantity: quantity
    //         }
    //         if (dispatch(addItem(newItem))) {
    //             dispatch(remove())
    //             props.history.push('/cart')
    //         } else {
    //             alert('Fail')
    //         }
    //     }
    // }

    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                    <div className="product-description__toggle">
                        <Button size="sm" variant='contained' onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}
                    </span>
                </div>
               
            
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số lượng
                    </div>
                <Stack spacing={0} direction="row" alignItems="center">
                <IndeterminateCheckBoxIcon
                  color="primary"
                  fontSize="large"
                  sx={{ cursor: "pointer" }}
                  onClick={onDecrease}
                />
                <input
                  type="number"
                  style={{
                    width: "40px",
                    height: "24px",
                    textAlign:"center",
                    border: "none",
                    outline: "none",
                    fontWeight:'600',
                  }}
                  value={quantity}
                  onChange={onHandleChange}
                ></input>

                <AddBoxIcon
                  color="primary"
                  fontSize="large"
                  sx={{ cursor: "pointer" }}
                  onClick={onIncrease}
                />
              </Stack>
                </div>
                <div className="product__info__item">
                    <Button size='large' onClick={addToCart} startIcon={<AddShoppingCartIcon/>} variant='contained'>thêm vào giỏ</Button>
                    <Button size='large' onClick={() => {
                        if('modal' in props){
                            dispatch(remove());
                        }
                        navigate('/cart')
                        } } variant='contained'>mua ngay</Button>
                </div>
            </div>
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                <div className="product-description__toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default ProductView;
