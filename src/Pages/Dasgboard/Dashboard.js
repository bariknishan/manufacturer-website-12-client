import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile ">


  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    
  <h2 className="text-accent text-center font-bold text-3xl p-4">WELLCOME TO DASHBOARD</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side p-4 ">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu overflow-y-auto w-80 bg-sky-400 mt-4 text-base-content">
     
      <li><Link to ="/dashboard">Sidebar Item 1</Link></li>
      <li><Link to="/dashboard/review">Sidebar Item 2</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;