import React from 'react';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/sideDrager/sideDrawer'
import Backdrop from './components/backDrop/Backdrop'
function App() {
  return (
    <div className='container'>
      <Toolbar />
      <SideDrawer />
      <Backdrop />
     <main className='mainContain'> <p>this page content</p></main>
    </div>
  );
}

export default App;
