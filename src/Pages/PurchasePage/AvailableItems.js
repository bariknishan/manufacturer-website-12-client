import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading';
import Item from './Item';
import PurchaseModal from './PurchaseModal';

const AvailableItems = ({date}) => {
    // const [items, setItems]= useState([]);
    const [itemPackage, setItemPackage]= useState(null)


    const formattedDate= format(date, 'PP')
 const {data:items , isLoading,refetch}= useQuery(['available', formattedDate],()=> 

   fetch(`https://fierce-journey-20981.herokuapp.com/available?date=${formattedDate}`)
   .then(res=> res.json())
   
   )

if(isLoading){
  return <Loading></Loading>
}
  
    
    return (
        <div>
   <h2 className='text-2xl text-blue-500 text-center font-bold'> Available Items For: {format(date,'PP')}</h2>

          <div className=' grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mt-5 py-12 m-4'>
            {
              items?.map(item=><Item
              
           key={item._id}
              item={item}
              setItemPackage={setItemPackage}
              ></Item>)
            }
          </div>
          {itemPackage && <PurchaseModal 
         
        
           date={date} itemPackage={itemPackage}
           setItemPackage={setItemPackage}
           refetch={refetch}
           ></PurchaseModal>}
        </div>
    );
};

export default AvailableItems;