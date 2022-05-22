import React, { useState } from 'react';
import purchase from '../../images/tool/purchase2.jpg'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const PurchaseBanner = () => {

    const [date ,setDate]= useState( new Date())
    return (

        <div className='py-12'>
             <h2 className='text-4xl font-bold mt-4'>Make Your Deal Today</h2>

             <div className="hero lg:max-w-96 ">
           
           <div className="hero-content flex-col lg:flex-row">
             <img src={purchase} className="max-w-sm rounded-lg shadow-2xl" alt='' />
             <div>
             <DayPicker 
             mode='single'
                 selected={date}
                 onSelect={setDate}
                 
                 styles={{
                    caption: { color: 'red' }
                  }}
             
             />
             </div>
           </div>
         </div>
       
         <p className='font-bold text-blue-500 text-xl'>You selected {format(date, 'PP')}</p> 


        </div>
    )      
};

export default PurchaseBanner;