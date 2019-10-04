import React, { useState } from 'react';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/sideDrawer/sideDrawer'
import Backdrop from './components/backDrop/Backdrop'
import {useSpring, animated} from 'react-spring'
import {Transition} from 'react-spring/renderprops'


function App() {

  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const animate = useSpring({opacity: 1, from: {opacity: 0}})

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const drawerToggleHandler = () => setSideDrawerOpen(!sideDrawerOpen);

  
  
  let sideDrawer;
  let backdrop;


  if(sideDrawerOpen){
    sideDrawer  = <SideDrawer  drawerState={sideDrawerOpen} clickHandler={drawerToggleHandler}/>
    backdrop    = <Backdrop clickHandler={drawerToggleHandler}/>
  }
    
  return (
    <animated.div style={props}>
      <div className='container'>
        <Toolbar clickHandler={drawerToggleHandler} />

        <Transition
        items={'null'}
        from={{ position: 'absolute', opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}>

      {sideDrawer },{backdrop}
     </Transition>


      <main className='mainContain'> <p>this page content</p></main>
      </div>
      </animated.div>
  )

}

export default App;
