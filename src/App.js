import React from 'react';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/sideDrawer/sideDrawer'
import Backdrop from './components/backDrop/Backdrop'



class App extends React.Component {
    
   /* 1 Creo un objeto state*/ 
   state = {
      sideDrawerOpen: false,
    }

    drawerToggleHandler = () =>{
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
      })
    }

  render(){
    let sideDrawer;
    let backdrop;
    if(this.state.sideDrawerOpen){
      sideDrawer  = <SideDrawer  drawerState={this.state.sideDrawerOpen} clickHandler={this.drawerToggleHandler}/>
      backdrop    = <Backdrop clickHandler={this.drawerToggleHandler}/>
    }
    
  return (
    <div className='container'>
      <Toolbar clickHandler={this.drawerToggleHandler} />
      {sideDrawer}
      {backdrop}
     <main className='mainContain'> <p>this page content</p></main>
    </div>
  )
}
}

export default App;
