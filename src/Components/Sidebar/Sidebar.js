
import '../../../src/App.css'

import React, { useState, useEffect, useRef } from 'react'
import SidebarElements from './SidebarElements'
import SidebarHeader from './SidebarHeader'
import MenuIcon from '@material-ui/icons/Menu';

import OutsideClickHandler from 'react-outside-click-handler';
// Вот эта функция почему-то не работает


export default function Sidebar() {

  const [click, setClick] = useState(true);

  const [sidebar, setSidebar] = useState(true);


  const showSidebar = () => {
    if (window.innerWidth < 960) {
      setClick(true);
    } else {
      setSidebar(true);
      setClick(false);
    }
  };

  // const dummyFunction = () => {
  //   setClick(true);
  //   showSidebar(false);
  // }

  useEffect(() => {
    showSidebar();
  }, []);

  window.addEventListener('resize', showSidebar);



  return (
    <>
      <MenuIcon class={click ? 'menu_icon' : 'not_active'} onClick={() => setClick(!click)} />
      {/* <OutsideClickHandler onOutsideClick={dummyFunction}> */}
      {sidebar &&
        <div className={!click ? "sidebar" : "not_active"}>
          <SidebarHeader />
          <SidebarElements />
        </div>
      }
      {/* </OutsideClickHandler> */}
    </>
  )
}
