import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Doanh Thu',
    path: '/admin',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Đơn hàng',
    path: '/admin/order',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Khách hàng',
    path: '/admin/customer',
    icon: <IoIcons.IoMdPeople  />,
    cName: 'nav-text'
  },
  {
    title: 'Quản lý kho',
    path: '/admin/team',
    icon: <IoIcons.IoIosPaper/>,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/admin/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
