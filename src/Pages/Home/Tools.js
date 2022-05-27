import React from 'react';
import soceket from '../../images/tool/tool1.png'
import battery from '../../images/tool/tool3.png'
import dril from '../../images/tool/tool4.png'
import Tool from './Tool';
const Tools = () => {

    const tools = [


        {
            _id: 1,
            price: 1000,
            name: "Elctric Socket",

            description: " Primium quality electric socket available to order.",
            img: soceket,
            minimumQuanity: 10,
            available: 135
        },

        {
            _id: 2,
            price: 8000,
            name: "Rechargable Battery",
            description: "Rechargable qualitfull battery available to order.",
            img: battery,
            minimumQuanity: 10,
            available: 135
        },
        {
            _id: 3,
            price: 7000,
            name: "Elctric Drill Machine",
            description: "Best Electri Drill machine,available to order.",
            img: dril,
            minimumQuanity: 10,   
            available: 135
        },

      


    ]





    return (
        <div className='my-20'>
            <div className='text-center'>
                <h2 className='text-blue-500 text-4xl font-bold '> OUR LATEST TOOLS</h2>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 mg:grid-cols-2 gap-10 mt-8 '>

                {
                    tools.map(tool => <Tool

                        key={tool._id}
                        tool={tool}

                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;