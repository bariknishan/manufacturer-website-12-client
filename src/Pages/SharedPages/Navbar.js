import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const navItems =
    <>  
      <li>< Link to="/">Home</Link></li>
      <li>< Link to="/blogs">Blogs</Link></li>
      <li>< Link to="/purchase">Purchase</Link></li>
     
      <li>< Link to="/myprofile">MyprofiLe</Link></li>
      <li>< Link to="/about">About</Link></li>
      <li>< Link to="/login">Login</Link></li>
    
    </>

  return (
    <div className="navbar bg-green-500 py-8">
      <div className="navbar-start">
        <div className="dropdown  text-2xl   ">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content text-2xl mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/"  className="btn btn-ghost normal-case text-3xl font-bold text-dark-500">NISHAN ELECTRIC</Link>
      </div>

      <div className="navbar-center hidden text-xl font-bold  lg:flex">
        <ul className="menu menu-horizontal p-0">
          {navItems}
        </ul>
      </div>
    
    </div>
  );
};

export default Navbar;