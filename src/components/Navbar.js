import React, { useState } from "react";

const Navbar = () => {
  const [btnname, setBtnname] = useState('Light')

  return (
    <div className="navbar">
      <h1>LOGO</h1>
      <ul className="menu_items">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>CART</li>
      <button onClick={() => {
        if(btnname == 'Light') {
          setBtnname('Dark')
        }
        if(btnname == 'Dark') {
          setBtnname('Light')
        }
      }}>{btnname}</button>
      </ul>
    </div>
  );
};

export default Navbar;
