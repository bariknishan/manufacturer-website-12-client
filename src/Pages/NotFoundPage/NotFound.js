import React from 'react';
import picture from '../../images/tool/400.png'
const NotFound = () => {
    return (
        <div>
            <div>
                <div className="card card-compact w-96 mx-auto bg-base-100 flex justify-center items-center shadow-xl">
                    <figure><img src={picture} alt="" /></figure>
                    <div className="card-body">
                       <p className='text-xl font-bold'>Plaese Try again..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;