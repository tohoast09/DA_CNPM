import { useRef, useState, useContext } from "react";
import classes from "./Detail.module.css";
import CartContext from "../stores/cart-context"; 
function Detail(props){
    const [numOfQuantity, setQuantity]=useState(1);
    const data=props.data;
    const CrtCtx=useContext(CartContext);
    const myReview = useRef();
    const content=[];
    for (const field in data){
        content.push(<p>{field}: {data[field]}</p>);
    }
    // console.log(loadedBookList);
    
    function reviewHandler(event){
        event.preventDefault();
        
        
    }

    function onClicktoCart(){
        console.log(data);
        let newBook={...data};
        if('promotion' in data){
            newBook.promotion=data.promotion;
        }
        else{
            newBook.promotion=0;
        }
        newBook.quantity=numOfQuantity;
        CrtCtx.addToCart(newBook);
    }

    function onHandleChange(event){
        console.log(event.target.value);
        if(event.target.value>=1){
            setQuantity(Number(event.target.value));
        }
    }

    function onIncrease(){
        setQuantity(prevNum=>{return prevNum+1});
    }

    function onDecrease(){
        if(numOfQuantity>1){
            setQuantity(prevNum=>{return prevNum-1});
        }
    }

    return (
        <div className={classes.ctn}>
       <div className={classes.imgcol}>
            { 'img' in data ?
            <img src={data.img} />
            : <img />
            }
            <h1>{data.name}</h1>
       </div>
        <div className={classes.maincol}>
                <h2>Thông tin chi tiết</h2>
                <div className={classes.content}>
                    {content}
                    <div className={classes.flex_row_all}>
                    <div className={`${classes.changequan} ${classes.flex_row}`}>
                        <button className={classes.input_dec} onClick={onDecrease}>
                            <i className='fas fa-minus'></i>
                        </button>
                        <input type='number'
                                // min='1'
                                value={numOfQuantity}
                                onChange={onHandleChange}
                        >
                        </input> 
                        <button className={classes.input_inc} onClick={onIncrease}>
                            <i className='fas fa-plus'></i>
                        </button>
                    </div>
                    <button className={classes.btn} onClick={onClicktoCart}> 
                        <i className='fas fa-shopping-cart'></i>
                        <p>Add to cart</p>
                    </button>
                    </div>
                </div>
                <h2>Danh gia</h2> 
                <div className={classes.content}> 
                <form onSubmit={reviewHandler}>
                    <textarea ref={myReview}></textarea>
                    <button>Submit</button>
                </form>
                
                </div>
                
        </div> 

        </div>
    );
}

export default Detail;