import React from "react";
import Navbar from "./Components/Navbar";
import Logo from "./Components/Logo";
import Search from "./Components/Search";
const App = ()=>{
  return (
    <div className="App">
      <Navbar>
        <Logo />
        <Search />
        
      </Navbar>
    </div>
  );
}

export default App;
