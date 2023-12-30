import React from "react";
import { BiBookHeart } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import premium_login from "../Images/icons/fluent_premium-person-20-regular.svg"
import user_pic from "../Images/user_profile.png";
const Navbar = (props) => {
  return (
    <div className="nav">
      {props.children}
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "1.25rem"}}>
         <IoMdNotificationsOutline size={25} style={{color: "#E7E2E2CF"}} />
         <BiBookHeart size={25} style={{color: "#E7E2E2CF"}} />
        <img style={{height: "27px"}} src={premium_login} alt="premium logo" />
        <div className="user_profile">
          <img src={user_pic} alt="profile_pic" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
