import React, { useState } from "react";
import logo from "./../assets/shariff-logo.svg";
import userIcon from "./../assets/user.svg";
import bag from "./../assets/shopping-bag.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="">  
    
      {/* desktop nav bar */}
      <div className="flex items-center py-4 px-6">
        
        {/* hamburger */}
        <button className="w-1/3 flex justify-start md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
        
        {/* Left Links */}
        <div className="hidden md:flex w-1/3 gap-6 font-medium">
          <a href="#">MENS</a>
          <a href="#">WOMEN</a>
          <a href="#">KIDS</a>
        </div>

        {/* Logo */}
        <div className="w-1/3 flex justify-center">
            <img src={logo} alt="Shariff Logo" className="h-10" />
        </div>

        {/* Right Icons */}
        <div className="w-1/3 flex justify-end gap-4">
          <img src={userIcon} alt="User" className="h-6 w-6 cursor-pointer" />

          <img
            src={bag}
            alt="Shopping Bag"
            className="h-6 w-6 cursor-pointer"
          />
        </div>        
      </div> 
       {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
                    <a href="#">MENS</a>
                    <a href="#">WOMEN</a>
                    <a href="#">KIDS</a>
                </div>
            )}     
    </nav>
  );
}

export default Navbar;
