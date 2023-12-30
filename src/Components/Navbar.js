import React from "react";

const Navbar = (props) => {
  return (
    <div className="nav">
      {props.children}
    </div>
  );
};

export default Navbar;
