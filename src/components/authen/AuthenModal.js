import React, { useEffect, useState, useContext } from 'react'
import { AuthState } from "../../stores/AppState"
import Button from '../Button'
import Authentication from "./Authentication"

const ProductViewModal = () => {
    const { state, changeAuthState } = useContext(AuthState); 

    return (
        <div className={`product-view__modal ${state !== "login"  ? '' : 'active'}`}>
                <Authentication />
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"    
                        onClick={()=>changeAuthState("")}
                    >
                        đóng
                    </Button>
                </div>
        </div>
    )
}

export default ProductViewModal
