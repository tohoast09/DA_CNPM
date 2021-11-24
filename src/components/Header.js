import React, { useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import logo from '../assets/images/dora.png'
import classes from './dropdown.module.css'
import { useState, useContext } from 'react';
import { AuthState }  from '../stores/AppState';
import { FilterState }  from '../stores/AppState';
import { useUserContext } from "./authen/userContext"
import { SearchTitle } from "./SearchUtil"
import category from '../assets/fake-data/category'

const mainNav = [

    {
        display: "Phụ kiện",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    }
]



const Header = () => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)
    const [openDropdown, setopenDropdown]= useState(false);
    const AuthStateCtx = useContext(AuthState);
    const filterState = useContext(FilterState);
    const navigate = useNavigate();
    const { user } = useUserContext();
    const [res,setRes] = SearchTitle();
    // const headerRef = useRef(null)
    
      
    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //             console.log(headerRef.current.classList);
    //             headerRef.current.classList.add('shrink')
    //         } else {
    //             headerRef.current.classList.remove('shrink')
    //         }
    //     })
    //     return () => {
    //         window.removeEventListener("scroll",this)
    //     };
    // }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')
    function handleSearch(event){
        filterState.changeFilterState('title',event.target.value);
    }
    return (
        <div className="header shrink">
            <div className="container">
                <div className="header__menu">

                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        <div
                                    className='header__menu__item header__menu__left__item'
                                    onClick={menuToggle}
                                >
                <Link to="/">
                <div className="header__logo">
                        <img src={logo} alt="" />

                </div>
                </Link>
                </div>
                <div className={`header__menu__item header__menu__left__item ${0 === activeNav ? 'active' : ''} ${classes.cate}`}>
                <div
                    className={`${classes.dropdown} ${classes.cate}` }
                    onClick={menuToggle}
                    onMouseEnter={()=>{setopenDropdown(true)}}
                    onMouseLeave={()=>{setopenDropdown(false)}}
                >
                    <a onClick={
                        ()=> {
                            filterState.clearState();
                            navigate('/catalog');
                        }
                    }>
                        <span>Sản phẩm</span>
                    </a>
                    <DropDownMenuCate data={category}/>
                </div>
                </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index+1 === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className={`header__menu__right ${classes.search}` }>
                        <div className={`header__menu__item header__menu__right__item ${classes.search_box} ${classes.dropdown}`}>
                            <input className={classes.search_text} type='text' name="" placeholder="Tim kiem voi BK" onChange={handleSearch} required/>
                             <DropDownMenuSearch data={res}  />
                            <i className={`bx bx-search ${classes.search_btn}`}></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">

                        <Badge badgeContent={7} color="primary" overlap="circular">

                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        </Badge>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <a style={{cursor:"pointer"}} onClick={
                                    ()=>{
                                        AuthStateCtx.changeAuthState("login")
                                    }
                                }>
                                <i className="bx bx-user"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {openDropdown&&<Backdrop/>}

        </div>
    )
}

function Backdrop(props){
    return(
        <div className={classes.backdrop} onClick={props.onClickBackdrop}></div>
    )
}

function DropdownItem(props) {
    return(
    <p className={classes.menu_item} onClick={props.onClick}>
        {props.children}
    </p>
    )
}

function DropdownItem2(props) {
    return(
    <p className={classes.menu_item} style={{display:"block"}} onClick={props.onClick}>
        {props.children}
    </p>
    )
}


function DropDownMenuCate(props){
    const FilterStateCtx = useContext(FilterState);
    const nav= useNavigate();
    let data = props.data;
    return(
        <div className={classes.dropdown_menu}>
            {
                data.map((elem)=>{
                    return <DropdownItem onClick={
                        ()=>{
                            FilterStateCtx.changeFilterState('category',elem.categorySlug);
                            nav('/catalog');
                        }
                    }>{elem['display']}</DropdownItem>
                })
            }
        </div>
    );
}
function DropDownMenuSearch(props){
    const nav= useNavigate();
    let data = props.data.slice(0,5);
    return(
        <div className={classes.dropdown_menu}>
            {
                data.map((elem)=>{
                    return <DropdownItem2 onClick={
                        ()=>{
                            nav('/catalog/'+elem.slug)
                        }
                    }>{elem['title']}</DropdownItem2>
                })
            }
        </div>
    );
}
export default Header
