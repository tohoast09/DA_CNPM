import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import classes from "./BookSection.module.css";

function BookSection(props){
    return (
        <div className={classes.section}>
            <div className={classes.title}>
                <span>{props.title}</span>
                <Link to="/search"><button>Hiện thêm</button></Link>
            </div>
            <div className={classes.books}>
                {
                    props.booklist.map((book)=>{
                        return <BookItem data={book} />
                    })
                }
            </div>
        </div>
    );
}

export default BookSection;