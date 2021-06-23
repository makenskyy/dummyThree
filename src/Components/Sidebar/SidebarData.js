import React from 'react';

import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListItemText from '@material-ui/core/ListItemText';

export const SidebarData = [
  {
    title: <ListItemText className="title-class">Dashboard</ListItemText>,
    path: "/dashboard",
    icon: <DashboardIcon className="icon-class" />,
    class: "link-class"
  },
  {
    title: <ListItemText className="title-class">Products</ListItemText>,
    path: "/products",
    icon: <MenuBookIcon className="icon-class" />,
    class: "link-class"
  },
  {
    title: <ListItemText className="title-class">Settings</ListItemText>,
    path: "/settings",
    icon: <SettingsIcon className="icon-class" />,
    class: "link-class"
  },
]