import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/images/Logo-2.png'

const mainNav = [

    {
        display: "Sản phẩm",
        path: "/catalog"
    },
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

    // const { pathname } = useLocation()
    // const activeNav = mainNav.findIndex(e => e.path === pathname)
    const activeNav = 0;


    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                console.log(headerRef.current.classList);
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll",this)
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
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
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
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
                            <i className="bx bx-user"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
