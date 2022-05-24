import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Item from './Item';
import PurchaseModal from './PurchaseModal';

const AvailableItems = ({date}) => {
    const [items, setItems]= useState([]);
    const [itemPackage, setItemPackage]= useState(null)


    const formattedDate= format(date, 'PP')
    useEffect(()=>{
     fetch(`http://localhost:5000/available?date=${formattedDate}`)
     .then(res=> res.json())
     .then(data=>setItems(data))
    },[formattedDate])
    
    return (
        <div>
   <h2 className='text-2xl text-blue-500 text-center font-bold'> Available Items For: {format(date,'PP')}</h2>

          <div className=' grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mt-5 py-12 m-4'>
            {
              items.map(item=><Item
              
           key={item._id}
              item={item}
              setItemPackage={setItemPackage}
              ></Item>)
            }
          </div>
          {itemPackage && <PurchaseModal 
         
        
           date={date} itemPackage={itemPackage}
           setItemPackage={setItemPackage}
           ></PurchaseModal>}
        </div>
    );
};

export default AvailableItems;