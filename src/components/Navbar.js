import React, { useEffect, useState } from "react";
import {Link} from 'react-router'

const Navbar = () => {
  const [btnname, setBtnname] = useState('Light')


  useEffect(() => {
    console.log("useEffect Called")
  })

  return (
    <div className="navbar">
      <h1><Link to={'/'}>LOGO</Link></h1>
      <ul className="menu_items">
        <li> <Link to={'/men'}>MEN</Link></li>
        <li>WOMEN</li>
        <li><Link to={'/kids'}>KIDS</Link></li>
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
