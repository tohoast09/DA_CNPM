import classes from "./NavBar.module.css";
import { Link,useHistory } from 'react-router-dom';
import SearchParam from "../stores/SearchParam";
import { useContext } from "react";

function NavBar(){
    const searchParamCtx=useContext(SearchParam);
    const cateList=[
        ["Viễn tưởng","fantasy"],
        ["Hài", "comedy"],
        ["Cổ điển", "classical"],
        ["Kịch tính", "thriller"],
        ["Kinh dị", "horror"]
    ];
    const history = useHistory();    
    return <div className={classes.menu}>
        <button className={classes.button}><Link to="/">Trang chủ</Link></button>
        <div className={classes.dropdown}>
            <button className={classes.dropdown_button}>
                    Thể loại<i className="fa fa-caret-down"></i>
            </button>
            <div className={classes.dropdown_content}>
                {
                    cateList.map((p)=>{
                       return <button onClick={()=>{
                           searchParamCtx.setName("");
                            searchParamCtx.clearFilter();
                            searchParamCtx.addFilter('category',p[1]);
                            history.push("/search");
                        }}>{p[0]}</button>
                    })
                }
            </div>
        </div>
        <button className={classes.button}><Link to="/about-us">Về chúng tôi</Link></button>
        <button className={classes.button}><Link to="/submit">Submit Dummy</Link></button>
    </div>;
}

export default NavBar;