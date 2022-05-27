import React from 'react';
import './Items.css'
const Item = ({ item,setItemPackage }) => {

    const { name, img, description, products ,price } = item
    return (
        <div>
            <div className="card lg:max-w-lg bg-blue-400 shadow-xl mt-4 images ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Price:${price}</h2>
                    <p>
                        {
                            products.length > 0
                                ? <span className='2xl font-bold'> Minimum order: {products[0]}</span>
                                : <span className='text-yellow-400'> product not Availbale. </span>
                        }
                    </p>
                    <h3 className="card-title"> {products.length} {products.length > 1 ? 'packages ' : 'package'} Available</h3>
                    <p> Description: {description}</p>

                    <div className="card-actions">
                       
                        <label htmlFor="purchase-modal" 
                        disabled={products.length=== 0}
                        onClick={()=>setItemPackage(item)}

                        className="btn btn-accent">Purchase Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;