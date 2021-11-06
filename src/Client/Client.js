import { Route,Switch } from 'react-router-dom';
import './index.css'
import { useEffect, useState } from "react";
import Header from './components/Header';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Search from './pages/Search';
import SubmitDummy from './pages/SubmitDummy';
import { SearchParamProvider } from './stores/SearchParam';
import Cart from './pages/CartPage';
import Account from './components/Account/Account';
import Login from './components/Sign/Login/Login';
import ForgetChangePass from './components/Sign/Forget/ForgetChangePass';
import SignUp from './components/Sign/Signup/SignUp';
import Forget from './components/Sign/Forget/Forget';
import { CartContextProvider } from './stores/cart-context';

function Client() {
    const [isLoading, setIsLoading]=useState(true);
    const [loadedBookList, setLoadedBookList] = useState([]);
    const isAdmin=true;
    const isUser=false;
    useEffect(() =>{
        fetch(
            'https://bkbookstore-1e885-default-rtdb.asia-southeast1.firebasedatabase.app/books.json'
        )
        .then((response)=> {
            return response.json();
        })
        .then((data)=>{
            setIsLoading(false);
            setLoadedBookList(data);
        });
    },[]);

    if (isLoading){
        return <div>
            Loading...
        </div>;
    }

    function jsonToBookList(obj){
        const re=[];
        for (const id in obj){
            re.push({id,...obj[id]});
        }
        return re;
    }

    const booklist=jsonToBookList(loadedBookList);

  return (<div>
            <SearchParamProvider>
            <CartContextProvider>

        <section className="top">
        <Header/>
        <NavBar/>
        </section>
        <section className="content section">
        <Switch>
          <Route path='/' exact>
            <Home loadedBookList={booklist} />
          </Route>
          <Route path="/search">
            <Search  loadedBookList={booklist}/>
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          {
            booklist.map((book)=>{
              return <Route path={"/detail="+book.id}>
                    <Detail data={book} />
              </Route>;
            })
          }
          <Route path="/submit">
            <SubmitDummy />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/forgetPass">
            <Forget />
          </Route>
          <Route path="/forgetChangePass">
            <ForgetChangePass />
          </Route>
        </Switch>
        </section>
        </CartContextProvider>

        </SearchParamProvider>
  </div>);
}

export default Client;
