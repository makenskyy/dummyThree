import React from 'react'

import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';

export default function SidebarElements() {
  return (
    <div className="sidebar-items">
      <List className="list-items">

        {SidebarData.map(item => {
          return (
            <Link to={item.path} className={item.class}>
              <div className="item-block">
                {item.icon}
                {item.title}
              </div>
            </Link>)
        })}
      </List>
    </div >
  )
}
