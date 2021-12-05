import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import CartContext from '../stores/CartContext'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
// import { withRouter } from 'react-router-dom';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux'
import LoadingButton from '@mui/lab/LoadingButton';
// import { addItem } from '../redux/shopping-cart/cartItemsSlide'
import { remove } from '../redux/product-modal/productModalSlice'

import numberWithCommas from '../utils/numberWithCommas'
import { Navigate, useNavigate } from 'react-router';
import Stack from "@mui/material/Stack";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import StarRateIcon from '@mui/icons-material/StarRate';
import { updateDoc,doc } from '@firebase/firestore';
import ProductData from '../assets/firebase-data/products';
import { db } from '../firebase';
const ProductView = props => {
    const PrdCtx=useContext(ProductData);
    const dispatch = useDispatch()
    const navigate=useNavigate();
    let product = props.product

    if (product === undefined) product = {
        title: "",
        price: '',
        image01: null,
        image02: null,
        categorySlug: "",
        slug: "",
        description: ""
    }
    // console.log("AAAAAAA "+product.id);
    const [loadingReview, setLoadingReview]=useState(false);
    const [previewImg, setPreviewImg] = useState(product.image01)

    const [descriptionExpand, setDescriptionExpand] = useState(false)
    const [reviewpoint,setReviewPoint]=useState(0);
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

    const onReview=async ()=>{
        const point=product.totalPoint;
        const review=product.totalReview;
        setLoadingReview(true);
        await updateDoc(doc(db,'/books',product.id),{
            "totalPoint":point+reviewpoint,
            "totalReview":review+1,
        })
        PrdCtx.fetchData();
        setLoadingReview(false);
    }
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
    console.log(descriptionExpand);
    // console.log("AAAAAAAAAAAAAAAAA");
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
                    <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}} ></div>
                    <div className="product-description__toggle">
                        {product.description.length>400&&<Button size="sm" variant='contained' onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'Thu Gọn' : 'Xem thêm'
                            }
                        </Button>
                        }
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <Rating name="read-only" value={Number(product.totalPoint/product.totalReview).toFixed(1)} readOnly precision={0.5} />
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {numberWithCommas(product.price)}đ
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
                <div className="product__info__item">
                <div className="product__info__item__title">
                        Đánh giá của bạn
                    </div>
                    <Stack spacing={2}>
                    <Rating name="read-only" value={reviewpoint} onChange={(event, newValue)=>{setReviewPoint(newValue)}} precision={0.5} />
                    <LoadingButton
                        startIcon={<StarRateIcon/>}
                        loading={loadingReview}
                        loadingPosition="end"
                        variant="contained"
                        sx={{
                            width:'30%'
                        }}
                        endIcon={<StarRateIcon/>}
                        onClick={onReview}
                    >
                        Đánh giá
                    </LoadingButton>
                    </Stack>
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
