import React from 'react';
import picture from '../../images/tool/equipmen.png'
const Mill = () => {
    return (
        <div  style={{
            background: `url(${picture})`
        }}  className="hero min-h-screen mb-4" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">VISIT OUR INDUSTRY</h1>
      <p className="mb-5">We try to make best quality of electric parts with full safety as you can see. Respectfully growing business all over the world </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Mill;