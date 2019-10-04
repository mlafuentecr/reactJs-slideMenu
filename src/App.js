import React, { useState } from 'react';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/sideDrawer/sideDrawer'
import Backdrop from './components/backDrop/Backdrop'
import {useSpring, animated} from 'react-spring'



function App() {

  

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const drawerToggleHandler = () => setSideDrawerOpen(!sideDrawerOpen);

  const values = useSpring({opacity: 1, duration:500, from: {opacity: 0}})
  const animate1 = useSpring({
    opacity: sideDrawerOpen ? 1 : 0, 
    delay: 0.2,
    duration:5000,
    })

  let sideDrawer;
  let backdrop;


  if(sideDrawerOpen){
    sideDrawer  = <SideDrawer  drawerState={sideDrawerOpen} clickHandler={drawerToggleHandler}/>
    backdrop    = <Backdrop clickHandler={drawerToggleHandler}/>
  }
    
  return (
  
      <div className='container'>
        <Toolbar clickHandler={drawerToggleHandler} />
       
        <animated.div style={animate1}>
          {sideDrawer }
          {backdrop}
      </animated.div>

      <main className='mainContain'> <p>this page content</p></main>
      </div>
     
  )

}

export default App;
