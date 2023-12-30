import React from "react";
import Navbar from "./Components/Navbar";
import Logo from "./Components/Logo";

const App = ()=>{
  return (
    <div className="App">
      <Navbar>
        <Logo/>
      </Navbar>
    </div>
  );
}

export default App;
