import React from 'react';
import './SideDrawer.css'
import Logo from '../logo'

const SideDrawer = props =>(
 <nav className='sideDrawer'>
  <Logo className='logo'/>
   <ul>
    <li><a href="/">Products</a></li>
    <li><a href="/">User</a></li>
    <li><a href="/">User 2</a></li>
   </ul>
 </nav>
);
export default SideDrawer;