import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import style from './NavAd.module.css'
import { IconContext } from 'react-icons';

function NavbarAdmin() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={style.navbar}>
          <Link to='#' className={style.menu_bars}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? `${style.nav_menu} ${style.active}` : `${style.nav_menu}`}>
          <ul className={style.nav_menu_items} onClick={showSidebar}>
            <li className={style.navbar_toggle}>
              <Link to='#' className={style.menu_bars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={style.nav_text}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className={style.admin_span}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarAdmin;
