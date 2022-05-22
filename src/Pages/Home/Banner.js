import React from 'react';
import banner from '../../images/banner/banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 m-4 ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner} className="max-w-lg rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 className="text-5xl font-bold"> Take Your Business Higher Level</h1>
            <p className="py-6 text-xl">We privide The best Quality Products. You can find all kind of Electric Products. Make sure your deal ,Give your commitment.</p>
            <button className="btn btn-accent">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;