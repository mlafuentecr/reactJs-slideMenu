import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__nav' > 
           <div>Hamm</div>
           <div><a className='toolBar__logo' href="/">The lOGO</a></div>
            <div className="spacer"></div>
           <div className='toolBar__ItemsWrapper'>
               <ul className='toolBar__ul'>
                   <li><a href="/">Products</a></li>
                   <li><a href="/">User</a></li>
                   <li><a href="/">Others</a></li>
               </ul>
           </div>
        </nav>
    </header>
);

export default toolbar;