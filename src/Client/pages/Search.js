import classes from "./Search.module.css";
import BookItem from "../components/BookItem";
import { useContext } from "react";
import SearchParam from "../stores/SearchParam";

function Search(props){
    const searchParamCtx=useContext(SearchParam);
    const nameInputRef=searchParamCtx.nameInputRef;
    function searchForName(event){
        event.preventDefault();
        searchParamCtx.setName(nameInputRef.current.value);
    }

    const filterObj={};

    searchParamCtx.param.forEach(p => {
        if (!(p[0] in filterObj)) filterObj[p[0]]=[p[1]];
        else filterObj[p[0]].push(p[1]);
    });

    function getFilterOf(type){
        if (!(type in filterObj)) return null;
        return filterObj[type].map((val)=>{
            return <p>{val}</p>;
        })
    }

   return (<div className={classes.ctn}>
       <div className={classes.filtercol}>
            <h3>Thể loại</h3>
                {getFilterOf('category')}
            <h3>Tác giả</h3>
                {getFilterOf('author')}
            <h3>Tag</h3>
                {getFilterOf('tag')}
       </div>
        <div className={classes.maincol}>
                <form className={classes.textinput} onSubmit={searchForName} >
                    <input type="text" id="name" ref={nameInputRef} defaultValue={searchParamCtx.name} />
                    <button><i className="fas fa-search"></i></button>
                </form>
                <div className={classes.searchresult}>
                    {props.loadedBookList.map((book)=>{
                        if (!searchParamCtx.isRightBook(book)) return null;
                        return <BookItem data={book} />
                    })}
                </div>
        </div>
   </div>);
}

export default Search;