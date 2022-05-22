import React from 'react';
import demo1 from '../../images/demo/demo.png'
import demo2 from '../../images/demo/demo2.png'
import demo3 from '../../images/demo/demo3.png'
import demo4 from '../../images/demo/demo4.png'
const Democard = () => {
    return (



        <div className=' ml-4 '>

            <h2 className='text-3xl text-blue-500 text-center font-bold mt-4'> OUR DEMO PRODUCTS </h2>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1   mt-16 gap-8  '>

                <div className="card w-96 bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={demo1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MotherBoard</h2>
                        <p>Best quality product we provide for customers</p>
                       
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={demo2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bulb</h2>
                        <p>Best quality product we provide for customer</p>
                       
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={demo3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Electric Motter</h2>
                        <p>Best quality product we provide for customer</p>
                       
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={demo4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Charger</h2>
                        <p>Best quality product we provide for customer</p>
                        {/* <div className="card-actions">
                            <button className="btn btn-accent">See More</button>
                        </div> */}
                    </div>
                </div>

            </div>

        </div>



    );
};

export default Democard;