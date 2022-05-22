import React from 'react';
import image from '../../images/icon/people1.png'
import image2 from '../../images/icon/people2.png'
import image3 from '../../images/icon/people3.png'
const DemoReview = () => {
    return (



        <div className='py-12'>

            
        <h2 className='text-4xl font-bold text-center '> SEE WHAT OUR BIGGEST CLIENTS SAY?</h2>

            <div className='grid lg:grid-cols-3  sm:grid-cols-1 gap-20 '>
                <div className="card w-96  bg-base-100 shadow-xl mt-16">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body font-bold">
                        <h2 className="card-title">
                            Cavin
                            <div className="badge badge-secondary">Latest </div>
                        </h2>
                        <p>It was fantastic experience to business with them i am really happy!</p>

                    </div>


                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-16">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div className="card-body font-bold">
                        <h2 className="card-title">
                            Richa
                            <div className="badge badge-secondary">Latest</div>
                        </h2>
                        <p> I hope this company will go to more higher position.All The Best </p>

                    </div>


                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-16">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div className="card-body font-bold">
                        <h2 className="card-title">
                            Jassy
                            <div className="badge badge-secondary">Latest</div>
                        </h2>
                        <p>I am satisfied with them everytime i got my product in time it is really fantastic</p>

                    </div>


                </div>

            </div>


        </div>
    );
};

export default DemoReview;