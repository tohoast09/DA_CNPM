import classes from "./BookItem.module.css";
import { Link } from "react-router-dom";

function BookItem(props){    

    return (<div className={classes.book}>
            <Link to={"/detail="+props.data.id}>
                <button>
                { 'img' in props.data ?
                <img src={props.data.img} />
                : <img />
                }
                </button>
            </Link>
        <span>{props.data.name}</span>
    </div>);
}

export default BookItem;