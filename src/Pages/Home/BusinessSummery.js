import React from 'react';
import pic from '../../images/icon/people2.png'
const BusinessSummery = () => {
    return (
        <section className=''>

            <div className='mt-4 bg-blue-200  mb-4 p-8 ' >
                <h2 className='text-center text-4xl font-bold text-blue-500 mx-4'>MULLIONS OF BUSENESS TRUST US </h2>
                <h3 className='text-center text-2xl text-secondery-500 font-bold mt-4'>WE BELIEVE IN CUSTOMER</h3>

  <div className="stats stats-vertical  lg:stats-horizontal m-4 shadow p-8">
  
  <div className="stat">
    <div className="stat-title font-bold text-black-500">Clients</div>
    <div className="stat-value text-red-500 ">1000K+</div>
    <div className="font-bold"> Around the world</div>
  </div>
  
  <div className="stat">
    <div className="stat-title font-bold">Country</div>
    <div className="stat-value">200+</div>
    <div className="font-bold">Specially Europe</div>
  </div>
  <div className="stat">
    <div className="stat-title font-bold">Anual Revenue</div>
    <div className="stat-value text-blue-500 ">200M</div>
    <div className="font-bold">195M 2021</div>
  </div>
  
  <div className="stat">
    <div className="stat-title font-bold">Reviews</div>
    <div className="stat-value text-yellow-500 ">50K+</div>
    
    <div className="font-bold">2022 Running</div>

    <div className="w-16 rounded-full  stat-figure">
          <img src={pic}  alt=""/>
        </div>
  </div>
  
  <div className="stat">
    <div className="stat-title font-bold ">Tools</div>
    <div className="stat-value  text-blue-500 ">60+</div>
    <div className="font-bold "> More comming</div>
  </div>

 
  <div>
<button className="btn btn-warning text-center btn-xs sm:btn-sm md:btn-md lg:btn-md">See Details</button>
  </div>
  

</div>




            </div>
        </section>
    );
};

export default BusinessSummery;