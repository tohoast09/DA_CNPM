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
import Payment from './components/payment/Payment';
function Client() {
    const [isLoading, setIsLoading]=useState(true);
    const [loadedBookList, setLoadedBookList] = useState([]);
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
        <Switch>
          <Route path='/' exact>
          <section className="top">
        <Header/>
        <NavBar/>
        </section>
        <section className="content section">
            <Home loadedBookList={booklist} />
            </section>

          </Route>
          <Route path="/search">
          <section className="top">
        <Header/>
        <NavBar/>
        </section>
        <section className="content section">
            <Search  loadedBookList={booklist}/>
            </section>

          </Route>
          <Route path="/about-us">
          <section className="top">
        <Header/>
        <NavBar/>
        </section>
        <section className="content section">
            <AboutUs />
            </section>

          </Route>
          {
            booklist.map((book)=>{
              return (
                
              <Route path={"/detail="+book.id}>
                        <section className="top">
        <Header/>
        <NavBar/>
        </section>
        <section className="content section">
                    <Detail data={book} />
                    </section>
              </Route>);
            })
          }
          <Route path="/submit">
          <section className="top">
        <Header/>
        <NavBar/>
        </section>
        <section className="content section">
            <SubmitDummy />
            </section>

          </Route>
          <Route path="/cart">
          <section className="top">
        <Header/>
        <NavBar/>
        </section>
        <section className="content section">
            <Cart />
            </section>

          </Route>
          <Route path="/payment">
          <section className="top">
        <Header/>
        <NavBar/>
        </section>
        <section className="content section">
          <Payment/>
            </section>

          </Route>
          <Route path="/account">
          <section className="top">
        <Header/>
        <NavBar/>
        </section>
        <section className="content section">
            <Account />
            </section>

          </Route>
          <Route path="/login">
          <section className="top">
        <Header/>
        <NavBar/>
        </section>
        <section className="content section">
            <Login />
            </section>
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
        </CartContextProvider>

        </SearchParamProvider>
  </div>);
}

export default Client;
