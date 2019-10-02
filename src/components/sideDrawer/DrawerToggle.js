import React from 'react'
import './DrawerToggle.css'

const drawerToggle = props => (
  <button  className="toggleBtn" onClick={props.clickHandler}>
    <div className="toggleBtn__line"></div>
    <div className="toggleBtn__line"></div>
    <div className="toggleBtn__line"></div>
  </button>
);

export default drawerToggle;