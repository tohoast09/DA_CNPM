import BookList from "../components/cart/BookList"
import { useContext } from "react";
import CartContext from "../stores/cart-context"; 
import InfoCart from "../components/cart/InfoCart";
import classes from './CartPage.module.css'
import { Link } from "react-router-dom";

function Cart(props){
    const CartCtx=useContext(CartContext);
    if(CartCtx.cart.length===0){
        return(
            <div>
                <div className={classes.cartcontainer}>
                    <h3>Giỏ hàng trống</h3>
                    <p>Bạn hãy tham quan để mua sắm nhé</p>
                </div>
                <div className={classes.action}>
                        <Link to='/'>
                            <button>
                                <div className={classes.m}>
                                <b>Tiếp tục mua hàng</b>
                                </div>
                            </button>
                        </Link>
                </div>
            </div>
        )
    }
    return(
        <div>
            <div className={classes.cartcontainer}>
                <h3>Giỏ hàng của bạn</h3>
                <div className={classes.flex_row}>
                  <BookList booklist={CartCtx.cart}/>
                  <div className={classes.listcard}>
                      <InfoCart/>
                  </div>
                </div>
                <div className={classes.action}>
                        <Link to='/'>
                            <button>
                                <div className={classes.m}>
                                <b>Tiếp tục mua hàng</b>
                                </div>
                            </button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart