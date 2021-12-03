import React, { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import logo from "../assets/images/BKBOOK.png";
import classes from "./dropdown.module.css";
import { useState, useContext } from "react";
import { FilterState, useUserContext } from "../stores/AppState";
import { SearchTitle } from "./SearchUtil";
import category from "../assets/fake-data/category";
import CartContext from "../stores/CartContext";
import "../assets/images/BKBOOK.png"
const mainNav = [
    {
        display: "Sản phẩm",
        path: "/catalog",
    },
    // {
    //     display: "Phụ kiện",
    //     path: "/accessories"
    // },
    {
        display: "Liên hệ",
        path: "/contact",
    },
];

const Header = () => {
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex((e) => e.path === pathname);
    const [openDropdown, setopenDropdown] = useState(false);
    const filterState = useContext(FilterState);
    const navigate = useNavigate();
    const res = SearchTitle();
    const { user } = useUserContext();
    // const headerRef = useRef(null)
    const searchRef = filterState.searchRef;

    const [focused, setFocused] = useState(false);
    const onFocus = (event) => {
        handleSearch(event);
        setFocused(true);
    };

    const onBlur = () => setFocused(false);

    const CrtCtx = useContext(CartContext);
    // console.log(CrtCtx.totalBook);

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

    const menuLeft = useRef(null);

    const menuToggle = () => menuLeft.current.classList.toggle("active");
    const handleSearch = (event) => {
        if (activeNav !== 0)
            filterState.changeFilterState("title", event.target.value);
        else
            filterState.setState((prev) => {
                return { ...prev, title: event.target.value };
            });
    };

    return (
        <div className="header shrink">
            <div className="container">
                <div className="header__menu">
                    <div
                        className="header__menu__mobile-toggle"
                        onClick={menuToggle}
                    >
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div
                            className="header__menu__left__close"
                            onClick={menuToggle}
                        >
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        <div
                            className="header__menu__item header__menu__left__item"
                            onClick={menuToggle}
                        >
                            <Link to="/">
                                <div className="header__logo">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/002/637/558/non_2x/read-book-knowledge-icon-white-background-free-vector.jpg"
                                        // src="../assets/images/BKBOOK.png"
                                        alt="Logo"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div
                            className={`header__menu__item header__menu__left__item ${
                                0 === activeNav ? "active" : ""
                            } ${classes.cate}`}
                        >
                            <div
                                className={`${classes.dropdown} ${classes.cate}`}
                                onClick={menuToggle}
                                onMouseEnter={() => {
                                    setopenDropdown(true);
                                }}
                                onMouseLeave={() => {
                                    setopenDropdown(false);
                                }}
                            >
                                <a
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        filterState.clearState();
                                        navigate("/catalog");
                                    }}
                                >
                                    <span>Sản phẩm</span>
                                </a>
                                <DropDownMenuCate data={category} />
                            </div>
                        </div>
                        {mainNav.slice(1).map((item, index) => (
                            <div
                                key={index}
                                className={`header__menu__item header__menu__left__item ${
                                    index + 1 === activeNav ? "active" : ""
                                }`}
                                onClick={menuToggle}
                            >
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className={`header__menu__right ${classes.search}`}>
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                navigate("/catalog");
                            }}
                            className={`header__menu__item header__menu__right__item ${classes.search_box} ${classes.dropdown}`}
                            style={
                                activeNav === 0
                                    ? {
                                          border: "1.5px solid black",
                                          padding: "10px",
                                      }
                                    : null
                            }
                        >
                            <input
                                className={classes.search_text}
                                type="text"
                                name=""
                                placeholder="Tim kiem voi BK"
                                onChange={handleSearch}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                style={
                                    activeNav === 0
                                        ? { width: "400px", padding: "0px 6px" }
                                        : null
                                }
                                ref={searchRef}
                                required
                            />
                            {focused && activeNav !== 0 && (
                                <DropDownMenuSearch
                                    data={res}
                                    filterState={filterState}
                                />
                            )}
                            <i
                                className={`bx bx-search ${classes.search_btn}`}
                            ></i>
                        </form>
                        <div className="header__menu__item header__menu__right__item">
                            <Badge
                                badgeContent={CrtCtx.totalBook}
                                showZero
                                color="primary"
                                overlap="circular"
                            >
                                <div className="header__menu__item header__menu__right__item">
                                    <Link to="/cart">
                                        <i className="bx bx-shopping-bag"></i>
                                    </Link>
                                </div>
                            </Badge>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            {user ? (
                                <Link to="/account">
                                    <i className="bx bx-user"></i>
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <i className="bx bx-user"></i>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {(openDropdown || (focused && activeNav !== 0)) && <Backdrop />}
        </div>
    );
};

function Backdrop(props) {
    return (
        <div className={classes.backdrop} onClick={props.onClickBackdrop}></div>
    );
}

function DropdownItem(props) {
    return (
        <p className={classes.menu_item} onClick={props.onClick}>
            {props.children}
        </p>
    );
}

function DropdownItem2(props) {
    return (
        <p
            className={`${classes.menu_item} searchdropdownitem`}
            style={{ display: "block" }}
            onMouseDown={props.onClick}
        >
            {props.children}
        </p>
    );
}

function DropDownMenuCate(props) {
    const FilterStateCtx = useContext(FilterState);
    const search = FilterStateCtx.searchRef;
    const nav = useNavigate();
    let data = props.data;
    return (
        <div className={classes.dropdown_menu}>
            {data.map((elem) => {
                return (
                    <DropdownItem
                        onClick={() => {
                            FilterStateCtx.changeFilterState(
                                "category",
                                elem.categorySlug
                            );
                            nav("/catalog");
                        }}
                    >
                        {elem["display"]}
                    </DropdownItem>
                );
            })}
        </div>
    );
}
function DropDownMenuSearch(props) {
    const nav = useNavigate();
    let data = props.data.slice(0, 5);
    return (
        <div className={`${classes.dropdown_menu} searchdropdownitem`}>
            {data.map((elem) => {
                return (
                    <DropdownItem2
                        onClick={() => {
                            nav("/catalog/" + elem.slug);
                            props.filterState.changeFilterState("title", "");
                        }}
                    >
                        {elem["title"]}
                    </DropdownItem2>
                );
            })}
        </div>
    );
}
export default Header;
