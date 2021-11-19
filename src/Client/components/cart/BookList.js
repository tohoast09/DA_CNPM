import BookforCart from "./BookCart";
import clasess from './BookList.module.css'

function BookList(props){
    let elements=props.booklist.map((book)=> (
        <BookforCart 
            key={book.id}
            data={book}
        />
    )
    )
    return(
        <div className={clasess.list}>
            {elements}
        </div>
    )
}

export default BookList