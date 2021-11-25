import {createContext, useState} from 'react'

const CartContext=createContext();

export function CartContextProvider(props){
    
    const [userCart, SetUserCart]=useState([])

    const context={
        cart:userCart,
        totalBook: getTotalBook(userCart),
        totalPrice:getPriceCart(userCart),
        totalPromotion:getPromotionCart(userCart),
        totalPay:getPayCart(userCart),
        addToCart: AddToCartHandler,
        removeCart: RemoveBookHandler,
        isInCart: IsInCartHandler,
        changeQuantity: ChangeQuantityHandler,
        clearCart: clearCart,
    };

    function clearCart(){
        SetUserCart([]);
    }
    function getPriceCart(userCart){
        let arr=userCart.map((book)=>{
            return book.price*book.quantity;
        }) 
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    
    function getPromotionCart(userCart){
        let arr=userCart.map((book)=>{
            return book.price*(book.promotion/100)*book.quantity;
        }) 
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    function getPayCart(userCart){
        let arr=userCart.map((book)=>{
            return book.price*(1-book.promotion/100)*book.quantity;
        }) 
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    function getTotalBook(userCart){
        let arr=userCart.map((book)=>{
            return book.quantity;
        })
        let sum=0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }


    function AddToCartHandler(newBook){
        if(IsInCartHandler(newBook.id)===true){
            let elementPos=userCart.map((book)=>{return book.id}).indexOf(newBook.id);
            ChangeQuantityHandler(newBook.id,userCart[elementPos].quantity+newBook.quantity);
        }
        else{
        SetUserCart((prevCart)=>{
            let insertBook={
                ...newBook,
            }
            return prevCart.concat(insertBook);
        })
        }
    }

    function RemoveBookHandler(book_id){
        SetUserCart((prevCart)=>{
            return prevCart.filter(book =>book.id!==book_id);
        })
    }

    function IsInCartHandler(book_id){
        return userCart.some(book => book.id===book_id);
    }

    function ChangeQuantityHandler(book_id, newQuantity){
        SetUserCart(prevCart=>{
            let elementPos=prevCart.map((book)=>{return book.id}).indexOf(book_id);
            let carts=[...prevCart];
            let cart_to_change={...prevCart[elementPos]};
            cart_to_change.quantity=newQuantity;
            carts[elementPos]=cart_to_change
            return carts;
        })
    }
    
    return(
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;

