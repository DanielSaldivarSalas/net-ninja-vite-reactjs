import { useState } from 'react';
import reactLogo from './assets/react.svg'
import Navbar from './Navbar';
import Home from './Home';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App

