import { Link } from "react-router-dom"
import classes from './Nav.module.css'
function Nav(){
    return(
        <div>
            <div className={`${classes.menu} ${classes.mb20}`}>
            <Link to='/'><button>Trang chủ</button></Link>
            <Link to='/'><button>Thể loại sách</button></Link>
            <Link to='/about'><button>Về chúng tôi</button></Link>
            <button>AAAAAAAA</button>
            <button>AAAAAAAAAA</button>
            </div>
        </div>
    )
}

export default Nav