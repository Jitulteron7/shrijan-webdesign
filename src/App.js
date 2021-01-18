import React from 'react';
import './App.css';
import Nav from "./component/nav/nav";
import Home from "./component/home/home";
import Foot from "./component/foot/foot"
function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Foot/>
    </div>
  );
}

export default App;
