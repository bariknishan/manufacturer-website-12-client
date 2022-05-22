import React from 'react';

const Tool = ({ tool }) => {
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl mt-8">
            <figure className="px-10 pt-10 w-25 h-25  ">
                <img src={tool.img} alt="img" className="rounded-xl  " />
            </figure>
            <div className="card-body items-center text-center  ">
              
               <h2 className="card-title font-bold">{tool.name}</h2>
                <p>price:$ {tool.price}</p>
                <p>Descrption: {tool.description}</p>
                <p>Minimum Quantity: {tool.minimumQuanity}</p>

                <p> Availbale-Quantity: {tool.available}</p>
           

                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;