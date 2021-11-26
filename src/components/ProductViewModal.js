import React, { useEffect, useState, useContext } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import ProductView from './ProductView'

import Button from '@mui/material/Button'
import { remove } from '../redux/product-modal/productModalSlice'

import ProductData from '../assets/firebase-data/products'

const ProductViewModal = () => {
    const productData = useContext(ProductData);
    const productSlug = useSelector((state) => state.productModal.value)
    const dispatch = useDispatch()

    const [product, setProduct] = useState(undefined)

    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug))
    }, [productSlug]);

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product} modal={true}/>
                <div className="product-view__modal__content__close">
                    <Button
                        size="large"    
                        onClick={() => dispatch(remove())}
                        variant='contained'
                    >
                        đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
