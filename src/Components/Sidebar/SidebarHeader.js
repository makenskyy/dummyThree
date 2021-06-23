import '../../../src/App.css'

import React from 'react'
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom'




export default function SidebarHeader() {
  return (
    <div className="sidebar_header">
      <Link to="/">
        <div className="sidebar_header_img">
          <img src={logo} alt="logo" />
        </div>
        Creative Tim
      </Link>
    </div>
  )
}
