import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserDashboard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-4">
            <h2 className='text-3xl font-bold text-blue-500 '>Dasboard</h2>
      <Outlet></Outlet>
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button mt-2 lg:hidden">Open Dashboard</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content ">
           
            <li><Link to="/dashboard"  className='text-xl font-bold bg-blue-400 '>My Orders</Link></li>
            <li><Link to="/dashboard/review"  className="text-xl font-bold bg-blue-400 mt-2" >Reviews</Link></li>
            <li><Link to="/dashboard/myprofile"  className="text-xl font-bold bg-blue-400 mt-2" >MyProfile</Link></li>

          </ul>
        
        </div>
      </div>
    );
};

export default UserDashboard;