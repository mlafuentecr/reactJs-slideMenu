import React from 'react';
import './Toolbar.css';
import DrawerToggle from '../sideDrawer/DrawerToggle'
import Logo from '../logo'



const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__nav' > 
           <DrawerToggle clickHandler={props.clickHandler}/>
          <Logo />
            <div className="spacer"></div>
           <div className='toolBar__ItemsWrapper'>
               <ul className='toolBar__ul' >
                   <li><a href="/">Products tienda</a></li>
                   <li><a href="/">User</a></li>
                   <li><a href="/">Others</a></li>
               </ul>
           </div>
        </nav>
    </header>
);

export default toolbar;