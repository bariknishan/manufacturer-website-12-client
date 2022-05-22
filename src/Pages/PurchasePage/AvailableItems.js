import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableItems = ({date}) => {
    const [items, setItems]=useState([]);

    useEffect(()=>{
     fetch('items.json')
     .then(res=> res.json())
     .then(data=>setItems(data))
    },[])
    
    return (
        <div>
          <h2 className='text-2xl text-blue-500 text-center font-bold'> Available Items For: {format(date, 'PP')}</h2>
        </div>
    );
};

export default AvailableItems;