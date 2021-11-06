
import BookSection from "../components/BookSection";

function Home(props){
    return (
    <div>
        <BookSection title="Trending" booklist={props.loadedBookList}/>
        <BookSection title="Not so trending" booklist={props.loadedBookList}/>
    </div>
    );
}

export default Home;