import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/banner/bg.png'

const MyPortfolio = () => {
    return (


        <div className="hero min-h-screen bg-accent-500">
            <div className="hero-content flex-col lg:flex-row">
                <img src={profile} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Hi! I am Abdul Barik!</h1>
                    <p className="py-6">Hello! Im am Abdul Barik. I am from Dinajpur.But Now I am living in Dhaka. I have completed my graduation
                        in CSE from University Of Development Alternative 2021. My Dream is to become software Developer one day.
                        Within Four months i want to see myself In an IT company as a Front-end Developer. And i am trying on it. My skills on javascript react, mongodb, nodejs etc
                        I am working hard to achive my goal. My hobbies are playing, visiting, workout, Movies etc.
                        <span className=' font bold text-red-400'> My Email: barik6286@gmail.com</span>
                    </p>
                     <h2>Some of My projectsLink:</h2>
                    <p className='text-blue-400'> https://super-shortbread-78476d.netlify.app/</p>
                    <p className='text-blue-400'> https://computer-warehouse-a5ede.web.app/</p>
                    <p className='text-blue-400'> https://electric-manufacturer-5c625.web.app/</p>   
                </div>
            </div>
        </div>

    );
};

export default MyPortfolio;